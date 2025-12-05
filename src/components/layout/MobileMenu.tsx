import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  Gift,
  ChevronDown,
  MapPin,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import { cn } from "../ui/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories: {
    title: string;
    icon: React.ReactNode;
    links: {
      name: string;
      path: string;
      icon: React.ReactNode;
    }[];
  }[];
}

export function MobileMenu({ isOpen, onClose, categories }: MobileMenuProps) {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  // Reset active category when menu closes
  React.useEffect(() => {
    if (!isOpen) {
      setActiveCategory(null);
    }
  }, [isOpen]);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 bg-background z-40 transition-transform duration-300 md:hidden overflow-auto",
        isOpen ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!isOpen}
    >
      <div className="container h-full flex flex-col pt-20 pb-28">
        <div className="absolute top-6 right-6">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Donate button at top */}
        <Link
          to="/donations"
          onClick={onClose}
          className="mb-8 bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2 w-full max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <Gift className="h-5 w-5" />
          Donate
        </Link>

        {/* Categorized Links */}
        <div className="space-y-3 max-w-md mx-auto w-full">
          {categories.map((category) => (
            <div
              key={category.title}
              className="border border-primary/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.title)}
                className={cn(
                  "w-full flex items-center justify-between p-3 bg-card/80 focus:outline-none focus:bg-primary/5",
                  activeCategory === category.title
                    ? "border-b border-primary/10"
                    : ""
                )}
                aria-expanded={activeCategory === category.title}
              >
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    {category.icon}
                  </div>
                  <span className="font-medium">{category.title}</span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    activeCategory === category.title ? "rotate-180" : ""
                  )}
                />
              </button>

              {activeCategory === category.title && (
                <div className="p-2 space-y-1 bg-card">
                  {category.links
                    .filter((link) => !["Biblical Holy Days", "Pagan Holidays", "The 12 Tribes of Israel"].includes(link.name))
                    .map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 py-2 px-4 rounded-md transition-colors focus:outline-none focus:bg-primary/10",
                        location.pathname === link.path
                          ? "text-primary bg-primary/10 font-medium"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
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

        {/* Locations section */}
        <div className="mt-auto pt-6 mb-6 max-w-md mx-auto w-full">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-primary">
            <MapPin className="h-5 w-5 mr-2" />
            Locations
          </h3>

          <div className="space-y-4">
            <div className="p-4 border border-primary/10 rounded-lg bg-card/80">
              <p className="font-medium mb-1 text-primary">Headquarters</p>
              <p className="text-sm text-muted-foreground">
                2937 W Broward Blvd,
                <br />
                Fort Lauderdale, FL 33312
              </p>
            </div>

            <Link
              to="/locations"
              onClick={onClose}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors focus:outline-none focus:underline"
            >
              View All Locations
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Social Media section */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC9BS4wB8yHp6DIHUENQOSSw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
