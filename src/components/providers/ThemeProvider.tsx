import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

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
  
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  const applyTheme = useCallback((targetTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let systemTheme: "light" | "dark" = "light";
    
    if (targetTheme === "system") {
       systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);
    } else {
      root.classList.add(targetTheme);
      setResolvedTheme(targetTheme);
    }
  }, []);

  // Initial theme application
  useEffect(() => {
    const root = window.document.documentElement;
    // Remove transition class during initial load to prevent flash
    root.classList.remove("theme-transition");
    
    applyTheme(theme);
    
    // Add transition class back after initial theme is applied
    const timer = setTimeout(() => {
      root.classList.add("theme-transition");
    }, 0);

    return () => clearTimeout(timer);
  }, [theme, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
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
