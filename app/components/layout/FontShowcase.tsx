import React from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { VisualHierarchyText, fontDescriptions, SecondaryFontOption } from "./VisualHierarchyText";
import { cn } from "../ui/utils";

interface FontShowcaseProps {
  className?: string;
}

export function FontShowcase({ className }: FontShowcaseProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  // Official fonts only
  const fontCategories = {
    "Official Fonts": ["cormorant"],
  };
  
  return (
    <div className={cn("space-y-16", className)}>
      <h2 className="text-3xl font-bold text-center mb-8">Official Typography System</h2>
      
      {/* Official Font Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className={cn("p-6 rounded-xl border", isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5")}>
          <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "var(--font-sans)" }}>Outfit</h3>
          <p className="text-sm text-muted-foreground mb-4">Sans-serif for body text, headings, UI elements</p>
          <p className="text-sm" style={{ fontFamily: "var(--font-sans)" }}>The quick brown fox jumps over the lazy dog</p>
          <p className="text-xs text-muted-foreground mt-2">Weights: 300, 400, 500, 600, 700</p>
        </div>
        
        <div className={cn("p-6 rounded-xl border", isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5")}>
          <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>Cormorant Garamond</h3>
          <p className="text-sm text-muted-foreground mb-4">Serif for elegant headings, quotes</p>
          <p className="text-sm" style={{ fontFamily: "var(--font-serif)" }}>The quick brown fox jumps over the lazy dog</p>
          <p className="text-xs text-muted-foreground mt-2">Weights: 400, 500, 600, 700</p>
        </div>
        
        <div className={cn("p-6 rounded-xl border", isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5")}>
          <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "var(--font-mono)" }}>DM Mono</h3>
          <p className="text-sm text-muted-foreground mb-4">Monospace for code, technical text</p>
          <p className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>The quick brown fox jumps over the lazy dog</p>
          <p className="text-xs text-muted-foreground mt-2">Weights: 400, 500</p>
        </div>
      </div>
      
      {Object.entries(fontCategories).map(([category, fonts]) => (
        <div key={category} className="space-y-8">
          <h3 className="text-2xl font-medium text-center">VisualHierarchyText Component Demo</h3>
          
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
  primaryFont="outfit"      // outfit (default)
  secondaryFont="cormorant" // cormorant (default)
  size="medium"             // small, medium, large
  orientation="vertical"    // vertical, horizontal
  animation={true}          // true, false
  primaryWeight="normal"    // light, normal, medium, semibold, bold
  secondaryWeight="semibold" // normal, medium, semibold, bold
/>`}
        </pre>
      </div>
    </div>
  );
}