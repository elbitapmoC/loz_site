import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
  isDark: boolean;
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  resolvedTheme: "light",
  isDark: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
    theme === "system" 
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : (theme as "light" | "dark")
  );

  // Apply theme class to document immediately without transitions first time
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove transition class during initial load
    root.classList.remove("theme-transition");
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Apply the appropriate theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);
    } else {
      root.classList.add(theme);
      setResolvedTheme(theme as "light" | "dark");
    }
    
    // Add transition class back after initial theme is applied
    setTimeout(() => {
      root.classList.add("theme-transition");
    }, 0);
  }, []);

  // Handle system theme change
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme !== "system") return;
      
      const root = window.document.documentElement;
      const newSystemTheme = mediaQuery.matches ? "dark" : "light";
      
      // Apply theme change
      root.classList.remove("light", "dark");
      root.classList.add(newSystemTheme);
      setResolvedTheme(newSystemTheme);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Handle theme changes from user actions
  const setTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    
    // Store the theme preference
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
    
    // Apply the theme change
    root.classList.remove("light", "dark");
    
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
        
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);
    } else {
      root.classList.add(newTheme);
      setResolvedTheme(newTheme as "light" | "dark");
    }
  };

  return (
    <ThemeProviderContext.Provider 
      {...props} 
      value={{ 
        theme, 
        setTheme, 
        resolvedTheme,
        isDark: resolvedTheme === "dark"
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};