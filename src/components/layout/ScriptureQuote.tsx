import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { cn } from "../ui/utils";

interface ScriptureQuoteProps {
  quote: string;
  reference: string;
  title?: string;
  variant?: "card" | "overlay" | "simple";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ScriptureQuote({
  quote,
  reference,
  title = "Scripture",
  variant = "card",
  size = "md",
  className = "",
}: ScriptureQuoteProps) {
  const variants = {
    card: "bg-card border border-border shadow-sm",
    overlay:
      "bg-white/10 backdrop-blur-sm border-white/20 text-white/95",
    simple: "bg-primary/5 border border-primary/20",
  };

  const sizes = {
    sm: "p-4 max-w-lg",
    md: "p-6 sm:p-8 max-w-2xl",
    lg: "p-8 max-w-3xl",
  };

  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          variants[variant],
          sizes[size],
          "rounded-2xl mx-auto",
          className,
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>
        </div>

        {/* Quote Content */}
        <div className="space-y-4">
          <blockquote className="text-base sm:text-lg italic text-muted-foreground leading-relaxed">
            "{quote}"
          </blockquote>

          <footer className="pt-2 border-t border-border/50">
            <cite className="text-sm font-medium text-foreground not-italic">
              — {reference}
            </cite>
          </footer>
        </div>
      </motion.div>
    );
  }

  // Overlay variant - matches the original simple overlay design
  if (variant === "overlay") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/20",
          className,
        )}
      >
        <p className="font-serif italic text-xl leading-relaxed text-foreground drop-shadow-sm mb-2">
          "{quote}"
        </p>
        <cite className="text-sm text-foreground">
          — {reference}
        </cite>
      </motion.div>
    );
  }

  // Simple variant fallback
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        variants[variant],
        sizes[size],
        "rounded-xl mx-auto border",
        className,
      )}
    >
      <p className="italic mb-2 leading-relaxed text-foreground">
        "{quote}"
      </p>
      <cite className="text-sm block not-italic text-muted-foreground">
        — {reference}
      </cite>
    </motion.div>
  );
}