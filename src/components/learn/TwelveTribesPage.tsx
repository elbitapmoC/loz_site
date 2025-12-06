import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Crown,
  Users,
  Scroll,
  Star,
  ArrowRight,
  Quote,
  Shield,
  Sword,
  Heart,
  Mountain,
  Anchor,
  Scale,
  Wheat,
  Ship,
  Zap,
  Gem,
  Target,
  Home,
  Clock,
  Map,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";

// --- Data Definitions ---

const twelveTribes = [
  {
    name: "Reuben",
    hebrew: "רְאוּבֵן",
    transliteration: "Rəʼūḇēn",
    description:
      "The firstborn of Jacob. Though unstable as water, he represents the beginning of strength.",
    characteristic: "The Firstborn",
    icon: Crown,
    color: "from-red-600/30 to-red-900/10",
    borderColor: "border-red-500/30",
    slug: "/learn/reuben",
    gem: "Sardius",
  },
  {
    name: "Simeon",
    hebrew: "שִׁמְעוֹן",
    transliteration: "Šīməʻōn",
    description:
      "Instruments of cruelty are in their habitations. Known for fierce zeal.",
    characteristic: "The Fierce",
    icon: Sword,
    color: "from-amber-400/30 to-amber-700/10",
    borderColor: "border-amber-500/30",
    slug: "/learn/simeon",
    gem: "Topaz",
  },
  {
    name: "Levi",
    hebrew: "לֵוִי",
    transliteration: "Lēwī",
    description:
      "Set apart for the service of God. They have no inheritance but the Lord.",
    characteristic: "The Priests",
    icon: Star,
    color: "from-emerald-500/30 to-emerald-900/10",
    borderColor: "border-emerald-500/30",
    slug: "/learn/levi",
    gem: "Carbuncle",
  },
  {
    name: "Judah",
    hebrew: "יְהוּדָה",
    transliteration: "Yəhūdā",
    description:
      "The lawgiver. The scepter shall not depart from Judah until Shiloh come.",
    characteristic: "The Kings",
    icon: Crown,
    color: "from-sky-500/30 to-sky-900/10",
    borderColor: "border-sky-500/30",
    slug: "/learn/judah",
    gem: "Emerald",
  },
  {
    name: "Zebulun",
    hebrew: "זְבוּלֻן",
    transliteration: "Zəḇūlun",
    description:
      "He shall dwell at the haven of the sea; and he shall be for an haven of ships.",
    characteristic: "The Seafarers",
    icon: Ship,
    color: "from-teal-500/30 to-teal-900/10",
    borderColor: "border-teal-500/30",
    slug: "/learn/zebulun",
    gem: "Beryl",
  },
  {
    name: "Issachar",
    hebrew: "יִשָּׂשכָר",
    transliteration: "Yīssāḵār",
    description:
      "A strong ass couching down between two burdens. Understanding of times.",
    characteristic: "Understanding Times",
    icon: BookOpen,
    color: "from-indigo-500/30 to-indigo-900/10",
    borderColor: "border-indigo-500/30",
    slug: "/learn/issachar",
    gem: "Amethyst",
  },
  {
    name: "Dan",
    hebrew: "דָּן",
    transliteration: "Dān",
    description:
      "Dan shall judge his people. A serpent by the way, an adder in the path.",
    characteristic: "The Judges",
    icon: Scale,
    color: "from-blue-600/30 to-blue-900/10",
    borderColor: "border-blue-500/30",
    slug: "/learn/dan",
    gem: "Sapphire",
  },
  {
    name: "Gad",
    hebrew: "גָּד",
    transliteration: "Gāḏ",
    description:
      "A troop shall overcome him: but he shall overcome at the last.",
    characteristic: "The Warriors",
    icon: Shield,
    color: "from-orange-600/30 to-orange-900/10",
    borderColor: "border-orange-500/30",
    slug: "/learn/gad",
    gem: "Ligure",
  },
  {
    name: "Asher",
    hebrew: "אָשֵׁר",
    transliteration: "'Āšēr",
    description:
      "His bread shall be fat, and he shall yield royal dainties.",
    characteristic: "The Blessed",
    icon: Gem,
    color: "from-yellow-500/30 to-yellow-800/10",
    borderColor: "border-yellow-500/30",
    slug: "/learn/asher",
    gem: "Agate",
  },
  {
    name: "Naphtali",
    hebrew: "נַפְתָּלִי",
    transliteration: "Nap̄tālī",
    description:
      "A hind let loose: he giveth goodly words. Satisfied with favor.",
    characteristic: "The Wrestlers",
    icon: Zap,
    color: "from-purple-500/30 to-purple-900/10",
    borderColor: "border-purple-500/30",
    slug: "/learn/naphtali",
    gem: "Diamond",
  },
  {
    name: "Ephraim",
    hebrew: "אֶפְרָיִם",
    transliteration: "Ephrayim",
    description:
      "Doubly fruitful. The head of the Northern Kingdom, representing the multitude of nations.",
    characteristic: "The Fruitful",
    icon: Wheat,
    color: "from-stone-500/30 to-stone-800/10",
    borderColor: "border-stone-500/30",
    slug: "/learn/ephraim",
    gem: "Onyx",
  },
  {
    name: "Benjamin",
    hebrew: "בִּנְיָמִין",
    transliteration: "Bīnyāmīn",
    description:
      "He shall ravin as a wolf: in the morning he shall devour the prey.",
    characteristic: "The Beloved",
    icon: Heart,
    color: "from-pink-600/30 to-pink-900/10",
    borderColor: "border-pink-500/30",
    slug: "/learn/benjamin",
    gem: "Jasper",
  },
];

const captivityTimeline = [
  {
    year: "1500 B.C.",
    title: "Egyptian Captivity",
    description:
      "The house of bondage where Israel became a nation.",
  },
  {
    year: "720 B.C.",
    title: "Assyrian Captivity",
    description:
      "The Northern Kingdom (10 Tribes) taken into exile.",
  },
  {
    year: "586 B.C.",
    title: "Babylonian Captivity",
    description: "Judah and Benjamin taken to Babylon.",
  },
  {
    year: "538 B.C.",
    title: "Persian Captivity",
    description: "Under Cyrus and later Persian rulers.",
  },
  {
    year: "332 B.C.",
    title: "Greek Captivity",
    description:
      "The Hellenistic period under Alexander and successors.",
  },
  {
    year: "70 A.D.",
    title: "Roman Captivity",
    description:
      "The destruction of Jerusalem and the great dispersion.",
  },
  {
    year: "1619 A.D.+",
    title: "American Captivity",
    description:
      "The final captivity of the scattered remnant.",
  },
];

// --- Component ---

export function TwelveTribesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* 1. Hero Section - High Impact */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-border/40">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background via-background to-black opacity-90" />
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1642313985076-356edaa90949?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZHVzdCUyMGJsYWNrJTIwYmFja2dyb3VuZCUyMGFic3RyYWN0fGVufDF8fHx8MTc2NDI5ODA1M3ww&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container relative z-10 px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center justify-center">
              <div className="h-px w-8 bg-primary/60 mr-4" />
              <span className="text-primary/80 uppercase tracking-[0.3em] text-xs font-medium">
                Ancient Heritage
              </span>
              <div className="h-px w-8 bg-primary/60 ml-4" />
            </div>

            <VisualHierarchyText
              primary="The Twelve Tribes"
              secondary="Of Israel"
              size="large"
              secondaryFont="cormorant"
              orientation="vertical"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10"
            >
              <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
              <p className="font-serif italic text-2xl text-foreground/80 max-w-3xl mx-auto">
                "All these are the twelve tribes of Israel: and
                this is it that their father spake unto them."
              </p>
              <p className="mt-2 text-sm text-primary/60 uppercase tracking-widest">
                Genesis 49:28
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Tribes Grid - The Core Content */}
      <section className="py-20 lg:py-32 relative">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border/40 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-2">
                The Sons of Jacob
              </h2>
              <p className="text-muted-foreground max-w-md">
                Explore the characteristics and prophecies of
                each tribe.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground border border-border/50 px-3 py-1 rounded-full bg-muted/20">
              <Gem className="w-3 h-3 text-primary" />
              <span>Gemstone Representation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {twelveTribes.map((tribe, idx) => {
              // Mapping for modern identity context
              const identityMap: Record<string, string> = {
                Reuben: "Seminole Indians",
                Simeon: "Dominicans",
                Levi: "Haitians",
                Judah: "Black Americans",
                Zebulun: "Guatemala to Panama",
                Issachar: "Mexicans",
                Dan: "Included in Judge",
                Gad: "Native Americans",
                Asher: "Colombia to Uruguay",
                Naphtali: "Argentina & Chile",
                Joseph: "Puerto Ricans & Cubans",
                Ephraim: "Puerto Ricans",
                Benjamin: "West Indians",
              };

              return (
                <motion.div
                  key={tribe.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.5,
                  }}
                >
                  <Link
                    to={tribe.slug}
                    className="block h-full group"
                  >
                    <div className="h-full relative bg-card/30 border border-border/40 hover:border-primary/40 transition-all duration-500 overflow-hidden rounded-xl flex flex-col group-hover:shadow-2xl group-hover:shadow-primary/5">
                      {/* Hover Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${tribe.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      <div className="p-6 relative z-10 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tribe.color} flex items-center justify-center border ${tribe.borderColor} shadow-lg`}
                          >
                            <tribe.icon className="w-6 h-6 text-foreground/90" />
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-background/50 backdrop-blur border-border/50 pl-1.5 pr-3 py-1.5 h-auto flex gap-2.5 items-center group-hover:border-primary/30 transition-colors"
                          >
                            <div
                              className={`w-6 h-6 rounded-full shrink-0 bg-gradient-to-br ${
                                {
                                  Sardius:
                                    "from-red-500 via-red-600 to-red-950",
                                  Topaz:
                                    "from-amber-300 via-amber-500 to-amber-800",
                                  Carbuncle:
                                    "from-red-600 via-red-700 to-red-950",
                                  Emerald:
                                    "from-emerald-400 via-emerald-600 to-emerald-950",
                                  Sapphire:
                                    "from-blue-500 via-blue-700 to-blue-950",
                                  Diamond:
                                    "from-cyan-100 via-blue-100 to-blue-400",
                                  Ligure:
                                    "from-orange-400 via-orange-500 to-orange-800",
                                  Agate:
                                    "from-stone-400 via-stone-500 to-stone-700",
                                  Amethyst:
                                    "from-purple-400 via-purple-600 to-purple-950",
                                  Beryl:
                                    "from-teal-300 via-teal-500 to-teal-800",
                                  Onyx: "from-neutral-700 via-neutral-800 to-black",
                                  Jasper:
                                    "from-yellow-700 via-red-700 to-green-800",
                                }[tribe.gem] ||
                                "from-primary via-primary/80 to-primary/50"
                              } shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden`}
                            >
                              <div className="absolute top-[15%] left-[20%] w-[35%] h-[35%] bg-gradient-to-br from-white to-transparent rounded-full opacity-90 blur-[0.5px]" />
                              <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-black/20 rounded-full blur-[2px]" />
                            </div>
                            <span className="font-serif tracking-wide text-muted-foreground">
                              {tribe.gem}
                            </span>
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-serif font-medium group-hover:text-primary transition-colors duration-300">
                            {tribe.name}
                          </h3>
                          <p
                            className="text-sm text-muted-foreground/60 font-serif italic mb-4"
                            dir="rtl"
                          >
                            {tribe.hebrew}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {tribe.description}
                          </p>
                        </div>

                        {/* Footer / Modern Identity */}
                        <div className="mt-auto pt-4 border-t border-border/30">
                          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                            Modern Identity
                          </p>
                          <p className="text-sm font-medium text-primary/90">
                            {identityMap[tribe.name] ||
                              "Scatterd Identity"}
                          </p>
                        </div>

                        {/* Hover Indicator */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Captivity Timeline - Comprehensive */}
      <section className="py-20 bg-muted/20">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="mx-4">
                  <Clock className="w-6 h-6 text-primary/80" />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                The Cycles of Captivity
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                History bears witness to the specific timeline
                of captivities prophesied for the Israelite
                nation. From the iron furnaces of Egypt to the
                modern era.
              </p>

              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-amber-500/10 to-primary/20 rounded-2xl blur-sm opacity-50" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 px-10 py-8 rounded-xl shadow-xl max-w-3xl mx-auto">
                  <Quote className="w-8 h-8 text-primary/40 mb-4 mx-auto" />
                  <p className="font-serif italic text-foreground/90 text-xl md:text-2xl leading-relaxed">
                    "Who gave Ya'aqob for plunder, and Yasara'al
                    to the robbers? Was it not Yahuah, He
                    against whom we sinned?"
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <div className="h-px w-8 bg-primary/30" />
                    <p className="text-sm text-primary font-bold tracking-[0.2em] uppercase">
                      Isaiah 42:24
                    </p>
                    <div className="h-px w-8 bg-primary/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Steps */}
          <div className="relative mt-24">
            {/* Central Glow Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2 z-0 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

            <div className="space-y-20">
              {captivityTimeline.map((period, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                  }}
                  className={`flex flex-col md:flex-row gap-10 items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full md:text-right pl-12 md:pl-0 z-10">
                    <div
                      className={`group relative p-8 rounded-2xl bg-card/30 border border-white/5 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                      <div
                        className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? "" : "md:justify-end"}`}
                      >
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20 font-mono font-bold text-base px-4 py-1"
                        >
                          {period.year}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                        {period.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                        {period.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 z-20">
                    <div className="relative flex items-center justify-center w-4 h-4">
                      <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping opacity-75" />
                      <div className="relative w-4 h-4 bg-background rounded-full border-4 border-primary shadow-[0_0_10px_var(--primary)]" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Northern & Southern Kingdoms - Divided Fate */}
      <section className="py-24 relative overflow-hidden">
        {/* Connecting line from previous timeline */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/40 to-transparent z-0 hidden md:block" />

        <div className="container px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <VisualHierarchyText
                primary="A Nation Divided"
                secondary="Two Kingdoms, Two Paths"
                size="medium"
                secondaryFont="cormorant"
              />
              <p className="mt-6 text-muted-foreground">
                After Solomon's reign, the nation split into two
                kingdoms, each facing distinct captivities.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Northern Kingdom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative overflow-hidden border-blue-500/30 bg-card h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/15 border border-blue-400/40">
                      <Crown className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-foreground">
                        Northern Kingdom
                      </h3>
                      <p className="text-sm text-foreground/80">
                        The Ten Tribes
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Map className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                      <p className="text-sm text-foreground/90">
                        Migrated to the Americas following
                        Assyrian conquest
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                      <p className="text-sm text-foreground/90">
                        Indigenous peoples of North and South
                        America
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-foreground/75 italic">
                      "They shall go into captivity" —
                      Deuteronomy 28:41
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Southern Kingdom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden border-amber-500/30 bg-card h-full">
                <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-400/40">
                      <Scroll className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-foreground">
                        Southern Kingdom
                      </h3>
                      <p className="text-sm text-foreground/80">
                        House of Judah
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Ship className="w-4 h-4 text-amber-300 mt-1 flex-shrink-0" />
                      <p className="text-sm text-foreground/90">
                        Taken into captivity via ships across
                        the Atlantic
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Anchor className="w-4 h-4 text-amber-300 mt-1 flex-shrink-0" />
                      <p className="text-sm text-foreground/90">
                        African-Americans descended from the
                        transatlantic trade
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-foreground/75 italic">
                      "The Lord shall bring thee into Egypt
                      again with ships" — Deuteronomy 28:68
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Next Steps CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Walk in the Ancient Paths
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Understanding who you are is only the first step. Keeping God's laws requires us to separate ourselves from the customs of this world—putting away pagan holidays to observe the Holy Days ordained by the Most High.
            </p>
            <Link to="/learn/holy-days">
              <Button size="lg" className="gap-2 group h-12 px-8 text-base">
                <Calendar className="w-5 h-5" />
                Learn the Holy Days
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
