import React, { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import {
  BookOpen,
  Users,
  Crown,
  Scroll,
  Heart,
  Shield,
  Star,
  Globe,
  Flame,
  Sparkles,
  Zap,
  Eye,
  Mountain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import chiefMinisterImg from "../../assets/emm.png";
import chiefMinisterImgWebp from "../../assets/emm.webp";
import elderMinisterImg from "../../assets/cmsa.png";
import elderMinisterImgWebp from "../../assets/cmsa.webp";

const beliefs = [
  {
    title: "The Almighty Creator",
    description:
      "We believe in the Most High God, Creator of heaven and earth, whose name is sacred and to be revered.",
    icon: Crown,
    scripture: "Deuteronomy 6:4",
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-400",
  },
  {
    title: "Yahawashi the Messiah",
    description:
      "We believe Yahawashi (Jesus Christ) is the son of the Most High, our Messiah and Savior who died for our sins.",
    icon: Heart,
    scripture: "John 3:16",
    color: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
  },
  {
    title: "The Holy Scriptures",
    description:
      "We read the entire Bible and believe in the words of the Most High God, and use these instructions as our guide for a righteous life.",
    icon: BookOpen,
    scripture: "2 Timothy 3:16",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "The Twelve Tribes",
    description:
      "We believe the so-called African Americans, Hispanics, Native and Seminole Americans are the true descendants of the twelve tribes of Israel.",
    icon: Shield,
    scripture: "Genesis 49:1-28",
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "The Holy Days",
    description:
      "We observe the biblical feast days and Sabbath as commanded in Scripture, not pagan holidays. God commands us to be holy.",
    icon: Scroll,
    scripture: "Leviticus 23",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    title: "Righteous Living",
    description:
      "We believe in keeping the commandments, statutes, and judgments of the Most High God.",
    icon: Star,
    scripture: "1 John 5:3",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
  },
];

const timeline = [
  {
    year: "The Beginning",
    title: "Founded on Truth",
    description:
      "A small group committed to Scripture without man-made traditions",
    icon: Sparkles,
  },
  {
    year: "The Awakening",
    title: "Identity Revealed",
    description:
      "Discovering the biblical truth about God's chosen people",
    icon: Eye,
  },
  {
    year: "The Growth",
    title: "Community Established",
    description:
      "Building ministries and serving those seeking truth",
    icon: Mountain,
  },
  {
    year: "Today",
    title: "Light Spreading",
    description:
      "A growing movement of believers walking in righteousness",
    icon: Flame,
  },
];

const leaders = [
  {
    name: "Shalamah Ban Banyamyan",
    role: "Chief Minister",
    image: elderMinisterImg,
    webpImage: elderMinisterImgWebp,
  },
  {
    name: "Kahan Ban Lawya",
    role: "Chief Priest",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=800&q=80",
    webpImage: undefined,
  },
  {
    name: "Moshe Ban Gad",
    role: "Elder Minister",
    image: chiefMinisterImg,
    webpImage: chiefMinisterImgWebp,
  },
];

const missionPillars = [
  {
    icon: Globe,
    title: "Teach Truth",
    description:
      "Proclaim the true identity of God's chosen people as revealed in Scripture",
    stat: "Truth Revealed",
  },
  {
    icon: Flame,
    title: "Spread Light",
    description:
      "Be a beacon of truth and righteousness in a world of spiritual darkness",
    stat: "Light Shining",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Foster unity among God's people through love, service, and spiritual growth",
    stat: "Growing Daily",
  },
];

function BeliefCard({
  belief,
  index,
}: {
  belief: (typeof beliefs)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <Card className="h-full relative overflow-hidden border-border/40 bg-card hover:border-primary/40 transition-all duration-500">
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${belief.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Sparkle effect on hover */}
        <motion.div
          animate={
            isHovered
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="absolute top-4 right-4 text-primary"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>

        <CardContent className="p-6 relative z-10">
          <motion.div
            animate={
              isHovered
                ? { scale: 1.1, rotate: 5 }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <div
              className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${belief.color} border border-primary/20`}
            >
              <belief.icon
                className={`h-6 w-6 ${belief.iconColor}`}
              />
            </div>
          </motion.div>

          <h3 className="text-xl font-serif mb-3 text-foreground group-hover:text-primary transition-colors">
            {belief.title}
          </h3>

          <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
            {belief.description}
          </p>

          <Badge
            variant="outline"
            className="text-xs border-primary/30 text-primary"
          >
            {belief.scripture}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function AboutPage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="overflow-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-20 left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[15%] w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-yellow-500/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={reduceMotion ? { opacity: 0.6 } : { y: [-20, 20], opacity: [0.2, 0.8, 0.2] }}
            transition={reduceMotion ? { duration: 0 } : { duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <VisualHierarchyText
                primary="Walking in Truth,"
                secondary="Teaching Scripture"
                secondaryFont="cinzel"
                secondaryWeight="semibold"
                size="large"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              This isn't your typical church experience. We're a
              community on fire with truth, awakening to our
              biblical identity, and walking boldly in
              righteousness.
              <span className="text-primary font-medium">
                {" "}
                This is what you've been searching for.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="px-8 group" asChild>
                <Link to="/learn/12-tribes">
                  <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Discover Your Identity
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8"
                asChild
              >
                <Link to="/ministries">
                  <Users className="mr-2 h-4 w-4" />
                  Join The Movement
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Pillars - Diagonal Layout */}
      <section className="relative py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Mission
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              Three Pillars of Purpose
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We're not just teaching - we're igniting an
              awakening that changes lives forever
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Card className="h-full relative overflow-hidden bg-card border-border/40 hover:border-primary/40 transition-all duration-300">
                  {/* Diagonal accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent transform rotate-45 translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />

                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
                    >
                      <pillar.icon className="h-8 w-8 text-primary" />
                    </motion.div>

                    <h3 className="text-2xl font-serif mb-4 text-foreground">
                      {pillar.title}
                    </h3>

                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm uppercase tracking-wider">
                        {pillar.stat}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-card/50 relative overflow-hidden">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              Walking in The Way
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-12 pb-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                  <div className="bg-primary/5 p-3 rounded-xl border border-primary/10 shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-mono text-primary mb-1 block">{item.year}</span>
                    <h3 className="text-xl font-serif text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground max-w-xl">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs Section - Interactive Grid */}
      <section id="beliefs" className="py-24">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-widest">
                Our Foundation
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 text-foreground">
              Unshakeable Beliefs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              We stand on the rock of Scripture. No traditions
              of men. No compromise. Just the pure, uncut word
              of the Most High.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <belief.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between border-b border-border/50 pb-2 mb-2 group-hover:border-primary/50 transition-colors">
                      <h3 className="text-2xl font-serif text-foreground">
                        {belief.title}
                      </h3>
                      <span className="font-mono text-xs text-primary/80">
                        {belief.scripture}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section id="leaders" className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Leadership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              Shepherds of the Flock
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-card border-border/40 overflow-hidden hover:border-primary/40 transition-colors h-full">
                   <div className="aspect-[4/5] overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
                      <ImageWithFallback 
                        src={leader.image} 
                        webpSrc={leader.webpImage}
                        alt={leader.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                   </div>
                   <CardContent className="p-6 text-center relative">
                      <h3 className="text-xl font-serif mb-1 text-foreground">{leader.name}</h3>
                      <p className="text-primary text-sm font-medium uppercase tracking-widest">{leader.role}</p>
                   </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section - Adaptive Theme */}

      {/* New Clean CTA */}
      <section className="relative bg-background py-20 overflow-hidden border-t border-border/40">
        {/* Background Text - Subtle & Premium */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[18vw] leading-none font-serif font-bold text-foreground/[0.03] whitespace-nowrap tracking-tighter"
          >
            THEE LIGHT OF ZION
          </motion.span>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-around gap-3 max-w-4xl mx-auto">
            {/* Left: Typography focus */}
            <div className="text-center md:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 uppercase tracking-[0.2em] px-3 py-1">
                  Join the Awakening
                </Badge>
                <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-[0.9]">
                  The Truth <br />
                  <span className="text-primary italic">
                    is Waiting.
                  </span>
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed mx-auto md:mx-0">
                You've felt the call. Stop searching and start
                living in truth. Experience the fellowship of
                the awakened this Sabbath.
              </p>
            </div>

            {/* Right: Action focus - Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full md:w-auto"
            >
              <div className="p-2 rounded-3xl bg-gradient-to-br from-foreground/5 to-transparent border border-foreground/5 backdrop-blur-md shadow-2xl">
                <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border/20 shadow-inner min-w-[320px]">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        Next Service
                      </p>
                      <p className="text-foreground font-serif text-lg">
                        Sabbath @ 11:00 AM
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-all hover:scale-[1.02]"
                    asChild
                  >
                    <Link to="/locations">
                      Plan Your Visit
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-lg border-foreground/10 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
