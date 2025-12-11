import React from 'react';
import { motion } from 'framer-motion';
import { SignUp } from '@clerk/clerk-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';

export function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cream-50 via-amber-50 to-cream-100 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-2 border-amber-200 dark:border-gold-800 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl">Create Account</CardTitle>
            <CardDescription>Join Thee Light of Zion community</CardDescription>
          </CardHeader>
          <div className="p-6">
            <SignUp
              routing="path"
              path="/signup"
              afterSignUpUrl="/"
              afterSignInUrl="/"
              appearance={{
                variables: { colorPrimary: '#b7791f' },
                elements: {
                  card: 'border-2 rounded-xl',
                  formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                  headerTitle: 'font-serif text-2xl',
                  headerSubtitle: 'text-muted-foreground',
                  socialButtonsBlockButton: 'border-2 rounded-lg',
                },
                layout: {
                  socialButtonsPlacement: 'bottom',
                },
              }}
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
