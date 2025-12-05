import React from "react";
import { SacredResourcesHub } from "../home/SacredResourcesHub";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";

export function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none z-0" />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 mb-12 text-center">
           <VisualHierarchyText
            primary="Spiritual"
            secondary="Library"
            size="large"
            secondaryFont="cinzel"
          />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-serif italic text-lg">
            "My people are destroyed for lack of knowledge." 
            <span className="text-primary text-xs font-sans font-bold uppercase tracking-widest not-italic ml-2">
              Hosea 4:6
            </span>
          </p>
        </div>
        
        <SacredResourcesHub />
      </div>
    </div>
  );
}
