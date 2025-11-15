import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
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
      description: "A comprehensive introduction to our faith, beliefs, and community. Perfect for newcomers and those seeking to deepen their understanding.",
      type: "booklet",
      downloadSize: "2.4 MB",
      pages: 24,
      icon: <BookOpen className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/welcome-booklet",
      featured: true,
      color: {
        gradient: "from-blue-500 to-indigo-600",
        badge: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
        accent: "text-blue-600 dark:text-blue-400",
      },
    },
    {
      id: "camp-flyers",
      title: "Camp Flyers",
      description: "Information about our upcoming spiritual retreats, youth camps, and fellowship gatherings throughout the year.",
      type: "flyer",
      downloadSize: "1.8 MB",
      pages: 8,
      icon: <Users className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/camp-flyers",
      color: {
        gradient: "from-green-500 to-emerald-600",
        badge: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
        accent: "text-green-600 dark:text-green-400",
      },
    },
    {
      id: "prayer-guide",
      title: "Prayer Guide for Holy Days",
      description: "Detailed prayers, scriptures, and observance instructions for biblical holy days and appointed times.",
      type: "guide",
      downloadSize: "3.1 MB",
      pages: 32,
      icon: <Calendar className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1532978379173-523e16f371f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/resources/prayer-guide",
      featured: true,
      color: {
        gradient: "from-amber-500 to-orange-600",
        badge: "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
        accent: "text-amber-600 dark:text-amber-400",
      },
    },
    {
      id: "biblical-calendar",
      title: "Biblical Calendar",
      description: "Complete calendar showing biblical months, holy days, new moons, and sabbaths according to scripture.",
      type: "calendar",
      downloadSize: "4.2 MB",
      pages: 12,
      icon: <FileText className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/calendar",
      color: {
        gradient: "from-purple-500 to-pink-600",
        badge: "bg-gradient-to-r from-purple-500 to-pink-600 text-white",
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
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium mb-8 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Free Sacred Resources
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Sacred Resources Hub
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Download comprehensive guides, calendars, and resources to deepen your spiritual journey and biblical understanding
          </motion.p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-48 lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={resource.image}
                      alt={resource.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={resource.color.badge}>
                        {typeIcons[resource.type]}
                        <span className="ml-1">{typeLabels[resource.type]}</span>
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {resource.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Quick Stats */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-xs font-medium">{resource.pages} pages</span>
                      </div>
                      <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-xs font-medium">{resource.downloadSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${resource.color.badge} flex items-center justify-center`}>
                        {resource.icon}
                      </div>
                      <h3 className={`text-xl font-bold group-hover:${resource.color.accent} transition-colors`}>
                        {resource.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={resource.route} className="flex-1">
                        <Button 
                          className={`w-full ${resource.color.badge} hover:opacity-90 transition-all duration-300`}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="group/preview hover:bg-primary hover:text-primary-foreground"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20"
        >
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Start Your Spiritual Library</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            All our resources are completely free and designed to help you grow in biblical knowledge and spiritual understanding. 
            Download what speaks to your heart and share with others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              Download All Resources
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Request Custom Resource
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}