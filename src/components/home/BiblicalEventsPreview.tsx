import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Calendar,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Star,
  Crown,
  Wheat,
  Music,
} from "lucide-react";

interface BiblicalEvent {
  id: string;
  title: string;
  hebrewName?: string;
  year: number;
  date: string;
  timeframe: string;
  description: string;
  significance: string;
  category: "feast" | "memorial" | "fast" | "new-moon";
  image: string;
  route: string;
  featured?: boolean;
  color: {
    gradient: string;
    badge: string;
    accent: string;
  };
  icon: React.ReactNode;
}

export function BiblicalEventsPreview() {
  const biblicalEvents: BiblicalEvent[] = [
    {
      id: "passover-2025",
      title: "Passover",
      hebrewName: "Pesach",
      year: 2025,
      date: "April 13-20, 2025",
      timeframe: "8 Days",
      description: "The commemoration of our deliverance from bondage, celebrating freedom and redemption through the Most High.",
      significance: "Marks the beginning of our journey to freedom and spiritual awakening.",
      category: "feast",
      image: "https://images.unsplash.com/photo-1585828123908-ec1b1ad4a706?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/events/passover-2025",
      featured: true,
      color: {
        gradient: "from-red-500 via-orange-500 to-yellow-500",
        badge: "bg-gradient-to-r from-red-500 to-orange-500 text-white",
        accent: "text-red-600 dark:text-red-400",
      },
      icon: <Crown className="w-5 h-5" />,
    },
    {
      id: "pentecost-2025",
      title: "Feast of Weeks / Pentecost",
      hebrewName: "Shavuot",
      year: 2025,
      date: "June 1-2, 2025",
      timeframe: "2 Days",
      description: "Celebrating the giving of the Law and the first fruits of the harvest, commemorating divine instruction.",
      significance: "The anniversary of receiving the Torah and celebrating the spring harvest.",
      category: "feast",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/events/pentecost-2025",
      featured: true,
      color: {
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
        accent: "text-green-600 dark:text-green-400",
      },
      icon: <Wheat className="w-5 h-5" />,
    },
    {
      id: "trumpets-2025",
      title: "Memorial of Blowing of Trumpets",
      hebrewName: "Yom Teruah",
      year: 2025,
      date: "September 16, 2025",
      timeframe: "1 Day",
      description: "A sacred assembly for remembrance, reflection, and awakening through the sound of trumpets.",
      significance: "A call to spiritual awakening and preparation for the Day of Atonement.",
      category: "memorial",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/events/trumpets-2025",
      color: {
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        badge: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
        accent: "text-blue-600 dark:text-blue-400",
      },
      icon: <Music className="w-5 h-5" />,
    },
    {
      id: "atonement-2025",
      title: "Day of Atonement",
      hebrewName: "Yom Kippur",
      year: 2025,
      date: "September 25, 2025",
      timeframe: "1 Day",
      description: "The most solemn day of the year, dedicated to fasting, prayer, and spiritual cleansing.",
      significance: "A day of judgment, forgiveness, and spiritual renewal before the Most High.",
      category: "fast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/events/atonement-2025",
      color: {
        gradient: "from-purple-500 via-violet-500 to-indigo-500",
        badge: "bg-gradient-to-r from-purple-500 to-violet-500 text-white",
        accent: "text-purple-600 dark:text-purple-400",
      },
      icon: <Star className="w-5 h-5" />,
    },
    {
      id: "tabernacles-2025",
      title: "Feast of Tabernacles",
      hebrewName: "Sukkot",
      year: 2025,
      date: "September 30 - October 7, 2025",
      timeframe: "8 Days",
      description: "Dwelling in temporary shelters to remember our journey and trust in divine provision.",
      significance: "Commemorating the wilderness journey and celebrating divine protection.",
      category: "feast",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/events/tabernacles-2025",
      color: {
        gradient: "from-amber-500 via-orange-500 to-red-500",
        badge: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
        accent: "text-amber-600 dark:text-amber-400",
      },
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "new-moon-4-2025",
      title: "New Moon #4",
      hebrewName: "Rosh Chodesh",
      year: 2025,
      date: "March 29, 2025",
      timeframe: "1 Day",
      description: "Monthly celebration marking the beginning of the fourth biblical month with prayer and reflection.",
      significance: "Renewal of time and spiritual recommitment for the new month.",
      category: "new-moon",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      route: "/events/new-moon-4-2025",
      color: {
        gradient: "from-slate-500 via-gray-500 to-zinc-500",
        badge: "bg-gradient-to-r from-slate-500 to-gray-500 text-white",
        accent: "text-slate-600 dark:text-slate-400",
      },
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  const categoryLabels = {
    feast: "Sacred Feast",
    memorial: "Memorial Day",
    fast: "Day of Fasting",
    "new-moon": "New Moon",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
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
            <Calendar className="w-5 h-5" />
            2025 Biblical Calendar
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Upcoming Holy Days
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Join us in observing the appointed times established by the Most High. 
            Each holy day carries deep spiritual significance and connects us to our biblical heritage.
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {biblicalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/70 backdrop-blur-sm text-white border-white/30 px-3 py-1 text-sm font-medium">
                      {event.year}
                    </Badge>
                  </div>

                  {/* Category & Featured Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Badge className={event.color.badge}>
                      {event.icon}
                      <span className="ml-1">{categoryLabels[event.category]}</span>
                    </Badge>
                    {event.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Date Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{event.timeframe}</span>
                    </div>
                    <div className="text-white font-semibold">{event.date}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className={`text-xl font-bold mb-1 transition-colors ${event.color.accent}`}>
                      {event.title}
                    </h3>
                    {event.hebrewName && (
                      <p className="text-sm text-muted-foreground italic">
                        {event.hebrewName}
                      </p>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Significance */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Significance:</h4>
                    <p className="text-sm text-foreground">{event.significance}</p>
                  </div>

                  {/* Action */}
                  <Link to={event.route}>
                    <Button 
                      variant="outline" 
                      className={`w-full group/btn hover:${event.color.badge.replace('bg-gradient-to-r', 'bg-gradient-to-r')} hover:text-white transition-all duration-300`}
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
          <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">View Complete Biblical Calendar</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore the full biblical calendar with detailed information about each holy day, 
            new moons, and sabbaths. Download our complete calendar guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calendar">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Full Calendar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/learn/biblical-holy-days">
              <Button variant="outline" size="lg">
                Learn About Holy Days
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}