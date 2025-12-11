import Stripe from "stripe";
import { v } from "convex/values";
import { action, mutation, query, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const createPendingDonation = internalMutation({
  args: {
    clerkUserId: v.optional(v.string()),
    amountCents: v.number(),
    currency: v.string(),
    stripeSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("donations", {
      clerkUserId: args.clerkUserId ?? "",
      amountCents: args.amountCents,
      currency: args.currency,
      status: "pending",
      stripeSessionId: args.stripeSessionId,
      stripePaymentIntentId: "",
      createdAt: Date.now(),
    });
    return id;
  },
});

export const createCheckoutSession = action({
  args: {
    amountCents: v.number(),
    currency: v.optional(v.string()),
    coverFees: v.optional(v.boolean()),
    clerkUserId: v.optional(v.string()),
  },
  handler: async (ctx, { amountCents, currency = "usd", coverFees = false, clerkUserId }) => {
    const secret = process.env.STRIPE_SECRET_KEY;
    const appUrl = process.env.APP_URL;
    if (!secret || !appUrl) {
      throw new Error("Missing STRIPE_SECRET_KEY or APP_URL env");
    }
    const stripe = new Stripe(secret);

    const feePct = 0.029;
    const feeFixed = 30;
    const feeEstimate = coverFees ? Math.ceil((amountCents + feeFixed) / (1 - feePct)) - amountCents : 0;

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price_data: {
          currency,
          product_data: { name: "Donation" },
          unit_amount: amountCents,
        },
        quantity: 1,
      },
    ];
    if (feeEstimate > 0) {
      lineItems.push({
        price_data: {
          currency,
          product_data: { name: "Processing support" },
          unit_amount: feeEstimate,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "if_required",
      line_items: lineItems,
      success_url: `${appUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/donate`,
      metadata: { clerkUserId: clerkUserId ?? "" },
    });

    await ctx.runMutation(internal.donations.createPendingDonation, {
      clerkUserId,
      amountCents,
      currency,
      stripeSessionId: session.id,
    });

    return { url: session.url! };
  },
});

export const listMyDonations = query({
  args: { clerkUserId: v.string() },
  handler: async (ctx, { clerkUserId }) => {
    return await ctx.db
      .query("donations")
      .withIndex("by_user", (q) => q.eq("clerkUserId", clerkUserId))
      .order("desc")
      .collect();
  },
});

export const markDonationSucceeded = internalMutation({
  args: {
    stripeSessionId: v.string(),
    paymentIntentId: v.string(),
  },
  handler: async (ctx, { stripeSessionId, paymentIntentId }) => {
    const donation = await ctx.db
      .query("donations")
      .withIndex("by_session", (q) => q.eq("stripeSessionId", stripeSessionId))
      .first();
    if (donation) {
      await ctx.db.patch(donation._id, {
        status: "succeeded",
        stripePaymentIntentId: paymentIntentId,
      });
    }
  },
});
