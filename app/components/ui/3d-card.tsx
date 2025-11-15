import React, { useState, useRef, ReactNode } from "react";
import { cn } from "./utils";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ThreeDCardProps {
  children: ReactNode;
  className?: string;
  glare?: boolean;
  glareOpacity?: number;
  rotation?: number;
  scale?: number;
}

export function ThreeDCard({
  children,
  className,
  glare = false,
  glareOpacity = 0.2,
  rotation = 10,
  scale = 1.03,
}: ThreeDCardProps) {
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
    glarePosition: { x: 0, y: 0 },
    glareOpacity: 0,
  });
  
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    const rotateY = (mouseX / (rect.width / 2)) * rotation;
    const rotateX = -((mouseY / (rect.height / 2)) * rotation);
    
    // Calculate glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setTransform({
      rotateX,
      rotateY,
      translateZ: 50,
      glarePosition: { x: glareX, y: glareY },
      glareOpacity: glareOpacity,
    });
  };
  
  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      glarePosition: { x: 0, y: 0 },
      glareOpacity: 0,
    });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl transform-3d transition-all duration-300",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.translateZ > 0 ? scale : 1})`,
        transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out",
        boxShadow: transform.translateZ > 0 
          ? isDarkTheme 
            ? '0 15px 30px -5px rgba(0, 0, 0, 0.5), 0 5px 15px -5px rgba(0, 0, 0, 0.3)'
            : '0 15px 30px -5px rgba(0, 0, 0, 0.2), 0 5px 15px -5px rgba(0, 0, 0, 0.1)'
          : 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card content */}
      <div className="relative z-10">{children}</div>

      {/* Card glare effect - different in light vs dark mode */}
      {glare && (
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
          style={{
            background: isDarkTheme 
              ? `radial-gradient(circle at ${transform.glarePosition.x}% ${transform.glarePosition.y}%, rgba(255, 255, 255, ${transform.glareOpacity}), transparent 80%)`
              : `radial-gradient(circle at ${transform.glarePosition.x}% ${transform.glarePosition.y}%, rgba(255, 255, 255, ${transform.glareOpacity * 1.5}), transparent 80%)`,
            opacity: transform.glareOpacity > 0 ? 1 : 0,
          }}
        />
      )}

      {/* Light mode specific edge highlight */}
      {!isDarkTheme && (
        <div 
          className="absolute inset-0 z-0 rounded-xl opacity-50 pointer-events-none transition-opacity duration-300"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
            boxShadow: "inset 0 1px 1px 0 rgba(255,255,255,0.9)",
            opacity: transform.translateZ > 0 ? 0.7 : 0.5,
          }}
        />
      )}
      
      {/* Dark mode specific inner shadow */}
      {isDarkTheme && (
        <div 
          className="absolute inset-0 z-0 rounded-xl opacity-80 pointer-events-none transition-opacity duration-300"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
            boxShadow: "inset 0 1px 1px 0 rgba(255,255,255,0.1)",
            opacity: transform.translateZ > 0 ? 1 : 0.8,
          }}
        />
      )}
    </div>
  );
}