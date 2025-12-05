import React from "react";
import { cn } from "../ui/utils";
import { ZionLogo } from "./ZionLogo";

interface BrandLogoProps {
  scrolled?: boolean;
}

export function BrandLogo({ scrolled }: BrandLogoProps) {
  return (
    <div className="flex items-center perspective">
      <div
        className={cn(
          "relative flex items-center justify-center mr-3 overflow-hidden transition-all duration-300 rounded-full bg-primary/10 border border-primary/20",
          scrolled ? "w-8 h-8" : "w-10 h-10",
        )}
      >
        <ZionLogo className="h-3/4 w-auto text-primary" />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-serif font-semibold tracking-tight transition-all duration-300 text-foreground",
            scrolled ? "text-lg" : "text-xl",
          )}
        >
          Thee Light of Zion
        </span>
        {!scrolled && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 hidden sm:block">
            Let Your Light So Shine
          </span>
        )}
      </div>
    </div>
  );
}
