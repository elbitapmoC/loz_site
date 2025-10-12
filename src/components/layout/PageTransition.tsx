import React, { useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  
  // Use layout effect to ensure this runs synchronously before browser paint
  useLayoutEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Smooth page transition variants - keep these very minimal and fast
  const pageVariants = {
    initial: {
      opacity: 0.8,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0.8,
    },
  };

  // Keep transitions extremely short to avoid interference with scroll behavior
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.1, // Very short duration
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ 
          width: "100%",
          willChange: "opacity", // Only animate opacity for better performance
          position: "relative",
        }}
        className="transform-gpu" // Enable GPU acceleration
        onAnimationStart={() => {
          // Force scroll top at animation start
          window.scrollTo(0, 0);
        }}
        onAnimationComplete={() => {
          // Force scroll top at animation completion
          window.scrollTo(0, 0);
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}