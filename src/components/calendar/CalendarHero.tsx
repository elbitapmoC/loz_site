
import React from "react";
import { Button } from "../ui/button";
import { Calendar as CalendarIcon, ChevronRight } from "lucide-react";

export function CalendarHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[624px] h-[617px]">
        <div className="w-full h-full rounded-full blur-[90px] bg-gradient-to-r from-[#FF4242] via-[#A0FF42] via-[#43D0FF] to-[#A142FE]" style={{ opacity: 0.3 }} />
      </div>
      
      {/* Main content */}
      <div className="container max-w-7xl mx-auto relative z-10">
        <h1 className="text-center text-[72px] font-semibold tracking-[-3.6px] leading-[72px] text-transparent bg-clip-text bg-gradient-to-b from-[rgb(1,2,2)] to-[rgba(255,255,255,0.4)]">
          High Holy Days for Israelites
        </h1>
        
        <div className="mt-12 text-center max-w-[445px] mx-auto">
          <p className="text-[18px] leading-[28px]">
            All Your Holy Day Questions Answered—<strong>APTYTH</strong>!
            <br />
            Discover the <strong>who, when</strong>, <strong>why</strong>, <strong>how</strong>, and <strong>what</strong> is the meaning behind every holy day, all in one place.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="h-8 rounded-full px-3 gap-2 shadow-sm">
            <span>🗓️</span>
            <div className="w-px h-[30px] bg-neutral-200" />
            <span className="text-xs font-medium">Download Your 2025 Calendar</span>
            <ChevronRight className="h-3 w-3 text-neutral-500" />
          </Button>
        </div>
      </div>
    </section>
  );
}
