
import React, { useState, useEffect } from "react";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarHeader } from "./CalendarHeader";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import {
  Moon,
  Calendar as CalendarIcon,
  MapPin,
  Star,
  Sunrise,
  Map,
  Info,
  ChevronDown,
  Printer,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { PrintableCalendar } from "./PrintableCalendar";
import { preparePrint } from "../utils/printUtils";

export function CalendarFlyer() {
  // State to track which event is currently open
  const [openEventId, setOpenEventId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile based on window width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint in tailwind
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Combined data for all events
  const allEvents = [
    // New Moons
    {
      id: "nm-2025-06-24",
      date: "2025-06-24",
      title: "New Moon #4",
      type: "new-moon",
    },
    {
      id: "nm-2025-07-23",
      date: "2025-07-23",
      title: "New Moon #5",
      type: "new-moon",
    },
    {
      id: "nm-2025-08-22",
      date: "2025-08-22",
      title: "New Moon #6",
      type: "new-moon",
    },
    {
      id: "nm-2025-09-20",
      date: "2025-09-20",
      title: "New Moon #7",
      description:
        "BIG New MOON - Memorial Blowing of The Trumpets",
      type: "new-moon",
    },
    {
      id: "nm-2025-10-20",
      date: "2025-10-20",
      title: "New Moon #8",
      type: "new-moon",
    },
    {
      id: "nm-2025-11-19",
      date: "2025-11-19",
      title: "New Moon #9",
      type: "new-moon",
    },
    {
      id: "nm-2025-12-18",
      date: "2025-12-18",
      title: "New Moon #10",
      type: "new-moon",
    },
    {
      id: "nm-2026-01-17",
      date: "2026-01-17",
      title: "New Moon #11",
      type: "new-moon",
    },
    {
      id: "nm-2026-02-16",
      date: "2026-02-16",
      title: "New Moon #12",
      description: "Month of Nadar",
      type: "new-moon",
    },
    {
      id: "nm-2026-04-16",
      date: "2026-04-16",
      title: "New Moon #2",
      type: "new-moon",
    },
    {
      id: "nm-2026-05-15",
      date: "2026-05-15",
      title: "New Moon #3",
      type: "new-moon",
    },
    {
      id: "nm-2026-06-14",
      date: "2026-06-14",
      title: "New Moon #4",
      type: "new-moon",
    },
    {
      id: "nm-2026-07-13",
      date: "2026-07-13",
      title: "New Moon #5",
      type: "new-moon",
    },
    {
      id: "nm-2026-08-11",
      date: "2026-08-11",
      title: "New Moon #6",
      type: "new-moon",
    },
    {
      id: "nm-2026-09-10",
      date: "2026-09-10",
      title: "New Moon #7",
      description:
        "BIG New MOON - Memorial Blowing of The Trumpets",
      type: "new-moon",
    },
    {
      id: "nm-2026-10-09",
      date: "2026-10-09",
      title: "New Moon #8",
      type: "new-moon",
    },
    {
      id: "nm-2026-11-08",
      date: "2026-11-08",
      title: "New Moon #9",
      type: "new-moon",
    },
    {
      id: "nm-2026-12-08",
      date: "2026-12-08",
      title: "New Moon #10",
      type: "new-moon",
    },

    // High Holy Days
    {
      id: "hd-2025-06-08",
      date: "2025-06-08",
      title: "Feast of Weeks/Pentecost",
      type: "holy-day",
    },
    {
      id: "hd-2025-09-29",
      date: "2025-09-29",
      title: "YOM Kippur/The Day of Atonement",
      type: "holy-day",
    },
    {
      id: "hd-2025-10-04",
      date: "2025-10-04",
      title: "Sukkot/Feast of Tabernacles",
      description: "October 4-11, 2025",
      type: "holy-day",
    },
    {
      id: "hd-2025-12-13",
      date: "2025-12-13",
      title: "Hanukkah Begins",
      type: "holy-day",
    },
    {
      id: "hd-2025-12-20",
      date: "2025-12-20",
      title: "Hanukkah Closing",
      type: "holy-day",
    },
    { 
      id: "hd-2026-02-27", 
      date: "2026-02-27", 
      title: "Nicanor", 
      type: "holy-day" 
    },
    {
      id: "hd-2026-02-28",
      date: "2026-02-28",
      title: "Purim Opening",
      type: "holy-day",
    },
    {
      id: "hd-2026-03-01",
      date: "2026-03-01",
      title: "Purim Closing",
      type: "holy-day",
    },
    {
      id: "hd-2026-03-18",
      date: "2026-03-18",
      title: "Month of ABIB/New Year's",
      type: "holy-day",
    },
    {
      id: "hd-2026-03-31",
      date: "2026-03-31",
      title: "Passover",
      description: "Feast of Unleavened Bread/Passover Opening",
      type: "holy-day",
    },
    {
      id: "hd-2026-04-06",
      date: "2026-04-06",
      title: "Feast of Unleavened Breads Closing",
      type: "holy-day",
    },
    {
      id: "hd-2026-05-06",
      date: "2026-05-06",
      title: "Day of Simon",
      type: "holy-day",
    },
    {
      id: "hd-2026-05-10",
      date: "2026-05-10",
      title: "Pentecost/Feast of Weeks",
      type: "holy-day",
    },
    {
      id: "hd-2026-09-19",
      date: "2026-09-19",
      title: "YOM Kippur/The Day of Atonement",
      type: "holy-day",
    },

    // Fasting days
    {
      id: "fd-2025-07-08",
      date: "2025-07-08",
      title: "FAST #1",
      description: "Morning to EVENING",
      type: "fast",
    },
    {
      id: "fd-2025-07-31",
      date: "2025-07-31",
      title: "FAST #2",
      description: "EVENING to EVENING",
      type: "fast",
    },
    {
      id: "fd-2025-09-14",
      date: "2025-09-14",
      title: "FAST #3",
      description: "EVENING to EVENING",
      type: "fast",
    },
    {
      id: "fd-2025-12-28",
      date: "2025-12-28",
      title: "FAST #4",
      description: "MORNING to EVENING",
      type: "fast",
    },
    {
      id: "fd-2026-06-28",
      date: "2026-06-28",
      title: "FAST #1",
      description: "Morning to Evening",
      type: "fast",
    },
    {
      id: "fd-2026-07-21",
      date: "2026-07-21",
      title: "FAST #2",
      description: "EVENING to EVENING",
      type: "fast",
    },
    {
      id: "fd-2026-09-03",
      date: "2026-09-03",
      title: "FAST #3",
      description: "EVENING to EVENING",
      type: "fast",
    },
    {
      id: "fd-2026-12-19",
      date: "2026-12-19",
      title: "FAST #4",
      description: "MORNING to EVENING",
      type: "fast",
    },
  ];

  // Toggle function for opening/closing events
  const toggleEvent = (eventId: string) => {
    if (openEventId === eventId) {
      setOpenEventId(null); // Close if already open
    } else {
      setOpenEventId(eventId); // Open the clicked event, closing any other
    }
  };
  
  // Handle print action
  const handlePrint = () => {
    preparePrint();
  };

  // Location data structured for better organization
  const locations = [
    {
      region: "Florida",
      places: [
        "Broward",
        "Treasure Coast",
        "Lee County",
        "Miami",
        "Highlands County",
        "Palm Beach County",
      ],
    },
    {
      region: "International",
      places: ["Haiti"],
    },
  ];

  // Current date (May 27, 2025 as specified)
  const currentDate = new Date("2025-05-27");

  // Filter events based on whether they are upcoming or past
  const upcomingEvents = allEvents.filter(
    (event) => new Date(event.date) >= currentDate,
  );
  const pastEvents = allEvents.filter(
    (event) => new Date(event.date) < currentDate,
  );

  // Sort all events chronologically
  const sortedEvents = [...allEvents].sort(
    (a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  // Format the date string in a readable format
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

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

  // Count upcoming events by type
  const upcomingNewMoonCount = upcomingEvents.filter(
    (event) => event.type === "new-moon",
  ).length;
  const upcomingHolyDayCount = upcomingEvents.filter(
    (event) => event.type === "holy-day",
  ).length;
  const upcomingFastCount = upcomingEvents.filter(
    (event) => event.type === "fast",
  ).length;

  // Mobile info cards
  const InfoCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8" style={{ gridAutoRows: "1fr" }}>
      {/* Upcoming Events Card */}
      <Card className="overflow-hidden">
        <div className="p-4 bg-gradient-to-br from-blue-500/5 to-amber-500/5 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <CalendarIcon className="h-4 w-4 text-amber-400" />
            <h4>Upcoming Events</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-blue-400" />
                <span className="text-sm">New Moons</span>
              </div>
              <span className="text-sm font-semibold">{upcomingNewMoonCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                <span className="text-sm">Holy Days</span>
              </div>
              <span className="text-sm font-semibold">{upcomingHolyDayCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sunrise className="h-4 w-4 text-purple-400" />
                <span className="text-sm">Fasting Days</span>
              </div>
              <span className="text-sm font-semibold">{upcomingFastCount}</span>
            </div>
          </div>
          <div className="mt-auto pt-3 text-center">
            <p className="text-xs text-muted-foreground">
              {upcomingEvents.length} upcoming events out of {allEvents.length} total
            </p>
          </div>
        </div>
      </Card>

      {/* Scripture Card */}
      <Card className="overflow-hidden">
        <div className="p-4 bg-gradient-to-br from-blue-500/5 to-amber-500/5 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Info className="h-4 w-4 text-amber-400" />
            <h4>Scripture</h4>
          </div>
          <div className="flex items-center justify-center flex-1">
            <p className="text-xs text-muted-foreground text-center italic">
              "This month shall be unto you the beginning of months: it shall be the first month of the year to you."
            </p>
          </div>
        </div>
      </Card>

      {/* Locations Card */}
      <Card className="overflow-hidden">
        <div className="p-4 bg-gradient-to-br from-blue-500/5 to-amber-500/5 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Map className="h-4 w-4 text-amber-400" />
            <h4>Our Locations</h4>
          </div>
          
          <div className="space-y-3 flex-1">
            {locations.map((region) => (
              <div key={region.region} className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-2 text-amber-400" />
                  <span className="text-sm">{region.region}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {region.places.map((place) => (
                    <Badge
                      key={place}
                      variant="outline"
                      className="text-xs py-0.5 px-2 bg-transparent border-muted-foreground/20 text-muted-foreground"
                    >
                      {place}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-3 text-center">
            <p className="text-xs text-muted-foreground">
              Contact us to find a community near you
            </p>
          </div>
        </div>
      </Card>
    </div>
  );

  // Desktop Sidebar
  const Sidebar = () => (
    <Card className="overflow-hidden sticky top-4">
      <div className="p-6 bg-gradient-to-br from-blue-500/10 to-amber-500/10">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center">
          <span className="text-white">TLOZ</span>
        </div>

        <h3 className="text-center mb-3">Sacred Calendar</h3>

        <p className="text-muted-foreground text-center text-sm mb-4">
          These High Holy Days are based on Biblical
          scripture, preserving our heritage and cultural
          traditions from generation to generation.
        </p>

        <Separator className="my-4" />

        <div>
          <h4 className="text-center mb-3">
            Upcoming Events
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4 text-blue-400" />
              <span className="text-sm flex-1">
                New Moons
              </span>
              <span className="text-sm font-semibold">
                {upcomingNewMoonCount}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-sm flex-1">
                Holy Days
              </span>
              <span className="text-sm font-semibold">
                {upcomingHolyDayCount}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sunrise className="h-4 w-4 text-purple-400" />
              <span className="text-sm flex-1">
                Fasting Days
              </span>
              <span className="text-sm font-semibold">
                {upcomingFastCount}
              </span>
            </div>
          </div>

          <div className="mt-3 text-center">
            <p className="text-xs text-muted-foreground">
              {upcomingEvents.length} upcoming events out
              of {allEvents.length} total
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        <div>
          <p className="text-xs text-muted-foreground text-center mb-4">
            "This month shall be unto you the beginning of
            months: it shall be the first month of the
            year to you."
          </p>
        </div>

        <Separator className="my-4" />

        {/* Locations Section */}
        <div className="mt-6">
          <div className="flex items-center mb-4">
            <Map className="h-4 w-4 mr-2 text-amber-400" />
            <h4 className="text-sm">Our Locations</h4>
          </div>

          <div className="space-y-5">
            {locations.map((region) => (
              <div
                key={region.region}
                className="space-y-3"
              >
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-2 text-amber-400" />
                  <span className="text-sm">
                    {region.region}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {region.places.map((place) => (
                    <Badge
                      key={place}
                      variant="outline"
                      className="text-xs py-1 px-2.5 bg-transparent border-muted-foreground/20 text-muted-foreground"
                    >
                      {place}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center text-xs text-muted-foreground">
            Contact us to find a community near you
          </div>
        </div>
      </div>
    </Card>
  );

  // Render the month groups and events - shared by both mobile and desktop
  const renderEventsContent = () => (
    <>
      {Object.entries(groupedEvents).map(
        ([yearMonth, events]) => {
          const [year, month] = yearMonth.split("-");
          const monthName = new Date(
            parseInt(year),
            parseInt(month) - 1,
          ).toLocaleString("default", { month: "long" });

          // Check if this month has any events
          if (events.length === 0) return null;

          // Determine if this month is in the past, current, or future
          const monthDate = new Date(
            parseInt(year),
            parseInt(month) - 1,
            1,
          );
          const isPastMonth =
            monthDate < currentDate &&
            monthDate.getMonth() !==
              currentDate.getMonth();

          return (
            <div key={yearMonth} className="mb-8">
              <div className={cn(
                "py-2 backdrop-blur-sm bg-gradient-to-b from-background/90 to-background/90",
                isMobile ? "sticky top-0 z-10" : ""
              )}>
                <div className="flex items-center mb-2">
                  <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                  <h3 className="text-muted-foreground">
                    {monthName} {year}
                  </h3>
                </div>
                <Separator />
              </div>

              <div className="space-y-2 mt-4">
                {events.map((event) => {
                  const eventDate = new Date(event.date);
                  const isPast = eventDate < currentDate;

                  return (
                    <CalendarEvent
                      key={event.id}
                      id={event.id}
                      date={formatDate(event.date)}
                      title={event.title}
                      description={event.description}
                      type={
                        event.type as
                          | "new-moon"
                          | "holy-day"
                          | "fast"
                      }
                      isOpen={openEventId === event.id}
                      onToggle={() => toggleEvent(event.id)}
                    />
                  );
                })}
              </div>
            </div>
          );
        },
      )}
    </>
  );

  return (
    <div className="container max-w-5xl mx-auto">
      <CalendarHeader />
      
      {/* Hidden printable version */}
      <PrintableCalendar events={allEvents} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main content area */}
        <div className="lg:col-span-9 order-2 lg:order-1">
          {/* Mobile: Show info cards */}
          {isMobile && <InfoCards />}
          
          {/* Mobile: scroll indicator moved above "All Events" heading */}
          {isMobile && (
            <div className="flex justify-center items-center mb-4 text-muted-foreground animate-bounce">
              <ChevronDown className="h-5 w-5" />
              <span className="text-xs ml-1">Scroll to view all events</span>
            </div>
          )}
          
          <div className="flex justify-between items-center mb-4">
            <h3>All Events</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {sortedEvents.length} events
              </span>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-8 flex items-center gap-1.5"
                onClick={handlePrint}
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print</span>
              </Button>
            </div>
          </div>
          
          {/* Mobile: full page scroll without fixed height ScrollArea */}
          {isMobile && (
            <div className="mb-6">
              {renderEventsContent()}
            </div>
          )}
          
          {/* Desktop: fixed height ScrollArea */}
          {!isMobile && (
            <ScrollArea className="h-[700px] pr-4">
              {renderEventsContent()}
            </ScrollArea>
          )}
        </div>

        {/* Sidebar/Info area */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          {/* Desktop: Show sidebar */}
          {!isMobile && <Sidebar />}
        </div>
      </div>
    </div>
  );
}
