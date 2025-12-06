import React, { useRef, useState, useEffect, Profiler } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  MotionValue,
} from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Crown,
  Shield,
  Heart,
  Users,
  Calendar,
  MapPin,
  ChevronDown,
  Quote,
} from "lucide-react";
import { cn } from "../ui/utils";

// --- Types ---
export interface HeroCharacteristic {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface TribeData {
  tribeName: string;
  hebrewName: string;
  hebrewTransliteration: string;
  meaning: string;
  modernIdentity: string;
  badgeText: string;
  heroDescription: string;
  heroCharacteristics: HeroCharacteristic[];
  historicalConnection: string;
  modernPeopleTitle: string;
  modernDescription: string;
  migrationYear: string;
  territory: string;
  warriorLegacy: string;
  mainHeritageImage: string;
  mainHeritageImageAlt: string;
  tribalLeaderImage: string;
  leaderTitle?: string;
  territoryImage: string;
  territoryImageAlt: string;
  familyHeritageImage: string;
  familyHeritageImageWebp?: string;
  jacobsBlessing: string;
  jacobsBlessingReference: string;
  nextTribeName?: string;
  nextTribePath?: string;
  previousTribeName?: string;
  previousTribePath?: string;
  quoteTitle?: string;
  quoteDescription?: string;
  bibliography?: string[];
}

interface TribePageTemplateProps {
  tribeData: TribeData;
}

// --- Components ---

// 1. Parallax Hero Section
const ParallaxHero = ({ data }: { data: TribeData }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"],
  );
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );
  const scaleText = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.8],
  );

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yBackground, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback
          src={data.mainHeritageImage}
          webpSrc={data.mainHeritageImage?.includes('fm=') ? data.mainHeritageImage.replace(/fm=[^&]*/,'fm=webp') : `${data.mainHeritageImage}${data.mainHeritageImage.includes('?') ? '&' : '?'}fm=webp`}
          alt={data.mainHeritageImageAlt}
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-background dark:from-black/80 dark:via-black/50 dark:to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: opacityText, scale: scaleText }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-white/20 dark:bg-black/40 dark:border-white/10 md:p-16 rounded-3xl shadow-2xl max-w-5xl w-full transition-colors duration-500">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-primary/60" />
              <span className="text-primary/80 uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
                The 12 Tribes of Israel
              </span>
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-primary/60" />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[5rem] font-serif font-bold text-foreground dark:text-white tracking-tighter leading-[0.8] mb-6 drop-shadow-2xl">
              {data.tribeName.toUpperCase()}
            </h1>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-serif italic text-primary mb-8 drop-shadow-md">
                {data.badgeText}
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground dark:text-white/60 font-light tracking-widest uppercase text-sm md:text-base">
              <div className="flex items-center gap-3 text-lg text-foreground dark:text-white drop-shadow-sm font-medium">
                <span className="text-primary">
                  {data.hebrewName}
                </span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{data.hebrewTransliteration}</span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>"{data.meaning}"</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Explore
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </div>
  );
};

// 2. Reveal Text Section
const RevealSection = ({ data }: { data: TribeData }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: "-20% 0px -20% 0px",
    once: true,
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-4 md:px-12 bg-background text-foreground overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative">
          {/* 1. The Title (Option 6 / Image Match) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            {/* Metallic Gradient Text - Cinematic Title */}
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white/80 dark:to-white/20 drop-shadow-2xl mb-6">
              IDENTITY
            </h2>
            {/* Gold Subtitle with wide tracking */}
            <div className="flex items-center justify-center gap-4">
              <div className="hidden md:block h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
              <p className="text-primary text-xs md:text-sm font-medium uppercase tracking-[0.6em] md:tracking-[0.8em] whitespace-nowrap">
                WHO YOU ARE TODAY
              </p>
              <div className="hidden md:block h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
            </div>
          </motion.div>

          {/* 2. The Streamlined Timeline (Option 5 Refined) */}
          <div className="relative pl-4 md:pl-8 max-w-3xl mx-auto">
            <div className="space-y-20">
              {/* Node 1: Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative md:pl-16"
              >
                <div className="prose prose-lg dark:prose-invert text-muted-foreground/80 leading-relaxed">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.heroDescription,
                    }}
                  />
                </div>
              </motion.div>

              {/* Node 2: The Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative md:pl-16"
              >
                {/* Card */}
                <div className="group relative bg-card/30 border border-border p-8 md:p-12 rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                      <h3 className="text-2xl md:text-3xl font-serif text-foreground dark:text-white">
                        {data.modernPeopleTitle}
                      </h3>
                    </div>

                    <div className="h-px w-full bg-border mb-8" />

                    <div
                      className="text-lg text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: data.modernDescription,
                      }}
                    />

                    {/* Footer of card */}
                    <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Verified Lineage</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. The Prophecy (Horizontal Scroll / Special Feature)
const ProphecySection = ({ data }: { data: TribeData }) => {
  return (
    <section className="relative py-40 bg-background text-foreground flex items-center justify-center overflow-hidden">
      {/* Starfield / Particles Effect (CSS based) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors">
            Ancient Prophecy
          </Badge>

          <div className="relative mb-12">
            <Quote className="absolute top-0 left-0 -translate-x-8 -translate-y-8 w-12 h-12 text-primary/20" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50">
              "{data.jacobsBlessing}"
            </h2>
            <Quote className="absolute bottom-0 right-0 translate-x-8 translate-y-8 w-12 h-12 text-primary/20 rotate-180" />
          </div>

          <div className="inline-flex items-center gap-4 px-6 py-3 border-t border-b border-border">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              {data.jacobsBlessingReference}
            </span>
            <span className="w-1 h-1 bg-foreground/30 rounded-full" />
            <span className="text-muted-foreground font-serif italic text-sm">
              The Book of Genesis
            </span>
          </div>

          {/* Historical Context Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 p-6 md:p-8 bg-muted/30 rounded-2xl border border-border backdrop-blur-sm text-left max-w-2xl mx-auto"
          >
            <h4 className="text-primary text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Historical Fulfillment
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {data.historicalConnection}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// 4. Bento Grid Gallery (Modern Layout)
const HeritageGallery = ({ data }: { data: TribeData }) => {
  return (
    <section className="py-32 px-4 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">
              The Legacy
            </h2>
            <p className="text-muted-foreground max-w-md">
              Visual evidence and historical markers of the{" "}
              {data.tribeName} journey.
            </p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-border mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]">
          {/* Large Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 row-span-2 relative group overflow-hidden rounded-2xl"
          >
            <ImageWithFallback
              src={data.mainHeritageImage}
              webpSrc={data.mainHeritageImage?.includes('fm=') ? data.mainHeritageImage.replace(/fm=[^&]*/,'fm=webp') : `${data.mainHeritageImage}${data.mainHeritageImage.includes('?') ? '&' : '?'}fm=webp`}
              alt={data.mainHeritageImageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={1280}
              height={960}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <Badge className="bg-white text-black mb-3 border-0">
                Ancestry
              </Badge>
              <h3 className="text-2xl md:text-4xl font-serif text-white">
                {data.modernIdentity}
              </h3>
            </div>
          </motion.div>

          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-card border border-border rounded-2xl p-8 flex flex-col justify-between group hover:border-primary/30 transition-colors"
          >
            <div className="p-4 bg-primary/5 w-fit rounded-full group-hover:bg-primary/20 transition-colors">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
                Migration
              </h4>
              <p className="text-3xl md:text-4xl font-serif text-foreground">
                {data.migrationYear}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Exile to Americas
              </p>
            </div>
          </motion.div>

          {/* Family Heritage Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl"
          >
            <ImageWithFallback
              src={data.familyHeritageImage}
              webpSrc={data.familyHeritageImageWebp ?? (data.familyHeritageImage?.includes('fm=') ? data.familyHeritageImage.replace(/fm=[^&]*/,'fm=webp') : `${data.familyHeritageImage}${data.familyHeritageImage.includes('?') ? '&' : '?'}fm=webp`)}
              alt={`${data.tribeName} Community`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={800}
              height={600}
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <Users className="w-3 h-3" />
                Community
              </span>
            </div>
          </motion.div>

          {/* Territory Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl"
          >
            <ImageWithFallback
              src={data.territoryImage}
              webpSrc={data.territoryImage?.includes('fm=') ? data.territoryImage.replace(/fm=[^&]*/,'fm=webp') : `${data.territoryImage}${data.territoryImage.includes('?') ? '&' : '?'}fm=webp`}
              alt={data.territoryImageAlt || data.territory}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={800}
              height={600}
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
                {data.territory}
              </span>
            </div>
          </motion.div>

          {/* Tribal Leader / Warrior Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 md:col-start-9 md:row-start-2 row-span-2 relative group overflow-hidden rounded-2xl"
          >
            <ImageWithFallback
              src={data.tribalLeaderImage}
              webpSrc={data.tribalLeaderImage?.includes('fm=') ? data.tribalLeaderImage.replace(/fm=[^&]*/,'fm=webp') : `${data.tribalLeaderImage}${data.tribalLeaderImage.includes('?') ? '&' : '?'}fm=webp`}
              alt={data.leaderTitle || "Tribal Leader"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              width={800}
              height={1200}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-xl font-serif mb-2 text-primary">
                {data.leaderTitle || "Warrior Spirit"}
              </h3>
              <p className="text-sm text-white/70 line-clamp-3">
                {data.warriorLegacy}
              </p>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-8 bg-gradient-to-br from-card to-background border border-border rounded-2xl p-10 flex items-center justify-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <div className="relative z-10">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                {data.quoteTitle
                  ? `"${data.quoteTitle}"`
                  : "Heritage & Legacy"}
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto">
                {data.quoteDescription ||
                  `The spirit of the ${data.tribeName} tribe lives on through their descendants, preserving the ancient covenant in modern times.`}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 6. Bibliography Section
const BibliographySection = ({ data }: { data: TribeData }) => {
  if (!data.bibliography || data.bibliography.length === 0)
    return null;

  const groups = data.bibliography.reduce(
    (acc, item) => {
      const titleMatch = item.match(/[“"]([^”"]+)[”"]/);
      const title = titleMatch ? titleMatch[1] : item;
      const details = titleMatch
        ? item
            .replace(/[“"]([^”"]+)[”"]/, "")
            .trim()
            .replace(/^,?\s*(by)?\s*/i, "")
        : "";

      if (!acc[title]) acc[title] = [];
      if (details) acc[title].push(details);
      return acc;
    },
    {} as Record<string, string[]>,
  );

  return (
    <section className="py-24 bg-muted/20 text-foreground border-t border-border">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-border" />
          <h3 className="text-2xl font-serif text-center">
            Sources & References
          </h3>
          <div className="h-px w-12 bg-border" />
        </div>

        <div className="overflow-hidden rounded-xl border border-border/40 bg-card/20 backdrop-blur-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-primary/5 text-primary uppercase tracking-[0.2em] font-medium text-xs">
              <tr>
                <th className="px-6 py-5 w-20 text-center border-b border-border/40">
                  No.
                </th>
                <th className="px-6 py-5 border-b border-border/40">
                  Book / Source
                </th>
                <th className="px-6 py-5 border-b border-border/40">
                  Details / Citations
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {Object.entries(groups).map(
                ([title, details], idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-primary/5 transition-colors duration-300"
                  >
                    <td className="px-6 py-4 text-center font-mono text-primary/60 group-hover:text-primary transition-colors align-top">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-6 py-4 font-serif text-lg text-foreground/90 align-top font-medium">
                      {title}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground group-hover:text-foreground transition-colors align-top">
                      {details.length > 0 ? (
                        <ul className="space-y-2">
                          {details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                              <span className="leading-relaxed">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="italic opacity-50">
                          General Reference
                        </span>
                      )}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// 5. Navigation / Footer (Cinematic)
const TribeNavigation = ({ data }: { data: TribeData }) => {
  // Define the correct cyclic order of tribes
  const tribeOrder = [
    { name: "Reuben", slug: "/learn/reuben" },
    { name: "Simeon", slug: "/learn/simeon" },
    { name: "Levi", slug: "/learn/levi" },
    { name: "Judah", slug: "/learn/judah" },
    { name: "Zebulun", slug: "/learn/zebulun" },
    { name: "Issachar", slug: "/learn/issachar" },
    { name: "Dan", slug: "/learn/dan" },
    { name: "Gad", slug: "/learn/gad" },
    { name: "Asher", slug: "/learn/asher" },
    { name: "Naphtali", slug: "/learn/naphtali" },
    { name: "Ephraim", slug: "/learn/ephraim" },
    { name: "Benjamin", slug: "/learn/benjamin" },
  ];

  // Find current tribe index with normalization
  const currentIndex = tribeOrder.findIndex(
    (t) =>
      t.name.toLowerCase() === data.tribeName.toLowerCase() ||
      (t.name === "Zebulun" && data.tribeName === "Zebulon"),
  );

  // Calculate Previous and Next based on order
  const prevTribe =
    currentIndex !== -1
      ? tribeOrder[
          (currentIndex - 1 + tribeOrder.length) %
            tribeOrder.length
        ]
      : {
          name: data.previousTribeName,
          slug: data.previousTribePath,
        };

  const nextTribe =
    currentIndex !== -1
      ? tribeOrder[(currentIndex + 1) % tribeOrder.length]
      : { name: data.nextTribeName, slug: data.nextTribePath };

  return (
    <nav className="bg-background py-24 border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Previous */}
          {prevTribe?.name && prevTribe?.slug ? (
            <Link
              to={prevTribe.slug}
              className="group text-left w-full md:w-auto"
            >
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-hover:text-[#D4AF37] transition-colors">
                Previous Tribe
              </span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif text-foreground group-hover:translate-x-2 transition-transform duration-300">
                  {prevTribe.name}
                </span>
              </div>
            </Link>
          ) : (
            <div className="w-full md:w-auto" />
          )}

          {/* Center Hub */}
          <Link
            to="/learn/12-tribes"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
              <Crown className="w-8 h-8" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">
              Return to Kingdom
            </span>
          </Link>

          {/* Next */}
          {nextTribe?.name && nextTribe?.slug ? (
            <Link
              to={nextTribe.slug}
              className="group text-right w-full md:w-auto flex flex-col items-end"
            >
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-hover:text-[#D4AF37] transition-colors">
                Next Tribe
              </span>
              <div className="flex items-center gap-4 flex-row-reverse">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif text-foreground group-hover:-translate-x-2 transition-transform duration-300">
                  {nextTribe.name}
                </span>
              </div>
            </Link>
          ) : (
            <div className="w-full md:w-auto" />
          )}
        </div>
      </div>
    </nav>
  );
};

// --- Main Template Component ---

export function TribePageTemplate({
  tribeData,
}: TribePageTemplateProps) {
  return (
    <Profiler id="TribePageTemplate" onRender={(id, phase, actualDuration) => { if (phase === 'mount' || phase === 'update') { console.log(id, phase, actualDuration); } }}>
    <div className="bg-background min-h-screen text-foreground selection:bg-[#D4AF37] selection:text:black">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Smooth Scroll Wrapper Content */}
      <main className="relative z-10">
        <ParallaxHero data={tribeData} />
        <RevealSection data={tribeData} />
        <ProphecySection data={tribeData} />
        <HeritageGallery data={tribeData} />
        <BibliographySection data={tribeData} />
        <TribeNavigation data={tribeData} />
      </main>

      {/* Sticky Bottom Bar for Quick Info (Optional, appears after hero) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3"
      >
        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
        <span className="text-xs uppercase tracking-widest text-foreground/80">
          Reading: {tribeData.tribeName}
        </span>
      </motion.div>
    </div>
    </Profiler>
  );
}
