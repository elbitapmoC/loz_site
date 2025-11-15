import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, Book, Heart, Mail } from "lucide-react";
import { NewsletterSubscription } from "../newsletter/NewsletterSubscription";

export function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main CTA Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="h-4 w-4" />
                Join Our Community
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Begin Your{" "}
                <span className="text-primary relative">
                  Spiritual Journey
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-30 rounded-full"></div>
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the truth about biblical holy days, understand your heritage, 
                and walk in the footsteps of our ancestors. Join a community dedicated 
                to living according to Scripture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/calendar">
                <Button 
                  size="lg" 
                  className="w-full justify-start gap-3 h-14 text-base font-medium group hover:scale-105 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-primary-foreground/20">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div>View Calendar</div>
                    <div className="text-xs opacity-80">Holy Days 2025-2026</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/learn">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start gap-3 h-14 text-base font-medium group hover:scale-105 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div>Learn Truth</div>
                    <div className="text-xs text-muted-foreground">Study Scripture</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Active Community</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Biblical Teaching</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span>Holy Day Observance</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:pl-8">
            <NewsletterSubscription 
              variant="card"
              title="Stay Connected with Our Community"
              description="Subscribe to receive updates about upcoming holy days, special events, teachings, and community news. Join others who are walking in truth."
              placeholder="Enter your email address"
              buttonText="Join Our Newsletter"
              source="homepage"
              className="shadow-lg border-0 bg-card/80 backdrop-blur-sm"
            />
            
            {/* Additional info */}

            <div className="mt-6 p-4 rounded-lg bg-background/30 backdrop-blur-sm rounded-lg border border-primary/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">What you'll receive:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Upcoming holy day reminders</li>
                    <li>• Biblical teachings and insights</li>
                    <li>• Community event announcements</li>
                    <li>• Monthly spiritual reflections</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}