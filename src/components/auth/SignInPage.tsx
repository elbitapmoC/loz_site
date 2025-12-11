import React from "react";
import { motion } from "framer-motion";
import { SignIn } from "@clerk/clerk-react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function SignInPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to access your account
          </CardDescription>
        </CardHeader>
        <div className="p-6">
          <SignIn
            routing="path"
            path="/signin"
            afterSignInUrl="/"
            afterSignUpUrl="/"
            appearance={{
              variables: {
                colorPrimary: "#b7791f",
              },
              elements: {
                  card: 'border-2 rounded-xl',
                  formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                  headerTitle: 'font-serif text-2xl',
                  headerSubtitle: 'text-muted-foreground',
                  socialButtonsBlockButton: 'border-2 rounded-lg',
                },
              layout: {
                socialButtonsPlacement: "bottom",
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
