import React from "react";
import Link from "next/link";
import { ThreeDCard } from "../ui/3d-card";
import { Badge } from "../ui/badge";
import { LiquidButton } from "../layout/LiquidButton";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
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
}

export function UpcomingEvents() {
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
    },
  ];

  const eventTypeColors = {
    "holy-day":
      "bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950/30 dark:text-amber-400",
    "new-moon":
      "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/30 dark:text-blue-400",
    community:
      "bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-950/30 dark:text-green-400",
  };

  const eventTypeLabels = {
    "holy-day": "Holy Day",
    "new-moon": "New Moon",
    community: "Community",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Join Us
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Upcoming Events
            </h2>
          </div>
          <LiquidButton
            background="var(--accent)"
            className="mt-4 md:mt-0 text-accent-foreground"
            onClick={() => (window.location.href = "/events")}
          >
            View All Events
          </LiquidButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <ThreeDCard
              key={event.id}
              className="bg-card border border-border overflow-hidden h-full"
              rotationFactor={5}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={eventTypeColors[event.type]}
                  >
                    {eventTypeLabels[event.type]}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {event.title}
                </h3>

                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  <span>{event.formattedDate}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>

                <Link
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
}