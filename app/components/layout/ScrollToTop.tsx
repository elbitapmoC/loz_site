import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * A more aggressive ScrollToTop component that forcefully resets scroll position
 * using multiple strategies to ensure it works across all browsers and situations
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  
  useEffect(() => {
    // Skip initial render
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname;
      return;
    }
    
    // Force immediate scroll reset in the most direct way
    window.scrollTo(0, 0);
    
    // Some browsers might need a slight delay
    const immediateTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    // For iOS Safari and some other mobile browsers that might need more time
    const shortTimer = setTimeout(() => {
      window.scrollTo(0, 0);
      
      // Force document element and body to top as well
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      
      // Use all possible scroll methods
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use auto instead of smooth for consistent behavior
      });
    }, 10);
    
    // Last resort timer with max priority
    const backupTimer = setTimeout(() => {
      window.scrollTo(0, 0);
      
      // Attempt again with a different technique
      if (typeof window.scroll === 'function') {
        window.scroll(0, 0);
      }
      
      // Force document element and body to top again
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      
      // Try scrolling the main element if it exists
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTop = 0;
      }
    }, 50);
    
    // Update the previous path
    prevPathRef.current = pathname;
    
    // Clean up timers
    return () => {
      clearTimeout(immediateTimer);
      clearTimeout(shortTimer);
      clearTimeout(backupTimer);
    };
  }, [pathname]);
  
  // This component doesn't render anything
  return null;
}