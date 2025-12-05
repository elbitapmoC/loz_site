import React from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Calendar,
  Users,
  Bell,
  Share2,
  CheckSquare,
  Check,
  Heart
} from "lucide-react";
import { cn } from "../ui/utils";
import { motion } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  preview: React.ReactNode;
  className?: string;
}

export function EnhancedFeatureGrid() {
  const features: FeatureProps[] = [
    {
      title: "Biblical Truth",
      description:
        "Discover the heritage of the Israelites and learn about your ancestry through scripture.",
      path: "/learn",
      icon: <Book className="w-6 h-6" />,
      preview: <ScripturePreview />,
      className: "md:col-span-6 lg:col-span-4",
    },
    {
      title: "Holy Days Calendar",
      description:
        "Access our biblical holy days calendar with accurate new moon calculations.",
      path: "/calendar",
      icon: <Calendar className="w-6 h-6" />,
      preview: <CalendarPreview />,
      className: "md:col-span-6 lg:col-span-4",
    },
    {
      title: "Community Events",
      description:
        "Stay notified about community events, gatherings, and important announcements.",
      path: "/events",
      icon: <Bell className="w-6 h-6" />,
      preview: <NotificationsPreview />,
      className: "md:col-span-6 lg:col-span-4",
    },
    {
      title: "Community Connections",
      description:
        "Join our community of believers walking in the commandments of the Most High.",
      path: "/about",
      icon: <Users className="w-6 h-6" />,
      preview: <CommunityPreview />,
      className: "md:col-span-6",
    },
    {
      title: "Ministry Resources",
      description:
        "Access outreach materials and resources for helping others in the community.",
      path: "/ministries",
      icon: <Heart className="w-6 h-6" />,
      preview: <MinistryPreview />,
      className: "md:col-span-6",
    },
  ];

  return (
    <section className="pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Explore Our Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-md mb-6">
            We're Here For You
          </h2>
          <p className="text-lg text-muted-foreground">
            Our community offers resources to help you
            understand your heritage and walk according to the
            commandments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <Link
              to={feature.path}
              key={index}
              className={cn("group", feature.className)}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-2xl border overflow-hidden bg-card border-primary/10 shadow-xl shadow-primary/5 dark:border-primary/20"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-lg bg-primary/5 dark:bg-primary/10">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="text-xs py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                      Explore
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mb-6 text-foreground/80 dark:text-white/80">
                    {feature.description}
                  </p>

                  <div className="mt-4 relative h-[180px] overflow-hidden rounded-lg border">
                    {feature.preview}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Preview Components

function ScripturePreview() {
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

function CalendarPreview() {
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

function NotificationsPreview() {
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

function CommunityPreview() {
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

function MinistryPreview() {
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
