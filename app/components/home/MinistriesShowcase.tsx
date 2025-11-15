import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Heart,
  Users,
  HandHeart,
  ArrowRight,
  MapPin,
  Clock,
  Target,
} from "lucide-react";

interface Ministry {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
  image: string;
  route: string;
  color: {
    badge: string;
    accent: string;
    hover: string;
  };
}

export function MinistriesShowcase() {
  const ministries: Ministry[] = [
    {
      id: "prison",
      title: "Prison Ministry",
      description: "Bringing hope and spiritual guidance to those behind bars, helping them find redemption and purpose through biblical truth.",
      impact: "150+ inmates reached monthly",
      icon: <Heart className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1517702087778-1c94bc6f8abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/ministries/prison",
      color: {
        badge: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
        accent: "from-blue-500/20 to-blue-600/20",
        hover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      },
    },
    {
      id: "food-pantry",
      title: "Food Pantry",
      description: "Nourishing our community with both physical and spiritual sustenance, ensuring no one goes hungry in body or spirit.",
      impact: "500+ families served monthly",
      icon: <Users className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/ministries/food-pantry",
      color: {
        badge: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
        accent: "from-green-500/20 to-emerald-600/20",
        hover: "group-hover:text-green-600 dark:group-hover:text-green-400",
      },
    },
    {
      id: "community",
      title: "Community Outreach",
      description: "Extending our love beyond our walls through service, education, and fellowship with our neighbors and community.",
      impact: "25+ events annually",
      icon: <HandHeart className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/ministries/community",
      color: {
        badge: "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
        accent: "from-amber-500/20 to-orange-600/20",
        hover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      },
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
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
            <HandHeart className="w-5 h-5" />
            Serving Our Community
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Ministries
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Through love, service, and biblical truth, we're making a lasting impact in our community and beyond
          </motion.p>
        </motion.div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={ministry.image}
                    alt={ministry.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-full ${ministry.color.badge} flex items-center justify-center shadow-lg`}>
                      {ministry.icon}
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                      {ministry.impact}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${ministry.color.hover}`}>
                    {ministry.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {ministry.description}
                  </p>

                  {/* Action */}
                  <Link href={ministry.route}>
                    <Button 
                      variant="outline" 
                      className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
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
          <Target className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in making a difference. Whether through volunteering, donations, or prayer support, 
            your involvement helps us serve our community better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ministries">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore All Ministries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}