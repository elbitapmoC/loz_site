import React, { useRef, useEffect } from "react";
import { cn } from "./utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  fade?: boolean;
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  speed = "normal",
  direction = "left",
  fade = true,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;

    // Clone the content for seamless scrolling
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });

    // Set animation variables
    const speedMap = {
      slow: "30s",
      normal: "20s", 
      fast: "10s"
    };

    scroller.style.setProperty("--animation-duration", speedMap[speed]);
    scroller.style.setProperty("--animation-direction", direction === "left" ? "normal" : "reverse");
  }, [speed, direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        fade && "mask-image-gradient",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex gap-4 animate-marquee",
          pauseOnHover && "hover:animation-play-state-paused"
        )}
      >
        {children}
      </div>

      {fade && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent" />
        </>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee var(--animation-duration, 20s) linear infinite;
          animation-direction: var(--animation-direction, normal);
        }

        .hover\\:animation-play-state-paused:hover {
          animation-play-state: paused;
        }

        .mask-image-gradient {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `}</style>
    </div>
  );
}