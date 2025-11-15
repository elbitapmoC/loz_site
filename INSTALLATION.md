# Installation Guide - Thee Light of Zion Backend & Donations

## 📦 What You're Getting

Complete backend system with:
- ✅ Supabase backend API
- ✅ User authentication (sign up/sign in)
- ✅ Stripe donations (one-time & recurring)
- ✅ Newsletter management
- ✅ Contact form handling
- ✅ All documentation

## 🚀 Setup Instructions for Your IDE

### Step 1: Copy All Files

Copy the entire project structure to your local IDE. The key new/modified files are:

**New Files Created:**
```
/components/auth/
  - AuthContext.tsx
  - SignInPage.tsx
  - SignUpPage.tsx

/components/donations/
  - DonationPage.tsx
  - DonationHistoryPage.tsx

/supabase/functions/server/
  - routes.tsx (NEW)
  - index.tsx (UPDATED)

Documentation:
  - QUICK-START-DONATIONS.md
  - STRIPE-DONATIONS-SETUP.md
  - SUPABASE-BACKEND-FEATURES.md
  - README-BACKEND-SETUP.md
  - INSTALLATION.md (this file)
```

**Modified Files:**
```
/App.tsx - Added auth provider and new routes
/components/layout/Navigation.tsx - Added user menu
/components/layout/Footer.tsx - Added donation link
/components/newsletter/NewsletterSubscription.tsx - Now uses Supabase
/components/contact/ContactPage.tsx - Now uses Supabase
```

### Step 2: Install Dependencies

You'll need these new packages. Add to your `package.json`:

```json
{
  "dependencies": {
    "@stripe/react-stripe-js": "^2.4.0",
    "@stripe/stripe-js": "^2.2.0",
    "@supabase/supabase-js": "^2.39.0"
  }
}
```

Then run:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3: Environment Variables

#### For Local Development (Optional)

Create a `.env.local` file in your project root:

```env
# Stripe Keys (Get from https://dashboard.stripe.com/test/apikeys)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here

# These are managed by Supabase (already set in your Supabase project)
# SUPABASE_URL=https://your-project.supabase.co
# SUPABASE_ANON_KEY=your_anon_key
# STRIPE_SECRET_KEY=sk_test_your_key_here (server-side only)
# STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

**Important:** The Stripe secret key and webhook secret are already set in your Supabase project via the environment variable prompts. They don't need to be in your local `.env` file.

#### For Supabase Deployment

Your Supabase environment variables are already set:
- ✅ STRIPE_SECRET_KEY
- ✅ STRIPE_PUBLISHABLE_KEY  
- ✅ STRIPE_WEBHOOK_SECRET
- ✅ SUPABASE_URL (automatic)
- ✅ SUPABASE_ANON_KEY (automatic)
- ✅ SUPABASE_SERVICE_ROLE_KEY (automatic)

### Step 4: Update Stripe Publishable Key

In `/components/donations/DonationPage.tsx`, the Stripe publishable key is currently hardcoded. Update it:

**Current:**
```typescript
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 
  'pk_test_51QRmAIRsqGBiMzl2pDpzmEKb9dWiD59vRDSP6JuXbZE7vDx1zyqv0r9YiKQf1rvdC7YGTgHGPDdYTkO2m6xYFYPp00Hde9g2PD';
```

**Replace with your key:**
```typescript
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 
  'YOUR_STRIPE_PUBLISHABLE_KEY_HERE';
```

Or better yet, set it in your `.env.local`:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key
```

### Step 5: Deploy Backend to Supabase

Your backend code is already in `/supabase/functions/server/`. To deploy:

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Deploy the Edge Function
supabase functions deploy make-server-d3a9068f
```

Or, since you're using Figma Make, the backend should already be deployed when you run the app.

### Step 6: Test Everything

1. **Start your development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Create a test account:**
   - Navigate to `/signup`
   - Email: `test@yourdomain.com`
   - Password: `test123456`
   - Name: `Test User`

3. **Test donation:**
   - Go to `/donations`
   - Use Stripe test card: `4242 4242 4242 4242`
   - Expiry: `12/34`, CVC: `123`, ZIP: `12345`
   - Amount: $50
   - Click "Donate"

4. **Verify:**
   - Check Stripe Dashboard for payment
   - View `/donations/history` for donation record
   - Try signing out and back in

## 📋 Checklist After Installation

- [ ] All files copied to IDE
- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured
- [ ] Stripe publishable key updated
- [ ] Backend deployed to Supabase
- [ ] Test account created
- [ ] Test donation completed
- [ ] Donation appears in Stripe Dashboard
- [ ] Donation history visible in app

## 🔧 Project Structure Overview

```
your-project/
├── components/
│   ├── auth/              # NEW: Authentication pages
│   ├── donations/         # NEW: Donation system
│   ├── newsletter/        # UPDATED: Now uses Supabase
│   ├── contact/           # UPDATED: Now uses Supabase
│   └── layout/            # UPDATED: Navigation with user menu
├── supabase/
│   └── functions/
│       └── server/        # Backend API
│           ├── index.tsx  # UPDATED: New routes added
│           ├── routes.tsx # NEW: All API handlers
│           └── kv_store.tsx # Protected (don't edit)
├── utils/
│   └── supabase/
│       ├── client.ts      # Supabase client
│       └── info.tsx       # Project configuration
├── App.tsx                # UPDATED: Auth provider added
└── Documentation files    # NEW: All setup guides
```

## 🎯 Key Features to Test

### Authentication
- ✅ Sign up new user
- ✅ Sign in existing user
- ✅ Sign out
- ✅ User menu in navigation
- ✅ Protected routes (donations)

### Donations
- ✅ One-time donation
- ✅ Monthly recurring donation
- ✅ Custom amount
- ✅ Preset amounts ($25, $50, $100, $250, $500)
- ✅ View donation history
- ✅ Cancel subscription

### Forms
- ✅ Newsletter subscription
- ✅ Contact form submission

## 🔐 Security Notes

**Keep these SECRET (never commit to Git):**
- ❌ `STRIPE_SECRET_KEY`
- ❌ `STRIPE_WEBHOOK_SECRET`
- ❌ `SUPABASE_SERVICE_ROLE_KEY`

**Safe to expose:**
- ✅ `VITE_STRIPE_PUBLISHABLE_KEY`
- ✅ `SUPABASE_URL`
- ✅ `SUPABASE_ANON_KEY`

Add to your `.gitignore`:
```
.env
.env.local
.env.production
```

## 🐛 Troubleshooting

### "Cannot find module '@stripe/stripe-js'"
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### "Cannot find module '@supabase/supabase-js'"
```bash
npm install @supabase/supabase-js
```

### "Stripe publishable key not configured"
Update the hardcoded key in `DonationPage.tsx` or set `VITE_STRIPE_PUBLISHABLE_KEY` in `.env.local`

### "Unauthorized" error when donating
Make sure you're signed in first. Go to `/signin` or `/signup`

### Payments not showing in Stripe
- Verify you're using test keys (start with `pk_test_` and `sk_test_`)
- Check Stripe Dashboard is in Test Mode
- Look at Stripe logs for errors

### Backend API errors
- Check Supabase Edge Function logs
- Verify environment variables are set in Supabase Dashboard
- Ensure backend is deployed

## 📚 Next Steps

1. ✅ Follow `QUICK-START-DONATIONS.md` to complete Stripe setup
2. ✅ Read `STRIPE-DONATIONS-SETUP.md` for production deployment
3. ✅ Review `SUPABASE-BACKEND-FEATURES.md` for technical details
4. ✅ Set up Stripe webhooks (see guide)
5. ✅ Test thoroughly in test mode
6. ✅ Go live when ready

## 🆘 Getting Help

**Check logs:**
- Browser Console (F12) - Frontend errors
- Supabase Dashboard → Edge Functions → Logs - Backend errors
- Stripe Dashboard → Developers → Logs - Payment errors

**Documentation:**
- `QUICK-START-DONATIONS.md` - Quick setup guide
- `STRIPE-DONATIONS-SETUP.md` - Complete Stripe guide
- `SUPABASE-BACKEND-FEATURES.md` - Technical documentation
- `README-BACKEND-SETUP.md` - Overview and summary

## ✅ You're All Set!

Your Thee Light of Zion website now has:
- Complete backend infrastructure
- User authentication
- Stripe donation system
- Newsletter and contact management
- Full documentation

**Start by following `QUICK-START-DONATIONS.md` to set up Stripe!**

---

**Questions?** Review the documentation files or check the troubleshooting section above.
