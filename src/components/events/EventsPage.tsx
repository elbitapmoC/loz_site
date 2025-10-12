import React, { useState, useEffect } from "react";
// 🔥 TIMEZONE FIX: Fixed date parsing to prevent off-by-1 errors - October 3rd, 2025 - v3.0
import { motion } from "motion/react";
import { Calendar, ChevronLeft, ChevronRight, Moon, Star, Clock, Calendar as CalendarIcon, X, Grid3X3, List, Filter, Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { 
  tlozEventService
} from "../../utils/tlozEventService";
import { CalendarEventData } from "../../utils/eventService";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isAfter, startOfDay, isToday, startOfWeek, endOfWeek, isBefore } from "date-fns";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";

// Event type configuration for UI
const eventTypeColors = {
  "new-moon": {
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    border: "border-indigo-200 dark:border-indigo-800",
    text: "text-indigo-900 dark:text-indigo-200",
    icon: "Moon",
    label: "New Moon",
    accent: "accent-indigo-500"
  },
  "holy-day": {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-900 dark:text-amber-200",
    icon: "Star",
    label: "Holy Day",
    accent: "accent-amber-500"
  },
  "fast": {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-900 dark:text-red-200",
    icon: "Clock",
    label: "Fasting Day",
    accent: "accent-red-500"
  },
  "sabbath": {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-900 dark:text-blue-200",
    icon: "Calendar",
    label: "Sabbath",
    accent: "accent-blue-500"
  },
  "setup": {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-900 dark:text-purple-200",
    icon: "Clock",
    label: "Setup Day",
    accent: "accent-purple-500"
  }
};

// Enhanced event titles and Hebrew names mapping
const eventEnhancements: Record<string, { hebrewName?: string; enhancedTitle?: string }> = {
  "New Moon #4": { hebrewName: "רֹאשׁ חֹדֶשׁ תַּמּוּז", enhancedTitle: "New Moon of Tammuz" },
  "New Moon #5": { hebrewName: "רֹאשׁ חֹדֶשׁ אָב", enhancedTitle: "New Moon of Av" },
  "New Moon #6": { hebrewName: "רֹאשׁ חֹדֶשׁ אֱלוּל", enhancedTitle: "New Moon of Elul" },
  "New Moon #7 - BIG New MOON": { hebrewName: "רֹאשׁ הַשָּׁנָה", enhancedTitle: "Rosh Hashanah (Day of Trumpets)" },
  "New Moon #8": { hebrewName: "רֹאשׁ חֹדֶשׁ חֶשְׁוָן", enhancedTitle: "New Moon of Cheshvan" },
  "New Moon #9": { hebrewName: "רֹאשׁ חֹדֶשׁ כִּסְלֵו", enhancedTitle: "New Moon of Kislev" },
  "New Moon #10": { hebrewName: "רֹאשׁ חֹדֶשׁ טֵבֵת", enhancedTitle: "New Moon of Tevet" },
  "New Moon #11": { hebrewName: "רֹאשׁ חֹדֶשׁ שְׁבָט", enhancedTitle: "New Moon of Shevat" },
  "New Moon #12 - Month of Nadar": { hebrewName: "רֹאשׁ חֹדֶשׁ אֲדָר", enhancedTitle: "New Moon of Adar" },
  "New Moon #2": { hebrewName: "רֹאשׁ חֹדֶשׁ אִיָּר", enhancedTitle: "New Moon of Iyar" },
  "New Moon #3": { hebrewName: "רֹאשׁ חֹדֶשׁ סִיוָן", enhancedTitle: "New Moon of Sivan" },
  "Feast of Weeks/Pentecost": { hebrewName: "שָׁבוּעוֹת", enhancedTitle: "Shavuot (Pentecost)" },
  "YOM Kippur/The Day of Atonement": { hebrewName: "יוֹם כִּפּוּר", enhancedTitle: "Yom Kippur" },
  "Sukkot/Feast of Tabernacles Begins": { hebrewName: "סֻכּוֹת", enhancedTitle: "Sukkot (Feast of Tabernacles)" },
  "Sukkot/Feast of Tabernacles Ends": { hebrewName: "שְׁמִינִי עֲצֶרֶת", enhancedTitle: "Shemini Atzeret" },
  "Hanukkah Begins": { hebrewName: "חֲנֻכָּה", enhancedTitle: "Hanukkah (Festival of Lights)" },
  "Hanukkah Closing": { hebrewName: "זֹאת חֲנֻכָּה", enhancedTitle: "Last Day of Hanukkah" },
  "Passover/Feast of Unleavened Bread Opening": { hebrewName: "פֶּסַח", enhancedTitle: "Passover" },
  "Purim Opening": { hebrewName: "פּוּרִים", enhancedTitle: "Purim" },
  "Purim Closing": { hebrewName: "שׁוּשַׁן פּוּרִים", enhancedTitle: "Shushan Purim" },
  "Setup Day": { hebrewName: "יוֹם הֲכָנָה", enhancedTitle: "Sukkot Setup Day" }
};

// Enhanced calendar event interface
interface EnhancedCalendarEvent extends CalendarEventData {
  hebrewName?: string;
  enhancedTitle?: string;
}

export function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [eventFilter, setEventFilter] = useState<"upcoming" | "all" | "past">("upcoming");
  const [allEvents, setAllEvents] = useState<EnhancedCalendarEvent[]>([]);

  // Load events on component mount
  useEffect(() => {
    const loadEvents = async () => {
      const events = await tlozEventService.getAllEvents();
      // Enhance events with Hebrew names and better titles
      const enhancedEvents: EnhancedCalendarEvent[] = events.map(event => {
        const enhancement = eventEnhancements[event.title];
        return {
          ...event,
          hebrewName: enhancement?.hebrewName,
          enhancedTitle: enhancement?.enhancedTitle || event.title
        };
      });
      setAllEvents(enhancedEvents);
    };
    
    loadEvents();
  }, []);

  // Filter events based on selected filter and current date
  const filterEvents = (events: EnhancedCalendarEvent[]) => {
    const today = startOfDay(new Date());
    
    switch (eventFilter) {
      case "upcoming":
        return events.filter(event => {
          const eventDate = new Date(event.date + 'T12:00:00');
          return !isBefore(eventDate, today);
        });
      case "past":
        return events.filter(event => {
          const eventDate = new Date(event.date + 'T12:00:00');
          return isBefore(eventDate, today);
        });
      case "all":
      default:
        return events;
    }
  };

  // Sort events chronologically, with upcoming events first when filter is "upcoming"
  const sortEvents = (events: EnhancedCalendarEvent[]) => {
    return [...events].sort((a, b) => {
      const dateA = new Date(a.date + 'T12:00:00');
      const dateB = new Date(b.date + 'T12:00:00');
      
      if (eventFilter === "upcoming") {
        // For upcoming events, show closest dates first
        return dateA.getTime() - dateB.getTime();
      } else if (eventFilter === "past") {
        // For past events, show most recent first
        return dateB.getTime() - dateA.getTime();
      } else {
        // For all events, show upcoming first, then past
        const today = startOfDay(new Date());
        const isAUpcoming = !isBefore(dateA, today);
        const isBUpcoming = !isBefore(dateB, today);
        
        if (isAUpcoming && !isBUpcoming) return -1;
        if (!isAUpcoming && isBUpcoming) return 1;
        
        // If both are upcoming or both are past, sort chronologically
        if (isAUpcoming && isBUpcoming) {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      }
    });
  };

  const filteredEvents = filterEvents(allEvents);
  const specialEvents = sortEvents(filteredEvents);

  // Generate proper calendar grid with full weeks
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  
  // Get the start of the week that contains the first day of the month (Sunday)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  
  // Get the end of the week that contains the last day of the month (Saturday)
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  
  // Generate all days in the calendar grid (42 days = 6 weeks)
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  // Get icon for event type
  const getEventIcon = (type: string) => {
    const iconMap = {
      "new-moon": Moon,
      "holy-day": Star,
      "fast": Clock,
      "sabbath": CalendarIcon,
      "setup": Clock
    };
    return iconMap[type as keyof typeof iconMap] || CalendarIcon;
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sacred Calendar</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            View our complete calendar of biblical holy days, new moons, and sacred observances
          </p>
        </motion.div>

        {/* View Toggle and Event Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={viewMode === "calendar" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("calendar")}
              className="flex items-center gap-2"
            >
              <Grid3X3 className="w-4 h-4" />
              Calendar
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="flex items-center gap-2"
            >
              <List className="w-4 h-4" />
              List
            </Button>
          </div>

          {/* Event Filter */}
          {/* Event Filter - Only show in List view */}
          {viewMode === "list" && (
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={eventFilter} onValueChange={(value: "upcoming" | "all" | "past") => setEventFilter(value)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upcoming">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Upcoming</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="all">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>All Events</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="past">
                    <div className="flex items-center gap-2">
                      <EyeOff className="w-4 h-4" />
                      <span>Past Events</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </motion.div>

        {/* Event Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-muted-foreground">
            Showing {filteredEvents.length} {eventFilter === "upcoming" ? "upcoming" : eventFilter === "past" ? "past" : ""} events
            {eventFilter === "upcoming" && filteredEvents.length > 0 && (
              <span className="ml-2 text-primary font-medium">
                • Next: {format(new Date(filteredEvents[0].date + 'T12:00:00'), "MMM d, yyyy")}
              </span>
            )}
          </p>
        </motion.div>

        {viewMode === "calendar" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center bg-card/50 backdrop-blur-sm border rounded-lg p-1 shadow-sm">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                  className="group flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                  Previous
                </Button>
                
                <div className="h-6 w-px bg-border mx-1"></div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentDate(new Date())}
                  className="px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
                >
                  Today
                </Button>
                
                <div className="h-6 w-px bg-border mx-1"></div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                  className="group flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
                >
                  Next
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Button>
              </div>
              
              <div className="text-right">
                <h2 className="text-2xl font-semibold text-foreground">
                  {format(currentDate, "MMMM yyyy")}
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Biblical Calendar Events
                </p>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
              {/* Day headers */}
              <div className="grid grid-cols-7 bg-muted/50">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-4 text-center font-medium text-sm">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7">
                {days.map((day) => {
                  // Use all events for calendar display, not filtered events
                  const dayEvents = allEvents.filter(event => {
                    // Fix timezone issue by parsing date correctly
                    const eventDate = new Date(event.date + 'T12:00:00');
                    return isSameDay(eventDate, day);
                  });
                  const isCurrentMonth = isSameMonth(day, currentDate);
                  const isDayToday = isToday(day);
                  
                  // Check if events are past for styling
                  const today = startOfDay(new Date());
                  const hasPastEvents = dayEvents.some(event => {
                    const eventDate = new Date(event.date + 'T12:00:00');
                    return isBefore(eventDate, today);
                  });
                  const hasUpcomingEvents = dayEvents.some(event => {
                    const eventDate = new Date(event.date + 'T12:00:00');
                    return !isBefore(eventDate, today);
                  });

                  return (
                    <div
                      key={day.toString()}
                      onClick={dayEvents.length > 0 ? () => {
                        setSelectedDay(day);
                        setIsModalOpen(true);
                      } : undefined}
                      className={`
                        min-h-[120px] p-3 border-r border-b border-border/30 transition-all duration-200 
                        ${dayEvents.length > 0 ? 'cursor-pointer hover:bg-muted/50 hover:shadow-sm active:scale-[0.98]' : ''}
                        ${!isCurrentMonth ? 'text-muted-foreground bg-muted/10' : ''}
                        ${!isCurrentMonth && dayEvents.length > 0 ? 'hover:bg-muted/20' : ''}
                        ${isDayToday ? 'bg-primary/10 border-primary/30' : ''}
                        ${isDayToday && dayEvents.length > 0 ? 'hover:bg-primary/15' : ''}
                      `}
                    >
                      <div className={`text-sm font-medium mb-2 ${isDayToday ? 'text-primary' : ''}`}>
                        {format(day, 'd')}
                      </div>
                      
                      <div className="space-y-1">
                        {dayEvents.slice(0, 3).map((event, eventIdx) => {
                          const config = eventTypeColors[event.type as keyof typeof eventTypeColors];
                          const Icon = getEventIcon(event.type);
                          return (
                            <div
                              key={eventIdx}
                              className={`text-xs px-2 py-1 rounded-md ${config.bg} ${config.text} flex items-center gap-1 
                                cursor-pointer hover:opacity-80 transition-opacity duration-150 hover:scale-105 transform`}
                              title={`${event.enhancedTitle || event.title}${event.hebrewName ? ` (${event.hebrewName})` : ''} - Click for details`}
                            >
                              <Icon className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">
                                {(event.enhancedTitle || event.title).length > 12 ? (event.enhancedTitle || event.title).substring(0, 10) + '...' : (event.enhancedTitle || event.title)}
                              </span>
                            </div>
                          );
                        })}
                        {dayEvents.length > 3 && (
                          <div 
                            className="text-xs text-muted-foreground text-center py-1 cursor-pointer hover:text-foreground transition-colors"
                            title="Click to see all events for this day"
                          >
                            +{dayEvents.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {viewMode === "list" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {specialEvents.map((event, index) => {
              const config = eventTypeColors[event.type as keyof typeof eventTypeColors];
              const Icon = getEventIcon(event.type);
              // Fix timezone issue by parsing date correctly
              const eventDate = new Date(event.date + 'T12:00:00');
              const isPastEvent = eventDate < startOfDay(new Date());
              
              return (
                <Card 
                  key={event.id} 
                  className={`transition-all duration-300 hover:shadow-md ${isPastEvent ? 'opacity-60' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`p-3 rounded-lg ${config.bg} ${config.text}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{event.enhancedTitle || event.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {config.label}
                            </Badge>
                          </div>
                          {event.hebrewName && (
                            <p className="text-sm text-muted-foreground mb-2">{event.hebrewName}</p>
                          )}
                          {event.description && (
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-medium">{format(eventDate, "MMM d")}</div>
                        <div className="text-sm text-muted-foreground">{format(eventDate, "yyyy")}</div>
                        <div className="text-xs text-muted-foreground mt-1">{format(eventDate, "EEEE")}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        )}

        {/* Event Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                {selectedDay ? format(selectedDay, "EEEE, MMMM d, yyyy") : "Events"}
              </DialogTitle>
              <DialogDescription>
                View all events and observances for this day
              </DialogDescription>
            </DialogHeader>
            
            {selectedDay && (
              <div className="space-y-4">
                {allEvents
                  .filter(event => {
                    // Fix timezone issue by parsing date correctly
                    const eventDate = new Date(event.date + 'T12:00:00');
                    return isSameDay(eventDate, selectedDay);
                  })
                  .map((event, index) => {
                    const config = eventTypeColors[event.type as keyof typeof eventTypeColors];
                    const Icon = getEventIcon(event.type);
                    
                    return (
                      <div key={index} className="p-4 rounded-lg border border-border">
                        <div className="flex items-start gap-3">
                           
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-semibold">{event.enhancedTitle || event.title}</h3>
                                {event.hebrewName && (
                                  <p className="text-sm text-muted-foreground">{event.hebrewName}</p>
                                )}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {config.label}
                              </Badge>
                            </div>
                            
                            {event.description && (
                              <p className="text-sm text-muted-foreground">{event.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}