# Stripe Donations Setup Guide

## Overview

Your Thee Light of Zion website now includes a complete donation system powered by Stripe and Supabase. This system supports:

- ✅ One-time donations
- ✅ Recurring monthly donations (auto-pay)
- ✅ Donation history tracking per user
- ✅ Subscription management (cancel anytime)
- ✅ Secure payment processing via Stripe
- ✅ Tax receipt generation (via Stripe)
- ✅ User authentication with Supabase Auth

## Features Implemented

### For Donors:
1. **User Accounts** - Sign up/sign in to track donations
2. **Flexible Giving** - Choose one-time or monthly recurring donations
3. **Preset Amounts** - Quick selection ($25, $50, $100, $250, $500)
4. **Custom Amounts** - Enter any donation amount
5. **Donation History** - View all past donations and active subscriptions
6. **Subscription Management** - Cancel recurring donations anytime
7. **Secure Payments** - PCI-compliant processing through Stripe

### For Church Administrators:
1. **Complete Transaction History** - All donations stored in database
2. **Stripe Dashboard Access** - Full payment analytics
3. **Automatic Receipts** - Stripe sends email confirmations
4. **Webhook Integration** - Real-time payment status updates
5. **Customer Management** - Link donors to Stripe customers

## Setup Instructions

### Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click "Start now" to create an account
3. Complete the registration for **Thee Light of Zion**
4. Verify your email address

**IMPORTANT:** Register as a **non-profit organization** to get the best rates and features.

### Step 2: Get Your Stripe API Keys

1. Log in to your Stripe Dashboard
2. Click "Developers" in the left sidebar
3. Click "API keys"
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode)
   - **Secret key** (starts with `sk_test_` for test mode, click "Reveal")

### Step 3: Configure Environment Variables

You've already been prompted to enter these, but here's what each one does:

1. **STRIPE_SECRET_KEY** - Your secret API key (never share this!)
   - Used by the backend to process payments
   - Example: `sk_test_51A...`

2. **STRIPE_PUBLISHABLE_KEY** - Your publishable key (safe to expose)
   - Used by the frontend to initialize Stripe
   - Example: `pk_test_51A...`

3. **STRIPE_WEBHOOK_SECRET** - For webhook security (we'll set this up next)
   - Example: `whsec_...`

### Step 4: Set Up Webhooks

Webhooks ensure your database stays in sync with Stripe payment events.

1. In Stripe Dashboard, go to **Developers → Webhooks**
2. Click **"Add endpoint"**
3. Enter your endpoint URL:
   ```
   https://[YOUR-PROJECT-ID].supabase.co/functions/v1/make-server-d3a9068f/webhooks/stripe
   ```
   Replace `[YOUR-PROJECT-ID]` with your actual Supabase project ID

4. Select events to listen for:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`

5. Click **"Add endpoint"**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add this as your **STRIPE_WEBHOOK_SECRET** environment variable

### Step 5: Testing with Test Mode

Before going live, test everything in Stripe's test mode:

1. Use test card numbers (provided by Stripe):
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - **3D Secure**: `4000 0025 0000 3155`
   - Use any future expiry date (e.g., 12/34)
   - Use any 3-digit CVC (e.g., 123)
   - Use any ZIP code

2. Test the donation flow:
   - Sign up for an account
   - Make a one-time donation
   - Set up a monthly donation
   - View donation history
   - Cancel a subscription

3. Check your Stripe Dashboard to verify:
   - Payments appear correctly
   - Customer records are created
   - Subscriptions are active

### Step 6: Go Live

When you're ready to accept real donations:

1. In Stripe Dashboard, click **"Activate your account"**
2. Complete the onboarding (business details, bank account, etc.)
3. Switch to **Live mode** (toggle in top right)
4. Get your **Live API keys** (starts with `pk_live_` and `sk_live_`)
5. Update your environment variables with live keys
6. Create a new webhook endpoint for live mode
7. Test with a small real donation

## How It Works

### User Flow

1. **User visits** `/donations`
2. **Signs in** or creates account (redirected if not logged in)
3. **Selects amount** - preset or custom
4. **Chooses frequency** - one-time or monthly
5. **Enters card** details (secured by Stripe Elements)
6. **Submits donation** 
7. **Payment processed** by Stripe
8. **Record saved** to database
9. **Redirected** to donation history page

### Backend Architecture

```
Frontend (React)
    ↓ (Stripe.js creates payment method)
    ↓
Backend API (/donations/create)
    ↓ (Calls Stripe API)
    ↓
Stripe Processes Payment
    ↓ (Sends webhook)
    ↓
Backend Webhook Handler
    ↓ (Updates database)
    ↓
Supabase Database (KV Store)
```

### Data Storage

All donation data is stored in the Supabase KV store with keys like:

- `donation:[timestamp]:[random]` - Individual donation records
- `stripe_customer:[user_id]` - Stripe customer ID per user

Each donation record includes:
```typescript
{
  id: string;
  userId: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  status: string; // 'succeeded', 'active', 'canceled', etc.
  stripePaymentIntentId?: string;
  stripeSubscriptionId?: string;
  createdAt: string;
  canceledAt?: string;
}
```

## Tax Receipts

Stripe automatically sends email receipts to donors. To customize:

1. Go to **Settings → Emails** in Stripe Dashboard
2. Customize the "Payment confirmation" email
3. Add your church's tax ID/EIN
4. Include language about tax deductibility

## Troubleshooting

### "Payment failed" error
- Check that Stripe keys are correct
- Verify webhook secret is set
- Look at Stripe Dashboard logs
- Check browser console for errors

### Webhook not working
- Verify endpoint URL is correct
- Check webhook secret matches
- Look at webhook logs in Stripe Dashboard
- Ensure selected events include payment statuses

### User can't see donation history
- Verify user is signed in
- Check browser console for API errors
- Verify access token is valid
- Check backend logs in Supabase

## Migration to Next.js + Clerk (Future)

When you migrate to Next.js with Clerk authentication:

1. **Auth Changes:**
   - Replace Supabase Auth with Clerk
   - Update `AuthContext` to use Clerk hooks
   - Change backend auth verification to use Clerk JWT

2. **Database:**
   - Migrate from KV store to Supabase Postgres tables
   - Create proper schema with foreign keys
   - Set up Row Level Security (RLS)

3. **Keep:**
   - Stripe integration (works the same)
   - Backend API routes (minimal changes)
   - Frontend components (update auth checks)

## Security Best Practices

✅ **Do:**
- Keep secret keys in environment variables
- Use HTTPS for all API calls
- Verify webhook signatures
- Use Stripe Elements (never handle raw card data)
- Implement rate limiting on donation endpoints

❌ **Don't:**
- Commit API keys to version control
- Use test keys in production
- Skip webhook signature verification
- Store card numbers in your database
- Trust client-side amount validation

## Support & Resources

- **Stripe Documentation:** [https://stripe.com/docs](https://stripe.com/docs)
- **Stripe Support:** [https://support.stripe.com](https://support.stripe.com)
- **Supabase Docs:** [https://supabase.com/docs](https://supabase.com/docs)
- **Test Cards:** [https://stripe.com/docs/testing](https://stripe.com/docs/testing)

## Pages & Routes

- `/signin` - User sign in page
- `/signup` - User registration page  
- `/donations` - Main donation form
- `/donations/history` - User's donation history
- Backend API at: `/functions/v1/make-server-d3a9068f/...`

## What's Next?

After setup is complete:

1. ✅ Test thoroughly in test mode
2. ✅ Activate Stripe account
3. ✅ Switch to live mode
4. ✅ Announce to congregation
5. ✅ Monitor first few donations closely
6. ✅ Set up monthly reporting
7. ✅ Consider adding recurring donation tiers
8. ✅ Add impact statements ("Your $50 helps...")

---

**Need Help?** Contact your web developer or reach out to Stripe support for payment processing questions.
