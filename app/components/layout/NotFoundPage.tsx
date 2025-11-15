"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { VisualHierarchyText } from "./VisualHierarchyText";
import { 
  Home,
  ArrowLeft,
  Search,
  BookOpen,
  Calendar,
  Phone,
  AlertTriangle
} from "lucide-react";

export function NotFoundPage() {
  const pathname = usePathname();
  
  // Force scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const popularPages = [
    {
      title: "Home",
      description: "Return to our main page",
      href: "/",
      icon: Home,
      color: "from-primary/20 to-primary/10"
    },
    {
      title: "Calendar",
      description: "View our sacred calendar",
      href: "/calendar",
      icon: Calendar,
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      title: "Learn",
      description: "Discover your heritage",
      href: "/learn/12-tribes",
      icon: BookOpen,
      color: "from-green-500/20 to-green-600/10"
    },
    {
      title: "Contact",
      description: "Get in touch with us",
      href: "/contact",
      icon: Phone,
      color: "from-purple-500/20 to-purple-600/10"
    }
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="container max-w-4xl py-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Error Badge */}
          <Badge className="mb-6 px-4 py-2 text-sm bg-destructive/10 text-destructive border-destructive/30">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Page Not Found
          </Badge>

          {/* Large 404 */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-muted-foreground/20 select-none">
              404
            </div>
          </div>

          {/* Main heading with Visual Hierarchy */}
          <div className="my-12">
            <VisualHierarchyText 
              primary="Page Not"
              secondary="Found"
              secondaryFont="cormorant"
              secondaryWeight="semibold"
              size="large"
            />
          </div>

          {/* Error message */}
          <div className="mb-8 space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            {/* Show the attempted URL if it's not just a simple path */}
            {pathname !== "/" && (
              <div className="bg-muted/50 border rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground mb-2">You tried to visit:</p>
                <code className="text-sm font-mono bg-background px-3 py-1 rounded border">
                  {typeof window !== 'undefined' ? window.location.origin : ''}{pathname}
                </code>
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/">
              <Button className="group">
                <Home className="h-4 w-4 mr-2" />
                Go Home
                <ArrowLeft className="h-4 w-4 ml-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          {/* Popular pages grid */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">Popular Pages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <Link href={page.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 bg-gradient-to-br ${page.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <page.icon className="h-6 w-6 text-foreground" />
                        </div>
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {page.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {page.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Search suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto"
          >
            <Search className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">Need Help Finding Something?</h4>
            <p className="text-sm text-muted-foreground">
              Try checking our navigation menu above, or contact us if you need assistance 
              finding specific information about Thee Light of Zion.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-destructive/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}