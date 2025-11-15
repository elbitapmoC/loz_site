# Dependencies Required

## New Dependencies to Install

Add these to your `package.json` and run `npm install`:

### Stripe Payment Processing
```json
{
  "dependencies": {
    "@stripe/react-stripe-js": "^2.4.0",
    "@stripe/stripe-js": "^2.2.0"
  }
}
```

### Supabase Client
```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.39.0"
  }
}
```

## Installation Commands

### Using npm:
```bash
npm install @stripe/react-stripe-js @stripe/stripe-js @supabase/supabase-js
```

### Using yarn:
```bash
yarn add @stripe/react-stripe-js @stripe/stripe-js @supabase/supabase-js
```

### Using pnpm:
```bash
pnpm add @stripe/react-stripe-js @stripe/stripe-js @supabase/supabase-js
```

## Complete package.json Example

Here's what your dependencies section should look like after adding the new packages:

```json
{
  "name": "thee-light-of-zion",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@stripe/react-stripe-js": "^2.4.0",
    "@stripe/stripe-js": "^2.2.0",
    "@supabase/supabase-js": "^2.39.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "motion": "^10.16.4",
    "lucide-react": "^0.294.0",
    "sonner": "^1.2.3",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-tooltip": "^1.0.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.1.0",
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "tailwindcss": "^4.0.0"
  }
}
```

## Backend Dependencies (Already Handled)

The backend (Supabase Edge Functions) uses Deno and imports packages via npm: specifier. These are already configured in the code:

```typescript
// In /supabase/functions/server/routes.tsx
import { createClient } from "npm:@supabase/supabase-js@2";
import Stripe from "npm:stripe@14.11.0";
```

No additional configuration needed for backend dependencies.

## Verification

After installing, verify the packages are installed:

```bash
npm list @stripe/react-stripe-js @stripe/stripe-js @supabase/supabase-js
```

You should see:
```
├── @stripe/react-stripe-js@2.4.0
├── @stripe/stripe-js@2.2.0
└── @supabase/supabase-js@2.39.0
```

## TypeScript Types

The packages above include TypeScript definitions, so no additional @types packages are needed.

## Troubleshooting

### Module not found errors
If you see errors like "Cannot find module '@stripe/stripe-js'", run:
```bash
npm install
```

### Version conflicts
If you have dependency conflicts, try:
```bash
npm install --legacy-peer-deps
# or
npm install --force
```

### Clear cache if needed
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

After installing dependencies:
1. ✅ Verify all packages installed successfully
2. ✅ Start development server (`npm run dev`)
3. ✅ Follow `INSTALLATION.md` for full setup
4. ✅ Follow `QUICK-START-DONATIONS.md` for Stripe configuration

---

**Status:** All dependencies documented and ready to install!
