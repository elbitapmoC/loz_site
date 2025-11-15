import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { AlertTriangle, BookOpen, ArrowRight, Eye } from "lucide-react";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function PaganTruthExposure() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Header with Warning */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <Badge variant="destructive" className="text-sm px-4 py-2">
                URGENT WARNING
              </Badge>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            
            <VisualHierarchyText
              primary="Biblical Truth vs. Pagan Deception"
              secondary="The Authority to Establish Holy Days"
              size="large"
              orientation="vertical"
              animation={true}
              primaryFont="outfit"
              secondaryFont="cormorant"
              primaryWeight="semibold"
              secondaryWeight="medium"
              className="mb-8"
            />
          </motion.div>

          {/* Main Content Card */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-card border-2 border-red-200 dark:border-red-800/50 shadow-lg">
              <CardContent className="p-8 lg:p-12 space-y-8">
                {/* Opening Statement */}
                <div className="text-center space-y-4">
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    <span className="text-red-600 dark:text-red-400 font-semibold">
                      Today's Christian holidays are celebrated worldwide, yet none of them are substantiated in the Biblical text.
                    </span>{" "}
                    All of them are deeply rooted in ancient paganism.
                  </p>
                  <p className="text-lg font-medium text-primary">
                    Does the "church" have the authority to establish holy days or the Lord?
                  </p>
                </div>

                {/* Scripture Evidence */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Ecclesiasticus Scripture */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-primary">God's Authority Over Days</h4>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground mb-2 font-mono">Ecclesiasticus 33:7-9</p>
                      <div className="space-y-2 text-sm leading-relaxed text-left">
                        <p><span className="font-semibold">Verse 7:</span> "Why doth one day excel another, when as all the light of every day in the year is of the sun?"</p>
                        <p><span className="font-semibold">Verse 8:</span> "By the knowledge of the Lord they were distinguished: and he altered seasons and feasts."</p>
                        <p><span className="font-semibold">Verse 9:</span> "Some of them hath He made high days, and hallowed them, and some of them hath He made ordinary days."</p>
                      </div>
                    </div>
                  </div>

                  {/* Leviticus Scripture */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-primary">The LORD's Feasts Only</h4>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground mb-2 font-mono">Leviticus 23:1-2</p>
                      <div className="space-y-2 text-sm leading-relaxed text-left">
                        <p><span className="font-semibold">Verse 1:</span> "And the Lord spake unto Moses saying"</p>
                        <p><span className="font-semibold">Verse 2:</span> "Speak unto the children of Israel, and say unto them concerning the feasts of the Lord, which ye shall proclaim to be holy convocations, even <span className="text-primary font-semibold">these are my feasts</span>."</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Truth Statement */}
                <div className="text-center bg-primary/10 dark:bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-lg font-semibold text-primary mb-2">
                    These verses prove that only the Lord has the authority to establish High Holy days for everyone to keep.
                  </p>
                </div>

                {/* Warning Against Adding to Scripture */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-600 dark:text-red-400 text-center">
                    Never try to justify ignorance or disobedience by proclaiming there is nothing wrong with celebrating 'man made traditions'.
                  </h4>
                  
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800/50">
                    <p className="text-sm text-muted-foreground mb-2 font-mono">Proverbs 30:6</p>
                    <p className="text-sm leading-relaxed text-left">
                      "Add thou not unto his words, lest he reprove thee, and thou be found a liar."
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground text-left leading-relaxed">
                    Christianity and religions around the world are guilty of adding to God's Word, the Holy Bible. Many are punished daily and unexpectedly and many more will be reproved at the 2nd coming of Christ.
                  </p>
                </div>

                {/* Enmity with God */}
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800/50">
                    <p className="text-sm text-muted-foreground mb-2 font-mono">James 4:4-5</p>
                    <div className="space-y-2 text-sm leading-relaxed text-left">
                      <p><span className="font-semibold">Verse 4:</span> "Ye adulterers and adulteresses, know ye not that the friendship of the world is enmity with God? Whosoever therefore will be a friend of the world is the enemy of God."</p>
                      <p><span className="font-semibold">Verse 5:</span> "Do ye think that the scripture saith in vain, the spirit that dwelleth in us lusteth to envy?"</p>
                    </div>
                  </div>

                  <div className="text-left space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Attempting to be a friend of the world - Christianity mixed pagan holidays with biblical meanings.
                    </p>
                    <p>
                      The pagan who once worshipped <span className="text-red-600 dark:text-red-400 font-medium">"the goddess of sexual fertility"</span> was now accepted as a fellow believer in Christ because that pagan day was given a crafty biblical meaning <span className="text-red-600 dark:text-red-400 font-medium">'the day Christ resurrected'</span>.
                    </p>
                    <p>
                      The mythological god Apollo had a sister known as <span className="text-red-600 dark:text-red-400 font-medium">"The Queen of heaven"</span>, she was renamed <span className="text-red-600 dark:text-red-400 font-medium">"Mary the mother of God"</span> and the unlearned are hence justified in the sight of man.
                    </p>
                    <p>
                      Someone can even worship idols; Satan himself, and be okay in the sight of man because the Bible was now associated with that false holiday.
                    </p>
                  </div>
                </div>

                {/* Final Warning */}
                <div className="text-center space-y-4 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The acceptance of these evil deities and the holidays associated with them all stem out of envy of the world.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We shall give a brief history of each of the so called Christian holidays for your edification. You are warned and admonished to either know the truth and be set free or remain bound in sin.
                  </p>
                  <p className="font-semibold text-primary">
                    Remember, only keep the days hallowed by the Lord of Heaven and Earth recorded in the Holy Bible.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link href="/learn/pagan-holidays">
                    <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto" size="lg">
                      <Eye className="w-4 h-4" />
                      Expose Pagan Holidays
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/learn/biblical-holy-days">
                    <Button variant="outline" className="gap-2 w-full sm:w-auto" size="lg">
                      <BookOpen className="w-4 h-4" />
                      Learn Biblical Holy Days
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}