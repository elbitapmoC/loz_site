import React from "react";
import { Calendar, Bell, Users } from "lucide-react";

export function NotificationsPreview() {
  return (
    <div className="w-full h-full p-4 bg-card">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-foreground dark:text-white">
            Recent Updates
          </div>
          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary/10 dark:bg-primary/20">
            <span className="text-primary text-[10px]">3</span>
          </div>
        </div>

        <div className="p-3 rounded-lg flex items-center gap-3 bg-muted/50 dark:bg-background/60">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/20">
            <Calendar className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <div className="text-xs font-medium">
              Pentecost Gathering
            </div>
            <div className="text-[10px] text-muted-foreground">
              2 days ago
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg flex items-center gap-3 bg-muted/50 dark:bg-background/60">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-rose-500/10 dark:bg-rose-500/20">
            <Bell className="w-4 h-4 text-rose-500" />
          </div>
          <div>
            <div className="text-xs font-medium">
              New Bible Study Series
            </div>
            <div className="text-[10px] text-muted-foreground">
              5 days ago
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg flex items-center gap-3 bg-muted/50 dark:bg-background/60">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-500/10 dark:bg-amber-500/20">
            <Users className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <div className="text-xs font-medium">
              Community Outreach
            </div>
            <div className="text-[10px] text-muted-foreground">
              1 week ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
