import React, { Suspense } from "react";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "../ui/drawer";

function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);
  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  return value;
}

const EvidenceBody = React.lazy(() => import("./EvidenceBody"));

interface PaganHoliday {
  id: string;
  name: string;
  originalName: string;
}

export default function EvidenceModal({ holiday, isOpen, onClose }: { holiday: PaganHoliday | null; isOpen: boolean; onClose: () => void }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (!holiday) return null;
  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-4xl bg-background border-red-200 dark:border-red-900/20 text-foreground p-0 overflow-hidden h-[90vh] md:h-[85vh] flex flex-col">
          <div className="bg-red-50 dark:bg-red-950/10 border-b border-red-200 dark:border-red-900/20 p-6 flex items-start justify-between shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-2">
                 <Badge variant="destructive" className="bg-red-600 text-white hover:bg-red-700 tracking-widest font-mono uppercase text-xs">
                   Origin Identified
                 </Badge>
                 <span className="text-red-600/50 dark:text-red-500/50 font-mono text-xs uppercase">Case ID: #{holiday.id.toUpperCase()}</span>
              </div>
              <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-serif tracking-wide">
                {holiday.name}
              </DialogTitle>
              <DialogDescription className="text-red-600 dark:text-red-400 font-mono uppercase tracking-wider text-sm">
                Formerly: {holiday.originalName}
              </DialogDescription>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <Suspense fallback={<div className="p-6 text-muted-foreground">Loading evidence…</div>}>
              <EvidenceBody holiday={holiday} />
            </Suspense>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="bg-background border-red-200 dark:border-red-900/20 text-foreground h-[90vh] flex flex-col">
        <DrawerHeader className="bg-red-50 dark:bg-red-950/10 border-b border-red-200 dark:border-red-900/20 p-6 text-left shrink-0">
            <div className="flex items-center gap-3 mb-2">
               <Badge variant="destructive" className="bg-red-600 text-white hover:bg-red-700 tracking-widest font-mono uppercase text-xs">
                 Origin Identified
               </Badge>
               <span className="text-red-600/50 dark:text-red-500/50 font-mono text-xs uppercase">Case ID: #{holiday.id.toUpperCase()}</span>
            </div>
            <DrawerTitle className="text-3xl font-bold text-foreground mb-1 font-serif tracking-wide">
              {holiday.name}
            </DrawerTitle>
            <DrawerDescription className="text-red-600 dark:text-red-400 font-mono uppercase tracking-wider text-sm">
              Formerly: {holiday.originalName}
            </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-6">
          <Suspense fallback={<div className="p-6 text-muted-foreground">Loading evidence…</div>}>
            <EvidenceBody holiday={holiday} />
          </Suspense>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
