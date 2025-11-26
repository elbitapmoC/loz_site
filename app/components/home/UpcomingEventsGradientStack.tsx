import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Star,
  Sparkles,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  time: string;
  location: string;
  description: string;
  type: "holy-day" | "new-moon" | "community";
  image: string;
  attendees?: number;
  featured?: boolean;
}

export function UpcomingEventsGradientStack() {
  const events: Event[] = [
    {
      id: "pentecost-2025",
      title: "Feast of Weeks/Pentecost",
      date: "2025-05-31",
      formattedDate: "May 31, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus, Jerusalem Hall",
      description:
        "Join us as we celebrate the Feast of Weeks, also known as Pentecost, commemorating the giving of the Torah at Mount Sinai.",
      type: "holy-day",
      image:
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attendees: 150,
      featured: true,
    },
    {
      id: "community-outreach-june-2025",
      title: "Community Outreach Day",
      date: "2025-06-07",
      formattedDate: "June 7, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Downtown Community Center",
      description:
        "Join us for a day of service as we reach out to our community with food distribution, clothing donations, and more.",
      type: "community",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attendees: 75,
    },
    {
      id: "new-moon-4-2025",
      title: "New Moon #4 Celebration",
      date: "2025-06-24",
      formattedDate: "June 24, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Main Campus, Courtyard",
      description:
        "Celebrate the fourth new moon of the year, marking the beginning of the month with prayer, worship, and fellowship.",
      type: "new-moon",
      image:
        "https://images.unsplash.com/photo-1532978379173-523e16f371f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attendees: 120,
    },
  ];

  const eventGradients = {
    "holy-day": {
      card: "from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/20 dark:to-orange-950/20",
      border: "from-amber-200 via-yellow-200 to-orange-200 dark:from-amber-800 dark:via-yellow-800 dark:to-orange-800",
      badge: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
      accent: "text-amber-600 dark:text-amber-400",
    },
    "new-moon": {
      card: "from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20",
      border: "from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800",
      badge: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
      accent: "text-blue-600 dark:text-blue-400",
    },
    community: {
      card: "from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20",
      border: "from-green-200 via-emerald-200 to-teal-200 dark:from-green-800 dark:via-emerald-800 dark:to-teal-800",
      badge: "bg-gradient-to-r from-green-500 to-teal-500 text-white",
      accent: "text-green-600 dark:text-green-400",
    },
  };

  const eventTypeLabels = {
    "holy-day": "Holy Day",
    "new-moon": "New Moon",
    community: "Community",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-accent/5"></div>
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground text-sm font-medium mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            Gatherings Await
            <Sparkles className="w-4 h-4" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
          >
            Upcoming Events
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Join us in celebrating our rich heritage through meaningful worship, community service, and sacred traditions
          </motion.p>
        </motion.div>

        {/* Stacked Event Cards */}
        <div className="max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className={`mb-8 ${index === events.length - 1 ? 'mb-0' : ''}`}
            >
              <div className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br ${eventGradients[event.type].card} border-2 border-transparent bg-clip-padding shadow-xl hover:shadow-2xl transition-all duration-500`}>
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${eventGradients[event.type].border} p-[2px]`}>
                  <div className={`h-full w-full rounded-3xl bg-gradient-to-br ${eventGradients[event.type].card}`}></div>
                </div>

                <div className="relative grid lg:grid-cols-5 gap-0 min-h-[300px]">
                  {/* Image Section */}
                  <div className={`${index % 2 === 0 ? 'lg:col-span-2 lg:order-1' : 'lg:col-span-2 lg:order-2'} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10"></div>
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                      <Badge className={eventGradients[event.type].badge}>
                        {eventTypeLabels[event.type]}
                      </Badge>
                      {event.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Attendees */}
                    <div className="absolute bottom-6 right-6 z-20">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-white font-medium">{event.attendees}+ joining</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${index % 2 === 0 ? 'lg:col-span-3 lg:order-2' : 'lg:col-span-3 lg:order-1'} p-8 lg:p-12 flex flex-col justify-center relative`}>
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <Sparkles className="w-16 h-16 text-current" />
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                    >
                      {event.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-muted-foreground mb-8 text-lg leading-relaxed"
                    >
                      {event.description}
                    </motion.p>

                    {/* Event Details with Icons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${eventGradients[event.type].border} flex items-center justify-center`}>
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{event.formattedDate}</p>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${eventGradients[event.type].border} flex items-center justify-center`}>
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Link href={`/events/${event.id}`}>
                        <Button 
                          size="lg" 
                          className={`${eventGradients[event.type].badge} hover:scale-105 transition-all duration-300 shadow-lg`}
                        >
                          Learn More & Register
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/events">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              Explore All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}