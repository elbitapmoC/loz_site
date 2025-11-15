"use client";
import React, { useState } from "react";
import { cn } from "./utils";
import { AnimatePresence, motion } from "framer-motion";

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

const DockItem = ({ icon, label, isActive, href, onClick }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <motion.div
      className={cn(
        "relative flex flex-col items-center justify-center",
        "h-14 w-16 rounded-lg",
        "group transform-gpu" // Added transform-gpu for hardware acceleration
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 1 }}
      animate={{ 
        scale: isActive ? 1.05 : 1,
        y: isActive ? -3 : 0,
      }}
      style={{
        willChange: "transform", // Hint for hardware acceleration
        backfaceVisibility: "hidden", // Prevent flickering
        perspective: 1000 // Helps with 3D transitions
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        mass: 0.5, // Lower mass for faster response
        velocity: 0 // Start with no velocity for smoother transitions
      }}
    >
      {/* Label positioned above the icon */}
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.div
            className="absolute -top-6 left-0 right-0 flex items-center justify-center overflow-hidden transform-gpu"
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            transition={{ 
              duration: 0.15,
              ease: "easeOut" // Smoother easing
            }}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden"
            }}
          >
            <span
              className={cn(
                "text-xs font-medium px-1.5 py-0.5 rounded-full max-w-[90%] truncate",
                isActive ? "text-primary bg-background/70 shadow-sm" : "text-foreground bg-background/70"
              )}
            >
              {label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={cn(
          "p-2 rounded-xl relative flex items-center justify-center transform-gpu",
          isActive 
            ? "text-primary-foreground shadow-sm"
            : "text-foreground"
        )}
        animate={{ 
          scale: isActive ? 1.08 : 1
        }}
        style={{
          willChange: "transform", // Hint for hardware acceleration
          backfaceVisibility: "hidden"
        }}
      >
        {icon}
        
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-primary rounded-xl -z-10 transform-gpu"
            layoutId="activeBackground"
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30,
              mass: 0.6,
              velocity: 0 // Start with no velocity for smoother transitions
            }}
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden"
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }

  return content;
};

interface DockProps {
  children?: React.ReactNode;
  className?: string;
}

export function Dock({ children, className }: DockProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center pb-4 z-50 pointer-events-none">
      <motion.div
        className={cn(
          "px-2 py-1 rounded-2xl backdrop-blur-xl",
          "bg-background/90 border border-border shadow-lg",
          "flex items-center justify-center",
          "transform-gpu pointer-events-auto", // Use GPU for better performance and enable pointer events
          className
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          willChange: "transform, opacity", // Hint for hardware acceleration
          backfaceVisibility: "hidden", // Prevent flickering
          transform: "translateZ(0)" // Force GPU acceleration
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30,
          delay: 0.1
        }}
      >
        <div className="flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

Dock.Item = DockItem;