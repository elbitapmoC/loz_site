import React from "react";
import { CalendarEvent, eventTypeColors, eventTypeIcons } from "./CalendarDashboard";
import { Home, Book, ExternalLink, Calendar, MapPin, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { CustomScrollArea } from "../ui/custom-scroll-area";
import { motion } from "motion/react";

interface EventDetailsProps {
  event: CalendarEvent | null;
  showScriptures: boolean;
  onToggleView: () => void;
}

export function EventDetails({ event, showScriptures, onToggleView }: EventDetailsProps) {
  if (!event) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-sm relative overflow-hidden h-[320px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-muted-foreground/50" />
          </div>
          <p className="text-muted-foreground">Select an event to view details</p>
        </motion.div>
      </div>
    );
  }

  // Get event type color
  const typeColorClass = eventTypeColors[event.type] || "bg-slate-100 text-slate-700 border-slate-200";
  const typeIcon = eventTypeIcons[event.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-xl shadow-sm relative overflow-hidden h-[320px]"
    >
      {/* Left Side Navigation Menu */}
      <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-border flex flex-col items-center py-6 bg-card/50 backdrop-blur-sm z-10">
        <div className="flex flex-col gap-4">
          <button 
            className={`
              rounded-xl p-3 transition-all duration-300 cursor-pointer group
              ${!showScriptures 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
              }
            `}
            onClick={() => showScriptures && onToggleView()}
            aria-label="Overview"
            title="Event Overview"
          >
            <Home className="h-4 w-4" />
          </button>
          
          <button 
            className={`
              rounded-xl p-3 transition-all duration-300 cursor-pointer group
              ${showScriptures 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
              }
            `}
            onClick={() => !showScriptures && onToggleView()}
            aria-label="Scriptures"
            title="Scripture References"
          >
            <Book className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="pl-16 h-full">
        <CustomScrollArea className="h-full">
          <div className="p-6">
            {!showScriptures ? (
              // Overview Section
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`${typeColorClass} px-3 py-1`}>
                    <span className="flex items-center gap-2">
                      {typeIcon}
                      {event.type === 'new-moon' ? 'New Moon' : 
                       event.type === 'holy-day' ? 'Holy Day' : 
                       event.type === 'fast' ? 'Fast Day' : 'Sabbath'}
                    </span>
                  </Badge>
                  
                  {event.fastingPeriod && (
                    <Badge variant="outline" className="text-xs">
                      {event.fastingPeriod}
                    </Badge>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{event.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {event.date && (
                      <div className="flex items-center gap-3 text-sm">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">
                          {new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    )}
                    
                    {event.location && (
                      <div className="flex items-center gap-3 text-sm">
                        <div className="bg-secondary/10 p-2 rounded-lg">
                          <MapPin className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="font-medium">{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {event.description && (
                  <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                )}
                
                {event.videoUrl && (
                  <div className="pt-2">
                    <a 
                      href={event.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg border border-primary/20"
                    >
                      <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Watch Video Teaching</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ) : (
              // Scriptures Section
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Scripture References</h3>
                  <Badge className={`${typeColorClass} px-3 py-1`}>
                    <span className="flex items-center gap-2">
                      {typeIcon}
                      {event.title}
                    </span>
                  </Badge>
                </div>
                
                {event.scriptures && event.scriptures.length > 0 ? (
                  <div className="space-y-4">
                    {event.scriptures.map((scripture, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-muted/80 to-muted/40 rounded-lg p-4 border border-border/50 group hover:shadow-sm transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-sm text-primary">{scripture}</span>
                          <a 
                            href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(scripture)}&version=KJV`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded-lg group-hover:scale-105 transition-transform"
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span className="font-medium">Read KJV</span>
                          </a>
                        </div>
                        
                        <p className="text-xs text-muted-foreground">
                          Click to read the complete passage in the King James Version
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-muted/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Book className="h-6 w-6 text-muted-foreground/50" />
                    </div>
                    <p className="text-muted-foreground text-sm">No scripture references available for this event.</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </CustomScrollArea>
      </div>
    </motion.div>
  );
}