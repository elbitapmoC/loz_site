import React from "react";
import { cn } from "../ui/utils";
import { useTheme } from "../providers/ThemeProvider";

// Define available font options for better type checking
export type PrimaryFontOption = "outfit" | "tenor" | "fahkwang";

export type SecondaryFontOption =
  | "cormorant"
  | "playfair"
  | "cinzel"
  | "eb-garamond"
  | "lora"
  | "cardo"
  | "rozha"
  | "gilda"
  | "marcellus"
  | "crimson"
  | "spectral";

interface VisualHierarchyTextProps {
  primary?: string;
  secondary?: string;
  className?: string;
  size?: "small" | "medium" | "large";
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
}

// Font family mapping
const fontFamilyMap = {
  // Primary fonts (sans-serif)
  outfit: "var(--font-sans)",
  tenor: "var(--font-tenor)",
  fahkwang: "var(--font-fahkwang)",

  // Secondary fonts (serif and display)
  cormorant: "var(--font-serif)",
  playfair: "var(--font-playfair)",
  cinzel: "var(--font-cinzel)",
  "eb-garamond": "var(--font-eb-garamond)",
  lora: "var(--font-lora)",
  cardo: "var(--font-cardo)",
  rozha: "var(--font-rozha)",
  gilda: "var(--font-gilda)",
  marcellus: "var(--font-marcellus)",
  crimson: "var(--font-crimson)",
  spectral: "var(--font-spectral)",
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
  tenor: "Elegant thin sans-serif with high x-height",
  fahkwang:
    "Contemporary sans-serif with distinctive characters",

  // Secondary fonts
  cormorant: "Elegant classical serif (default)",
  playfair:
    "Transitional serif with dramatic thick/thin contrast",
  cinzel: "Roman inscriptional capitals, regal and majestic",
  "eb-garamond":
    "Traditional old-style serif with excellent readability",
  lora: "Contemporary serif with brushed curves",
  cardo:
    "Classic serif based on humanist typefaces of the Renaissance",
  rozha: "Bold display serif with strong vertical stress",
  gilda: "Elegant display serif with delicate details",
  marcellus: "Roman inscriptional with a soft, warm feeling",
  crimson: "Oldstyle serif inspired by Garamond designs",
  spectral: "Serif designed specifically for screen reading",
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
    switch (font) {
      case "cinzel":
      case "rozha":
      case "gilda":
      case "marcellus":
        return "tracking-normal"; // These fonts need less tracking
      case "tenor":
      case "fahkwang":
        return "tracking-wide"; // These sans fonts need more tracking
      default:
        return secondaryFont === "cormorant"
          ? "tracking-tight"
          : "tracking-normal";
    }
  };

  return (
    <>
      {/* Add the animation CSS to the component as a regular style tag */}
      <style
        dangerouslySetInnerHTML={{
          __html: gradientAnimationStyles,
        }}
      />

      <div
        className={cn(
          "flex items-center justify-center theme-aware",
          orientation === "vertical"
            ? "flex-col"
            : "flex-row flex-wrap gap-x-4",
          sizeClasses[size].container,
          className,
        )}
      >
        {/* Primary text (Discover Your Heritage) */}
        <div
          className={cn(
            "text-foreground/80",
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
          )}
          style={{
            fontFamily: secondaryFontFamily,
            fontWeight: secondaryFontWeight,
            backgroundImage: isDark
              ? "linear-gradient(135deg, #e0b878 0%, #f7e3c2 50%, #e0b878 100%)"
              : "linear-gradient(135deg, #8a5a28 0%, #9e6c3a 50%, #8a5a28 100%)",
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
          }}
        >
          {secondary}
        </div>
      </div>
    </>
  );
}