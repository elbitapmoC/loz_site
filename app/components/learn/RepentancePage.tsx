'use client';

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  BookOpen,
  Heart,
  Shield,
  Crown,
  Users,
  Scroll,
  Star,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Quote,
  Eye,
  Target,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const repentanceSteps = [
  {
    number: "01",
    title: "Admit Unmanageability",
    description:
      "We must admit we were powerless over sin—that our lives had become unmanageable. Acknowledge that sin has control over your life and you cannot overcome it through willpower alone.",
    icon: Heart,
    scripture: "1 John 1:9",
  },
  {
    number: "02",
    title: "Reflection and Self-Examination",
    description:
      "Came to believe that God's Word could restore us to sanity and righteousness through honest reflection. We must examine our hearts and motives honestly, seeking God's perspective on our condition.",
    icon: Eye,
    scripture: "Lamentations 3:40",
  },
  {
    number: "03",
    title: "List the Consequences",
    description:
      "Made a searching and fearless moral inventory of the damage sin has caused. We must document how sin has affected our relationships and acknowledge the spiritual damage caused.",
    icon: Scroll,
    scripture: "Numbers 32:23",
  },
  {
    number: "04",
    title: "Create a Plan for Change",
    description:
      "Made a decision to turn our will and our lives over to the care of God with a concrete plan. We must develop specific strategies to avoid temptation and create accountability structures.",
    icon: Target,
    scripture: "Proverbs 16:9",
  },
  {
    number: "05",
    title: "Seek Support",
    description:
      "Admitted to God, to ourselves, and to another human being the exact nature of our wrongs. We must find trustworthy spiritual advisors and confess specific sins to mature believers.",
    icon: Users,
    scripture: "James 5:16",
  },
  {
    number: "06",
    title: "Surround Yourself with Godly People",
    description:
      "Were entirely ready to have God remove all these defects of character through godly fellowship. Get around like believers who are also Israelites, ensuring they do not add or take away from Scripture.",
    icon: Crown,
    scripture: "Proverbs 27:17",
  },
  {
    number: "07",
    title: "Turn Away from Sin",
    description:
      "Humbly asked Him to remove our shortcomings and committed to walking in newness of life. With understanding that we are the biblical Israelites, endeavor to keep the laws of God in the faith of Christ.",
    icon: CheckCircle,
    scripture: "Ephesians 4:28",
  },
];

const currentSins = [
  {
    sin: "Adultery",
    description:
      "(Men) Taking another mans wife. (Women) Laying with a person that's not their husband.",
  },
  {
    sin: "Dietary",
    description:
      "Eating that which was determined to be unclean (i.e. Pork)",
  },
  {
    sin: "Idolatry",
    description:
      "Christianity and the Cross, Islam and the Rock, Catholicism, and other religions",
  },
  {
    sin: "Murder",
    description:
      "Hating your neighbor in your heart / Taking your neighbors life (Cain and Abel).",
  },
  {
    sin: "Covetousness",
    description: "Taking what belongs/pertains to others",
  },
];

const fellowshipGuidelines = [
  "Do not add or take away from the words written in the Bible",
  "Understand that NOTHING in the Bible is up for interpretation",
  "Do not alter high holy days or marriage laws",
  "Follow the scriptures exactly as written",
];

export function RepentancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 text-sm">
                Biblical Teaching
              </Badge>

              <div className="my-12">
                <VisualHierarchyText
                  primary="How to Repent:"
                  secondary="A Biblical Guide"
                  secondaryFont="cormorant"
                  secondaryWeight="semibold"
                  size="medium"
                />
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The word "repent" is commonly spoken worldwide,
                yet its true meaning is often misunderstood.
                This guide will uncover what repentance truly
                means according to the Holy Bible.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <Quote className="h-6 w-6 text-primary mb-3 mx-auto" />
                <blockquote className="text-lg italic text-primary">
                  "From that time Jesus began to preach, and to
                  say, Repent: for the Kingdom of heaven is at
                  hand"
                </blockquote>
                <cite className="text-sm text-muted-foreground mt-2 block">
                  — Matthew 4:17
                </cite>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Who is Repentance For Section */}
      <section className="py-16 dark:bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Who is Repentance For?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Contrary to popular belief that repentance is
                for everyone who loves Christ, the Bible
                clarifies from Genesis to Revelations that there
                is only one nation able to repent:
              </p>

              <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Crown className="h-5 w-5 mr-2" />
                  The Israelites
                </h3>
                <p className="opacity-90">
                  Identified as the so-called American Blacks,
                  Hispanics, Native and Seminole Indians.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Scroll className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Our Distinct Covenant
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    The nation of Israel has always had a
                    distinct difference from other nations with
                    specific laws for:
                  </p>
                  <div className="mt-4 space-y-1 text-sm">
                    <div>• Food consumption</div>
                    <div>• Daily apparel</div>
                    <div>• Gathering together</div>
                    <div>• Holy days observance</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Must We Repent Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Why Must We Repent?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We must repent because we broke the commandments
              of the Most High repeatedly from the time of
              Genesis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <AlertCircle className="h-8 w-8 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-4">
                    The Origin of Sin
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ourselves. Provoked with what appeals to our
                    eye in spite it being against God. It's time
                    to come back to who we are, start keeping
                    his commandments as it is written. So we can
                    get back to being a nation of Kings and
                    Priests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Scroll className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">
                    The Curses Upon Israel
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As a result of breaking the laws of the
                    Heavenly Father, curses fell upon the
                    Israelites.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Read Deuteronomy 28:15-68
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Current Sins Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Current Sins Among Our People
            </h3>
            <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Today, the Israelites (so-called Negroes, West
              Indians, Haitians, Native Americans, and
              Hispanics) are in the midst of various sins
              including:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSins.map((item, index) => (
                <motion.div
                  key={item.sin}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-destructive mb-2">
                        {item.sin}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-4 flex items-center justify-center text-center">
                    <div>
                      <Star className="h-6 w-6 text-muted-foreground mb-2 mx-auto" />
                      <h4 className="font-semibold text-muted-foreground mb-2">
                        And Much More
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        All violations of the Heavenly Father's
                        commandments
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Repent Steps Section */}
      <section className="py-16 dark:bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              The 7-Step Repentance Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A practical, biblical recovery program providing
              clear, actionable steps for turning from sin to
              righteousness. This process involves cleansing our
              minds by humbling ourselves to the scriptures of
              the Most High and Christ.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {repentanceSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <span className="text-primary font-semibold">
                            {step.number}
                          </span>
                        </div>
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {step.scripture}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Begin Your Journey of Repentance
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              True repentance according to the Bible is
              specifically for the Israelites and involves a
              complete transformation of life through daily
              Bible study, acknowledgment of sins, obedience to
              commandments, proper fellowship, and separation
              from worldly practices.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <Quote className="h-8 w-8 mx-auto mb-4 opacity-80" />
              <p className="italic text-lg opacity-90">
                "Everything begins with Christ and will end when
                Christ returns, which is the restoration of the
                nation of Israel, who are the elect of God."
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/learn/12-tribes"
                className="group inline-flex items-center bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg text-white font-medium"
              >
                Next: Learn About the 12 Tribes
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}