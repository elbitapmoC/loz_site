import React, { useLayoutEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { cn } from "../ui/utils";
import { PageTransition } from "./PageTransition";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  const location = useLocation();
  
  // Use layout effect to ensure this runs synchronously before browser paint
  useLayoutEffect(() => {
    // Force scroll to top on every layout render with new location
    window.scrollTo(0, 0);
    
    // Force all scrollable elements to top
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col grain-bg">
      <Navigation />
      <main 
        className={cn("flex-1 pt-16 md:pb-0 pb-20", className)}
        id="main-content" // Add ID for direct DOM manipulation if needed
      >
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}