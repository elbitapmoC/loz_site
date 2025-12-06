import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Church,
  Users,
  MapPin,
  Compass,
} from "lucide-react";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { cn } from "../ui/utils";
import { useTheme } from "../providers/ThemeProvider";
import { ThreeDButton } from "../ui/3d-button";
import { CoreValues } from "./CoreValues";
import { EnhancedFeatureGrid } from "./EnhancedFeatureGrid";

interface HeroSectionProps {
  valueStyle?: "icons" | "cards" | "minimal" | "scripture";
  buttonLayout?: "centered" | "wide" | "spaced";
}

export function HeroSection({
  valueStyle = "icons",
  buttonLayout = "centered",
}: HeroSectionProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} 1px, transparent 1px), 
                             linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            backgroundPosition: "center center",
          }}
        />
      </div>

      <div className="container py-20 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="mb-4 md:mb-8">
              <VisualHierarchyText
                as="h1"
                size="large"
                secondaryFont="cinzel"
                secondaryWeight="semibold"
                animation={false}
              />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-8">
              We are a congregation of believers dedicated to
              walking in the commandments of the Most High and
              embracing our Israelite heritage.
            </p>

            {/* Redesigned CTA Buttons in Various Layouts */}
            {buttonLayout === "centered" && (
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <ThreeDButton
                  asChild
                  variant="primary"
                  size="lg"
                  depth="raised"
                >
                  <Link
                    to="/learn"
                    className="gap-2 text-white flex items-center"
                    style={{ color: "#FFFFFF" }}
                  >
                    Start Learning{" "}
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Link>
                </ThreeDButton>

                <ThreeDButton
                  asChild
                  variant="secondary"
                  size="lg"
                  depth="raised"
                >
                  <Link to="/locations" className="gap-2">
                    <MapPin className="h-5 w-5 mr-1" /> Find a
                    Congregation
                  </Link>
                </ThreeDButton>
              </div>
            )}

            {buttonLayout === "wide" && (
              <div className="flex flex-col sm:flex-row justify-between w-full max-w-2xl gap-4 mt-6">
                <ThreeDButton
                  asChild
                  variant="primary"
                  size="lg"
                  depth="deep"
                >
                  <Link
                    to="/learn"
                    className="gap-2 flex-1 sm:w-[45%] text-white flex items-center"
                    style={{ color: "#FFFFFF" }}
                  >
                    Start Learning{" "}
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Link>
                </ThreeDButton>

                <ThreeDButton
                  asChild
                  variant="secondary"
                  size="lg"
                  depth="deep"
                >
                  <Link
                    to="/locations"
                    className="gap-2 flex-1 sm:w-[45%]"
                  >
                    <MapPin className="h-5 w-5 mr-1" /> Find a
                    Congregation
                  </Link>
                </ThreeDButton>
              </div>
            )}

            {buttonLayout === "spaced" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full max-w-2xl">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-medium mb-3">
                    New to our teachings?
                  </h3>
                  <ThreeDButton
                    asChild
                    variant="primary"
                    size="lg"
                    depth="raised"
                  >
                    <Link
                      to="/learn"
                      className="gap-2 w-full text-white flex items-center"
                      style={{ color: "#FFFFFF" }}
                    >
                      Start Learning{" "}
                      <ArrowRight className="h-5 w-5 ml-1" />
                    </Link>
                  </ThreeDButton>
                </div>

                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-medium mb-3">
                    Ready to join us?
                  </h3>
                  <ThreeDButton
                    asChild
                    variant="secondary"
                    size="lg"
                    depth="raised"
                  >
                    <Link
                      to="/locations"
                      className="gap-2 w-full"
                    >
                      <MapPin className="h-5 w-5 mr-1" /> Find a
                      Congregation
                    </Link>
                  </ThreeDButton>
                </div>
              </div>
            )}

            {/* Core Values (Replacing Statistics) - Using our new component */}
            <div
              className={cn(
                "w-full mt-16 py-10 border-y theme-aware",
                isDark ? "border-primary/20" : "border-foreground/10",
              )}
            >
              <CoreValues variant={valueStyle} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Feature Grid - MagicUI inspired */}
      <EnhancedFeatureGrid />
    </section>
  );
}
