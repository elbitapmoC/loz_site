import React from "react";
import { motion } from "framer-motion";
import { cn } from "../ui/utils";
import { useTheme } from "../providers/ThemeProvider";
import {
  BookOpen,
  Heart,
  Users,
  Compass,
  Sun,
  Moon,
  Calendar,
  Music,
} from "lucide-react";

interface CoreValueProps {
  variant?: "icons" | "cards" | "minimal" | "scripture";
  className?: string;
}

export function CoreValues({
  variant = "icons",
  className,
}: CoreValueProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Core values data
  const values = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      name: "Biblical Integrity",
      description: "Scripture-based teaching and living",
      scripture: "John 8:32",
      verseText:
        "And ye shall know the truth, and the truth shall make you free.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      name: "Heritage",
      description: "Embracing our Israelite roots",
      scripture: "Deuteronomy 32:7",
      verseText:
        "Remember the days of old, consider the years of many generations.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      name: "Community",
      description: "Growing together in unity",
      scripture: "Psalm 133:1",
      verseText:
        "Behold, how good and how pleasant it is for brethren to dwell together in unity!",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      name: "Guidance",
      description: "Walking in the light of the Most High",
      scripture: "Psalm 119:105",
      verseText:
        "Thy word is a lamp unto my feet, and a light unto my path.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      name: "Holy Days",
      description: "Observing the biblical calendar",
      scripture: "Leviticus 23:2",
      verseText:
        "The feasts of the LORD, which ye shall proclaim to be holy convocations.",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      name: "Sabbath",
      description: "Honoring the day of rest",
      scripture: "Exodus 20:8",
      verseText: "Remember the sabbath day, to keep it holy.",
    },
    {
      icon: <Music className="h-6 w-6" />,
      name: "Worship",
      description: "Praising with joyful hearts",
      scripture: "Psalm 150:6",
      verseText:
        "Let every thing that hath breath praise the LORD. Praise ye the LORD.",
    },
    {
      icon: <Moon className="h-6 w-6" />,
      name: "New Moons",
      description: "Celebrating new beginnings",
      scripture: "Isaiah 66:23",
      verseText:
        "From one New Moon to another... all mankind will come to worship before me.",
    },
  ];

  // Render different variants
  const renderVariant = () => {
    switch (variant) {
      case "cards":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.slice(0, 4).map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={cn(
                  "p-6 rounded-xl theme-aware border",
                  "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  isDark
                    ? "bg-primary/5 border-primary/20 hover:bg-primary/10"
                    : "bg-primary/5 border-primary/10 hover:bg-primary/10",
                )}
              >
                <div
                  className={cn(
                    "mb-4 p-3 rounded-full inline-flex",
                    isDark
                      ? "bg-primary/20 text-primary"
                      : "bg-primary/20 text-primary",
                  )}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">
                  {value.name}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        );

      case "minimal":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {values.slice(0, 4).map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span
                  className={cn(
                    "text-xl font-serif font-medium inline-block relative",
                    "after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-primary/60",
                    "after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2",
                  )}
                >
                  {value.name}
                </span>
              </motion.div>
            ))}
          </div>
        );

      case "scripture":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.slice(0, 4).map((value, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={cn(
                  "p-5 rounded-lg border theme-aware",
                  isDark
                    ? "border-primary/20"
                    : "border-primary/20",
                )}
              >
                <div className="flex gap-4">
                  <div
                    className={cn(
                      "p-2 h-10 w-10 rounded-full flex items-center justify-center shrink-0",
                      isDark
                        ? "bg-primary/20 text-primary"
                        : "bg-primary/20 text-primary",
                    )}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">
                      {value.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {value.description}
                    </p>
                    <blockquote
                      className={cn(
                        "pl-3 border-l-2 italic text-sm",
                        isDark
                          ? "border-primary/40 text-foreground/80"
                          : "border-primary/40 text-foreground/80",
                      )}
                    >
                      "{value.verseText}"{" "}
                      <cite className="text-primary font-medium not-italic">
                        —{value.scripture}
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      // Default "icons" variant
      default:
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {values.slice(0, 4).map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div
                    className={cn(
                      "p-3 rounded-full",
                      isDark
                        ? "bg-primary/20 text-primary"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    {value.icon}
                  </div>
                </div>
                <p className="font-serif font-medium text-lg">
                  {value.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        );
    }
  };

  return (
    <>
      <h2 className="text-foreground/80 text-3xl md:text-4xl mb-6">
        What makes us different?
      </h2>
      <div className={cn("py-6", className)}>
        {renderVariant()}
      </div>
    </>
  );
}