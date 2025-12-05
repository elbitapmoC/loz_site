import React from "react";
import { HeroSection } from "./HeroSection";
import { PaganTruthExposure } from "./PaganTruthExposure";
import { CallToAction } from "./CallToAction";
import { RollingQuotes } from "./RollingQuotes";
import { useTheme } from "../providers/ThemeProvider";

export function HomePage() {
  const { resolvedTheme } = useTheme();

  // Example Bible verses
  const verses = [
    {
      text: "And ye shall know the truth, and the truth shall make you free.",
      reference: "John 8:32",
    },
    {
      text: "Remember the days of old, consider the years of many generations.",
      reference: "Deuteronomy 32:7",
    },
    {
      text: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people.",
      reference: "1 Peter 2:9",
    },
    {
      text: "And I will walk among you, and will be your God, and ye shall be my people.",
      reference: "Leviticus 26:12",
    },
    {
      text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
      reference: "2 Timothy 2:15",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Core Values instead of Statistics */}
      <HeroSection
        valueStyle="scripture"
        buttonLayout="centered"
      />
      
      {/* Pagan Truth Exposure Section */}
      <PaganTruthExposure />

      {/* Bible Verse Scrolling Section */}
      <RollingQuotes quotes={verses} />

      {/* Call To Action */}
      <CallToAction />
    </main>
  );
}