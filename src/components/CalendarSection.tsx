
import React from "react";

interface CalendarSectionProps {
  title: string;
  children: React.ReactNode;
}

export function CalendarSection({ title, children }: CalendarSectionProps) {
  return (
    <div className="mb-8">
      <div className="relative mb-4">
        <h2 className="text-[#e1c87d] pb-2 border-b border-[#e1c87d]/30">{title}</h2>
        <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-[#e1c87d]"></div>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}
