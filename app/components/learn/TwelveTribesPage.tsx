"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { 
  BookOpen,
  Crown,
  Users,
  Scroll,
  Star,
  ArrowRight,
  ArrowLeft,
  Quote,
  Shield,
  Sword,
  Heart,
  Mountain,
  Anchor,
  Scale,
  Wheat,
  Ship,
  Zap,
  Gem,
  Target,
  Home
} from "lucide-react";

const twelveTribes = [
  {
    name: "Reuben",
    hebrew: "רְאוּבֵן",
    transliteration: "Rəʼūḇēn",
    description: "The firstborn of Jacob, known for his instability but also his compassion",
    characteristic: "The Firstborn",
    icon: Crown,
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-300/30",
    slug: "/learn/reuben"
  },
  {
    name: "Simeon", 
    hebrew: "שִׁמְעוֹן",
    transliteration: "Šīməʻōn",
    description: "Known for their fierce nature and zeal for righteousness",
    characteristic: "The Fierce",
    icon: Sword,
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-300/30",
    slug: "/learn/simeon"
  },
  {
    name: "Levi",
    hebrew: "לֵוִי", 
    transliteration: "Lēwī",
    description: "The priestly tribe, set apart for service to the Most High",
    characteristic: "The Priests",
    icon: Star,
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-300/30",
    slug: "/learn/levi"
  },
  {
    name: "Judah",
    hebrew: "יְהוּדָה",
    transliteration: "Yəhūdā", 
    description: "The tribe of kings, from whom Christ descended",
    characteristic: "The Kings",
    icon: Crown,
    color: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-300/30",
    slug: "/learn/judah"
  },
  {
    name: "Dan",
    hebrew: "דָּן",
    transliteration: "Dān",
    description: "Known for judgment and their serpent-like wisdom",
    characteristic: "The Judges",
    icon: Scale,
    color: "from-indigo-500/20 to-indigo-600/10", 
    borderColor: "border-indigo-300/30",
    slug: "/learn/dan"
  },
  {
    name: "Naphtali",
    hebrew: "נַפְתָּלִי",
    transliteration: "Nap̄tālī",
    description: "The wrestling tribe, known for their agility and speed",
    characteristic: "The Wrestlers",
    icon: Zap,
    color: "from-teal-500/20 to-teal-600/10",
    borderColor: "border-teal-300/30",
    slug: "/learn/naphtali"
  },
  {
    name: "Gad",
    hebrew: "גָּד", 
    transliteration: "Gāḏ",
    description: "The warrior tribe, defenders of the faith",
    characteristic: "The Warriors",
    icon: Shield,
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-300/30",
    slug: "/learn/gad"
  },
  {
    name: "Asher",
    hebrew: "אָשֵׁר",
    transliteration: "'Āšēr",
    description: "Known for abundance and richness in blessings",
    characteristic: "The Blessed",
    icon: Gem,
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-300/30",
    slug: "/learn/asher"
  },
  {
    name: "Issachar",
    hebrew: "יִשָּׂשכָר",
    transliteration: "Yīssāḵār",
    description: "Known for understanding times and seasons",
    characteristic: "Understanding Times",
    icon: BookOpen,
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-300/30",
    slug: "/learn/issachar"
  },
  {
    name: "Zebulun",
    hebrew: "זְבוּלֻן",
    transliteration: "Zəḇūlun",
    description: "The seafaring tribe, dwelling by the sea",
    characteristic: "The Seafarers", 
    icon: Ship,
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-300/30",
    slug: "/learn/zebulun"
  },
  {
    name: "Joseph",
    hebrew: "יוֹסֵף", 
    transliteration: "Yōsēp",
    description: "The fruitful bough whose branches run over the wall",
    characteristic: "The Fruitful",
    icon: Wheat,
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-300/30",
    slug: "/learn/joseph"
  },
  {
    name: "Benjamin",
    hebrew: "בִּנְיָמִין",
    transliteration: "Bīnyāmīn", 
    description: "The beloved youngest, known for their skill in warfare",
    characteristic: "The Beloved",
    icon: Heart,
    color: "from-pink-500/20 to-pink-600/10",
    borderColor: "border-pink-300/30",
    slug: "/learn/benjamin"
  }
];

const keyPassages = [
  {
    reference: "Genesis 35:22-26",
    description: "The listing of Jacob's twelve sons",
    category: "Foundation"
  },
  {
    reference: "Genesis 49",
    description: "Jacob's prophetic blessings upon his sons", 
    category: "Prophecy"
  },
  {
    reference: "Deuteronomy 33",
    description: "Moses' blessings upon the tribes",
    category: "Blessings"
  },
  {
    reference: "Revelation 7:4-8", 
    description: "The sealing of the 144,000 from all tribes",
    category: "End Times"
  }
];

const historicalPeriods = [
  {
    title: "The Exodus (c. 1446 BC)",
    description: "600,000 men plus women and children left Egypt under Moses' leadership",
    icon: Mountain
  },
  {
    title: "The Divided Kingdom (922 BC)",
    description: "Ten tribes formed the Northern Kingdom, Judah and Benjamin the Southern", 
    icon: Home
  },
  {
    title: "Assyrian Conquest (722 BC)",
    description: "The ten northern tribes were scattered, becoming the 'Lost Tribes'",
    icon: Sword
  },
  {
    title: "Babylonian Conquest (586 BC)",
    description: "Judah and Benjamin were taken into captivity in Babylon",
    icon: Target
  }
];

export function TwelveTribesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 text-sm">Biblical Heritage Study</Badge>
              
              <div className="my-12">
                <VisualHierarchyText 
                  primary="Who Are The"
                  secondary="Israelites Today?"
                  secondaryFont="cormorant"
                  secondaryWeight="semibold"
                  size="medium"
                />
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The question "Who are the Israelites today?" is one of the most important questions for 
                understanding biblical prophecy and God's covenant people. The Israelites are the descendants 
                of the twelve sons of Jacob, whose name was changed to Israel.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <Quote className="h-6 w-6 text-primary mb-3 mx-auto" />
                <blockquote className="text-lg italic text-primary">
                  "And he said, Thy name shall be called no more Jacob, but Israel: for as a prince 
                  hast thou power with God and with men, and hast prevailed"
                </blockquote>
                <cite className="text-sm text-muted-foreground mt-2 block">— Genesis 32:28</cite>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Biblical Foundation Section */}
      <section className="py-16 bg-white dark:bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">The Biblical Foundation</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Jacob, later called Israel, was the second-born son of Isaac and Rebecca, the younger twin 
                brother of Esau, and the grandson of Abraham and Sarah. According to biblical texts, he was 
                chosen by God to be the patriarch of the Israelite nation.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-semibold mb-2">Sons of Leah</h4>
                  <p className="text-sm text-muted-foreground">
                    Reuben (firstborn), Simeon, Levi, Judah, Issachar, and Zebulun
                  </p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-semibold mb-2">Sons of Rachel</h4>
                  <p className="text-sm text-muted-foreground">Joseph and Benjamin (Jacob's last)</p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-semibold mb-2">Sons of Bilhah</h4>
                  <p className="text-sm text-muted-foreground">Dan and Naphtali (Rachel's handmaid)</p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-semibold mb-2">Sons of Zilpah</h4>
                  <p className="text-sm text-muted-foreground">Gad and Asher (Leah's handmaid)</p>
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
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">The Covenant People</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    The story begins when Jacob and his family went down to Egypt as "70 souls."
                  </p>
                  <Badge variant="outline" className="text-xs">Genesis 46:27</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Twelve Tribes Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">The Twelve Tribes of Israel</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Each tribe carries unique characteristics, blessings, and prophetic significance. 
              Click on each tribe to learn more about their specific heritage and modern identity.
            </p>
            <p className="text-sm text-muted-foreground italic">
              *Note: Joseph received a double portion through his two sons Ephraim and Manasseh, 
              making 13 tribes total, though traditionally counted as 12.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {twelveTribes.map((tribe, index) => (
              <motion.div
                key={tribe.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={tribe.slug} className={tribe.slug === "#" ? "pointer-events-none" : ""}>
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 group cursor-pointer bg-gradient-to-br ${tribe.color} ${tribe.borderColor} border-2 hover:border-primary/30`}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors overflow-hidden">
                        <img 
                          src={`/gifs/${tribe.name.toLowerCase()}-flag-to-jewel.gif`}
                          alt={`${tribe.name} flag transitioning to tribal jewel`}
                          className="w-12 h-12 object-cover rounded-full"
                          onError={(e) => {
                            // Fallback to icon if GIF not found
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'block';
                          }}
                        />
                        <tribe.icon className="h-6 w-6 text-primary" style={{ display: 'none' }} />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{tribe.name}</h3>
                      <div className="text-2xl mb-1 font-hebrew">{tribe.hebrew}</div>
                      <div className="text-xs text-muted-foreground italic mb-2">{tribe.transliteration}</div>
                      <Badge variant="outline" className="text-xs mb-3">{tribe.characteristic}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {tribe.description}
                    </p>
                    <div className="flex items-center justify-center text-sm text-primary group-hover:text-primary/80 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Context Section */}
      <section className="py-16 bg-white dark:bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Historical Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Egypt to the Promised Land, through kingdom division to exile and scattering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalPeriods.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <period.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{period.title}</h3>
                    <p className="text-sm text-muted-foreground">{period.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Lost Tribes Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">The Lost Tribes</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Sword className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">The Assyrian Conquest (722 BC)</h3>
                        <p className="text-muted-foreground text-sm">
                          The Assyrian conquest of Israel resulted in the mass displacement of most of the Israelites, 
                          giving rise to the legacy of the Ten Lost Tribes. The 10 tribes that settled in northern 
                          Palestine were carried into captivity by the Assyrians.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Target className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">The Babylonian Conquest (586 BC)</h3>
                        <p className="text-muted-foreground text-sm">
                          The Babylonian conquest of Judah resulted in the mass displacement of much of the 
                          remaining Israelites, who belonged to the Tribe of Judah and the Tribe of Benjamin.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">The Scattered Nation</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">10</div>
                    <div className="text-sm text-muted-foreground">Lost Tribes scattered by Assyria</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">2</div>
                    <div className="text-sm text-muted-foreground">Tribes taken to Babylon</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Tribes to be gathered in the end times</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Identity Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Modern Identity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding who the Israelites are today requires studying biblical prophecies, 
              historical migrations, and the fulfillment of specific tribal blessings and curses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Claims of Descent</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    According to the Encyclopedia of Judaism, a wide range of tribes and groups claim descent 
                    from the Israelites, including sections of various African tribes and groups in Afghanistan 
                    and Pakistan with sub-tribal names such as Reubeni (Reuben), Efridar (Ephraim), and Ashuri (Asher).
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
              <Card className="h-full">
                <CardContent className="p-6">
                  <Scroll className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">The Scattered Nation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Israelites were scattered throughout the world as prophesied in Scripture. 
                    Understanding requires studying biblical prophecies about scattering, historical 
                    migrations, cultural markers, and fulfillment of specific blessings and curses.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scripture References Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Key Scripture References</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential biblical passages for understanding the tribes of Israel and their prophetic significance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPassages.map((passage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
                    <Badge variant="outline" className="mb-3">{passage.category}</Badge>
                    <h3 className="font-semibold mb-2">{passage.reference}</h3>
                    <p className="text-sm text-muted-foreground">{passage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Discover Your Heritage</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              This document serves as an introduction to understanding the identity of the Israelites today. 
              Each tribe carries unique characteristics, prophecies, and modern-day connections that reveal 
              God's eternal plan for His chosen people.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <Quote className="h-8 w-8 mx-auto mb-4 opacity-80" />
              <p className="italic text-lg opacity-90">
                "And I will take you to me for a people, and I will be to you a God: and ye shall know 
                that I am the LORD your God"
              </p>
              <cite className="text-sm opacity-70 mt-2 block">— Exodus 6:7</cite>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/learn/repent"
                className="group inline-flex items-center bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg text-white font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Learn How to Repent
              </Link>
              <Link
                href="/learn/biblical-holy-days" 
                className="group inline-flex items-center bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg text-white font-medium"
              >
                Learn About Our Holy Days
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}