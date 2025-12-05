import React, { useEffect, useRef, useState } from "react";
import { cn } from "../ui/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  threshold?: number;
  childClassName?: string;
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right";
  animationSpeed?: "slow" | "normal" | "fast";
  staggerChildren?: boolean;
  staggerAmount?: number;
  as?: React.ElementType;
}

export function AnimatedText({
  text,
  className,
  once = true,
  delay = 0,
  threshold = 0.1,
  childClassName,
  animation = "fade",
  animationSpeed = "normal",
  staggerChildren = false,
  staggerAmount = 0.05,
  as: Component = "div",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get animation classes
  const getAnimationClasses = () => {
    const baseClasses = ["transition-all"];
    
    // Add duration class
    switch (animationSpeed) {
      case "slow": baseClasses.push("duration-1000"); break;
      case "fast": baseClasses.push("duration-300"); break;
      default: baseClasses.push("duration-500");
    }
    
    // Add animation class
    switch (animation) {
      case "slide-up": 
        return isVisible 
          ? [...baseClasses, "opacity-100 translate-y-0"] 
          : [...baseClasses, "opacity-0 translate-y-8"];
      case "slide-down": 
        return isVisible 
          ? [...baseClasses, "opacity-100 translate-y-0"] 
          : [...baseClasses, "opacity-0 -translate-y-8"];
      case "slide-left": 
        return isVisible 
          ? [...baseClasses, "opacity-100 translate-x-0"] 
          : [...baseClasses, "opacity-0 translate-x-8"];
      case "slide-right": 
        return isVisible 
          ? [...baseClasses, "opacity-100 translate-x-0"] 
          : [...baseClasses, "opacity-0 -translate-x-8"];
      case "fade":
      default: 
        return isVisible 
          ? [...baseClasses, "opacity-100"] 
          : [...baseClasses, "opacity-0"];
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    
    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set visible after the delay
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, delay * 1000);
            
            // Cleanup timer
            return () => clearTimeout(timer);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [once, delay, threshold]);

  // Split text into words for stagger effect
  const words = text.split(" ");

  // Render with staggered words
  if (staggerChildren) {
    return (
      <Component ref={ref} className={cn("overflow-visible", className)}>
        <div className="flex flex-wrap min-h-[1.25em] items-start">
          {words.map((word, i) => (
            <span
              key={i}
              className={cn(
                "inline-block transition-all my-1",
                getAnimationClasses().join(" "),
                childClassName
              )}
              style={{
                transitionDelay: `${i * staggerAmount}s`,
                marginRight: "0.25em",
                lineHeight: "1.2"
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </Component>
    );
  }

  // Render as a single block
  return (
    <Component 
      ref={ref} 
      className={cn("overflow-visible", className)}
    >
      <div
        className={cn(getAnimationClasses().join(" "), "pb-2")}
        style={{ transitionDelay: `${delay}s`, lineHeight: "1.2" }}
      >
        {text}
      </div>
    </Component>
  );
}