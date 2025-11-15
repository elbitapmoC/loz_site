import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';

export function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cream-50 via-amber-50 to-cream-100 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <SignUp 
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
      </motion.div>
    </div>
  );
}
