import React from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Calendar,
  Users,
  Music,
  MapPin,
  Heart,
  Bell,
  Share2,
  CheckSquare,
} from "lucide-react";
import { cn } from "../ui/utils";
import { useTheme } from "../providers/ThemeProvider";
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
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const features: FeatureProps[] = [
    {
      title: "Biblical Truth",
      description:
        "Discover the heritage of the Israelites and learn about your ancestry through scripture.",
      path: "/learn",
      icon: <Book className="w-6 h-6" />,
      preview: <ScripturePreview isDark={isDark} />,
      className: "md:col-span-6 lg:col-span-4",
    },
    {
      title: "Holy Days Calendar",
      description:
        "Access our biblical holy days calendar with accurate new moon calculations.",
      path: "/calendar",
      icon: <Calendar className="w-6 h-6" />,
      preview: <CalendarPreview isDark={isDark} />,
      className: "md:col-span-6 lg:col-span-4",
    },
    {
      title: "Community Events",
      description:
        "Stay notified about community events, gatherings, and important announcements.",
      path: "/events",
      icon: <Bell className="w-6 h-6" />,
      preview: <NotificationsPreview isDark={isDark} />,
      className: "md:col-span-6 lg:col-span-4",
    },
    {
      title: "Community Connections",
      description:
        "Join our community of believers walking in the commandments of the Most High.",
      path: "/about",
      icon: <Users className="w-6 h-6" />,
      preview: <CommunityPreview isDark={isDark} />,
      className: "md:col-span-6",
    },
    {
      title: "Ministry Resources",
      description:
        "Access outreach materials and resources for helping others in the community.",
      path: "/ministries",
      icon: <Heart className="w-6 h-6" />,
      preview: <MinistryPreview isDark={isDark} />,
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
                className={cn(
                  "h-full rounded-2xl border overflow-hidden",
                  isDark
                    ? "bg-card border-primary/20 shadow-lg shadow-primary/5"
                    : "bg-card border-primary/10 shadow-xl shadow-primary/5",
                )}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={cn(
                        "p-3 rounded-lg",
                        isDark
                          ? "bg-primary/10"
                          : "bg-primary/5",
                      )}
                    >
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div
                      className={cn(
                        "text-xs py-1 px-3 rounded-full",
                        isDark
                          ? "bg-primary/20 text-primary-foreground"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      Explore
                    </div>
                  </div>

                  <h3
                    className={cn(
                      "text-xl font-semibold mb-2",
                      isDark ? "text-white" : "text-foreground",
                    )}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={cn(
                      "mb-6",
                      isDark
                        ? "text-white/80"
                        : "text-foreground/80",
                    )}
                  >
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

function ScripturePreview({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={cn(
        "w-full h-full p-4",
        isDark ? "bg-card" : "bg-card",
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "w-6 h-6 rounded flex items-center justify-center",
              isDark ? "bg-primary/20" : "bg-primary/10",
            )}
          >
            <Book className="w-3.5 h-3.5 text-primary" />
          </div>
          <div
            className={cn(
              "text-xs font-medium",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            Scripture Study
          </div>
        </div>

        <div
          className={cn(
            "p-3 rounded-lg",
            isDark ? "bg-background/60" : "bg-muted/50",
          )}
        >
          <p className="text-xs font-serif italic">
            "Hear, O Israel: The LORD our God, the LORD is one.
            Love the LORD your God with all your heart and with
            all your soul and with all your strength."
          </p>
          <div className="mt-1 text-xs text-primary font-medium">
            Deuteronomy 6:4-5
          </div>
        </div>

        <div
          className={cn(
            "p-3 rounded-lg",
            isDark ? "bg-background/60" : "bg-muted/50",
          )}
        >
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

function CalendarPreview({ isDark }: { isDark: boolean }) {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div
      className={cn(
        "w-full h-full p-4",
        isDark ? "bg-card" : "bg-card",
      )}
    >
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div
            className={cn(
              "text-xs font-medium",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            June 2025
          </div>
          <div className="flex gap-1">
            <div
              className={cn(
                "w-5 h-5 rounded flex items-center justify-center",
                isDark ? "bg-primary/20" : "bg-primary/10",
              )}
            >
              <span className="text-primary text-xs">&lt;</span>
            </div>
            <div
              className={cn(
                "w-5 h-5 rounded flex items-center justify-center",
                isDark ? "bg-primary/20" : "bg-primary/10",
              )}
            >
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
                  ? isDark
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary text-primary-foreground"
                  : isDark
                    ? "text-white hover:bg-primary/20"
                    : "text-foreground hover:bg-primary/10",
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-2 p-2 rounded-lg text-xs flex items-center gap-2",
            isDark ? "bg-primary/20" : "bg-primary/10",
          )}
        >
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span
            className={
              isDark ? "text-white" : "text-foreground"
            }
          >
            New Moon Festival
          </span>
        </div>
      </div>
    </div>
  );
}

function NotificationsPreview({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={cn(
        "w-full h-full p-4",
        isDark ? "bg-card" : "bg-card",
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "text-xs font-medium",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            Recent Updates
          </div>
          <div
            className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center",
              isDark ? "bg-primary/20" : "bg-primary/10",
            )}
          >
            <span className="text-primary text-[10px]">3</span>
          </div>
        </div>

        <div
          className={cn(
            "p-3 rounded-lg flex items-center gap-3",
            isDark ? "bg-background/60" : "bg-muted/50",
          )}
        >
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isDark ? "bg-blue-500/20" : "bg-blue-500/10",
            )}
          >
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

        <div
          className={cn(
            "p-3 rounded-lg flex items-center gap-3",
            isDark ? "bg-background/60" : "bg-muted/50",
          )}
        >
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isDark ? "bg-rose-500/20" : "bg-rose-500/10",
            )}
          >
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

        <div
          className={cn(
            "p-3 rounded-lg flex items-center gap-3",
            isDark ? "bg-background/60" : "bg-muted/50",
          )}
        >
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isDark ? "bg-amber-500/20" : "bg-amber-500/10",
            )}
          >
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

function CommunityPreview({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={cn(
        "w-full h-full p-4",
        isDark ? "bg-card" : "bg-card",
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "text-xs font-medium",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            Community Connections
          </div>
          <Share2 className="w-4 h-4 text-primary" />
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-1",
                  isDark ? "bg-primary/20" : "bg-primary/10",
                )}
              >
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
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-1",
                  isDark ? "bg-background/60" : "bg-muted/50",
                )}
              >
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

        <div
          className={cn(
            "p-3 rounded-lg",
            isDark ? "bg-background/60" : "bg-muted/50",
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center",
                isDark ? "bg-primary/20" : "bg-primary/10",
              )}
            >
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

function MinistryPreview({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={cn(
        "w-full h-full p-4",
        isDark ? "bg-card" : "bg-card",
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-1">
          <div
            className={cn(
              "text-xs font-medium",
              isDark ? "text-white" : "text-foreground",
            )}
          >
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
              className={cn(
                "flex items-center gap-2 p-2 rounded-lg",
                isDark ? "bg-background/60" : "bg-muted/50",
              )}
            >
              <div
                className={cn(
                  "w-4 h-4 rounded flex items-center justify-center",
                  item.done
                    ? isDark
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary text-primary-foreground"
                    : isDark
                      ? "border border-primary/40"
                      : "border border-primary/40",
                )}
              >
                {item.done && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 5L4.16667 6.66667L7.5 3.33333"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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

        <div
          className={cn(
            "mt-2 p-2 rounded-lg flex items-center justify-between",
            isDark ? "bg-primary/20" : "bg-primary/10",
          )}
        >
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