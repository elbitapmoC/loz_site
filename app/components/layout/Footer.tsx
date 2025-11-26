import React from "react";
import Link from "next/link";
import { Heart, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { NewsletterSubscription } from "../newsletter/NewsletterSubscription";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand and Mission */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-sm">LOZ</span>
              </div>
              <span className="font-bold text-lg">Thee Light of Zion</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              A community dedicated to understanding and living according to biblical truth, 
              celebrating the holy days, and walking in the footsteps of our ancestors.
            </p>
            <div className="flex items-center gap-1 text-sm text-secondary-foreground/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for the community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary-foreground">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/repent" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Repentance
                </Link>
              </li>
              <li>
                <Link href="/learn/12-tribes" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  12 Tribes
                </Link>
              </li>
              <li>
                <Link href="/learn/biblical-holy-days" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Biblical Holy Days
                </Link>
              </li>
              <li>
                <Link href="/learn/pagan-holidays" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Pagan Holidays
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary-foreground">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Calendar
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@TheeLightofZion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors inline-flex items-center gap-1"
                >
                  Music & Teachings
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary-foreground">Stay Connected</h3>
            <div className="bg-secondary-foreground/5 rounded-lg p-4">
              <NewsletterSubscription 
                variant="minimal"
                title="Newsletter"
                description="Get updates about holy days and events"
                placeholder="Your email"
                buttonText="Subscribe"
                source="footer"
                className="w-full"
              />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Serving Communities Nationwide</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@theelightofzion.org" className="hover:text-secondary-foreground transition-colors">
                  contact@theeloz.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              &copy; {currentYear} Thee Light of Zion. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/contact" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              Contact
            </Link>
              <Link href="/resources" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                 Resources
               </Link>
              <Link href="/welcome-booklet" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                 Welcome Booklet
               </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}