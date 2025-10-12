import React, { useRef, useEffect } from "react";
import { cn } from "../ui/utils";

interface Quote {
  text: string;
  reference: string;
}

interface RollingQuotesProps {
  quotes?: Quote[];
  className?: string;
  speed?: number;
}

export function RollingQuotes({ quotes: propQuotes, className, speed = 30 }: RollingQuotesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const secondGroupRef = useRef<HTMLDivElement>(null);
  
  // Use provided quotes or fall back to default quotes
  const defaultQuotes: Quote[] = [
    { 
      text: "Hear, O Israel: The LORD our God, the LORD is one.",
      reference: "Deuteronomy 6:4"
    },
    { 
      text: "And you shall know the truth, and the truth shall make you free.",
      reference: "John 8:32"
    },
    { 
      text: "Remember the Sabbath day, to keep it holy.",
      reference: "Exodus 20:8"
    },
    { 
      text: "Love the LORD your God with all your heart and with all your soul and with all your strength.",
      reference: "Deuteronomy 6:5"
    },
    { 
      text: "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.",
      reference: "Jeremiah 29:11"
    },
    { 
      text: "Your word is a lamp to my feet and a light to my path.",
      reference: "Psalm 119:105"
    },
  ];
  
  const quotes = propQuotes || defaultQuotes;
  
  // Duplicate the quotes to create a seamless loop
  const allQuotes = [...quotes, ...quotes];
  
  useEffect(() => {
    if (!scrollerRef.current || !firstGroupRef.current || !secondGroupRef.current) return;
    
    const firstGroupWidth = firstGroupRef.current.offsetWidth;
    let animationId: number;
    let scrollPos = 0;
    
    const scroll = () => {
      if (!scrollerRef.current) return;
      
      scrollPos += speed / 60;
      
      // Reset when we've scrolled the width of the first group
      if (scrollPos >= firstGroupWidth) {
        scrollPos = 0;
      }
      
      scrollerRef.current.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start the scrolling animation
    scroll();
    
    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      scroll();
    };
    
    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed, quotes]);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden py-8 bg-primary/5 border-y border-primary/10",
        className
      )}
    >
      <div 
        ref={scrollerRef}
        className="flex gap-8 whitespace-nowrap"
      >
        <div ref={firstGroupRef} className="flex gap-8">
          {allQuotes.map((quote, index) => (
            <div 
              key={`quote-1-${index}`}
              className="flex items-center gap-2 px-6 py-3 bg-background/30 backdrop-blur-sm rounded-lg border border-primary/10"
            >
              <span className="font-serif italic">{quote.text}</span>
              <span className="text-primary font-medium px-2 py-1 bg-primary/10 rounded text-sm whitespace-nowrap">
                {quote.reference}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div ref={secondGroupRef} className="flex gap-8">
          {allQuotes.map((quote, index) => (
            <div 
              key={`quote-2-${index}`}
              className="flex items-center gap-2 px-6 py-3 bg-background/30 backdrop-blur-sm rounded-lg border border-primary/10"
            >
              <span className="font-serif italic">{quote.text}</span>
              <span className="text-primary font-medium px-2 py-1 bg-primary/10 rounded text-sm whitespace-nowrap">
                {quote.reference}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}