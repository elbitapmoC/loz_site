import React from "react";
import { cn } from "../ui/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

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
            ? "linear-gradient(135deg, #e0b878 0%, #f7e3c2 50%, #e0b878 100%)" 
            : "linear-gradient(135deg, #8a5a28 0%, #9e6c3a 50%, #8a5a28 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          animation: "gradient 8s ease infinite",
        }}
      >
        {subtitle}
      </div>
    </h1>
  );
}