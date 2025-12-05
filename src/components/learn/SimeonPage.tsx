import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BookshelfLibrary } from "./BookshelfLibrary";
import {
  Sword,
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

export function SimeonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Tribe Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center mb-6"
            >
              <Badge className="bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-300/30 px-4 py-2 text-sm font-medium">
                <Sword className="w-4 h-4 mr-2" />
                Second Son of Jacob
              </Badge>
            </motion.div>

            {/* Hebrew Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="text-6xl md:text-8xl font-hebrew text-orange-600/80 dark:text-orange-400/80 mb-2">
                שִׁמְעוֹן
              </div>
              <div className="text-lg text-muted-foreground italic">
                Šīməʻōn - "He who hears/listens"
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              The Tribe of Simeon
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Known for their fierce nature and zeal for righteousness, the descendants of Simeon 
              carry the legacy of passionate justice and unwavering loyalty to the Most High.
            </motion.p>

            {/* Key Characteristics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <Badge variant="outline" className="px-4 py-2">
                <Sword className="w-4 h-4 mr-2" />
                The Fierce
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Zealous for Justice
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Passionate Loyalty
              </Badge>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary">
                Coming Soon
              </Badge>
              
              <h2 className="text-3xl font-bold mb-6">
                Discovering Simeon's Legacy
              </h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are currently researching and compiling comprehensive information about 
                the tribe of Simeon, their modern descendants, and their role in biblical prophecy. 
                This page will soon feature detailed historical connections, scholarly sources, 
                and the rich heritage of Simeon's lineage.
              </p>

              <div className="mb-12">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500/20"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sword className="w-8 h-8 text-orange-500/70" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500/5 to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Continue Your Journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore more about the twelve tribes of Israel and their modern descendants, 
              or learn how to walk in righteousness today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/learn/12-tribes"
                className="group inline-flex items-center bg-primary/10 hover:bg-primary/20 transition-colors px-6 py-3 rounded-lg font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to 12 Tribes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
