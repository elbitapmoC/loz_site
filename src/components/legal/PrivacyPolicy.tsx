import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLocation, Link } from "react-router-dom";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import {
  Shield,
  FileText,
  Cookie,
  Mail,
  Scale,
  Lock,
  Eye,
  Server,
  Globe,
  CheckCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

// --- Navigation Items ---
const SECTIONS = [
  {
    id: "privacy",
    label: "Privacy Policy",
    icon: Shield,
    path: "/privacy",
  },
  {
    id: "terms",
    label: "Terms of Service",
    icon: FileText,
    path: "/terms",
  },
  {
    id: "cookies",
    label: "Cookie Policy",
    icon: Cookie,
    path: "/cookies",
  },
];

export function PrivacyPolicy() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("privacy");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Header offset
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll to section based on URL path or hash
  useEffect(() => {
    const path = location.pathname;
    // Small delay to ensure layout is stable and ScrollToTop has finished its checks
    const timer = setTimeout(() => {
      if (path.includes("terms")) {
        scrollToSection("terms");
      } else if (path.includes("cookies")) {
        scrollToSection("cookies");
      } else {
        setActiveSection("privacy");
        // Only scroll to top if we are explicitly at /privacy and not just navigating back/forth
        if (path === "/privacy" || path === "/privacy/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none z-0" />

      <div className="container max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        {/* --- Header --- */}
        <div className="mb-20 text-center">
          <VisualHierarchyText
            primary="Legal"
            secondary="Documentation"
            size="large"
            secondaryFont="cinzel"
          />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-serif italic text-lg">
            "Let all things be done decently and in order."{" "}
            <span className="text-primary text-xs font-sans font-bold uppercase tracking-widest not-italic ml-2">
              1 Corinthians 14:40
            </span>
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Last Updated: {currentDate}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative mx-auto">
          {/* --- Main Content --- */}
          <div className="lg:col-span-8 lg:col-start-3 space-y-24">
            {/* --- PRIVACY POLICY --- */}
            <section id="privacy" className="scroll-mt-32">
              <SectionHeader
                icon={Shield}
                title="Privacy Policy"
                subtitle="How we handle your data"
              />

              <div className="space-y-12">
                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                  <p className="lead text-foreground text-xl">
                    At Thee Light of Zion, we are committed to
                    protecting your privacy and ensuring the
                    security of your personal information. This
                    policy outlines our practices regarding data
                    collection, use, and protection.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InfoCard
                    icon={Eye}
                    title="Information We Collect"
                    items={[
                      "Personal identification (Name, Email, Phone)",
                      "Donation history and transaction details",
                      "Account preferences and newsletter subscriptions",
                      "Technical data (IP address, browser type)",
                    ]}
                  />
                  <InfoCard
                    icon={Server}
                    title="How We Use Data"
                    items={[
                      "To process donations and provide tax receipts",
                      "To send ministry updates and newsletters",
                      "To improve website functionality and security",
                      "To comply with legal and regulatory obligations",
                    ]}
                  />
                </div>

                <div className="bg-white/[0.02] border border-white/10 p-8 rounded-xl">
                  <h3 className="text-xl font-serif font-bold mb-4 text-foreground flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Data Protection & Security
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We implement industry-standard security
                    measures to protect your personal
                    information. Your data is stored on secure
                    servers with restricted access. We use SSL
                    encryption for all sensitive data
                    transmission, including payment information.
                  </p>
                  <p className="text-sm text-muted-foreground/60 italic">
                    Note: We never sell your personal data to
                    third parties or advertisers.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* --- TERMS OF SERVICE --- */}
            <section id="terms" className="scroll-mt-32">
              <SectionHeader
                icon={FileText}
                title="Terms of Service"
                subtitle="Rules and guidelines"
              />

              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  By accessing this website, you agree to be
                  bound by these Terms of Service, all
                  applicable laws and regulations, and agree
                  that you are responsible for compliance with
                  any applicable local laws.
                </p>

                <div className="space-y-6">
                  <TermItem
                    number="01"
                    title="Intellectual Property"
                    content="All content on this website, including text, graphics, logos, images, and software, is the property of Thee Light of Zion or its content suppliers and is protected by international copyright laws."
                  />
                  <TermItem
                    number="02"
                    title="User Conduct"
                    content="You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the site. We reserve the right to terminate access for users who violate these terms."
                  />
                  <TermItem
                    number="03"
                    title="Donations & Refunds"
                    content="All donations made to the ministry are considered final and non-refundable, except in cases of technical error or duplicate processing. Tax receipts will be issued in accordance with applicable laws."
                  />
                  <TermItem
                    number="04"
                    title="Disclaimer"
                    content="The materials on this website are provided on an 'as is' basis. Thee Light of Zion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability."
                  />
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* --- COOKIE POLICY --- */}
            <section id="cookies" className="scroll-mt-32">
              <SectionHeader
                icon={Cookie}
                title="Cookie Policy"
                subtitle="Tracking and preferences"
              />

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h4 className="font-bold text-foreground mb-2">
                    Essential Cookies
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function
                    properly. Cannot be disabled.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h4 className="font-bold text-foreground mb-2">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact
                    with our website anonymously.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h4 className="font-bold text-foreground mb-2">
                    Functional Cookies
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Remember your preferences and settings for a
                    better experience.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Managing Preferences
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You can control and/or delete cookies as you
                    wish through your browser settings. Please
                    note that disabling certain cookies may
                    limit your ability to use specific features
                    of our website.
                  </p>
                </div>
              </div>
            </section>

            {/* --- CONTACT FOOTER --- */}
            <div className="pt-12 pb-12">
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Have Questions?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  If you have any questions about our legal
                  policies or how we handle your data, please
                  don't hesitate to reach out to our
                  administrative team.
                </p>
                <a href="/contact">
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary hover:text-black text-primary transition-all duration-300"
                  >
                    Contact Administration
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components ---

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-3xl font-serif font-bold text-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  items,
}: {
  icon: any;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-5 h-5 text-muted-foreground" />
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <CheckCircle className="w-4 h-4 text-primary/50 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TermItem({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-6 group">
      <div className="font-mono text-sm text-primary/30 pt-1 group-hover:text-primary transition-colors">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}