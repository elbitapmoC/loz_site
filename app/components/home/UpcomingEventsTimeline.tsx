import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { LiquidButton } from "../layout/LiquidButton";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Star,
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

export function UpcomingEventsTimeline() {
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

  const eventTypeStyles = {
    "holy-day": {
      badge: "bg-gradient-to-r from-amber-500 to-yellow-500 text-white",
      timeline: "bg-gradient-to-b from-amber-400 to-amber-600",
      accent: "border-amber-200 dark:border-amber-800",
    },
    "new-moon": {
      badge: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
      timeline: "bg-gradient-to-b from-blue-400 to-blue-600",
      accent: "border-blue-200 dark:border-blue-800",
    },
    community: {
      badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
      timeline: "bg-gradient-to-b from-green-400 to-green-600",
      accent: "border-green-200 dark:border-green-800",
    },
  };

  const eventTypeLabels = {
    "holy-day": "Holy Day",
    "new-moon": "New Moon",
    community: "Community",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-2xl opacity-40"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium mb-6">
            Join Our Gatherings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the richness of our biblical traditions and community fellowship
          </p>
        </motion.div>

        {/* Timeline Events */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full ${eventTypeStyles[event.type].timeline} shadow-lg`}>
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                </div>
                {event.featured && (
                  <div className="absolute -top-1 -right-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  </div>
                )}
              </div>

              {/* Event Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-16" : "md:ml-16"}`}>
                <div className={`bg-card rounded-2xl border-2 ${eventTypeStyles[event.type].accent} overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={eventTypeStyles[event.type].badge}>
                        {eventTypeLabels[event.type]}
                      </Badge>
                      {event.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Attendees */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Users className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-medium">{event.attendees}+ expected</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-3 h-4 w-4 text-primary" />
                        <span className="font-medium">{event.formattedDate}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-3 h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-3 h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary font-medium transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <LiquidButton
            background="var(--primary)"
            className="text-primary-foreground px-8 py-3 text-lg"
            onClick={() => (window.location.href = "/events")}
          >
            View All Events
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  );
}