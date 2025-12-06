import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Calendar,
  Book,
  Heart,
  Mail,
} from "lucide-react";
import { NewsletterSubscription } from "../newsletter/NewsletterSubscription";

export function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      {/* Modern 2025 Aesthetic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(158,108,58,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,108,58,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Ambient Light Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />

        {/* Noise Overlay for Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
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

              <h2 className="text-3xl md:text-4xl font-md mb-6 leading-tight">
                Begin Your{" "}
                <span className="text-primary relative">
                  Spiritual Journey
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-30 rounded-full"></div>
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the truth about biblical holy days,
                understand your heritage, and walk in the
                footsteps of our ancestors. Join a community
                dedicated to living according to Scripture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/calendar">
                <Button
                  size="lg"
                  className="w-full justify-start gap-3 h-14 text-base font-medium group hover:scale-105 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-primary-foreground/20">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div>View Calendar</div>
                    <div className="text-xs opacity-80">
                      Holy Days 2025-2026
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/learn">
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
                    <div className="text-xs text-muted-foreground">
                      Study Scripture
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-8 lg:mt-0 lg:pl-8 xl:pl-12">
            <NewsletterSubscription
              variant="card"
              title="Stay Connected with Our Community"
              description="Subscribe to receive updates about upcoming holy days, special events, teachings, and community news. Join others who are walking in truth."
              placeholder="Enter your email address"
              buttonText="Join Our Newsletter"
              source="homepage"
              className="shadow-lg border-0 bg-card/80 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}