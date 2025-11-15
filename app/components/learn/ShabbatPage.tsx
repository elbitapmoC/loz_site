import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
import { TorahPortionCards } from "../calendar/TorahPortionCards";
import {
  abbreviateScripture,
  getBookAbbreviation,
  TORAH_BOOKS,
} from "../../utils/scriptureAbbreviations";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

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
  const [bookFilter, setBookFilter] = React.useState<
    string | null
  >(null);

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
    let portions = allPortions.slice(currentPortionIndex);

    // Apply book filter if selected
    if (bookFilter) {
      portions = portions.filter((p) => p.book === bookFilter);
    }

    return portions;
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

      {/* Featured Torah Portion Cards - Previous, Current, Next */}
      <motion.section
        className="py-12 bg-white dark:bg-muted/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-3xl font-serif">
              This Week's Reading
            </h3>
            <p className="text-muted-foreground">
              Previous, Current & Next Torah Portions
            </p>
          </div>
          <TorahPortionCards
            currentPortion={currentPortion}
            onBookFilterChange={setBookFilter}
          />
        </div>
      </motion.section>

      {/* All Torah Portions Grid */}
      <motion.section
        className="pb-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            variants={fadeInUp}
            className="text-center my-8"
          >
            <p className="text-muted-foreground">
              {bookFilter
                ? `${upcomingPortions.length} upcoming Torah portions from ${getBookAbbreviation(bookFilter)}`
                : `${upcomingPortions.length} upcoming Torah portions for the remainder of the year`}
            </p>
          </motion.div>

          {/* Torah Book Filter Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {TORAH_BOOKS.map((book) => (
                <Button
                  key={book.name}
                  variant={
                    bookFilter === book.name
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setBookFilter(
                      bookFilter === book.name
                        ? null
                        : book.name,
                    )
                  }
                  className="relative"
                >
                  {bookFilter === book.name && (
                    <Check className="w-3 h-3 mr-1.5" />
                  )}
                  <span>{book.abbrev}</span>
                  <span className="ml-1.5 text-xs opacity-60">
                    {book.hebrew}
                  </span>
                </Button>
              ))}
            </div>
            {bookFilter && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setBookFilter(null)}
                className="text-xs"
              >
                Clear Filter
              </Button>
            )}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {upcomingPortions.map((portion, index) => {
              const isCurrent =
                portion.key === currentPortion?.key;
              const isNext = portion.key === nextPortion?.key;
              
              // Use the key field which represents traditional parsha numbering (0-53 for portions 1-54)
              const parshaNumber = portion.key + 1;

              return (
                <motion.div
                  key={portion.key}
                  variants={fadeInUp}
                  transition={{ delay: (index % 12) * 0.05 }}
                >
                  <Card
                    className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      isCurrent
                        ? "ring-2 ring-primary/30"
                        : isNext
                          ? "ring-1 ring-primary/20"
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
                              : `#${parshaNumber}`}
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {/* Torah Reading */}
                        <div className="p-3 bg-muted/80 dark:bg-secondary/20 rounded-md">
                          <div className="text-xs font-medium text-muted-foreground mb-1">
                            Torah
                          </div>
                          <div className="text-sm font-medium">
                            {abbreviateScripture(
                              portion.leyning.torah,
                            )}
                          </div>
                        </div>

                        {/* Haftarah Reading */}
                        <div className="p-3 bg-muted/80 dark:bg-secondary/20 rounded-md">
                          <div className="text-xs font-medium text-muted-foreground mb-1">
                            Prophets
                          </div>
                          <div className="text-sm font-medium">
                            {abbreviateScripture(
                              portion.leyning.haftarah,
                            )}
                          </div>
                        </div>

                        {/* Gospel Reading */}
                        <div className="p-3 bg-muted/80 dark:bg-secondary/20 rounded-md md:col-span-2">
                          <div className="text-xs font-medium text-muted-foreground mb-1">
                            Gospel
                          </div>
                          <div className="text-sm font-medium">
                            {abbreviateScripture(
                              portion.leyning.gospel,
                            )}
                          </div>
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
                          <span>
                            {getBookAbbreviation(portion.book)}
                          </span>
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
        className="py-16 bg-white dark:bg-muted/30"
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
              Follow along with our weekly Torah readings and
              deepen your understanding of the scriptures with
              our congregation.
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