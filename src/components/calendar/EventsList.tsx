import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { eventTypeColors } from "./CalendarDashboard";
import { Badge } from "../ui/badge";
import { Calendar, CalendarDays, Clock, Star, Moon } from "lucide-react";
import { format, isAfter, startOfDay } from "date-fns";
import { motion } from "motion/react";
import { useCalendarData } from "../../hooks/useCalendarData";

export function EventsList() {
  const { allEvents, isLoading, error } = useCalendarData();

  // Filter for upcoming events (today and future)
  const upcomingEvents = React.useMemo(() => {
    if (!allEvents) return [];
    const today = startOfDay(new Date());
    return allEvents
      .filter(event => {
        const eventDate = startOfDay(new Date(event.date));
        return isAfter(eventDate, today) || eventDate.getTime() === today.getTime();
      })
      .slice(0, 20); // Show next 20 events
  }, [allEvents]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'new-moon': return <Moon className="h-4 w-4" />;
      case 'holy-day': return <Star className="h-4 w-4" />;
      case 'fast': return <Clock className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getEventConfig = (type: string) => {
    return eventTypeColors[type as keyof typeof eventTypeColors] || eventTypeColors['sabbath'];
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading events...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-destructive mb-2">Error loading events</p>
          <p className="text-sm text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {upcomingEvents.map((event, index) => {
        const config = getEventConfig(event.type);
        
        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg ${config.bg}`}>
                    {getEventIcon(event.type)}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {config.label}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{format(new Date(event.date), "EEEE, MMMM d, yyyy")}</span>
                </div>
                
                {event.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                )}
                
                {event.location && (
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="h-4 w-4 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 bg-muted-foreground/60 rounded-full"></div>
                    </div>
                    <span>{event.location}</span>
                  </div>
                )}
                
                {event.time && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
      
      {upcomingEvents.length === 0 && (
        <div className="col-span-full">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <h4 className="font-medium text-muted-foreground mb-2">No upcoming events</h4>
              <p className="text-sm text-muted-foreground/70">
                No sacred appointments scheduled at this time.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}