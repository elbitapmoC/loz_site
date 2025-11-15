import React from 'react';
import { SignIn } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Check if Clerk is properly configured
const isClerkConfigured = () => {
  return process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
         process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key_here';
};

function FallbackSignInForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-navy-800 border-2 border-amber-200 dark:border-gold-800 shadow-xl rounded-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-navy-900 dark:text-cream-50 mb-2">
            Sign In
          </h1>
          <p className="text-navy-600 dark:text-cream-200">
            Authentication is currently being configured
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="text-center text-sm text-navy-600 dark:text-cream-300">
            <p className="mb-4">
              The authentication system is being set up. Please check back later or contact the administrator.
            </p>
            
            <div className="space-y-2">
              <Link href="/">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 dark:from-gold-600 dark:to-gold-700 dark:hover:from-gold-700 dark:hover:to-gold-800 text-white">
                  Return to Home
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button variant="outline" className="w-full border-amber-200 dark:border-gold-800 text-amber-600 hover:bg-amber-50 dark:text-gold-400 dark:hover:bg-navy-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cream-50 via-amber-50 to-cream-100 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950">
      <div className="w-full max-w-md animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
        {isClerkConfigured() ? (
          <SignIn 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "border-2 border-amber-200 dark:border-gold-800 shadow-xl",
                headerTitle: "text-3xl text-navy-900 dark:text-cream-50",
                headerSubtitle: "text-navy-600 dark:text-cream-200",
                socialButtonsBlockButton: "border-amber-200 dark:border-gold-800 hover:bg-amber-50 dark:hover:bg-navy-800",
                formButtonPrimary: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 dark:from-gold-600 dark:to-gold-700 dark:hover:from-gold-700 dark:hover:to-gold-800",
                formFieldInput: "border-amber-200 dark:border-gold-800 focus:border-amber-400 dark:focus:border-gold-600",
                footerActionLink: "text-amber-600 hover:text-amber-700 dark:text-gold-400 dark:hover:text-gold-300"
              }
            }}
            redirectUrl="/"
          />
        ) : (
          <FallbackSignInForm />
        )}
      </div>
    </div>
  );
}
