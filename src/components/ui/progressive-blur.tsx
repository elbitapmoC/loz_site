import { cn } from "./utils";

interface ProgressiveBlurProps {
  className?: string;
  children: React.ReactNode;
}

export function ProgressiveBlur({ className, children }: ProgressiveBlurProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}