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
    // Define the fonts we want to load
    const fontFamilies = [
      'Outfit',
      'Cormorant Garamond',
      'DM Mono'
    ];

    // We don't need to manually check the stylesheet anymore
    // Just ensure the fonts are specified in globals.css
    
    // Font loading doesn't need JavaScript intervention
    // The browser will handle loading the fonts from the CSS @import statements

    // Just render the children immediately
    // The browser will handle font FOUT/FOIT
  }, []);

  return (
    <FontContext.Provider value={{ fontsLoaded: true }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFontLoaded = () => useContext(FontContext);