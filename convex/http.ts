import Stripe from "stripe";
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

export const stripeWebhook = httpAction(async (ctx, request) => {
  const secret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !webhookSecret) {
    return new Response("Missing Stripe env", { status: 500 });
  }

  const stripe = new Stripe(secret);
  const sig = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig!, webhookSecret);
  } catch (err: any) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const sessionId = session.id;
    const paymentIntentId = (session.payment_intent as string) || "";

    await ctx.runMutation(internal.donations.markDonationSucceeded, {
      stripeSessionId: sessionId,
      paymentIntentId,
    });
  }

  return new Response("ok", { status: 200 });
});

http.route({ path: "/stripe/webhook", method: "POST", handler: stripeWebhook });

export default http;
