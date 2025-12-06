import React from "react";
import { Book } from "lucide-react";

export function ScripturePreview() {
  return (
    <div className="w-full h-full p-4 bg-card">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded flex items-center justify-center bg-primary/10 dark:bg-primary/20">
            <Book className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="text-xs font-medium text-foreground dark:text-white">
            Scripture Study
          </div>
        </div>

        <div className="p-3 rounded-lg bg-muted/50 dark:bg-background/60">
          <p className="text-xs font-serif italic">
            "Hear, O Israel: The LORD our God, the LORD is one.
            Love the LORD your God with all your heart and with
            all your soul and with all your strength."
          </p>
          <div className="mt-1 text-xs text-primary font-medium">
            Deuteronomy 6:4-5
          </div>
        </div>

        <div className="p-3 rounded-lg bg-muted/50 dark:bg-background/60">
          <p className="text-xs font-serif italic">
            "Remember the Sabbath day, to keep it holy. Six days
            you shall labor, and do all your work..."
          </p>
          <div className="mt-1 text-xs text-primary font-medium">
            Exodus 20:8-9
          </div>
        </div>
      </div>
    </div>
  );
}
