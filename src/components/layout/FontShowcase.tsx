import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import { VisualHierarchyText, fontDescriptions, SecondaryFontOption } from "./VisualHierarchyText";
import { cn } from "../ui/utils";

interface FontShowcaseProps {
  className?: string;
}

export function FontShowcase({ className }: FontShowcaseProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  // Organize fonts by category
  const fontCategories = {
    "Primary Serif": ["cormorant"],
  };
  
  return (
    <div className={cn("space-y-16", className)}>
      <h2 className="text-3xl font-bold text-center mb-8">Official Fonts for Thee Light of Zion</h2>
      
      {Object.entries(fontCategories).map(([category, fonts]) => (
        <div key={category} className="space-y-8">
          <h3 className="text-2xl font-medium text-center">{category}</h3>
          
          <div className="grid grid-cols-1 gap-12">
            {fonts.map((font) => (
              <div 
                key={font} 
                className={cn(
                  "p-8 rounded-xl border theme-aware",
                  isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
                )}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h4 className="text-xl font-medium">{font.charAt(0).toUpperCase() + font.slice(1)}</h4>
                  <p className="text-muted-foreground text-sm">{fontDescriptions[font as SecondaryFontOption]}</p>
                </div>
                
                <div className="py-6">
                  <VisualHierarchyText 
                    secondaryFont={font as SecondaryFontOption} 
                    animation={false}
                    size="medium"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-12 p-6 border border-primary/20 rounded-xl bg-primary/5">
        <h3 className="text-xl font-medium mb-4">How to Use</h3>
        <pre className="p-4 rounded bg-background/80 text-sm overflow-x-auto">
          {`<VisualHierarchyText 
  primary="Discover Your Heritage"
  secondary="Walk in Truth"
  primaryFont="outfit"         // outfit (sans-serif)
  secondaryFont="cormorant"    // cormorant (serif)
  size="medium"                // small, medium, large
  orientation="vertical"       // vertical, horizontal
  animation={true}             // true, false
  primaryWeight="normal"       // light, normal, medium, semibold, bold
  secondaryWeight="semibold"   // normal, medium, semibold, bold
/>`}
        </pre>
      </div>
    </div>
  );
}