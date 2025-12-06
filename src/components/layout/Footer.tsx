import React from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import { NewsletterSubscription } from "../newsletter/NewsletterSubscription";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-background text-foreground border-t border-primary/20 font-sans transition-colors duration-300"
    >
      {/* Golden accent line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>

      {/* Subtle background pattern/glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative z-10 px-6 py-16 lg:py-20">
        {/* Top Section: Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* 1. Brand Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <BrandLogo />
              </div>
            </div>

            <p className="text-foreground/70 text-sm leading-relaxed max-w-sm font-light">
              A sanctuary for those seeking biblical truth. We are dedicated to
              uncovering the ancient paths, keeping the commandments, and
              preparing a people for the Kingdom.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2 justify-center lg:justify-start">
              {[
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/@TheeLightofZion",
                  label: "YouTube",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/TheeL.O.Z.Network/",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/theelightofzion/",
                  label: "Instagram",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Links Columns (2 cols each) */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <h3 className="font-serif text-primary text-lg tracking-wide">
              Discover
            </h3>
            <ul className="flex flex-col gap-3 items-center lg:items-start">
              {[
                {
                  label: "The 12 Tribes",
                  to: "/learn/12-tribes",
                },
                { label: "Holy Days", to: "/learn/holy-days" },
                {
                  label: "Pagan Holidays",
                  to: "/learn/pagan-holidays",
                },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-foreground/70 text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <h3 className="font-serif text-primary text-lg tracking-wide">
              Community
            </h3>
            <ul className="flex flex-col gap-3 items-center lg:items-start">
              {[
                { label: "Ministries", to: "/ministries" },
                { label: "Locations", to: "/locations" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-foreground/70 text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Newsletter Column (4 cols) */}
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <h3 className="font-serif text-primary text-lg tracking-wide">
              Stay Informed
            </h3>
            <p className="text-foreground/60 text-xs leading-relaxed">
              Receive updates on feast days, new teachings, and community
              gatherings.
            </p>

            <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
              <NewsletterSubscription
                variant="minimal"
                placeholder="Email Address"
                buttonText="Subscribe"
                source="footer"
                className="w-full [&_input]:bg-foreground/5 [&_input]:border-foreground/10 [&_input]:text-foreground [&_input]:placeholder:text-foreground/30 [&_button]:bg-primary [&_button]:text-primary-foreground hover:[&_button]:opacity-90"
              />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-foreground/40 text-xs mt-4">
              <MapPin className="w-3 h-3" />
              <span>Based in Zion, serving globally</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-foreground/40 text-xs font-light tracking-wide">
            &copy; {currentYear} Thee Light of Zion. All rights reserved.
          </div>

          <div className="flex items-center gap-8">
            <Link
              to="/resources"
              className="text-foreground/40 text-xs hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/privacy"
              className="text-foreground/40 text-xs hover:text-primary transition-colors"
            >
              Privacy Policy & Terms
            </Link>
          </div>

          <div className="flex items-center gap-1.5 text-foreground/30 text-[10px] uppercase tracking-widest">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-primary fill-primary/20" />
            <span>in Faith</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
