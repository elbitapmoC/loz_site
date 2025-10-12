import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BookshelfLibrary } from "./BookshelfLibrary";
import { Link } from "react-router-dom";
import { LucideIcon, ArrowLeft, ArrowRight, Crown, Shield, Heart, Users, Calendar, MapPin } from "lucide-react";

// Type definitions for the tribe data structure
export interface HeroCharacteristic {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BiblicalFoundationItem {
  title: string;
  description: string;
  reference: string;
  icon: LucideIcon;
}

export interface TribalCharacteristic {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface HistoricalEvent {
  title: string;
  description: string;
  reference: string;
  icon: LucideIcon;
}

export interface SpiritualLesson {
  title: string;
  description: string;
  icon: LucideIcon;
  verse: string;
  reference: string;
}

export interface KeyScripture {
  reference: string;
  description: string;
  category: string;
  quote: string;
}

export interface NotableDescendant {
  name: string;
  description: string;
  significance: string;
}

export interface TribeData {
  // Basic Info
  tribeName: string;
  hebrewName: string;
  hebrewTransliteration: string;
  meaning: string;
  modernIdentity: string;
  
  // Hero Section
  badgeText: string;
  heroDescription: string;
  heroCharacteristics: HeroCharacteristic[];
  historicalConnection: string;
  
  // Modern Identity Section
  modernPeopleTitle: string;
  modernDescription: string;
  migrationYear: string;
  territory: string;
  warriorLegacy: string;
  
  // Heritage Images
  mainHeritageImage: string;
  mainHeritageImageAlt: string;
  tribalLeaderImage: string;
  territoryImage: string;
  territoryImageAlt: string;
  familyHeritageImage: string;
  
  // Biblical Quote
  jacobsBlessing: string;
  jacobsBlessingReference: string;
  
  // Navigation
  nextTribeName?: string;
  nextTribePath?: string;
  previousTribeName?: string;
  previousTribePath?: string;
}

interface TribePageTemplateProps {
  tribeData: TribeData;
}

export function TribePageTemplate({ tribeData }: TribePageTemplateProps) {
  const {
    tribeName,
    hebrewName,
    hebrewTransliteration,
    meaning,
    modernIdentity,
    badgeText,
    heroDescription,
    heroCharacteristics,
    historicalConnection,
    modernPeopleTitle,
    modernDescription,
    migrationYear,
    territory,
    warriorLegacy,
    mainHeritageImage,
    mainHeritageImageAlt,
    tribalLeaderImage,
    territoryImage,
    territoryImageAlt,
    familyHeritageImage,
    jacobsBlessing,
    jacobsBlessingReference,
    nextTribeName,
    nextTribePath,
    previousTribeName,
    previousTribePath,
  } = tribeData;

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
                The Mighty Tribe of Asher
              </Badge>

              <div className="my-12">
                <VisualHierarchyText
                  primary="Tribe of"
                  secondary="Asher"
                  secondaryFont="cinzel"
                  secondaryWeight="semibold"
                  size="large"
                />
              </div>

              {/* Hebrew name */}
              <div className="mb-8">
                <div className="text-4xl font-hebrew text-primary mb-2">
                  אָשֵׁר
                </div>
                <div className="text-lg text-muted-foreground italic">
                  Asher - "Happy"
                </div>
                <div className="text-lg font-semibold text-primary mt-2">
                  Present Day: South Americans
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The eighth-born son of Jacob by Zilpah (Leah's maid), whose descendants migrated to the Americas around 536 B.C. during the Persian captivity. Known in the Middle Ages as the Incas, they inhabited Colombia, Brazil, Peru, Venezuela, Guyana, Paraguay, Uruguay, and Ecuador, dwelling in lands rich with oil, minerals, and agricultural abundance.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <Crown className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">
                    Eighth Born
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Son of Jacob by Zilpah, birth recorded in Genesis 30:12-13
                  </p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">
                    South America
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Colombia, Brazil, Peru, Venezuela, Guyana, Paraguay, Uruguay, Ecuador
                  </p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">
                    Rich Resources
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Oil, iron, brass, minerals, coffee, cattle - "fat bread" abundance
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                <p className="text-sm text-amber-700 font-medium text-left">
                  <span className="block mb-1">
                    🏺 Biblical Prophecy Fulfilled:
                  </span>
                  "Out of Asher his bread shall be fat, and he shall yield royal dainties" - Genesis 49:20. South America produces the world's biggest supply of cattle, coffee, cocoa, sugar, rice, and fruits - "fat bread" of abundance. They "yield royal dainties" through famous Carnival-Mardi Gras festivals with exquisite foods and clothing. "Let him dip his foot in oil" (Deuteronomy 33:24) - Colombia has the largest crude oil output in the Americas. "Thy shoes shall be iron and brass" - they stand on vast mineral resources, with Brazil (Ba-ra-zal = Hebrew for iron) being rich in iron, brass, chromium, nickel, tin, and copper.
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
                      {modernPeopleTitle}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-6">
                      Descendants of {tribeName} • {modernIdentity}
                    </h4>
                  </div>
                  <Users className="h-12 w-12 text-primary/40 flex-shrink-0" />
                </div>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: modernDescription }} />
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
                {tribeName} • Hebrew Heritage
              </Badge>
              <p className="text-muted-foreground leading-relaxed">
                {tribeName} was one of Jacob's sons, making you part of
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
                {migrationYear}
              </div>
              <p className="text-sm text-muted-foreground">
                Ten Lost Tribes migration from Middle East to
                the Americas, eventually becoming the {modernIdentity}.
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
                {territory}
              </div>
              <p className="text-sm text-muted-foreground">
                Your promised land and territorial inheritance as descendants of {tribeName}.
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
                Strength in Unity
              </div>
              <p className="text-sm text-muted-foreground">
                {warriorLegacy}
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
              From Scripture to {modernIdentity}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The biblical journey of {tribeName}'s descendants to
              their modern homeland
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
                src={mainHeritageImage}
                alt={mainHeritageImageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-primary/90 text-white border-0 mb-3">
                  {tribeName}'s Descendants
                </Badge>
                <h3 className="text-white font-semibold text-2xl mb-2">
                  {modernPeopleTitle}
                </h3>
                <p className="text-white/90">
                  Living heritage from Jacob's son in their modern homeland
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
                  Jacob's Blessing
                </h3>
                <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700 mb-3">
                  {jacobsBlessingReference}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{jacobsBlessing}"
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
                  src={tribalLeaderImage}
                  alt="Tribal Leader"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-primary/90 text-white border-0 mb-2">
                    Tribal Leadership
                  </Badge>
                  <p className="text-white text-sm font-medium">
                    Strength and dignity of {tribeName}'s descendants
                  </p>
                </div>
              </motion.div>

              {/* Territory Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative rounded-xl overflow-hidden shadow-lg group"
              >
                <ImageWithFallback
                  src={territoryImage}
                  alt={territoryImageAlt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-900/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6">
                    <Badge className="bg-green-600/90 text-white border-0 mb-3">
                      Their Promised Land
                    </Badge>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {territory}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Like their biblical ancestors, {tribeName}'s descendants
                      found their inheritance in this territory - their
                      unconquered refuge.
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
                src={familyHeritageImage}
                alt="Family Heritage"
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
                The {modernIdentity} have maintained their heritage
                creating communities united by shared
                struggles and Hebrew identity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584367035207-0262523a3250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMHRyaWJhbCUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cultural Traditions"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-blue-500/90 text-white border-0 mb-2">
                  Cultural Preservation
                </Badge>
                <p className="text-white text-sm font-medium">
                  Ancient traditions carried forward
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

            <div className="flex flex-wrap justify-center gap-4 text-white dark:text-black">
              <Link
                to="/learn/12-tribes"
                className="group inline-flex items-center bg-black/10 hover:bg-black/20 transition-colors px-6 py-3 rounded-lg font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to 12 Tribes
              </Link>
              {previousTribeName && previousTribePath && (
                <Link
                  to={previousTribePath}
                  className="group inline-flex items-center bg-black/10 hover:bg-black/20 transition-colors px-6 py-3 rounded-lg font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Previous: {previousTribeName}
                </Link>
              )}
              {nextTribeName && nextTribePath && (
                <Link
                  to={nextTribePath}
                  className="group inline-flex items-center bg-black/10 hover:bg-black/20 transition-colors px-6 py-3 rounded-lg font-medium"
                >
                  Next: {nextTribeName}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              <Link
                to="/learn/repent"
                className="group inline-flex items-center bg-black/10 hover:bg-black/20 transition-colors px-6 py-3 rounded-lg font-medium"
              >
                Learn How to Repent
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}