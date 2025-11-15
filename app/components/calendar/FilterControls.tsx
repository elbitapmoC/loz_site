
import React from "react";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Moon, Star, Sunrise, Printer, Filter } from "lucide-react";

interface FilterControlsProps {
  filters: {
    newMoons: boolean;
    holyDays: boolean;
    fasting: boolean;
  };
  onFilterChange: (filter: string, value: boolean) => void;
  onResetFilters: () => void;
  onPrint: () => void;
  eventCounts: {
    newMoonCount: number;
    holyDayCount: number;
    fastCount: number;
  };
}

export function FilterControls({
  filters,
  onFilterChange,
  onResetFilters,
  onPrint,
  eventCounts,
}: FilterControlsProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/20 p-4 rounded-lg">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <h4>Filter Events</h4>
        </div>

        <ToggleGroup type="multiple" className="flex flex-wrap gap-2">
          <ToggleGroupItem
            value="newMoons"
            aria-label="Toggle New Moons"
            className={`flex items-center gap-1.5 px-3 py-1 ${
              filters.newMoons
                ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                : ""
            }`}
            pressed={filters.newMoons}
            onPressedChange={(pressed) =>
              onFilterChange("newMoons", pressed)
            }
          >
            <Moon className="h-3.5 w-3.5" />
            <span>New Moons</span>
            <span className="ml-1 text-xs opacity-70">({eventCounts.newMoonCount})</span>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="holyDays"
            aria-label="Toggle Holy Days"
            className={`flex items-center gap-1.5 px-3 py-1 ${
              filters.holyDays
                ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                : ""
            }`}
            pressed={filters.holyDays}
            onPressedChange={(pressed) =>
              onFilterChange("holyDays", pressed)
            }
          >
            <Star className="h-3.5 w-3.5" />
            <span>Holy Days</span>
            <span className="ml-1 text-xs opacity-70">({eventCounts.holyDayCount})</span>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="fasting"
            aria-label="Toggle Fasting Days"
            className={`flex items-center gap-1.5 px-3 py-1 ${
              filters.fasting
                ? "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
                : ""
            }`}
            pressed={filters.fasting}
            onPressedChange={(pressed) =>
              onFilterChange("fasting", pressed)
            }
          >
            <Sunrise className="h-3.5 w-3.5" />
            <span>Fasting</span>
            <span className="ml-1 text-xs opacity-70">({eventCounts.fastCount})</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex gap-2 mt-2 sm:mt-0">
        <Button
          variant="outline"
          size="sm"
          className="text-xs h-8"
          onClick={onResetFilters}
        >
          Reset
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-xs h-8 flex items-center gap-1.5"
          onClick={onPrint}
        >
          <Printer className="h-3.5 w-3.5" />
          <span>Print</span>
        </Button>
      </div>
    </div>
  );
}
