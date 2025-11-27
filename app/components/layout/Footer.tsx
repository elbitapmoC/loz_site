import React from "react";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { NewsletterSubscription } from "../newsletter/NewsletterSubscription";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="relative py-20 bg-secondary overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] rounded-full bg-primary/5 blur-[80px] pointer-events-none"></div>

        <div className="container relative z-10 px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
            {/* Brand Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="font-serif font-bold text-primary-foreground text-lg">
                    L
                  </span>
                </div>
                <span className="font-serif font-bold text-2xl text-secondary-foreground tracking-tight">
                  Thee Light of Zion
                </span>
              </div>
              <p className="text-secondary-foreground/70 text-base leading-relaxed max-w-sm">
                Restoring the ancient paths and walking in the light of biblical
                truth. A community dedicated to heritage, prophecy, and covenant
                living.
              </p>
            </div>

            {/* Navigation Columns (2 cols each) */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-serif font-medium text-lg text-primary">
                Learn
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/learn/repent", label: "How to Repent" },
                  { to: "/learn/12-tribes", label: "The 12 Tribes" },
                  { to: "/learn/biblical-holy-days", label: "Holy Days" },
                  { to: "/learn/pagan-holidays", label: "Pagan Holidays" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-serif font-medium text-lg text-primary">
                Community
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/about", label: "Our Story" },
                  { to: "/ministries", label: "Ministries" },
                  { to: "/locations", label: "Find a Location" },
                  { to: "/calendar", label: "Calendar" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-card/10 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif font-medium text-lg text-primary mb-2">
                  Stay Connected
                </h3>
                <p className="text-sm text-secondary-foreground/70 mb-4">
                  Join our newsletter for weekly insights on prophecy and
                  upcoming holy days.
                </p>
                <NewsletterSubscription
                  variant="minimal"
                  placeholder="Email address"
                  buttonText="Join"
                  source="footer"
                  className="w-full"
                />
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm px-2">
                <MapPin className="h-4 w-4 text-primary/60" />
                <span>Serving Communities Nationwide</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-secondary-foreground/50 font-light">
              &copy; {currentYear} Thee Light of Zion. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/contact"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/donations"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/resources"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Resources
              </Link>
            </div>

            <div className="flex items-center gap-1 text-xs text-secondary-foreground/40">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500/70 fill-red-500/20" />
              <span>for the Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
