"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../ui/utils";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useAuth } from "../auth/AuthContext";
import { Dock } from "../ui/dock";
import {
  Menu,
  X,
  Sun,
  Heart,
  Calendar,
  Music,
  MapPin,
  Users,
  ScrollText,
  ChevronDown,
  Home,
  Info,
  Headphones,
  Mail,
  ChevronRight,
  Bookmark,
  BookOpen,
  ListTree,
  UserPlus,
  FileText as FileTextIcon,
  // Social media icons
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Moon,
} from "lucide-react";
// Removed unused Button and DropdownMenu imports

interface NavigationProps {
  className?: string;
}

// Shared navigation link type allowing optional external links
interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
  external?: boolean;
}

// Main navigation links
const mainLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <Info className="h-5 w-5" />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Ministries",
    path: "/ministries",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    name: "Music",
    path: "https://www.youtube.com/channel/UC9BS4wB8yHp6DIHUENQOSSw",
    icon: <Music className="h-5 w-5" />,
    external: true,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <Mail className="h-5 w-5" />,
  },
];

// For mobile dock, we'll use a subset of the main links
const mobileLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Learn",
    path: "/learn",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "More",
    path: "#more",
    icon: <Menu className="h-5 w-5" />,
  },
];

// Category links for mobile menu
const mobileMenuCategories = [
  {
    title: "About Us",
    icon: <Users className="h-5 w-5" />,
    links: [
      {
        name: "Our Beliefs",
        path: "/about/beliefs",
        icon: <Bookmark className="h-5 w-5" />,
      },
      {
        name: "Our History",
        path: "/about/history",
        icon: <ScrollText className="h-5 w-5" />,
      },
      {
        name: "Our Leaders",
        path: "/about/leaders",
        icon: <UserPlus className="h-5 w-5" />,
      },
      {
        name: "Ministries",
        path: "/ministries",
        icon: <Heart className="h-5 w-5" />,
      },
      {
        name: "Contact Us",
        path: "/contact",
        icon: <Mail className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Resources",
    icon: <Calendar className="h-5 w-5" />,
    links: [
      {
        name: "Welcome Booklet",
        path: "/welcome-booklet",
        icon: <FileTextIcon className="h-5 w-5" />,
      },
      {
        name: "Camp Flyers",
        path: "/camp-flyers",
        icon: <FileTextIcon className="h-5 w-5" />,
      },
      {
        name: "Biblical Holy Days",
        path: "/learn/biblical-holy-days",
        icon: <Calendar className="h-5 w-5" />,
      },
      {
        name: "Pagan Holidays",
        path: "/learn/pagan-holidays",
        icon: <Calendar className="h-5 w-5" />,
      },
      {
        name: "The 12 Tribes of Israel",
        path: "/learn/12-tribes",
        icon: <ListTree className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Media",
    icon: <Headphones className="h-5 w-5" />,
    links: [
      {
        name: "Music",
        path: "https://www.youtube.com/channel/UC9BS4wB8yHp6DIHUENQOSSw",
        icon: <Headphones className="h-5 w-5" />,
      },
    ],
  },
];

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const { isDark, setTheme } = useTheme();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    string | null
  >(null);

  // Safely derive a display name from Clerk's UserResource
  // Prefer metadata-provided name, then first/last, then username, then email handle
  const unsafe = user?.unsafeMetadata as Record<string, unknown> | undefined;
  const unsafeName = typeof unsafe?.["name"] === "string" ? (unsafe?.["name"] as string) : undefined;
  const primaryEmail = user?.primaryEmailAddress?.emailAddress;
  const emailHandle = primaryEmail ? primaryEmail.split("@")[0] : undefined;
  const nameFromProfile = [user?.firstName, user?.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();
  const displayName = unsafeName || (nameFromProfile ? nameFromProfile : undefined) || user?.username || emailHandle || "Account";
  void displayName;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
    setActiveCategory(null);
  }, [pathname]);

  // Handle opening of the mobile menu
  const handleMenuOpen = () => {
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    setIsOpen(!isOpen);
    setActiveCategory(null);
  };

  const toggleCategory = (category: string) => {
    setActiveCategory(
      activeCategory === category ? null : category,
    );
  };

  // Toggle theme handler for dock item with debounce
  const [isThemeToggling, setIsThemeToggling] = useState(false);

  const handleThemeToggle = () => {
    if (isThemeToggling) return; // Prevent rapid toggling

    setIsThemeToggling(true);

    // Toggle between light and dark
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);

    // Allow toggling again after animation completes
    setTimeout(() => {
      setIsThemeToggling(false);
    }, 300);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-300 backdrop-blur-md z-50",
          isDark ? "bg-secondary/95" : "bg-background/95",
          scrolled ? "shadow-md py-2" : "py-4",
          className,
        )}
      >
        {/* Subtle accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center z-10 group"
            >
              <div className="flex items-center perspective">
                <div
                  className={cn(
                    "relative flex items-center justify-center mr-3 overflow-hidden transition-all duration-300",
                    scrolled ? "w-8 h-8" : "w-9 h-9",
                  )}
                >
                  <Sun
                    className={cn(
                      "absolute text-primary animate-spin-slow transform group-hover:scale-110 transition-transform duration-300",
                      scrolled ? "h-7 w-7" : "h-8 w-8",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/10 to-background/30 rounded-full"></div>
                </div>
                <span
                  className={cn(
                    "font-semibold tracking-tight transition-all duration-300 group-hover:text-primary",
                    scrolled ? "text-lg" : "text-xl",
                    "text-foreground",
                  )}
                >
                  Thee Light of Zion
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-1 lg:space-x-2">
                {mainLinks.map((link) => {
                  // Handle external links differently
                  if (link.external) {
                    return (
                      <a
                        key={link.path}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "relative px-3 py-2 rounded-md font-medium text-sm transition-all duration-300",
                          scrolled ? "py-1.5" : "py-2",
                          "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
                        )}
                      >
                        <span className="relative z-10 inline-flex items-center gap-1">
                          {link.name}
                          <span className="inline-flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-70"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <path d="M15 3h6v6" />
                              <path d="M10 14L21 3" />
                            </svg>
                          </span>
                        </span>
                      </a>
                    );
                  }

                  // Handle internal links
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={cn(
                        "relative px-3 py-2 rounded-md font-medium text-sm transition-all duration-300",
                        scrolled ? "py-1.5" : "py-2",
                        pathname === link.path
                          ? "text-primary"
                          : "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
                      )}
                    >
                      <span className="relative z-10">
                        {link.name}
                      </span>
                      {pathname === link.path && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Dock Navigation */}
      {/* No wrapper div needed since the Dock component handles positioning */}
      <AnimatePresence>
        {/* Only show on mobile */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Dock>
            {mobileLinks.map((link) => {
              // Handle "More" menu item
              if (link.path === "#more") {
                return (
                  <Link
                    key={link.path}
                    href="#"
                    onClick={handleMenuOpen}
                    className="block focus:outline-none"
                  >
                    <Dock.Item
                      icon={link.icon}
                      label={link.name}
                      isActive={false}
                    />
                  </Link>
                );
              }

              // Handle external links
              if (link.external) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none"
                  >
                    <Dock.Item
                      icon={link.icon}
                      label={link.name}
                      isActive={false}
                    />
                  </a>
                );
              }

              // Handle internal links
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block focus:outline-none"
                >
                  <Dock.Item
                    icon={link.icon}
                    label={link.name}
                    isActive={pathname === link.path}
                  />
                </Link>
              );
            })}
            {/* Theme toggle in dock */}
            <Dock.Item
              icon={
                isDark ? (
                  <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-5 w-5 text-amber-300" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-amber-300/20 rounded-full opacity-70"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 0.4, 0.7],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-5 w-5 text-indigo-400" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-indigo-400/20 rounded-full opacity-70"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 0.5, 0.7],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )
              }
              label={isDark ? "Light Mode" : "Dark Mode"}
              onClick={handleThemeToggle}
            />
          </Dock>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background dark:bg-secondary z-40 transition-transform duration-300 md:hidden overflow-auto",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="container h-full flex flex-col pt-20 pb-28">
          <div className="absolute top-6 right-6">
            <button
              onClick={handleMenuOpen}
              className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>

          {/* Donate button removed */}

          {/* Categorized Links */}
          <div className="space-y-3 max-w-md mx-auto w-full">
            {mobileMenuCategories.map((category) => (
              <div
                key={category.title}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.title)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 bg-card/80",
                    activeCategory === category.title
                      ? "border-b"
                      : "",
                  )}
                >
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      {category.icon}
                    </div>
                    <span className="font-medium">
                      {category.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-200",
                      activeCategory === category.title
                        ? "rotate-180"
                        : "",
                    )}
                  />
                </button>

                {activeCategory === category.title && (
                  <div className="p-2 space-y-1">
                    {category.links.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={cn(
                          "flex items-center gap-3 py-2 px-4 rounded-md transition-colors",
                          pathname === link.path
                            ? "text-primary bg-primary/10 font-medium"
                            : "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
                        )}
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Locations section - now placed above the social media section */}
          <div className="mt-auto pt-6 mb-6 max-w-md mx-auto w-full">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Locations
            </h3>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-card/80">
                <p className="font-medium mb-1">HQ</p>
                <p className="text-sm text-muted-foreground">
                  2937 W Broward Blvd,
                  <br />
                  Fort Lauderdale, FL 33312
                </p>
              </div>

              <div className="p-4 border rounded-lg bg-card/80">
                <p className="font-medium mb-1">
                  Treasure Coast
                </p>
                <p className="text-sm text-muted-foreground">
                  718 SW Port Saint Lucie Blvd
                  <br />
                  Suite #6 <br /> Port St. Lucie, FL 34953
                </p>
              </div>

              <Link
                href="/locations"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                View All Locations
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Social Media section - now comes after locations */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC9BS4wB8yHp6DIHUENQOSSw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                <Youtube className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
