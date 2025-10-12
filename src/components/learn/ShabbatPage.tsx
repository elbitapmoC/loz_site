import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Scroll,
  Star,
  Calendar as CalendarIcon,
  BookOpen,
} from "lucide-react";
import { TorahPortionService } from "../../utils/torahPortionService";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Initialize Torah portion service
const torahService = new TorahPortionService();

export function ShabbatPage() {
  // Get current portion and all portions
  const currentPortion = torahService.getCurrentPortion();
  const nextPortion = torahService.getNextPortion();
  const allPortions = torahService.getAllPortions();

  // Filter to show only upcoming portions (current and future)
  const getUpcomingPortions = () => {
    const today = new Date();
    const currentPortionIndex = allPortions.findIndex(
      (p) => p.key === currentPortion.key,
    );

    // Return portions starting from current portion (including current)
    return allPortions.slice(currentPortionIndex);
  };

  const upcomingPortions = getUpcomingPortions();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.section
        className="relative py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <VisualHierarchyText
            primary="Build your foundation"
            secondary="Weekly Torah Readings"
            size="large"
            orientation="vertical"
            animation={true}
            primaryFont="outfit"
            secondaryFont="cormorant"
            primaryWeight="medium"
            secondaryWeight="bold"
            className="mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow along with our congregation each Sabbath as
            we open up our heritage, discover the mysteries of
            this bible, learn how to be family and so much more!
          </p>
        </div>
      </motion.section>
      {/* All Torah Portions Grid */}
      <motion.section
        className="pt-6 pb-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">
              {upcomingPortions.length} upcoming Torah portions
              for the remainder of the year
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {upcomingPortions.map((portion, index) => {
              const isCurrent =
                portion.key === currentPortion?.key;
              const isNext = portion.key === nextPortion?.key;

              return (
                <motion.div
                  key={portion.key}
                  variants={fadeInUp}
                  transition={{ delay: (index % 12) * 0.05 }}
                >
                  <Card
                    className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      isCurrent
                        ? "ring-2 ring-primary/30 bg-primary/5"
                        : isNext
                          ? "ring-1 ring-primary/20 bg-primary/2"
                          : ""
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant={
                            isCurrent
                              ? "default"
                              : isNext
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {isCurrent
                            ? "Current"
                            : isNext
                              ? "Next"
                              : `#${portion.key + 1}`}
                        </Badge>
                        {(isCurrent || isNext) && (
                          <Star className="w-4 h-4 text-primary fill-current" />
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight mb-2">
                        {portion.title}
                      </CardTitle>
                      <div className="text-base text-muted-foreground font-serif mb-1">
                        {portion.hebrew}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {portion.date}
                      </div>
                      {portion.special && (
                        <Badge
                          variant="secondary"
                          className="mt-2 text-xs"
                        >
                          {portion.special}
                        </Badge>
                      )}
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Torah Reading */}
                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Scroll className="w-5 h-5 text-primary" />
                          <div className="font-semibold text-primary">
                            Torah Reading
                          </div>
                        </div>
                        <div className="text-sm font-medium leading-relaxed">
                          {portion.leyning.torah}
                        </div>
                      </div>

                      {/* Footer with Hebrew date and book */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-3 h-3" />
                          <span>{portion.hdate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-3 h-3" />
                          <span>{portion.book}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-muted/30"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold">
              Join Our Torah Study
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow along with our weekly Torah readings and deepen your understanding 
              of the scriptures with our congregation.
            </p>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-center gap-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <div className="text-center">
                  <div className="font-semibold text-lg">
                    Weekly Shabbat Service
                  </div>
                  <div className="text-primary font-medium">
                    Saturdays 10:00 AM
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}