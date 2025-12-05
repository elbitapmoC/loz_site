import React from "react";
import { cn } from "../ui/utils";
import { useTheme } from "../providers/ThemeProvider";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <h1 className={cn("text-5xl md:text-6xl font-bold mb-8", className)}>
      <div className="text-foreground/80 tracking-wide mb-2">
        {title}
      </div>
      <div 
        className="block tracking-wide"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          backgroundImage: isDark 
            ? "linear-gradient(135deg, var(--palette-gold-light) 0%, #f7e3c2 50%, var(--palette-gold-light) 100%)" 
            : "linear-gradient(135deg, var(--palette-gold-deep) 0%, var(--palette-gold-rich) 50%, var(--palette-gold-deep) 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textFillColor: "transparent",
          color: "transparent",
          animation: "gradient 8s ease infinite",
        }}
      >
        {subtitle}
      </div>
    </h1>
  );
}