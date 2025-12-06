import React from "react";
import { cn } from "../ui/utils";
import { useTheme } from "../providers/ThemeProvider";

// Define available font options for better type checking
export type PrimaryFontOption = "outfit";

export type SecondaryFontOption = "cormorant" | "cinzel";

interface VisualHierarchyTextProps {
  primary?: string;
  secondary?: string;
  className?: string;
  size?: "small" | "medium" | "large" | "mega";
  orientation?: "horizontal" | "vertical";
  animation?: boolean;
  primaryFont?: PrimaryFontOption;
  secondaryFont?: SecondaryFontOption;
  primaryWeight?:
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold";
  secondaryWeight?: "normal" | "medium" | "semibold" | "bold";
  as?: React.ElementType;
}

// Font family mapping
const fontFamilyMap = {
  // Primary fonts (sans-serif)
  outfit: "var(--font-sans)",

  // Secondary fonts (serif)
  cormorant: "var(--font-serif)",
  cinzel: "var(--font-serif)", // Aliased to Cormorant as Cinzel is not loaded
};

// Font weight mapping
const fontWeightMap = {
  light: "var(--font-weight-light)",
  normal: "var(--font-weight-normal)",
  medium: "var(--font-weight-medium)",
  semibold: "var(--font-weight-semibold)",
  bold: "var(--font-weight-bold)",
};

// Font descriptions for reference
export const fontDescriptions = {
  // Primary fonts
  outfit: "Modern geometric sans-serif (default)",

  // Secondary fonts
  cormorant: "Elegant classical serif (default)",
  cinzel: "Elegant classical serif (alias)",
};

// Define the gradient animation keyframes as a regular CSS class
const gradientAnimationStyles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export function VisualHierarchyText({
  primary = "Discover Your Heritage",
  secondary = "Find Your Home",
  className,
  size = "medium",
  orientation = "vertical",
  animation = true,
  primaryFont = "outfit",
  secondaryFont = "cormorant",
  primaryWeight = "normal",
  secondaryWeight = "semibold",
  as,
}: VisualHierarchyTextProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Size classes
  const sizeClasses = {
    small: {
      container: "gap-1",
      primary: "text-xl md:text-2xl",
      secondary: "text-3xl md:text-4xl",
    },
    medium: {
      container: "gap-2",
      primary: "text-2xl md:text-3xl",
      secondary: "text-4xl md:text-5xl",
    },
    large: {
      container: "gap-3",
      primary: "text-3xl md:text-4xl",
      secondary: "text-5xl md:text-6xl",
    },
    mega: {
      container: "gap-4",
      primary: "text-4xl md:text-5xl",
      secondary: "text-6xl md:text-7xl lg:text-8xl",
    },
  };

  // Animation class for the secondary text
  const animationClass = animation
    ? "animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both"
    : "";

  // Get font families and weights
  const primaryFontFamily = fontFamilyMap[primaryFont];
  const secondaryFontFamily = fontFamilyMap[secondaryFont];
  const primaryFontWeight = fontWeightMap[primaryWeight];
  const secondaryFontWeight = fontWeightMap[secondaryWeight];

  // Letter spacing adjustments based on font
  const getLetterSpacing = (font: string) => {
    return secondaryFont === "cormorant" ? "tracking-tight" : "tracking-normal";
  };

  const Comp = (as || "div") as React.ElementType;

  const containerMinHeights = {
    small: 120,
    medium: 160,
    large: 200,
    mega: 240,
  } as const;

  return (
    <>
      {/* Add the animation CSS to the component as a regular style tag */}
      <style
        dangerouslySetInnerHTML={{
          __html: gradientAnimationStyles,
        }}
      />

      <Comp
        className={cn(
          "flex items-center justify-center theme-aware",
          orientation === "vertical"
            ? "flex-col"
            : "flex-row flex-wrap gap-x-4",
          sizeClasses[size].container,
          className,
        )}
        style={{
          minHeight: containerMinHeights[size],
          contentVisibility: "auto",
          containIntrinsicSize: `${containerMinHeights[size]}px`,
        }}
      >
        {/* Primary text (Discover Your Heritage) */}
        <div
          className={cn(
            "text-foreground/80 leading-tight",
            sizeClasses[size].primary,
            animation
              ? "animate-in fade-in slide-in-from-bottom-1 duration-500 fill-mode-both"
              : "",
            primaryFont === "outfit"
              ? "tracking-wide"
              : "tracking-normal",
          )}
          style={{
            fontFamily: primaryFontFamily,
            fontWeight: primaryFontWeight,
            fontSizeAdjust: 0.5,
          }}
        >
          {primary}
        </div>

        {/* Secondary text (Walk in Truth) */}
        <div
          className={cn(
            getLetterSpacing(secondaryFont),
            sizeClasses[size].secondary,
            animationClass,
            "leading-tight",
          )}
          style={{
            fontFamily: secondaryFontFamily,
            fontWeight: secondaryFontWeight,
            backgroundImage: isDark
              ? "linear-gradient(135deg, var(--palette-gold-light) 0%, #f7e3c2 50%, var(--palette-gold-light) 100%)"
              : "linear-gradient(135deg, var(--palette-gold-deep) 0%, var(--palette-gold-rich) 50%, var(--palette-gold-deep) 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textFillColor:
              "transparent" /* Non-standard, for compatibility */,
            color: "transparent" /* Fallback */,
            animation: animation
              ? "gradient 8s ease infinite"
              : "none",
            fontSizeAdjust: 0.48,
          }}
        >
          {secondary}
        </div>
      </Comp>
    </>
  );
}
