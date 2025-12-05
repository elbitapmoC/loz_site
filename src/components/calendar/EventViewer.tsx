import React from "react";
import { Card } from "../ui/card";
import { CalendarEvent, eventTypeColors, eventTypeIcons } from "./CalendarDashboard";
import { AspectRatio } from "../ui/aspect-ratio";
import { Play, Calendar, MapPin, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface EventViewerProps {
  event: CalendarEvent | null;
}

export function EventViewer({ event }: EventViewerProps) {
  if (!event) {
    return (
      <Card className="bg-card border-border rounded-xl shadow-sm h-[480px] overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-muted-foreground/50" />
          </div>
          <p className="text-muted-foreground">Select an event to view details</p>
        </motion.div>
      </Card>
    );
  }

  // Create a date formatter - add time to avoid timezone issues
  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric'
    });
  };

  const typeColorClass = eventTypeColors[event.type];
  const typeIcon = eventTypeIcons[event.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-card border-border rounded-xl shadow-sm h-[480px] overflow-hidden">
        <div className="p-6 border-b border-border/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Event Preview</h3>
              <p className="text-sm text-muted-foreground">{formatDate(event.date)}</p>
            </div>
            <Badge className={`${typeColorClass} px-3 py-1`}>
              <span className="flex items-center gap-2">
                {typeIcon}
                {event.type === 'new-moon' ? 'New Moon' : 
                 event.type === 'holy-day' ? 'Holy Day' : 
                 event.type === 'fast' ? 'Fast Day' : 'Sabbath'}
              </span>
            </Badge>
          </div>
        </div>
        
        <div className="p-6 flex flex-col h-[396px]">
          {/* Video/Image Preview Section */}
          <div className="mb-6">
            <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-muted/50 to-muted rounded-xl overflow-hidden border border-border/50 relative group">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
              </div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary border-2 border-white/20 flex items-center justify-center cursor-pointer shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </motion.div>
              </div>
              
              {/* Video URL indicator */}
              {event.videoUrl && (
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs bg-black/50 text-white border-white/20">
                    Video Available
                  </Badge>
                </div>
              )}
            </AspectRatio>
          </div>
          
          {/* Event Information */}
          <div className="flex-1 space-y-4">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">{event.title}</h4>
              {event.fastingPeriod && (
                <Badge variant="outline" className="mb-3">
                  Fasting: {event.fastingPeriod}
                </Badge>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1.5 rounded-lg">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-muted-foreground">
                  {formatDate(event.date)}
                </span>
              </div>
              
              {event.location && (
                <div className="flex items-center gap-2">
                  <div className="bg-secondary/10 p-1.5 rounded-lg">
                    <MapPin className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="font-medium text-muted-foreground">{event.location}</span>
                </div>
              )}
            </div>
            
            {event.description && (
              <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {event.description}
                </p>
              </div>
            )}
            
            {/* Scripture count indicator */}
            {event.scriptures && event.scriptures.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="bg-accent/40 p-1.5 rounded-lg">
                  <Star className="h-4 w-4 text-accent-foreground" />
                </div>
                <span>{event.scriptures.length} Scripture Reference{event.scriptures.length !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
