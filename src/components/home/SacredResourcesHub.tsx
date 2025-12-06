import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getWebpUrl } from "../../utils/imageUtils";
import {
  Download,
  BookOpen,
  Calendar,
  ArrowRight,
  FileText,
  Users,
  Star,
  Bookmark,
  Play,
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "guide" | "flyer" | "booklet" | "calendar";
  downloadSize?: string;
  pages?: number;
  icon: React.ReactNode;
  image: string;
  route: string;
  featured?: boolean;
  color: {
    gradient: string;
    badge: string;
    accent: string;
  };
}

export function SacredResourcesHub() {
  const resources: Resource[] = [
    {
      id: "welcome-booklet",
      title: "Welcome Booklet",
      description:
        "A comprehensive introduction to our faith, beliefs, and community. Perfect for newcomers and those seeking to deepen their understanding.",
      type: "booklet",
      downloadSize: "2.4 MB",
      pages: 24,
      icon: <BookOpen className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/welcome-booklet",
      featured: true,
      color: {
        gradient: "from-blue-500 to-indigo-600",
        badge:
          "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
        accent: "text-blue-600 dark:text-blue-400",
      },
    },
    {
      id: "camp-flyers",
      title: "Camp Flyers",
      description:
        "Information about our upcoming spiritual retreats, youth camps, and fellowship gatherings throughout the year.",
      type: "flyer",
      downloadSize: "1.8 MB",
      pages: 8,
      icon: <Users className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/camp-flyers",
      color: {
        gradient: "from-green-500 to-emerald-600",
        badge:
          "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
        accent: "text-green-600 dark:text-green-400",
      },
    },
    {
      id: "prayer-guide",
      title: "Prayer Guide for Holy Days",
      description:
        "Detailed prayers, scriptures, and observance instructions for biblical holy days and appointed times.",
      type: "guide",
      downloadSize: "3.1 MB",
      pages: 32,
      icon: <Calendar className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1532978379173-523e16f371f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/resources/prayer-guide",
      featured: true,
      color: {
        gradient: "from-amber-500 to-orange-600",
        badge:
          "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
        accent: "text-amber-600 dark:text-amber-400",
      },
    },
    {
      id: "biblical-calendar",
      title: "Biblical Calendar",
      description:
        "Complete calendar showing biblical months, holy days, new moons, and sabbaths according to scripture.",
      type: "calendar",
      downloadSize: "4.2 MB",
      pages: 12,
      icon: <FileText className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/calendar",
      color: {
        gradient: "from-purple-500 to-pink-600",
        badge:
          "bg-gradient-to-r from-purple-500 to-pink-600 text-white",
        accent: "text-purple-600 dark:text-purple-400",
      },
    },
  ];

  const typeLabels = {
    guide: "Study Guide",
    flyer: "Information",
    booklet: "Booklet",
    calendar: "Calendar",
  };

  const typeIcons = {
    guide: <Bookmark className="w-4 h-4" />,
    flyer: <FileText className="w-4 h-4" />,
    booklet: <BookOpen className="w-4 h-4" />,
    calendar: <Calendar className="w-4 h-4" />,
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98], // Cinematic ease
              }}
              className="group h-full"
            >
              <div className="relative h-full bg-card dark:bg-[#050505] border border-border dark:border-white/10 rounded-sm overflow-hidden transition-all duration-500 hover:border-primary/40 group-hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.15)]">
                {/* Gold Shimmer Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                </div>

                <div className="flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-color z-10 pointer-events-none" />
                    <ImageWithFallback
                      src={resource.image}
                      webpSrc={getWebpUrl(resource.image)}
                      alt={resource.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[0.5] group-hover:grayscale-0"
                    />
                    {/* Cinematic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 dark:from-[#050505] dark:via-[#050505]/40 to-transparent z-20" />

                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 z-30">
                      <div className="bg-background/60 dark:bg-black/60 backdrop-blur-md border border-border dark:border-white/10 px-3 py-1.5 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground dark:text-white">
                        {typeIcons[resource.type]}
                        <span className="font-bold text-primary">
                          {typeLabels[resource.type]}
                        </span>
                      </div>
                    </div>

                    {/* Featured Star */}
                    {resource.featured && (
                      <div className="absolute top-4 right-4 z-30">
                        <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 pt-2 relative flex flex-col">
                    {/* Watermark Decoration */}
                    <div className="absolute top-0 right-6 text-primary/5 pointer-events-none transform -translate-y-1/2">
                      {React.isValidElement(resource.icon) &&
                        React.cloneElement(
                          resource.icon as React.ReactElement<any>,
                          {
                            className: "w-24 h-24",
                            strokeWidth: 1,
                          },
                        )}
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <div className="w-12 h-[1px] bg-primary/30 mb-4 group-hover:w-24 transition-all duration-500" />

                      <p className="text-muted-foreground/80 text-sm leading-relaxed font-light line-clamp-3">
                        {resource.description}
                      </p>
                    </div>

                    {/* Tech Specs */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-border dark:border-white/5 mb-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1">
                          Format
                        </div>
                        <div className="text-xs font-mono text-primary/80 flex items-center gap-2">
                          <FileText className="w-3 h-3" />
                          PDF Document
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1">
                          Size
                        </div>
                        <div className="text-xs font-mono text-primary/80 flex items-center gap-2">
                          <Download className="w-3 h-3" />
                          {resource.downloadSize}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex gap-4">
                      <Link
                        to={resource.route}
                        className="flex-1"
                      >
                        <Button className="w-full h-12 bg-accent/50 dark:bg-white/5 hover:bg-primary border border-border dark:border-white/10 hover:border-primary text-foreground dark:text-white hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-xs font-bold group/btn">
                          <span className="mr-2 group-hover/btn:mr-4 transition-all">
                            Download
                          </span>
                          <ArrowRight className="w-3 h-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="relative bg-zinc-50 dark:bg-[#080808] border border-border dark:border-white/10 p-12 md:p-20 text-center overflow-hidden group transition-colors duration-500">
            {/* Dynamic Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)]" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 dark:opacity-20 mix-blend-overlay dark:mix-blend-normal" />
            </div>

            {/* Decorative Borders */}
            <div className="absolute top-4 left-4 w-24 h-24 border-t border-l border-border dark:border-white/10 transition-colors duration-500" />
            <div className="absolute bottom-4 right-4 w-24 h-24 border-b border-r border-border dark:border-white/10 transition-colors duration-500" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 mx-auto bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-transparent rounded-full flex items-center justify-center border border-primary/20 mb-8 shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground dark:text-white mb-6 tracking-tight transition-colors duration-300">
                Equip Your{" "}
                <span className="text-primary italic">
                  Spirit
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
                "Study to shew thyself approved unto God."
                Access our complete archive of sacred texts,
                prayer guides, and community resources entirely
                for free.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center">
                <Link
                  className="border-primary/50 min-w-[220px] bg-primary text-primary-foreground hover:bg-primary/90 dark:text-black dark:hover:bg-white transition-colors text-xs uppercase tracking-[0.2em] font-bold p-4"
                  to="/contact"
                >
                  Request Specific Guide
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
