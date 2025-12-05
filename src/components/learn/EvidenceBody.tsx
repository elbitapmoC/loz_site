import React from "react";
import { Badge } from "../ui/badge";
import { DialogTitle, DialogDescription } from "../ui/dialog";
import { DrawerTitle, DrawerDescription } from "../ui/drawer";
import { FileWarning, Search, Gavel, BookOpen, Calendar } from "lucide-react";

type EvidenceBodyProps = {
  holiday: {
    id: string;
    name: string;
    originalName: string;
    synopsis: string;
    keyPoints: string[];
    scriptures: string[];
    timing: string;
  };
};

export default function EvidenceBody({ holiday }: EvidenceBodyProps) {
  return (
    <div className="flex flex-col gap-8 md:gap-12 pb-8">
      <div className="space-y-8 md:space-y-10">
        <div>
          <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-3 border-b border-border pb-4">
            <FileWarning className="w-5 h-5 md:w-7 md:h-7 text-red-600 dark:text-red-500" />
            The Deception
          </h3>
          <div className="prose dark:prose-invert prose-base md:prose-xl leading-loose text-muted-foreground max-w-none">
            <p>{holiday.synopsis}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-3 border-b border-border pb-4">
            <Search className="w-5 h-5 md:w-7 md:h-7 text-red-600 dark:text-red-500" />
            Key Evidence
          </h3>
          <ul className="space-y-4 md:space-y-5">
            {holiday.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-red-600 shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6 md:space-y-8 pt-2">
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <h3 className="text-lg md:text-xl font-bold text-red-700 dark:text-red-400 mb-4 md:mb-6 flex items-center gap-3">
            <Gavel className="w-5 h-5 md:w-6 md:h-6" />
            Biblical Verdict
          </h3>
          <p className="text-xs md:text-sm text-red-600/80 dark:text-red-400/80 mb-6 md:mb-8 uppercase tracking-widest font-semibold">The Most High forbids this practice:</p>

          <div className="grid md:grid-cols-2 gap-4">
            {holiday.scriptures.map((ref, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background/60 rounded-xl border border-red-200 dark:border-red-900/20 hover:border-red-500/30 transition-colors group">
                <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                <span className="text-sm md:text-base font-mono text-red-800 dark:text-red-200 group-hover:text-red-900 dark:group-hover:text-white transition-colors">{ref}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
          <h4 className="text-sm md:text-base font-bold text-card-foreground mb-3">Timing</h4>
          <div className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
            <Calendar className="w-5 h-5" />
            {holiday.timing}
          </div>
        </div>
      </div>
    </div>
  );
}
