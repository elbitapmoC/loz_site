'use client';

import React, { createContext, useContext } from 'react';
import { useUser, useAuth as useClerkAuth } from '@clerk/nextjs';
import type { UserResource } from '@clerk/types';

interface AuthContextType {
  user: UserResource | null | undefined;
  isLoaded: boolean;
  isSignedIn: boolean;
  signOut: () => Promise<void>;
  getToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Check if Clerk is properly configured
const isClerkConfigured = () => {
  return process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
         process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key_here';
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // If Clerk is not configured, provide a fallback
  if (!isClerkConfigured()) {
    const fallbackValue: AuthContextType = {
      user: null,
      isLoaded: true,
      isSignedIn: false,
      signOut: async () => {},
      getToken: async () => null,
    };
    
    return <AuthContext.Provider value={fallbackValue}>{children}</AuthContext.Provider>;
  }

  // Use Clerk when properly configured
  const { user, isLoaded } = useUser();
  const { isSignedIn, signOut, getToken } = useClerkAuth();

  const value = {
    user,
    isLoaded,
    isSignedIn: isSignedIn ?? false,
    signOut,
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
