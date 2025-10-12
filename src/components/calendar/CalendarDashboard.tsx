import React from "react";
// 🔥 TIMEZONE FIX: Added setup event type and timezone fixes - October 3rd, 2025 - v3.0
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Calendar as CalendarIcon,
  BookOpen,
  Clock,
  Star,
  Moon,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { format } from "date-fns";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ScriptureQuote } from "../layout/ScriptureQuote";
import { motion } from "motion/react";
import { isToday, getDaysUntil } from "../../utils/dateUtils";

// Import our services
import { getEventTypeLabel } from "../../utils/tlozEventService";
import { useCalendarData } from "../../hooks/useCalendarData";

// Event type configuration with proper icon imports
export const eventTypeColors = {
  "new-moon": {
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    border: "border-indigo-200 dark:border-indigo-800",
    text: "text-indigo-900 dark:text-indigo-200",
    icon: Moon,
    label: "New Moon",
    accent: "accent-indigo-500",
  },
  "holy-day": {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-900 dark:text-amber-200",
    icon: Star,
    label: "Holy Day",
    accent: "accent-amber-500",
  },
  fast: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-900 dark:text-red-200",
    icon: Clock,
    label: "Fasting Day",
    accent: "accent-red-500",
  },
  sabbath: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-900 dark:text-blue-200",
    icon: CalendarIcon,
    label: "Sabbath",
    accent: "accent-blue-500",
  },
  setup: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-900 dark:text-purple-200",
    icon: Clock,
    label: "Setup Day",
    accent: "accent-purple-500",
  },
};

// Helper function to get event configuration
function getEventConfig(type: string) {
  const config =
    eventTypeColors[type as keyof typeof eventTypeColors];
  return config || eventTypeColors["sabbath"];
}

export function CalendarDashboard() {
  const navigate = useNavigate();
  const {
    currentTorahPortion,
    nextEvent,
    isShabbat,
    daysUntilSabbath,
    isLoading,
    error,
  } = useCalendarData();

  const onNavigateToEvents = () => {
    navigate('/events');
  };

  const onNavigateToTorahPortions = () => {
    console.log("Navigate to Torah portions");
  };

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upcoming Holy Days & Shabbat Portions
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
        {/* Next Observance Card */}
        <Card className="h-full">
        

          <CardContent className="space-y-6 lg:space-y-0 lg:flex lg:flex-col lg:justify-between lg:h-full">
            {/* Sabbath Display */}
            <div className="text-center space-y-4">
              <div className="p-4 mt-6 bg-primary/10 rounded-lg border border-primary/20">
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-primary">
                    We will be at KOA for Shabbat and Tabernacles
                  </div>
                  <div className="text-base font-medium">
                    Join us for Sukkot/Feast of Tabernacles
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground mb-1">Setup</div>
                      <div className="font-semibold">October 3rd</div>
                      <div className="text-sm text-muted-foreground">Before sundown</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground mb-1">Celebration</div>
                      <div className="font-semibold">October 4th - 11th</div>
                      <div className="text-sm text-muted-foreground">Sukkot Festival</div>
                    </div>
                  </div>
                </div>
              </div>              
            </div>

            {/* Next Special Event */}
            {nextEvent && (
              <div className="p-4 bg-card">
                <div className="text-center space-y-2 relative p-6 before:absolute before:inset-0 before:animate-pulse before:-z-10">
                  {nextEvent ? (
                    <>
                      <div className="text-sm font-medium text-muted-foreground">
                        Next Special Event
                      </div>
                      <div className="font-medium text-4xl ">
                        {nextEvent.title}
                      </div>
                      <div className="text-xl font-bold text-primary">
                        {format(new Date(nextEvent.date + 'T12:00:00'), "MMM d")} {format(new Date(nextEvent.date + 'T12:00:00'), "EEEE, yyyy")}
                      </div>    
                    </>
                  ) : (
                    <>
                      <div className="text-sm font-medium text-muted-foreground">
                        Next Special Event
                      </div>
                      <div className="font-medium text-2xl text-muted-foreground">
                        Loading event information...
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="pt-4 border-t space-y-3">
              
              <Button
                onClick={onNavigateToEvents}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                View All Events
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Torah Portion Card */}
        <Card className="h-full relative lg:flex lg:flex-col lg:justify-between">
          <CardHeader className="text-center pb-3">
            <div className="flex items-center justify-center gap-2 text-primary mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wide">
                Current Torah Portion
              </span>
            </div>
            <CardTitle className="text-xl">
              {currentTorahPortion?.portion || "Ha'Azinu"}
            </CardTitle>
            <div className="text-base text-muted-foreground font-serif">
              {currentTorahPortion?.hebrewName || "האזינו"}
            </div>
            <div className="text-xs text-muted-foreground italic">
              "
              {currentTorahPortion?.meaning ||
                "Give ear / Listen"}
              "
            </div>
          </CardHeader>

          <CardContent className="space-y-3 lg:space-y-0 lg:flex lg:flex-col lg:justify-between lg:flex-1">
            {/* Section 2: Scripture Readings */}
            <div className="space-y-3">
              {/* Reading Cards - Compact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="p-3 bg-muted/80 rounded-md">
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    Torah
                  </div>
                  <div className="text-sm font-medium">
                    {currentTorahPortion?.torah ||
                      "Deuteronomy 32:1-52"}
                  </div>
                </div>

                <div className="p-3 bg-muted/80 dark:bg-secondary/20 rounded-md">
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    Prophets
                  </div>
                  <div className="text-sm font-medium">
                    {currentTorahPortion?.prophets ||
                      "2 Samuel 22:1-51"}
                  </div>
                </div>

                <div className="p-3 bg-muted/80 rounded-md md:col-span-2">
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    Gospel
                  </div>
                  <div className="text-sm font-medium">
                    {currentTorahPortion?.gospel ||
                      "John 6:26-35"}
                  </div>
                </div>
              </div>

              {(currentTorahPortion?.theme || true) && (
                <div className="p-2 sm:p-3 bg-primary/5 rounded-md border border-primary/20">
                  <div className="text-xs font-medium text-primary mb-1">
                    Theme
                  </div>
                  <div className="text-xs text-muted-foreground break-words">
                    {currentTorahPortion?.theme ||
                      "Moses' final song and witness to Israel"}
                  </div>
                </div>
              )}
            </div>
            
            {/* Section 3: Action Button */}
            <div className="pt-4 border-t">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Link to="/learn/shabbat">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View All Shabbat Portions
                </Link>
              </Button>
            </div>
            
            <Badge variant="outline" className="absolute top-2 left-2 text-xs z-10">
                Parsha {currentTorahPortion?.parsha || 53} of 54
              </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}