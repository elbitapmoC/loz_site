import React from "react";
import { CheckSquare, Check } from "lucide-react";
import { cn } from "../../../components/ui/utils";

export function MinistryPreview() {
  return (
    <div className="w-full h-full p-4 bg-card">
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs font-medium text-foreground dark:text-white">
            Ministry Checklist
          </div>
          <CheckSquare className="w-4 h-4 text-primary" />
        </div>

        <div className="space-y-2">
          {[
            { text: "Food Pantry Donation", done: true },
            { text: "Weekly Bible Study", done: true },
            { text: "Prison Ministry Visit", done: false },
            { text: "Community Outreach", done: false },
            { text: "Prayer Group", done: true },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 dark:bg-background/60"
            >
              <div
                className={cn(
                  "w-4 h-4 rounded flex items-center justify-center",
                  item.done
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/40"
                )}
              >
                {item.done && (
                  <Check className="w-3 h-3" />
                )}
              </div>
              <span
                className={cn(
                  "text-xs",
                  item.done && "line-through opacity-70",
                )}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 p-2 rounded-lg flex items-center justify-between bg-primary/10 dark:bg-primary/20">
          <span className="text-[10px] text-primary">
            3 of 5 completed
          </span>
          <div className="w-16 h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full bg-primary w-[60%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
