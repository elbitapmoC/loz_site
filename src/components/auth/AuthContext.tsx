import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: null;
  session: null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<null>(null);
  const [session, setSession] = useState<null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(null);
    setSession(null);
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    return { error: null };
  };

  const signUp = async (email: string, password: string, name: string) => {
    return { error: null };
  };

  const signOut = async () => {
    return;
  };

  const value = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
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
