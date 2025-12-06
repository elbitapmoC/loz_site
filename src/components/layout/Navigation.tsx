import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../ui/utils";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "../providers/ThemeProvider";
import { Dock } from "../ui/dock";
import { MobileMenu } from "./MobileMenu";
import { ZionLogo } from "./ZionLogo";
import {
  Menu,
  Sun,
  Heart,
  Calendar,
  Music,
  BookOpen,
  Mail,
  Home,
  Info,
  Headphones,

  Users,
  Bookmark,
  ScrollText,
  UserPlus,
  FileText as FileTextIcon,
  ListTree,
  Moon,
  MapPin,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface NavigationProps {
  className?: string;
}

// Main navigation links
const mainLinks = [
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
const mobileLinks = [
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
    name: "Music",
    path: "https://www.youtube.com/channel/UC9BS4wB8yHp6DIHUENQOSSw",
    icon: <Headphones className="h-5 w-5" />,
    external: true,
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
        path: "/about#beliefs",
        icon: <Bookmark className="h-5 w-5" />,
      },
      {
        name: "Our History",
        path: "/about#history",
        icon: <ScrollText className="h-5 w-5" />,
      },
      {
        name: "Our Leaders",
        path: "/about#leaders",
        icon: <UserPlus className="h-5 w-5" />,
      },
      {
        name: "Our Locations",
        path: "/locations",
        icon: <MapPin className="h-5 w-5" />,
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
];

export function Navigation({ className }: NavigationProps) {
  const location = useLocation();
  const { isDark, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimize scroll listener with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY;
          setScrolled(offset > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle opening of the mobile menu
  const handleMenuOpen = useCallback(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  // Close menu handler
  const handleMenuClose = useCallback(() => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  }, []);

  // Theme toggle handler with debounce
  const [isThemeToggling, setIsThemeToggling] = useState(false);
  const handleThemeToggle = useCallback(() => {
    if (isThemeToggling) return;
    setIsThemeToggling(true);
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => setIsThemeToggling(false), 300);
  }, [isThemeToggling, isDark, setTheme]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-background/90 backdrop-blur-md border-b border-primary/10",
          "h-16 transition-colors duration-300 flex justify-center items-center",
          scrolled ? "shadow-md" : "",
          className,
        )}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="relative flex items-center z-10 group"
            >
              <div className="flex items-center perspective">
                <div className="flex flex-col">
                  <BrandLogo />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              aria-label="Main Navigation"
            >
              <div className="flex space-x-1 lg:space-x-2">
                {mainLinks.map((link) => {
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
                          "text-foreground/70 hover:text-primary hover:bg-primary/5",
                        )}
                      >
                        <span className="relative z-10">
                          {link.name}
                        </span>
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        "relative px-3 py-2 rounded-md font-medium text-sm transition-all duration-300",
                        scrolled ? "py-1.5" : "py-2",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5",
                      )}
                      aria-current={
                        location.pathname === link.path
                          ? "page"
                          : undefined
                      }
                    >
                      <span className="relative z-10">
                        {link.name}
                      </span>
                      {location.pathname === link.path && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center space-x-3 pl-2 border-l border-border">
                <ModeToggle />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Dock Navigation */}
      <AnimatePresence>
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Dock>
            {mobileLinks.map((link) => {
              if (link.path === "#more") {
                return (
                  <button
                    key={link.path}
                    onClick={handleMenuOpen}
                    className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                    aria-label="More menu"
                    aria-expanded={isOpen}
                  >
                    <Dock.Item
                      icon={link.icon}
                      label={link.name}
                      isActive={false}
                    />
                  </button>
                );
              }

              if (link.external) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                    aria-label={link.name}
                  >
                    <Dock.Item
                      icon={link.icon}
                      label={link.name}
                      isActive={false}
                    />
                  </a>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                  aria-label={link.name}
                  aria-current={
                    location.pathname === link.path
                      ? "page"
                      : undefined
                  }
                >
                  <Dock.Item
                    icon={link.icon}
                    label={link.name}
                    isActive={location.pathname === link.path}
                  />
                </Link>
              );
            })}

            {/* Theme toggle in dock */}
            <button
              onClick={handleThemeToggle}
              className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
              aria-label={
                isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
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
                      <Sun className="h-5 w-5 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="relative"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="h-5 w-5 text-primary" />
                    </motion.div>
                  )
                }
                label={isDark ? "Light Mode" : "Dark Mode"}
                isActive={false}
              />
            </button>
          </Dock>
        </motion.div>
      </AnimatePresence>

      <MobileMenu
        isOpen={isOpen}
        onClose={handleMenuClose}
        categories={mobileMenuCategories}
      />
    </>
  );
}
