import React from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Calendar,
  Users,
  Bell,
  Heart
} from "lucide-react";
import { cn } from "../ui/utils";
import { motion } from "framer-motion";
import { ScripturePreview } from "./previews/ScripturePreview";
import { CalendarPreview } from "./previews/CalendarPreview";
import { NotificationsPreview } from "./previews/NotificationsPreview";
import { CommunityPreview } from "./previews/CommunityPreview";
import { MinistryPreview } from "./previews/MinistryPreview";

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
