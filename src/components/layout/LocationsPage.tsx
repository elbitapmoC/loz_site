import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MapPin, Phone, Clock, Mail, Navigation, Calendar, Shield } from "lucide-react";

export function LocationsPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-24">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 text-sm px-4 py-1">
            Many Locations to Serve You
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Visit Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for worship, fellowship, and learning at either of our{" "}
            <span className="font-serif italic">Thee Light of Zion</span>{" "}
            locations
          </p>
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* HQ Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              {/* Headquarters Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge className="bg-amber-500 dark:bg-amber-400 text-amber-950 shadow-lg">
                  HQ
                </Badge>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif mb-1">
                      Fort Lauderdale HQ
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Main Congregation
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative">
                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">2937 W Broward Blvd</p>
                      <p className="text-sm text-muted-foreground">
                        Fort Lauderdale, FL 33312
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Times */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="font-medium">Service Times</p>
                      <div className="text-sm text-muted-foreground space-y-0.5">
                        <p>
                          <span className="font-medium text-foreground">
                            Sabbath Service:
                          </span>{" "}
                          Saturdays, 12:00 PM
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            New Moon:
                          </span>{" "}
                          In general, 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                {/* <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">(954) 555-TLOZ</p>
                      <p className="text-sm text-muted-foreground">
                        Main Office
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=2937+W+Broward+Blvd+Fort+Lauderdale+FL+33312"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full border-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif mb-1">Weekly Line-Up</h2>
                    <p className="text-sm text-muted-foreground">Schedule</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Sunday:</p>
                      <p className="text-sm text-muted-foreground">Live or Death Radio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Monday:</p>
                      <p className="text-sm text-muted-foreground">Big Deal Mondays</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Tuesday:</p>
                      <p className="text-sm text-muted-foreground">Breakdown Tuesdays</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Wednsday:</p>
                      <p className="text-sm text-muted-foreground">Wisdom Wednsdays</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Thursday:</p>
                      <p className="text-sm text-muted-foreground">Soldiers Class</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Friday:</p>
                      <p className="text-sm text-muted-foreground">New Testament</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Saturday:</p>
                      <p className="text-sm text-muted-foreground">Shabbat Portion (Torah)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-2">
            <CardContent className="py-5">
              <div className="flex items-center justify-center gap-3 text-center">
                <Shield className="w-5 h-5 text-primary" />
                <p className="text-sm md:text-base text-muted-foreground">
                  <span className="font-medium text-foreground">We have soldiers</span> in West Palm Beach, Lee County, Miami-Dade County, Broward County and more to come (MHW)
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-2">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif">Weekly Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Join us every Sabbath for worship and fellowship
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-2">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif">First Time Visitor?</h3>
                  <p className="text-sm text-muted-foreground">
                    <Link
                      to="/contact"
                      className="text-primary hover:underline"
                    >
                      Contact us
                    </Link>{" "}
                    to learn more about our congregation
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-2">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif">Biblical Calendar</h3>
                  <p className="text-sm text-muted-foreground">
                    We observe{" "}
                    <Link
                      to="/learn/biblical-holy-days"
                      className="text-primary hover:underline"
                    >
                      High Holy Days
                    </Link>{" "}
                    according to scripture
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* What to Expect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center">
            What to Expect
          </h2>

          <Card className="border-2">
            <CardContent className="pt-6 space-y-6">
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-muted-foreground text-center">
                  Our services blend traditional Hebrew worship with biblical
                  understanding of scripture. Each service includes Torah
                  reading, biblical teaching, and opportunities for fellowship
                  and learning about your Israelite heritage.
                </p>
              </div>

              {/* Who We Welcome */}
              <div className="border-t pt-6">
                <h3 className="font-serif text-xl mb-4 text-center">
                  Who We Welcome
                </h3>
                <p className="text-center text-muted-foreground mb-4">
                  We welcome members of the scattered tribes of Israel—those of
                  Black, Hispanic, or Native American (including Seminole)
                  descent seeking to learn their true biblical heritage.
                </p>
              </div>

              {/* Dress Code Section */}
              <div className="border-t pt-6">
                <h3 className="font-serif text-xl mb-4 text-center">
                  Dress Code & Conduct
                </h3>
                <p className="text-sm text-center text-muted-foreground mb-6">
                  Biblical standards of modesty and worship observed at all
                  services
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Men's Dress Code */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center text-lg">Men</h4>

                    <div className="space-y-3">
                      <p className="text-sm font-medium">Prohibited Attire:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Hats, durags, shorts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Skinny jeans, holes in jeans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Slides, tank tops</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg space-y-2 p-4">
                      <p className="text-sm font-medium">Head Covering:</p>
                      <p className="text-xs text-muted-foreground">
                        EVERY man MUST have the crown of his head uncovered
                        during ANY/ALL Services.
                      </p>
                      <div className="text-xs space-y-1 pt-2 border-t border-border/50">
                        <p className="font-mono">
                          1 COR 11:4 - "Every man praying or prophesying, having
                          his head covered, dishonoureth his head"
                        </p>
                        <p className="font-mono pt-4">
                          1 COR 11:7 - "For a man indeed ought not to cover his
                          head, forasmuch as he is the image and glory of God"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Women's Dress Code */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center text-lg">Women</h4>

                    <div className="space-y-3">
                      <p className="text-sm font-medium">Required Attire:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            Dresses or full-length skirts with fringes or tzit
                            zits
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            No pants, shorts, tank tops, or men's clothing
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>No tight, clingy, sheer, or thin fabrics</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg space-y-2 p-4">
                      <p className="text-sm font-medium">Head Covering:</p>
                      <p className="text-xs text-muted-foreground">
                        Sisters must have their crown of the head completely
                        covered during ANY/ALL Services.
                      </p>
                      <div className="text-xs space-y-1 pt-2 border-t border-border/50">
                        <p className="font-mono">
                          1 COR 11:5 - "But every woman that prayeth or
                          prophesieth with her head uncovered dishonoureth her
                          head"
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg space-y-2 p-4">
                      <p className="text-sm font-medium">
                        Questions & Concerns:
                      </p>
                      <p className="text-xs text-muted-foreground">
                        In-depth questions should be addressed after class to
                        your father, husband, or betrothed.
                      </p>
                      <div className="text-xs pt-2 border-t border-border/50">
                        <p className="font-mono">
                          1 COR 14:34-35 - "Let your women keep silence in the
                          churches: for it is not permitted unto them to
                          speak... And if they will learn anything, let them ask
                          their husbands at home."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  These biblical standards apply to all classes, convocations,
                  and gatherings.
                </p>
                <Button asChild size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
  );
}
