import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BookshelfLibrary } from "./BookshelfLibrary";
import {
  Crown,
  MapPin,
  Heart,
  Scroll,
  Shield,
  Mountain,
  Users,
  Quote,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  AlertTriangle,
  Gem,
  Target,
  Calendar,
  Home,
} from "lucide-react";

const biblicalFoundation = [
  {
    title: "Birth and Name",
    description:
      "First son born to Jacob and Leah. His name means 'See, son' (reu-ben), reflecting Leah's hope that her fertility would lead to Jacob's love.",
    reference: "Genesis 29:32",
    icon: Crown,
  },
  {
    title: "The Sin",
    description:
      "Reuben's relationship with Bilhah, his father's concubine, committed forty years before Jacob's death, left an indelible mark on his character.",
    reference: "Genesis 35:22",
    icon: AlertTriangle,
  },
  {
    title: "Lost Birthright",
    description:
      "As a result of his sin, he forfeited the prerogatives of the birthright, which was transferred to Joseph.",
    reference: "1 Chronicles 5:1",
    icon: Target,
  },
];

const tribalCharacteristics = [
  {
    title: "Instability",
    description:
      "Characterized as 'unstable as water' or 'turbulent as water,' reflecting his lack of self-control and inconsistent behavior.",
    icon: Mountain,
    color: "from-red-500/20 to-red-600/10",
  },
  {
    title: "The Ruby Symbol",
    description:
      "Reuben's tribal symbol was the ruby, representing fertility and his shame. The mandrake flowers he gave Leah also became associated with his tribe.",
    icon: Gem,
    color: "from-red-500/20 to-red-600/10",
  },
  {
    title: "Population",
    description:
      "During the wilderness period, the tribe numbered 46,500 adult males of military age, later decreasing to 43,730.",
    icon: Users,
    color: "from-red-500/20 to-red-600/10",
  },
];

const historicalEvents = [
  {
    title: "Saving Joseph",
    description:
      "Reuben convinced his brothers to put Joseph in a pit instead of killing him, hoping to secretly rescue him later.",
    reference: "Genesis 37:21-22",
    icon: Shield,
  },
  {
    title: "Recognition of Divine Justice",
    description:
      "Years later, Reuben recognized their difficulties in Egypt as divine punishment for their treatment of Joseph.",
    reference: "Genesis 42:22",
    icon: BookOpen,
  },
  {
    title: "The First Penitent",
    description:
      "Despite his failures, Reuben showed genuine repentance, fasting, wearing sackcloth, and opening the portal of teshuvah for others.",
    reference: "Midrash",
    icon: Heart,
  },
];

const spiritualLessons = [
  {
    title: "Consequences of Sin",
    description:
      "Reuben's story demonstrates that even sincere repentance cannot always prevent the temporal consequences of sin.",
    icon: AlertTriangle,
    verse: "Be sure your sin will find you out",
    reference: "Numbers 32:23",
  },
  {
    title: "Need for Self-Control",
    description:
      "Reuben's instability serves as a warning about the need for self-control and steadfastness in faith.",
    icon: Shield,
    verse:
      "He that hath no rule over his own spirit is like a city that is broken down",
    reference: "Proverbs 25:28",
  },
  {
    title: "Power of Repentance",
    description:
      "Despite failures, Reuben's genuine repentance opened new possibilities and demonstrated the path of teshuvah.",
    icon: Heart,
    verse:
      "If we confess our sins, he is faithful and just to forgive us our sins",
    reference: "1 John 1:9",
  },
];

const keyScriptures = [
  {
    reference: "Genesis 29:32",
    description: "Birth and naming of Reuben",
    category: "Birth",
    quote:
      "And Leah conceived, and bare a son, and she called his name Reuben: for she said, Surely the LORD hath looked upon my affliction",
  },
  {
    reference: "Genesis 49:3-4",
    description: "Jacob's prophetic blessing and judgment",
    category: "Prophecy",
    quote:
      "Reuben, thou art my firstborn, my might, and the beginning of my strength... Unstable as water, thou shalt not excel",
  },
  {
    reference: "1 Chronicles 5:1",
    description: "Loss of birthright to Joseph",
    category: "Consequences",
    quote:
      "Now the sons of Reuben the firstborn of Israel, (for he was the firstborn; but, forasmuch as he defiled his father's bed, his birthright was given unto the sons of Joseph)",
  },
  {
    reference: "Numbers 32:1-5",
    description: "Request for territory east of Jordan",
    category: "Settlement",
    quote:
      "Now the children of Reuben and the children of Gad had a very great multitude of cattle",
  },
];

const notableDescendants = [
  {
    name: "Hanoch",
    description: "Founder of the Hanochites clan",
    significance:
      "One of the four main family groups within Reuben",
  },
  {
    name: "Pallu",
    description: "Founder of the Palluites clan",
    significance:
      "Father of Eliab, who joined Korah's rebellion",
  },
  {
    name: "Hezron",
    description: "Founder of the Hezronites clan",
    significance:
      "One of the four main family groups within Reuben",
  },
  {
    name: "Carmi",
    description: "Founder of the Carmites clan",
    significance:
      "One of the four main family groups within Reuben",
  },
];

export function ReubenPage() {
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
              <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/30">
                The Unconquered Tribe
              </Badge>

              <div className="my-12">
                <VisualHierarchyText
                  primary="Tribe of"
                  secondary="Reuben"
                  secondaryFont="cormorant"
                  secondaryWeight="semibold"
                  size="large"
                />
              </div>

              {/* Hebrew name */}
              <div className="mb-8">
                <div className="text-4xl font-hebrew text-primary mb-2">
                  רְאוּבֵן
                </div>
                <div className="text-lg text-muted-foreground italic">
                  Rəʼūḇēn - "See, son"
                </div>
                <div className="text-lg font-semibold text-primary mt-2">
                  Seminole Indians
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Reuben, the firstborn son of Jacob, was part of
                the "Ten Tribes of Israel" migration to the
                Americas in 536 B.C. The Seminole Indians,
                believed to be descendants of the tribe of
                Reuben, have a rich history marked by{" "}
                <span className="text-primary font-semibold">
                  dignity, power, and resilience
                </span>
                . Their story is one of unwavering resistance
                and the fulfillment of biblical prophecy.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <Crown className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">
                    Excellency of Dignity
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nobility in character and dress, wearing
                    mitres and garments of excellent design
                  </p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">
                    Excellency of Power
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Known for fierce resistance against
                    colonizers and formidable warfare
                  </p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">
                    Honor & Resistance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Refused to enslave others, accepting runaway
                    slaves into their communities
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                <p className="text-sm text-amber-700 font-medium">
                  <span className="block mb-1">
                    🏺 Historical Connection:
                  </span>
                  Spanish explorer Antonio Montezinos
                  encountered Seminoles in the mountains of
                  Quito, where they recited the Shema in Hebrew
                  and identified themselves as the tribe of
                  Reuben.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Biblical Foundation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              Discover Your Heritage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple truths about your ancestral connection to
              help you understand who you are and where you come
              from.
            </p>
          </motion.div>

          {/* Simplified Heritage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Who You Are Today - HERO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 rounded-2xl p-10 relative overflow-hidden shadow-xl"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <Badge className="bg-primary text-primary-foreground mb-4 text-sm px-4 py-2">
                      Who You Are Today
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4 leading-tight">
                      You Are the Seminole People
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-6">
                      Descendants of Reuben • Living in Florida
                    </h4>
                  </div>
                  <Users className="h-12 w-12 text-primary/40 flex-shrink-0" />
                </div>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">
                      The Seminole Nation of Florida
                    </strong>{" "}
                    carries the bloodline of Reuben, first son
                    of Jacob (Israel). Your people migrated from
                    the Middle East in 536 B.C., eventually
                    settling in the Florida Everglades.
                  </p>
                  <p>
                    Through centuries of resistance and
                    survival, the Seminole people have preserved
                    their Hebrew identity while becoming known
                    as the{" "}
                    <em className="text-primary">
                      "Unconquered People"
                    </em>{" "}
                    - never defeated in war, never conquered by
                    any nation.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      2500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years of Heritage
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      ∞
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Never Conquered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      536 BC
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Migration to America
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Ancient Bloodline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Ancient Bloodline
              </h3>
              <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
                Reuben • First Son
              </Badge>
              <p className="text-muted-foreground leading-relaxed">
                Reuben was Jacob's firstborn, making you part of
                an ancient covenant family that stretches back
                thousands of years to the patriarchs.
              </p>
            </motion.div>
          </div>

          {/* Secondary Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Migration Journey */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-amber-600 mr-3" />
                <h4 className="font-semibold">
                  Migration Timeline
                </h4>
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">
                536 B.C.
              </div>
              <p className="text-sm text-muted-foreground">
                Ten Lost Tribes migration from Middle East to
                the Americas, eventually becoming the Creek and
                Seminole peoples.
              </p>
            </motion.div>

            {/* Geographic Settlement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-green-600 mr-3" />
                <h4 className="font-semibold">Territory</h4>
              </div>
              <div className="text-sm font-medium text-green-600 mb-2">
                Georgia → Florida
              </div>
              <p className="text-sm text-muted-foreground">
                From Oconee Creek origins to the Florida
                Everglades - your promised land and unconquered
                refuge.
              </p>
            </motion.div>

            {/* Warrior Spirit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="font-semibold">
                  Warrior Legacy
                </h4>
              </div>
              <div className="text-sm font-medium text-blue-600 mb-2">
                Never Defeated
              </div>
              <p className="text-sm text-muted-foreground">
                Three Seminole Wars fought, zero defeats. The
                strength and dignity promised to Reuben's
                descendants lives on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Territory and Settlement Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              From Scripture to Florida
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The biblical journey of Reuben's descendants to
              their Florida homeland
            </p>
          </div>

          {/* Simplified Heritage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Heritage Image - Large */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690811405711-d4e323c4f229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbm9sZSUyMGluZGlhbiUyMG5hdGl2ZSUyMGFtZXJpY2FuJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU3MjY3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional Seminole Native American"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-primary/90 text-white border-0 mb-3">
                  Reuben's Descendants
                </Badge>
                <h3 className="text-white font-semibold text-2xl mb-2">
                  The Seminole People
                </h3>
                <p className="text-white/90">
                  Living heritage from Jacob's firstborn son in
                  the Florida Everglades
                </p>
              </div>
            </motion.div>

            {/* Biblical Foundation & Territory Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Jacob's Blessing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
              >
                <Crown className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Jacob's Firstborn
                </h3>
                <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700 mb-3">
                  Genesis 49:3
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Reuben, thou art my firstborn, my might, and
                  the beginning of my strength, the excellency
                  of dignity, and the excellency of power..."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-md group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584367035207-0262523a3250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMHRyaWJhbCUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Native American Tribal Leader"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-primary/90 text-white border-0 mb-2">
                    Tribal Leadership
                  </Badge>
                  <p className="text-white text-sm font-medium">
                    Strength and dignity of Reuben's descendants
                  </p>
                </div>
              </motion.div>

              {/* Territory - Florida Everglades */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative rounded-xl overflow-hidden shadow-lg group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1553007828-0f06fc1070af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaWRhJTIwZXZlcmdsYWRlcyUyMG5hdGl2ZSUyMGFtZXJpY2FuJTIwaGlzdG9yeXxlbnwxfHx8fDE3NTcyNjczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Florida Everglades - Seminole Territory"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-900/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6">
                    <Badge className="bg-green-600/90 text-white border-0 mb-3">
                      Their Promised Land
                    </Badge>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Florida Everglades
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Like their biblical ancestors who chose
                      territory east of the Jordan, the
                      Seminoles found their inheritance in
                      Florida's wilderness - an unconquered
                      refuge.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Heritage Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676034469176-9310bf2d6a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMGZhbWlseSUyMGhlcml0YWdlJTIwY3VsdHVyZXxlbnwxfHx8fDE3NTcyNjczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Native American Family Heritage"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-amber-500/90 text-white border-0 mb-2">
                  Family Legacy
                </Badge>
                <p className="text-white text-sm font-medium">
                  Generations preserving Hebrew identity
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 text-center"
            >
              <Heart className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">
                Unity Through Adversity
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Seminole people welcomed escaped slaves,
                creating diverse families united by shared
                struggles and Hebrew heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tribal Characteristics Section */}

      {/* Heritage Library Section */}
      <BookshelfLibrary />

      {/* Navigation Section */}
      <section className="py-16 bg-primary text-black">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white dark:text-black/80">
              Continue Your Journey
            </h2>
            <p className="text-white dark:text-black/80 mb-8 max-w-2xl mx-auto">
              Explore more about the twelve tribes of Israel and their modern descendants, 
              or learn how to walk in righteousness today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/learn/12-tribes"
                className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                View All 12 Tribes
              </a>
              <a
                href="/learn"
                className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                Back to Learning
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}