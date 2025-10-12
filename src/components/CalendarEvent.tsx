
import React from "react";
import { Calendar, Star, Moon, Sunrise, ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "./ui/utils";

interface CalendarEventProps {
  id: string;
  date: string;
  title: string;
  description?: string;
  type: "new-moon" | "holy-day" | "fast";
  isOpen: boolean;
  onToggle: () => void;
}

export function CalendarEvent({ 
  id, 
  date, 
  title, 
  description, 
  type, 
  isOpen, 
  onToggle 
}: CalendarEventProps) {
  // Custom styling and icons based on event type
  const typeConfig = {
    "new-moon": {
      icon: <Moon className="w-4 h-4 text-blue-400" />,
      badge: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
      border: "border-l-blue-400",
      scriptures: [
        "This month shall be unto you the beginning of months: it shall be the first month of the year to you. - Exodus 12:2",
        "Blow up the trumpet in the new moon, in the time appointed, on our solemn feast day. - Psalm 81:3"
      ]
    },
    "holy-day": {
      icon: <Star className="w-4 h-4 text-amber-400" />,
      badge: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
      border: "border-l-amber-400",
      scriptures: [
        "Three times thou shalt keep a feast unto me in the year. - Exodus 23:14",
        "These are the feasts of the LORD, even holy convocations, which ye shall proclaim in their seasons. - Leviticus 23:4"
      ]
    },
    "fast": {
      icon: <Sunrise className="w-4 h-4 text-purple-400" />,
      badge: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
      border: "border-l-purple-400",
      scriptures: [
        "Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke? - Isaiah 58:6",
        "When ye fast, be not, as the hypocrites, of a sad countenance. - Matthew 6:16"
      ]
    }
  };

  return (
    <Card 
      className={`mb-4 overflow-hidden group border-l-4 ${typeConfig[type].border} transition-all`}
    >
      <div 
        className="flex p-4 cursor-pointer" 
        onClick={onToggle}
      >
        <div className="flex-shrink-0 mr-4 flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Calendar className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-wrap justify-between items-center mb-1">
            <div className="flex items-center">
              <h3 className="mr-2">{title}</h3>
              <Badge variant="outline" className={`${typeConfig[type].badge} ml-2 flex items-center gap-1`}>
                {typeConfig[type].icon}
                <span>{type === "new-moon" ? "New Moon" : type === "holy-day" ? "Holy Day" : "Fast"}</span>
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <time className="text-muted-foreground text-sm">{date}</time>
              <ChevronDown 
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "transform rotate-180"
                )} 
              />
            </div>
          </div>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      
      {/* Expandable content */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out bg-muted/30 border-t",
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 border-t-transparent"
        )}
      >
        <div className="p-4">
          <h4 className="text-sm mb-2 text-muted-foreground font-medium">Scripture References:</h4>
          <div className="space-y-2">
            {typeConfig[type].scriptures.map((scripture, index) => (
              <p key={index} className="text-sm text-muted-foreground italic">
                "{scripture}"
              </p>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
