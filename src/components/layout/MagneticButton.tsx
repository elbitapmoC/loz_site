import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  variant = "default",
  size = "default",
  strength = 30,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate magnetic pull (stronger as cursor gets closer to center)
    const magneticX = distanceX * (strength / 100);
    const magneticY = distanceY * (strength / 100);
    
    setPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={cn(
        "transition-transform duration-200",
        className
      )}
      style={{
        transform: isHovered ? `translate(${position.x}px, ${position.y}px)` : 'translate(0, 0)',
        transition: isHovered ? 'transform 0.2s ease-out' : 'transform 0.5s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Button>
  );
}