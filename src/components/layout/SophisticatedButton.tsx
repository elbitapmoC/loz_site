import React from "react";
import { cn } from "../ui/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SophisticatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "subtle";
  size?: "sm" | "default" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  href?: string;
  hasArrow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function SophisticatedButton({
  children,
  variant = "primary",
  size = "default",
  icon,
  iconPosition = "left",
  className,
  href,
  hasArrow = false,
  disabled = false,
  onClick,
  ...props
}: SophisticatedButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>) {
  // Define variant classes
  const variants = {
    primary: "bg-primary/90 text-primary-foreground hover:bg-primary",
    secondary: "bg-secondary/90 text-secondary-foreground hover:bg-secondary",
    outline: "bg-background/30 border border-primary/30 text-foreground hover:bg-background/50 hover:border-primary/50",
    subtle: "bg-accent/30 text-accent-foreground hover:bg-accent/50"
  };

  // Define size classes
  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    default: "px-6 py-2.5",
    lg: "px-8 py-3.5 text-lg"
  };

  // Common button classes
  const buttonClasses = cn(
    // Base styles
    "relative group font-medium inline-flex items-center justify-center",
    "rounded-md transition-all duration-300 overflow-hidden",
    "transform hover:translate-y-[-2px] active:translate-y-0",
    
    // Shadow effect for depth
    "shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)]",
    "hover:shadow-[0_6px_20px_-3px_rgba(0,0,0,0.2)]",
    
    // Variants and sizes
    variants[variant],
    sizes[size],
    
    // Disabled state
    disabled && "opacity-50 cursor-not-allowed hover:translate-y-0",
    
    // Custom classes
    className
  );

  // Button content with proper icon positioning
  const ButtonContent = () => (
    <>
      {/* Inner highlight for 3D effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-x-0 top-0 h-[55%] bg-white/20 rounded-t-md" />
      </div>
      
      {/* Bottom shadow for depth */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-[3px] bg-black/10 blur-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-background" />
      
      {/* Button content with icon */}
      <div className="relative z-10 flex items-center space-x-2">
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
        {hasArrow && (
          <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </div>
    </>
  );

  // Render as link if href is provided
  if (href) {
    return (
      <Link 
        to={href} 
        className={buttonClasses}
        {...props}
      >
        <ButtonContent />
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <ButtonContent />
    </button>
  );
}