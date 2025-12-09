import React, { Profiler } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { PageHeader } from "../layout/PageHeader";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getWebpUrl } from "../../utils/imageUtils";
import {
  Heart,
  Users,
  BookOpen,
  Shield,
  DollarSign,
  Home,
  Search,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const ministries = [
  {
    id: "street-ministry",
    title: "Street Ministry",
    subtitle: "Reaching the Lost",
    description:
      "Taking the truth of Scripture directly to the streets, sharing hope and the Word with those who need it most. We engage with homeless communities, distribute food, and provide spiritual guidance.",
    image:
      "https://images.unsplash.com/photo-1630243269501-d4abbafe1d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBtaW5pc3RyeSUyMHVyYmFuJTIwb3V0cmVhY2h8ZW58MXx8fHwxNzU3MTg0OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Heart,
    features: [
      "Weekly outreach programs",
      "Food and clothing distribution",
      "Street Bible studies",
      "Community prayer sessions",
    ],
    contact: "streetministry@theeloz.org",
    schedule: "Friday (7:30 PM - 11:00 PM) & Saturdays (5 PM - 9 PM)",
  },
  {
    id: "prison-ministry",
    title: "Behind Bars Ministry",
    subtitle: "Freedom Through Truth",
    description:
      "Ministering to the incarcerated with the life-changing power of Scripture. We provide Bible studies, correspondence programs, and support for those seeking spiritual transformation.",
    image:
      "https://images.unsplash.com/photo-1638722843283-0a3a3202aa11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmlzb24lMjBtaW5pc3RyeSUyMGJpYmxlJTIwc3R1ZHl8ZW58MXx8fHwxNzU3MTg0OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: BookOpen,
    features: [
      "Weekly prison visits",
      "Bible correspondence courses",
      "Re-entry support programs",
      "Family ministry support",
    ],
    contact: "prisonministry@theeloz.org",
    schedule: "Wednesdays & Sundays",
  },
  {
    id: "food-pantry",
    title: "Food Pantry",
    subtitle: "Feeding Body & Soul",
    description:
      "Providing nutritious meals & groceries to families in need while sharing the bread of life. Our pantry serves the community with dignity & compassion.",
    image:
      "https://images.unsplash.com/photo-1682692597786-1ce3853e5cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGFudHJ5JTIwdm9sdW50ZWVycyUyMHNlcnZpbmd8ZW58MXx8fHwxNzU3MTg0OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Home,
    features: [
      "Weekly food distribution",
      "Emergency food assistance",
      "Nutrition education",
      "Community garden program",
    ],
    contact: "foodpantry@theeloz.org",
    schedule: "Wednesday (5:00 PM @ HQ)",
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    subtitle: "Building Bridges",
    description:
      "Engaging with our local community through service projects, educational programs, and neighborhood events that demonstrate love in action.",
    image:
      "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBvdXRyZWFjaCUyMHZvbHVudGVlcnMlMjBoZWxwaW5nfGVufDF8fHx8MTc1NzE4NDk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Users,
    features: [
      "Community service projects",
      "Neighborhood cleanups",
      "Educational workshops",
      "Holiday assistance programs",
    ],
    contact: "outreach@theeloz.org",
    schedule: "Various times throughout the month",
  },
  {
    id: "financial-literacy",
    title: "Financial Literacy",
    subtitle: "Stewardship & Wisdom",
    description:
      "Teaching biblical principles of financial stewardship, budgeting, and debt management to help families achieve financial freedom and stability.",
    image:
      "https://images.unsplash.com/photo-1538356390198-964cc56764d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBsaXRlcmFjeSUyMGVkdWNhdGlvbiUyMHRlYWNoaW5nfGVufDF8fHx8MTc1NzE4NDk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: DollarSign,
    features: [
      "Monthly workshops",
      "One-on-one counseling",
      "Budget planning assistance",
      "Debt reduction strategies",
    ],
    contact: "financial@theeloz.org",
    schedule: "Second Saturday of each month, 2 PM",
  },
  {
    id: "couples-counseling",
    title: "Couples Counseling",
    subtitle: "Strengthening Marriages",
    description:
      "Providing biblical marriage counseling and relationship guidance to help couples build strong, lasting unions based on scriptural principles.",
    image:
      "https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGVzJTIwY291bnNlbGluZyUyMHRoZXJhcHklMjBzZXNzaW9ufGVufDF8fHx8MTc1NzE4NDk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Handshake,
    features: [
      "Pre-marital counseling",
      "Marriage enrichment sessions",
      "Conflict resolution guidance",
      "Family relationship support",
    ],
    contact: "counseling@theeloz.org",
    schedule: "By appointment only",
  },
  {
    id: "mighty-men",
    title: "Mighty Men of Valor",
    subtitle: "Men's Ministry",
    description:
      "Empowering men to be spiritual leaders in their families and communities through fellowship, accountability, and biblical manhood training.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=M3w2ODIxMjN8MHwxfHNlYXJjaHwxfHxwcmlzb24lMjBtaW5pc3RyeSUyMGJpYmxlJTIwc3R1ZHl8ZW58MHx8fHwxNzM2MTg3NjM5fDA&ixlib=rb-4.0.3",
    icon: Shield,
    features: [
      "Men's Bible studies",
      "Leadership development",
      "Mentorship programs",
      "Community service projects",
    ],
    contact: "mightymen@theeloz.org",
    schedule: "Thursday (8:30 PM)",
  },
];

export function MinistriesPage() {
  return (
    <Profiler id="MinistriesPage" onRender={(id, phase, actualDuration) => { if (phase === 'mount' || phase === 'update') { console.log(id, phase, actualDuration); } }}>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="my-12">
                <VisualHierarchyText
                  primary="Building Community,"
                  secondary="Sharing Hope"
                  secondaryFont="cinzel"
                  secondaryWeight="semibold"
                  size="medium"
                />
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Through diverse ministries rooted in Scripture,
                we serve our community with love, providing
                education, support, and opportunities for
                spiritual and personal growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-[300px] mb-6 overflow-hidden rounded-sm">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <ImageWithFallback
                    src={ministry.image}
                    webpSrc={getWebpUrl(ministry.image)}
                    alt={ministry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-background z-20 flex items-center justify-center">
                    <div className="w-full h-full border-r border-t border-border/50 bg-background flex items-center justify-center">
                       <ministry.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow border-l-2 border-primary/20 pl-6 transition-colors group-hover:border-primary">
                  <div className="mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-primary/80">
                      {ministry.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                    {ministry.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {ministry.description}
                  </p>

                  {/* Mini Features */}
                  <div className="space-y-3 mb-6">
                    {ministry.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-foreground/70">
                        <div className="w-1 h-1 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Line */}
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/40">
                    <div className="flex items-center text-xs text-muted-foreground font-medium">
                      <Clock className="w-3 h-3 mr-2" />
                      <span className="max-w-[150px] truncate">{ministry.schedule}</span>
                    </div>
                    
                    <a 
                      href={`mailto:${ministry.contact}`}
                      className="text-xs font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      Connect <span className="text-lg leading-none">›</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Get Involved Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to{" "}
                <span className="text-primary">
                  Get Involved?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join us in making a difference in our community.
                Whether you want to volunteer, participate, or
                learn more about our ministries, we welcome you
                with open arms.
              </p>

              <div className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-xl border">
                <p className="text-sm text-muted-foreground mb-2">
                  General Ministry Information
                </p>
                <p className="font-medium">
                  Phone: (754) 367-4052
                </p>
                <p className="font-medium">
                  Email: theelightofzion@gmail.com
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <em>Service Times: Saturdays 12-4 PM</em>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </Profiler>
  );
}
