import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { cn } from "../ui/utils";
import { PageTransition } from "./PageTransition";
import { ScrollToTop } from "./ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col grain-bg relative">
      {/* Accessibility: Skip to content link */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-background focus:text-primary focus:p-4 focus:rounded-md focus:shadow-lg focus:border focus:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      >
        Skip to content
      </a>

      <Navigation />
      <ScrollToTop />
      
      <main 
        className={cn("flex-1 pt-16 md:pb-0 pb-20", className)}
        id="main-content"
        tabIndex={-1} // Makes the main area programmatically focusable for the skip link
      >
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      
      <Footer />
    </div>
  );
}
