import React from "react";
import { StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export function CalendarHeader() {
  return (
    <div className="mb-10 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center">
          <StarIcon className="h-8 w-8 text-white" />
        </div>
      </div>

      <h1 className="mb-2 tracking-tight">
        THEE LIGHT OF ZION
      </h1>

      <div className="flex justify-center gap-2 mb-6">
        <Badge
          variant="outline"
          className="px-3 border-amber-500/30 text-amber-500"
        >
          2025
        </Badge>
        <Badge
          variant="outline"
          className="px-3 border-amber-500/30 text-amber-500"
        >
          2026
        </Badge>
      </div>

      <div className="max-w-xl mx-auto">
        <h2 className="mb-3">Calendar of High Holy Days</h2>
        <p className="text-muted-foreground">
          "So teach us to number the days, that we may apply our
          hearts unto wisdom."
        </p>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <span className="text-sm text-muted-foreground">
            New Moons
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <span className="text-sm text-muted-foreground">
            Holy Days
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
          <span className="text-sm text-muted-foreground">
            Fasting
          </span>
        </div>
      </div>
    </div>
  );
}