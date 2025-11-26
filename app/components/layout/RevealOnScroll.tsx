"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Direction for entry animation */
  direction?: "up" | "down" | "left" | "right";
  /** Distance in pixels to offset from starting position */
  distance?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Animation delay in seconds */
  delay?: number;
  /** Ease keyword compatible with Motion/Framer types */
  ease?: "easeOut" | "easeIn" | "easeInOut" | "linear";
  /** IntersectionObserver threshold (0 → 1) */
  threshold?: number | number[];
  /** Trigger the reveal earlier/later by shifting the bottom intersection point */
  triggerOffset?: number; // px moved up from bottom of viewport
  /** Reveal only once (don’t animate out when leaving viewport) */
  once?: boolean;
  /** Optional callback fired first time it enters view */
  onEnter?: () => void;
}

export function RevealOnScroll({
  children,
  className,
  direction = "up",
  distance = 24,
  duration = 0.35,
  delay = 0,
  ease = "easeOut",
  threshold = 0.2,
  triggerOffset = 0,
  once = true,
  onEnter,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const rootMargin = `0px 0px -${Math.max(0, triggerOffset)}px 0px`;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          if (!hasAnimated) {
            setHasAnimated(true);
            onEnter?.();
          }
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOffset, once, hasAnimated, onEnter]);

  // Compute initial offset based on direction
  const initial = (() => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      default:
        return { opacity: 0, y: distance };
    }
  })();

  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration, delay, ease }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default RevealOnScroll;
