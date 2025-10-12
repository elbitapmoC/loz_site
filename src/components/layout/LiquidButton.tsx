import React, { useState } from "react";
import { cn } from "../ui/utils";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
  background?: string;
  hoverBackground?: string;
  liquidColor?: string;
  className?: string;
}

export function LiquidButton({
  children,
  color = "white",
  background = "var(--primary)",
  hoverBackground = "var(--primary)",
  liquidColor = "rgba(255, 255, 255, 0.4)",
  className,
  ...props
}: LiquidButtonProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    setDimensions({
      width: e.currentTarget.offsetWidth,
      height: e.currentTarget.offsetHeight,
    });
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-full px-6 py-3 transition-all duration-300 ease-out focus:outline-none",
        className
      )}
      style={{ 
        color, 
        backgroundColor: background,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {isHovered && (
        <div
          className="absolute top-0 left-0 transform-gpu transition-transform"
          style={{
            width: `${dimensions.width * 2}px`,
            height: `${dimensions.width * 2}px`,
            borderRadius: '50%',
            background: liquidColor,
            transform: `translate(${mousePosition.x - dimensions.width}px, ${mousePosition.y - dimensions.width}px)`,
            pointerEvents: 'none',
            opacity: 0.5,
            mixBlendMode: 'overlay',
          }}
        />
      )}
      
      <div
        className="absolute inset-0 transform-gpu transition-opacity duration-300"
        style={{
          backgroundColor: hoverBackground,
          opacity: isHovered ? 1 : 0,
          pointerEvents: 'none',
        }}
      />
    </button>
  );
}