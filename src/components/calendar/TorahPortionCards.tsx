import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { torahPortionService } from "../../utils/torahPortionService";
import type { TorahPortion } from "../../utils/torahPortionService";
import {
  TORAH_BOOKS,
  abbreviateScripture,
  getBookAbbreviation,
} from "../../utils/scriptureAbbreviations";

interface TorahPortionCardsProps {
  currentPortion: TorahPortion | null;
  onBookFilterChange?: (book: string | null) => void;
}

export function TorahPortionCards({
  currentPortion,
  onBookFilterChange,
}: TorahPortionCardsProps) {
  const [selectedBook, setSelectedBook] = useState<
    string | null
  >(null);

  // Always get the actual previous, current, and next portions based on today's date
  const previousPortion =
    torahPortionService.getPreviousPortion();
  const nextPortion = torahPortionService.getNextPortion();

  const handleBookClick = (bookValue: string) => {
    const newBook =
      selectedBook === bookValue ? null : bookValue;
    setSelectedBook(newBook);

    // Notify parent component of filter change
    if (onBookFilterChange) {
      onBookFilterChange(newBook);
    }
  };

  const handleClearFilter = () => {
    setSelectedBook(null);
    if (onBookFilterChange) {
      onBookFilterChange(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Three Card Layout - Always shows current week's portions */}
      <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
        {/* Previous Portion Card */}
        <PortionCard
          portion={previousPortion}
          type="previous"
          label="Previous Portion"
          disabled={!previousPortion}
        />

        {/* Current Portion Card - Featured */}
        <PortionCard
          portion={currentPortion}
          type="current"
          label="Current Portion"
          featured
        />

        {/* Next Portion Card */}
        <PortionCard
          portion={nextPortion}
          type="next"
          label="Next Portion"
          disabled={!nextPortion}
        />
      </div>
    </div>
  );
}

interface PortionCardProps {
  portion: TorahPortion | null;
  type: "previous" | "current" | "next";
  label: string;
  featured?: boolean;
  disabled?: boolean;
}

function PortionCard({
  portion,
  type,
  label,
  featured = false,
  disabled = false,
}: PortionCardProps) {
  const getBorderColor = () => {
    if (disabled) return "border-muted";
    if (featured)
      return "border-primary shadow-lg shadow-primary/10";
    return "border-border";
  };

  const getBackgroundColor = () => {
    if (disabled) return "bg-muted/30";
    if (featured)
      return "bg-gradient-to-br from-primary/5 via-background to-primary/5";
    return "bg-card";
  };

  if (!portion && disabled) {
    return (
      <Card
        className={`relative ${getBorderColor()} ${getBackgroundColor()} opacity-50`}
      >
        <CardContent className="pt-6 pb-6 px-4 flex flex-col items-center justify-center min-h-[280px]">
          <p className="text-sm text-muted-foreground text-center">
            No {type} portion available
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!portion) return null;

  // Use the key field which represents traditional parsha numbering (0-53 for portions 1-54)
  const parshaNumber = portion.key + 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`relative ${getBorderColor()} ${getBackgroundColor()} hover:shadow-md transition-all duration-300`}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <Badge className="text-amber-950 dark:bg-amber-400 dark:text-amber-950 shadow-md px-3 py-1">
              Current Reading
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-3 pt-6">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-2">
            {type === "previous" && (
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            )}
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {label}
            </span>
            {type === "next" && (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
          </div>

          {/* Title */}
          <h3
            className={`${featured ? "text-2xl" : "text-xl"} font-serif`}
          >
            {portion.title}
          </h3>

          {/* Hebrew Name */}
          <p className="text-base text-muted-foreground font-serif mt-1">
            {portion.hebrew}
          </p>

          {/* Parsha Number */}
          <Badge variant="outline" className="mt-2 text-xs">
            Parsha {parshaNumber} of 54
          </Badge>
        </CardHeader>

        <CardContent className="space-y-3 px-4 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Torah Reading */}

            <div className="p-3 bg-white dark:bg-muted/80 dark:bg-secondary/20 rounded-md">
              <div className="text-xs font-medium text-muted-foreground mb-1">
                Torah
              </div>
              <div className="text-sm font-medium">
                {abbreviateScripture(
                  portion?.leyning.torah || "Loading...",
                )}
              </div>
            </div>

            {/* Haftarah Reading */}
            <div className="p-3 bg-white dark:bg-muted/80  dark:bg-secondary/20 rounded-md">
              <div className="text-xs font-medium text-muted-foreground mb-1">
                Prophets
              </div>
              <div className="text-sm font-medium">
                {abbreviateScripture(
                  portion?.leyning.haftarah || "Loading...",
                )}
              </div>
            </div>

            {/* Gospel Reading */}
            <div className="p-3 bg-white dark:bg-muted/80 dark:bg-secondary/20 rounded-md md:col-span-2">
              <div className="text-xs font-medium text-muted-foreground mb-1">
                Gospel
              </div>
              <div className="text-sm font-medium">
                {abbreviateScripture(
                  portion?.leyning.gospel || "Loading...",
                )}
              </div>
            </div>
          </div>

          {/* Book Badge */}
          <div className="pt-2 flex justify-center">
            <Badge variant="secondary" className="text-xs">
              {getBookAbbreviation(portion.book)}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
