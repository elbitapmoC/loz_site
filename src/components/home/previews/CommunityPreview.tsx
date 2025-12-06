import React from "react";
import { Share2, Users } from "lucide-react";

export function CommunityPreview() {
  return (
    <div className="w-full h-full p-4 bg-card">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-foreground dark:text-white">
            Community Connections
          </div>
          <Share2 className="w-4 h-4 text-primary" />
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 bg-primary/10 dark:bg-primary/20">
                <span className="text-primary text-xs font-medium">
                  LOZ
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-card"></div>
            </div>
            <span className="text-[10px]">Main</span>
          </div>

          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 bg-muted/50 dark:bg-background/60">
                <span className="text-muted-foreground text-xs">
                  C{i}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground">
                L{i}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-lg bg-muted/50 dark:bg-background/60">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary/10 dark:bg-primary/20">
              <Users className="w-3 h-3 text-primary" />
            </div>
            <div className="text-xs font-medium">
              Upcoming Meetups
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px]">
                Sabbath Service
              </span>
              <span className="text-[10px] text-primary">
                Saturday
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px]">Bible Study</span>
              <span className="text-[10px] text-primary">
                Wednesday
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
