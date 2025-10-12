import React from "react";
import { Card } from "../ui/card";
import { CalendarDays, BookText, Star, Scroll, ExternalLink } from "lucide-react";
import { HebrewMonth } from "./CalendarDashboard";
import { motion } from "motion/react";

interface MonthInfoCardsProps {
  selectedMonth: HebrewMonth;
}

export function MonthInfoCards({ selectedMonth }: MonthInfoCardsProps) {
  // These are the specific months that have different pre-exile and post-exile names
  const hasDifferentNames = [1, 2, 7, 8].includes(selectedMonth.id);
  
  return (
    <div className="w-full mb-8">
      <div 
        className="grid gap-6" 
        style={{ 
          gridTemplateColumns: `repeat(${hasDifferentNames ? 4 : 3}, 1fr)` 
        }}
      >
        {/* Month Name (Pre-exile) Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Month of</h4>
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <CalendarDays className="h-4 w-4 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-primary">{selectedMonth.preExileName}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                <span>Pre-exile name</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Hebrew Name Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Hebrew Name</h4>
                <div className="bg-secondary/10 p-2 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <BookText className="h-4 w-4 text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight font-hebrew text-secondary">{selectedMonth.hebrewSpelling}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                <div className="w-2 h-2 bg-secondary/40 rounded-full"></div>
                <span>{selectedMonth.id}{getOrdinalSuffix(selectedMonth.id)} month</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Meaning Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-accent/40 to-accent/60 border-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-accent-foreground/80">Meaning</h4>
                <div className="bg-accent-foreground/10 p-2 rounded-full group-hover:bg-accent-foreground/20 transition-colors">
                  <Star className="h-4 w-4 text-accent-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-accent-foreground">"{selectedMonth.meaning}"</h3>
              <div className="flex items-center gap-2 text-xs text-accent-foreground/70 mt-3">
                <div className="w-2 h-2 bg-accent-foreground/40 rounded-full"></div>
                <span>Strong's</span>
                <a 
                  href={`https://www.blueletterbible.org/lexicon/${selectedMonth.strongsNumber}/esv/wlc/0-1/`}
                  className="underline hover:text-accent-foreground/90 cursor-pointer inline-flex items-center gap-1 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {selectedMonth.strongsNumber}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Post-exile Name Card (only shown for months with different pre/post exile names) */}
        {hasDifferentNames && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 dark:from-amber-950/50 dark:to-amber-900/50 dark:border-amber-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Alternative Name</h4>
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-full group-hover:bg-amber-200 dark:group-hover:bg-amber-800/50 transition-colors">
                    <Scroll className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-amber-700 dark:text-amber-300">{selectedMonth.postExileName}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                  <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
                  <span>Post-exile name</span>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Helper function to get ordinal suffix
function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
}