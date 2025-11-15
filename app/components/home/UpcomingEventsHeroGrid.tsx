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
  Bell,
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

export function UpcomingEventsHeroGrid() {
  const events: Event[] = [
    {
      id: "pentecost-2025",
      title: "Feast of Weeks/Pentecost",
      date: "2025-05-31",
      formattedDate: "May 31, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus, Jerusalem Hall",
      description:
        "Join us as we celebrate the Feast of Weeks, also known as Pentecost, commemorating the giving of the Torah at Mount Sinai. This sacred gathering will include traditional prayers, readings from the Torah, and a community feast.",
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

  const featuredEvent = events.find(event => event.featured) || events[0];
  const upcomingEvents = events.filter(event => !event.featured);

  const eventTypeStyles = {
    "holy-day": {
      badge: "bg-gradient-to-r from-amber-500 to-yellow-500 text-white",
      accent: "from-amber-500/20 to-yellow-500/20",
    },
    "new-moon": {
      badge: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
      accent: "from-blue-500/20 to-indigo-500/20",
    },
    community: {
      badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
      accent: "from-green-500/20 to-emerald-500/20",
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium mb-6">
            <Bell className="w-4 h-4" />
            Upcoming Sacred Gatherings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience meaningful worship, fellowship, and service opportunities
          </p>
        </motion.div>

        {/* Featured Event Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Event
                  </Badge>
                </div>

                {/* Attendees Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
                    <Users className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{featuredEvent.attendees}+ expected</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <Badge className={eventTypeStyles[featuredEvent.type].badge}>
                    {eventTypeLabels[featuredEvent.type]}
                  </Badge>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  {featuredEvent.title}
                </h3>

                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {featuredEvent.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">{featuredEvent.formattedDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/events/${featuredEvent.id}`}>
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Bell className="mr-2 h-4 w-4" />
                    Remind Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={160}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className={eventTypeStyles[event.type].badge}>
                      {eventTypeLabels[event.type]}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                      <Users className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">{event.attendees}+</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                    {event.description}
                  </p>

                  {/* Compact Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs">
                      <Calendar className="mr-2 h-3 w-3 text-primary" />
                      <span className="font-medium">{event.formattedDate}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-2 h-3 w-3 text-primary" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/events">
            <Button variant="outline" size="lg" className="px-8">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}