
import React from "react";
import { Calendar as CalendarIcon, Moon, Star, Sunrise } from "lucide-react";

interface PrintableCalendarProps {
  events: Array<{
    id: string;
    date: string;
    title: string;
    type: "new-moon" | "holy-day" | "fast";
    description?: string;
  }>;
}

export function PrintableCalendar({ events }: PrintableCalendarProps) {
  // Sort all events chronologically
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group events by year-month for better organization
  const groupedEvents: Record<string, typeof sortedEvents> = {};

  sortedEvents.forEach((event) => {
    const date = new Date(event.date);
    const yearMonth = `${date.getFullYear()}-${date.getMonth() + 1}`;

    if (!groupedEvents[yearMonth]) {
      groupedEvents[yearMonth] = [];
    }

    groupedEvents[yearMonth].push(event);
  });

  // Format date for print view
  const formatPrintDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get icon and class for event type
  const getEventTypeDetails = (type: string) => {
    switch (type) {
      case "new-moon":
        return {
          icon: <Moon className="h-4 w-4 text-blue-400" />,
          badgeClass: "print-badge-newmoon",
          label: "New Moon"
        };
      case "holy-day":
        return {
          icon: <Star className="h-4 w-4 text-amber-400" />,
          badgeClass: "print-badge-holyday",
          label: "Holy Day"
        };
      case "fast":
        return {
          icon: <Sunrise className="h-4 w-4 text-purple-400" />,
          badgeClass: "print-badge-fast",
          label: "Fast"
        };
      default:
        return {
          icon: <CalendarIcon className="h-4 w-4" />,
          badgeClass: "",
          label: "Event"
        };
    }
  };

  return (
    <div className="print-only" style={{ display: "none" }}>
      <div className="print-header">
        <h1 className="text-2xl font-bold mb-2">THEE LIGHT OF ZION</h1>
        <h2 className="text-xl mb-6">HHD Calendar 2025-2026</h2>
        <p className="mb-2 text-muted-foreground italic">
          "So teach us to number the days, that we may apply our hearts unto wisdom."
        </p>
        
        <div className="flex justify-center gap-4 mt-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span>New Moons</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <span>Holy Days</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span>Fasting</span>
          </div>
        </div>
      </div>

      {Object.entries(groupedEvents).map(([yearMonth, monthEvents], monthIndex) => {
        const [year, month] = yearMonth.split("-");
        const monthName = new Date(
          parseInt(year),
          parseInt(month) - 1
        ).toLocaleString("default", { month: "long" });

        return (
          <div key={yearMonth} className={monthIndex > 0 && monthIndex % 6 === 0 ? "print-page-break" : ""}>
            <h3 className="font-bold border-b pb-2 mb-4">
              {monthName} {year}
            </h3>
            <div className="mb-8">
              {monthEvents.map((event) => {
                const typeDetails = getEventTypeDetails(event.type);
                
                return (
                  <div 
                    key={event.id} 
                    className="print-event flex items-start py-2 border-b border-dashed"
                  >
                    <div className="mr-4 text-right min-w-24">
                      <div className="font-medium">{formatPrintDate(event.date).split(",")[0]}</div>
                      <div className="text-sm text-muted-foreground">{new Date(event.date).getFullYear()}</div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{event.title}</span>
                        <span className={`ml-2 text-sm ${typeDetails.badgeClass}`}>
                          {typeDetails.label}
                        </span>
                      </div>
                      {event.description && (
                        <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      
      <div className="mt-12 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Thee Light of Zion. All rights reserved.</p>
        <p className="text-sm">These High Holy Days are based on Biblical scripture, preserving our heritage and cultural traditions.</p>
      </div>
    </div>
  );
}
