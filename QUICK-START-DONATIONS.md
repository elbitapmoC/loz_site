# Quick Start: Donations System

## 🚀 Get Started in 5 Minutes

### Step 1: Get Stripe Keys (2 minutes)

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
2. Sign up for a Stripe account
3. Navigate to **Developers → API keys**
4. Copy these two keys:
   - **Publishable key**: `pk_test_...`
   - **Secret key**: `sk_test_...` (click "Reveal")

### Step 2: Add Keys to Environment (30 seconds)

You've already been prompted for these:
- Paste **Secret key** into `STRIPE_SECRET_KEY`
- Paste **Publishable key** into `STRIPE_PUBLISHABLE_KEY`  
- Leave `STRIPE_WEBHOOK_SECRET` empty for now (we'll set it up later)

### Step 3: Test the Donation Flow (2 minutes)

1. Visit your website at `/signup`
2. Create a test account:
   - Email: `test@example.com`
   - Password: `test123`
   - Name: `Test User`

3. Click "Donate" in the navigation
4. Enter a test donation:
   - Amount: $50
   - Frequency: One-time
   - Card: `4242 4242 4242 4242`
   - Expiry: `12/34`
   - CVC: `123`
   - ZIP: `12345`

5. Click "Donate $50"
6. You should see success message and redirect to donation history

### Step 4: Verify in Stripe Dashboard (30 seconds)

1. Go to [https://dashboard.stripe.com/test/payments](https://dashboard.stripe.com/test/payments)
2. You should see your $50 test payment
3. Check **Customers** to see the customer record

## ✅ That's It!

Your donation system is now working in **test mode**.

## Next: Set Up Webhooks (Optional but Recommended)

Webhooks keep your database in sync with Stripe events:

1. In Stripe Dashboard: **Developers → Webhooks**
2. Click **Add endpoint**
3. URL: `https://[YOUR-PROJECT-ID].supabase.co/functions/v1/make-server-d3a9068f/webhooks/stripe`
4. Select events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add it to `STRIPE_WEBHOOK_SECRET`

## Going Live

When ready for real donations:

1. **Activate Stripe Account**
   - Complete business verification
   - Add bank account for payouts

2. **Switch to Live Mode**
   - Toggle in top-right of Stripe Dashboard
   - Get new API keys (start with `pk_live_` and `sk_live_`)
   - Update environment variables
   - Create new webhook for live mode

3. **Test with Real Money**
   - Make a small real donation yourself
   - Verify it appears correctly
   - Check bank account receives payout

## Troubleshooting

**"Payment failed"**
- Check that keys are correct (no extra spaces)
- Verify you're using test card `4242 4242 4242 4242`
- Look at Stripe Dashboard logs

**"Please sign in to make a donation"**
- Create an account at `/signup`
- Sign in at `/signin`

**Can't see donation history**
- Make sure you're signed in
- Check browser console for errors
- Verify API keys are set

## Test Credit Cards

From Stripe's testing docs:

✅ **Success**: `4242 4242 4242 4242`
❌ **Decline**: `4000 0000 0000 0002`  
🔒 **3D Secure**: `4000 0025 0000 3155`

Use any:
- Future expiry (e.g., `12/34`)
- 3-digit CVC (e.g., `123`)
- ZIP code (e.g., `12345`)

## Features Available

- ✅ One-time donations
- ✅ Monthly recurring donations
- ✅ Donation history
- ✅ Cancel subscriptions
- ✅ User accounts
- ✅ Secure card processing
- ✅ Email receipts (from Stripe)

## Pages

- `/signup` - Create account
- `/signin` - Sign in
- `/donations` - Make donation
- `/donations/history` - View history

## Need More Help?

See full documentation:
- `/STRIPE-DONATIONS-SETUP.md` - Complete setup guide
- `/SUPABASE-BACKEND-FEATURES.md` - Technical details

---

**Happy testing!** 🎉
