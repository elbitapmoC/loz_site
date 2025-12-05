import React from "react";
import { cn } from "../ui/utils";
import { ArrowRight } from "lucide-react";

interface ElegantButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  icon?: React.ReactNode;
  className?: string;
  hasArrow?: boolean;
}

export function ElegantButton({
  children,
  variant = "primary",
  size = "default",
  icon,
  className,
  hasArrow = false,
  ...props
}: ElegantButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-primary/20 hover:from-primary/90 hover:to-primary",
    secondary: "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground border-secondary/20 hover:from-secondary/90 hover:to-secondary",
    outline: "bg-background/60 backdrop-blur-sm border-primary/30 text-foreground hover:bg-background/80 hover:border-primary/50"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    default: "px-8 py-3",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-full font-medium transition-all duration-300",
        "border shadow-sm hover:shadow-md",
        "transform hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Button content with optional icon */}
      <div className="relative z-10 flex items-center justify-center">
        {icon && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
        {hasArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </div>
      
      {/* 3D highlight effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ height: '50%' }}
      />
      
      {/* Shine effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden"
        style={{
          background: 'linear-gradient(45deg, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.15) 50%, transparent 55%, transparent 100%)',
          backgroundSize: '300% 300%',
          backgroundPosition: '0% 0%',
          animation: 'shimmer 2s infinite',
        }}
      />
      
      {/* Bottom shadow for depth */}
      <div 
        className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
      />
      
      {/* Add shimmer animation for the button */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </button>
  );
}