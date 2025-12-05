import React from "react";
import { cn } from "./utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div
        className={cn(
          "h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent",
          className
        )}
      />
    </div>
  );
}
