import React from "react";
import { cn } from "../../../components/ui/utils";

export function CalendarPreview() {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="w-full h-full p-4 bg-card">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="text-xs font-medium text-foreground dark:text-white">
            June 2025
          </div>
          <div className="flex gap-1">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-primary/10 dark:bg-primary/20">
              <span className="text-primary text-xs">&lt;</span>
            </div>
            <div className="w-5 h-5 rounded flex items-center justify-center bg-primary/10 dark:bg-primary/20">
              <span className="text-primary text-xs">&gt;</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day) => (
            <div
              key={day}
              className="text-[10px] text-muted-foreground"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="text-[10px] text-muted-foreground/50 h-6 flex items-center justify-center"
            >
              {30 + i - 1}
            </div>
          ))}

          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i + 2}
              className={cn(
                "text-[10px] h-6 flex items-center justify-center rounded-full",
                i + 1 === 10
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-primary/10 dark:text-white dark:hover:bg-primary/20"
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div className="mt-2 p-2 rounded-lg text-xs flex items-center gap-2 bg-primary/10 dark:bg-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-foreground dark:text-white">
            New Moon Festival
          </span>
        </div>
      </div>
    </div>
  );
}
