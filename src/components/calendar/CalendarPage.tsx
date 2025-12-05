import React from "react";
import { CalendarDashboard } from "./CalendarDashboard";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ScriptureQuote } from "../layout/ScriptureQuote";
import { motion } from "motion/react";

export function CalendarPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Consistent with site pattern */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1579621970590-9d624316904b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Sacred biblical calendar with ancient scrolls"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/95 backdrop-blur-[2px]" />
          
          {/* Animated Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
        </div>

        {/* Content - Using standard container pattern */}
        <div className="relative z-10 container max-w-4xl py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <VisualHierarchyText
                primary="The Appointed Times"
                secondary="of the Most High"
                secondaryFont="cinzel"
                secondaryWeight="semibold"
                size="large"
              />
            </div>

            <ScriptureQuote
              quote="These are the feasts of the LORD, even holy convocations, which ye shall proclaim in their seasons."
              reference="Leviticus 23:4"
              variant="overlay"
              size="md"
              className="mb-12"
            />
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </section>      

      {/* Calendar Content */}
      <section className="py-16 bg-secondary/20 dark:bg-secondary/10">
        <div className="container">
          <CalendarDashboard />
        </div>
      </section>
    </div>
  );
}
