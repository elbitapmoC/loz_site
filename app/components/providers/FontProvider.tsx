"use client";

import React, { createContext, useContext, useEffect } from "react";

interface FontProviderProps {
  children: React.ReactNode;
}

// Creating a context for font loading state
const FontContext = createContext<{ fontsLoaded: boolean }>({ fontsLoaded: false });

export function FontProvider({ children }: FontProviderProps) {
  // Use standard browser font loading instead of document.styleSheets
  useEffect(() => {
    // No runtime font management required; CSS handles loading
  }, []);

  return (
    <FontContext.Provider value={{ fontsLoaded: true }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFontLoaded = () => useContext(FontContext);