"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  BookOpen,
  Users,
  Crown,
  Scroll,
  Heart,
  Shield,
  Star,
  Church,
  Globe,
  Flame,
} from "lucide-react";

const beliefs = [
  {
    title: "The Almighty Creator",
    description:
      "We believe in the Most High God, Creator of heaven and earth, whose name is sacred and to be revered.",
    icon: Crown,
    scripture: "Deuteronomy 6:4",
  },
  {
    title: "Yahawashi the Messiah",
    description:
      "We believe Yahawashi (Jesus Christ) is the son of the Most High, our Messiah and Savior who died for our sins.",
    icon: Heart,
    scripture: "John 3:16",
  },
  {
    title: "The Holy Scriptures",
    description:
      "We read the entire Bible and believe in the words of the Most High God, and use these instructions as our guide for a righteous life.",
    icon: BookOpen,
    scripture: "2 Timothy 3:16",
  },
  {
    title: "The Twelve Tribes",
    description:
      "We believe the so-called African Americans, Hispanics, Native and Seminole Americans are the true descendants of the twelve tribes of Israel.",
    icon: Shield,
    scripture: "Genesis 49:1-28",
  },
  {
    title: "The Holy Days",
    description:
      "We observe the biblical feast days and Sabbath as commanded in Scripture, not pagan holidays. God commands us to be holy.",
    icon: Scroll,
    scripture: "Leviticus 23",
  },
  {
    title: "Righteous Living",
    description:
      "We believe in keeping the commandments, statutes, and judgments of the Most High God.",
    icon: Star,
    scripture: "1 John 5:3",
  },
];

const leadership = [
  {
    name: "Elder Council",
    role: "Spiritual Leadership",
    description:
      "Our elders provide spiritual guidance and oversight according to biblical principles.",
    icon: Crown,
  },
  {
    name: "Ministry Leaders",
    role: "Community Service",
    description:
      "Dedicated leaders who oversee our various ministries and community outreach programs.",
    icon: Users,
  },
  {
    name: "Teaching Ministry",
    role: "Biblical Education",
    description:
      "Committed to teaching the true identity and heritage of God's chosen people.",
    icon: BookOpen,
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="my-12">
                <VisualHierarchyText
                  primary="Walking in Truth,"
                  secondary="Teaching Scripture"
                  secondaryFont="cormorant"
                  secondaryWeight="semibold"
                  size="medium"
                />
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Thee Light of Zion is a congregation dedicated
                to teaching the true identity and heritage of
                God's chosen people according to Scripture,
                walking in righteousness and spreading the
                gospel of the Kingdom.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="px-8">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Join Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To awaken the true children of Israel to their
              identity and heritage as written in the Holy
              Scriptures, teaching them to walk in righteousness
              according to the laws, statutes, and commandments
              of the Most High God.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center p-6">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Teach Truth
                  </h3>
                  <p className="text-muted-foreground">
                    Proclaim the true identity of God's chosen
                    people as revealed in Scripture
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center p-6">
                <CardContent className="pt-6">
                  <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Spread Light
                  </h3>
                  <p className="text-muted-foreground">
                    Be a beacon of truth and righteousness in a
                    world of spiritual darkness
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center p-6">
                <CardContent className="pt-6">
                  <Church className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Build Community
                  </h3>
                  <p className="text-muted-foreground">
                    Foster unity among God's people through
                    love, service, and spiritual growth
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Our Beliefs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our doctrinal foundation is built solely upon the
              Holy Scriptures, with no compromise or deviation
              from biblical truth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <belief.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">
                          {belief.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                          {belief.description}
                        </p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {belief.scripture}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white dark:bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Our History
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Thee Light of Zion was established as a
                  congregation dedicated to awakening the true
                  children of Israel to their biblical identity
                  and heritage. Our journey began with a small
                  group of believers committed to studying
                  Scripture without the influence of man-made
                  traditions.
                </p>
                <p>
                  Through diligent study of the Bible, we
                  discovered the truth about the identity of
                  God's chosen people and felt called to share
                  this revelation with others. Our congregation
                  has grown as more people seek truth and
                  spiritual awakening.
                </p>
                <p>
                  Today, we continue to teach biblical truth,
                  observe the holy days as commanded in
                  Scripture, and serve our community through
                  various ministries, always remaining faithful
                  to the word of the Most High God.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-4 text-foreground">
                  Key Milestones
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">
                      Founded on biblical principles
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">
                      Established community ministries
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">
                      Growing congregation of believers
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Scroll className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Founded on Scripture
                  </h3>
                  <p className="text-muted-foreground">
                    Built upon the solid foundation of biblical
                    truth and unwavering faith
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Leadership Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership follows biblical principles, with
              elders providing spiritual oversight and ministry
              leaders serving the congregation with dedication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <leader.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {leader.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Truth
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Come and learn about your true identity and
              heritage as written in the Holy Scriptures. Walk
              with us in righteousness and truth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="px-8"
              >
                Visit Our Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-white/20 text-white bg-white/10"
              >
                <Users className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}