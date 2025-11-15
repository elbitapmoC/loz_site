"use client";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 theme-aware",
  {
    variants: {
      variant: {
        primary: "border border-primary/20 text-white shadow-md", /* Explicitly white text for visibility */
        secondary: "border border-primary/30 text-primary shadow-sm",
        outline: "border border-primary/20 bg-transparent text-foreground shadow-sm hover:bg-primary/5",
        ghost: "bg-transparent text-foreground hover:bg-primary/5",
        link: "text-primary underline-offset-4 hover:underline bg-transparent shadow-none",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 py-3 text-base",
        xl: "h-14 px-8 py-4 text-lg",
      },
      depth: {
        flat: "",
        raised: "",
        deep: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      depth: "raised",
    },
  }
);

export interface ThreeDButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ThreeDButton = forwardRef<HTMLButtonElement, ThreeDButtonProps>(
  ({ className, variant, size, depth, asChild = false, ...props }, ref) => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const Comp = asChild ? Slot : "button";
    
    // Generate gradient and shadow styles based on variant and theme
    const getStyles = () => {
      // Base styles that apply to all variants
      let styles = {};
      
      // Apply specific styles based on variant
      if (variant === "primary") {
        styles = {
          background: isDark 
            ? "linear-gradient(to bottom right, var(--primary), var(--primary)/80%)"
            : "linear-gradient(to bottom right, #7F4F20, #9E6C3A)", // Darker gold gradient for light theme
          color: "#FFFFFF", // Ensure text is always white for visibility
          boxShadow: depth === "flat" 
            ? "none" 
            : depth === "deep" 
              ? `0 4px 10px -1px var(--primary)/30%, 0 10px 20px -2px var(--primary)/20%` 
              : `0 4px 6px -1px var(--primary)/20%, 0 2px 4px -2px var(--primary)/10%`,
        };
      } else if (variant === "secondary") {
        styles = {
          background: isDark 
            ? "linear-gradient(to bottom, var(--background), var(--card))" 
            : "linear-gradient(to bottom, var(--card), var(--background))",
          boxShadow: depth === "flat" 
            ? "none" 
            : depth === "deep" 
              ? `0 4px 10px -1px rgba(0,0,0,0.15), 0 10px 20px -2px rgba(0,0,0,0.1)` 
              : `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.05)`,
        };
      } else if (variant === "outline" || variant === "ghost") {
        styles = {
          boxShadow: depth === "flat" 
            ? "none" 
            : depth === "deep" 
              ? `0 4px 10px -1px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)` 
              : `0 2px 4px -1px rgba(0,0,0,0.05), 0 1px 2px -1px rgba(0,0,0,0.03)`,
        };
      }
      
      return styles;
    };

    // Get the appropriate hover scale based on depth
    const getHoverScale = () => {
      if (depth === "flat") return 1.01;
      if (depth === "deep") return 1.05;
      return 1.03; // Default for "raised"
    };
    
    // Get appropriate transition for depth
    const getTransition = () => {
      if (depth === "deep") {
        return {
          type: "spring",
          stiffness: 400,
          damping: 10
        };
      }
      
      return {
        type: "tween",
        duration: 0.2
      };
    };

    return (
      <motion.div
        whileHover={{ 
          scale: getHoverScale(),
          y: depth === "flat" ? 0 : -2
        }}
        whileTap={{ 
          scale: 0.98,
          y: depth === "flat" ? 0 : 1
        }}
        transition={getTransition()}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, depth, className }))}
          ref={ref}
          style={getStyles()}
          {...props}
        />
      </motion.div>
    );
  }
);

ThreeDButton.displayName = "ThreeDButton";

export { ThreeDButton };