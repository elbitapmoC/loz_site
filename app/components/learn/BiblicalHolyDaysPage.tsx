"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Calendar,
  Star,
  Crown,
  Flame,
  Sun,
  Moon,
  Wheat,
  Home,
  Shield,
  BookOpen,
  PlayCircle,
  Download,
  Volume2,
  ArrowRight,
} from "lucide-react";

import { VisualHierarchyText } from "../layout/VisualHierarchyText";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Holy Day interface
interface HolyDay {
  id: string;
  name: string;
  hebrewName: string;
  category: "weekly" | "monthly" | "spring" | "fall" | "winter";
  icon: React.ComponentType<any>;
  synopsis: string;
  videoPlaceholder: string;
  timing: string;
  scriptures: string[];
  keyPoints: string[];
}

// Holy Days data - clean and concise (in correct order)
const holyDays: HolyDay[] = [
  {
    id: "sabbath",
    name: "Sabbath",
    hebrewName: "Shabbat",
    category: "weekly",
    icon: Star,
    synopsis: "The 7th day literally means 'rest' - the first holiday ordained by the Most High. Created 3 days after sun/moon, proving it's not lunar-based. A perpetual covenant and sign between God and Israel forever.",
    videoPlaceholder: "/videos/sabbath-explanation.mp4",
    timing: "Every Friday evening to Saturday evening - the 7th day of the week",
    scriptures: ["GEN 2:1-3", "EXO 20:8-11", "ISA 58:13-14", "EXO 20:9-11", "EXO 35:3", "EXO 16:23", "NEH 10:31", "NEH 13:15-21", "MAR 2:27-28", "EXO 31:16-17"],
    keyPoints: ["No work (you, family, servants, animals)", "No cooking or fire (includes microwaves)", "No buying or selling", "Prepare food beforehand", "Not doing thy own pleasure", "Remember = keep Sabbath laws", "Perpetual covenant with Israel", "Sign between God & Israel forever", "Sabbath made for man"]
  },
  {
    id: "newmoon",
    name: "New Moon",
    hebrewName: "Rosh Chodesh",
    category: "monthly",
    icon: Moon,
    synopsis: "The New Moon is the dark phase when the moon is not visible. Made on 4th day of creation to mark the beginning of months and be for signs and seasons. All feasts are kept according to the new moon (except Sabbath). This marks the start of each Hebrew month.",
    videoPlaceholder: "/videos/newmoon-explanation.mp4",
    timing: "First day of each Hebrew month - when moon is dark (not visible)",
    scriptures: ["GEN 1:14-19", "LEV 23:1-4", "ECC 43:6-9", "1SAM 20:24-29", "ISA 66:23", "NUM 28:11-15", "PSA 81:3"],
    keyPoints: ["New Moon = Dark Moon (not visible)", "Made 4th day for signs/seasons", "Marks beginning of Hebrew months", "Feasts kept by new moon timing", "Family gatherings & dinners", "Biblical calendar foundation", "All flesh will worship new moon to new moon", "Astronomical accuracy in scripture", "Month called after moon's name"]
  },
  {
    id: "passover",
    name: "Passover",
    hebrewName: "Pesach",
    category: "spring",
    icon: Shield,
    synopsis: "Commemorates Israel's deliverance from Egypt when the Most High passed over houses marked with blood. The Most High proved all Egyptian gods were false idols. Christ is our Passover lamb without blemish.",
    videoPlaceholder: "/videos/passover-explanation.mp4",
    timing: "14th day of first month (Abib) - Spring season when corn sprouts",
    scriptures: ["LUK 22:1", "EXO 12:17", "EXO 12:26-27", "EXO 12:12-13", "EXO 12:21-23", "EXO 34:18", "EXO 12:18-20", "EXO 12:16", "ACT 20:6", "1COR 5:7-8", "JER 16:14-15"],
    keyPoints: ["Seven days unleavened bread", "No leaven in houses", "1st & 7th day holy convocations", "Moses forsook Egypt by faith", "Paul kept it in Greece", "Christ our Passover sacrifice", "Future deliverance from land of North", "Teaching children the meaning", "Feast kept forever"]
  },
  {
    id: "simon",
    name: "Day of Simon",
    hebrewName: "Yom Shimon",
    category: "spring",
    icon: Star,
    synopsis: "Commemorates Simon's trials and victories after Jonathan's capture. On the 23rd day of the 2nd month, Simon cleansed the tower in Jerusalem, destroying a great enemy of Israel. A day of gladness with feasting - not a Sabbath day.",
    videoPlaceholder: "/videos/simon-explanation.mp4",
    timing: "23rd day of the second month (Iyyar)",
    scriptures: ["1MAC 13:1-2", "1MAC 13:3-9", "1MAC 13:10-20", "1MAC 1:33-36", "1MAC 13:21-33", "1MAC 13:34-41", "1MAC 13:43-48", "1MAC 13:49-52", "PRO 30:5-6"],
    keyPoints: ["Simon elected leader after brothers", "Fortified Jerusalem against Tryphon", "Conquered Gaza, cleansed from idols", "Tower victory on 23rd day", "Day of gladness with feasting", "Not a Sabbath - no work restrictions", "Different from Leviticus 23 convocations", "Remember forefathers' great acts", "Send portions to the poor"]
  },
  {
    id: "firstfruits",
    name: "Feast of First Fruits",
    hebrewName: "Yom HaBikkurim",
    category: "spring",
    icon: Wheat,
    synopsis: "Occurs at beginning of wheat harvest, 7 weeks after barley omer presentation. Pentecost (50th day) fulfills this feast - Holy Spirit came upon Christ's followers in Acts 2. Christ is the firstfruits of resurrection under the New Covenant.",
    videoPlaceholder: "/videos/firstfruits-explanation.mp4",
    timing: "50th day after the morrow after Sabbath - always falls on first day of week",
    scriptures: ["LEV 23:9-22", "ACT 2:1-4", "ISA 28:11", "JOE 2:28-32", "HEB 10:8-10", "1COR 15:20-23", "1COR 16:15", "JAM 1:18"],
    keyPoints: ["Barley omer wave offering first", "Count 7 complete Sabbaths (49 days)", "Add 1 day = 50th day Pentecost", "Two wave loaves with leaven", "Holy Spirit outpouring fulfilled", "Christ as firstfruits of resurrection", "Sacrifices fulfilled, day continues", "Leave corners for poor/stranger", "Thank God for spiritual harvest"]
  },
  {
    id: "trumpets",
    name: "Memorial Blowing of Trumpets",
    hebrewName: "Yom Teruah",
    category: "fall",
    icon: Volume2,
    synopsis: "Also called Feast of Trumpets - celebration of the first day of the seventh month. A 'day of horn-blasts', it is a day of rest and the foremost of New Moon celebrations. Silver trumpets called assemblies, signaled journeys, and served as memorials before God.",
    videoPlaceholder: "/videos/trumpets-explanation.mp4",
    timing: "1st day of the seventh month (Tishrei)",
    scriptures: ["LEV 23:24-25", "NUM 10:1-10", "NUM 29:1-6", "PSA 81:3"],
    keyPoints: ["Day of horn-blasts", "Sabbath rest required", "Holy convocation", "Foremost New Moon celebration", "Two silver trumpets ordinance", "Assembly calling", "Journey signals", "War alarm", "Memorial before God", "Gladness and solemn days", "Burnt and peace offerings", "Forever throughout generations"]
  },
  {
    id: "atonement",
    name: "Day of Atonement",
    hebrewName: "Yom Kippur",
    category: "fall",
    icon: Crown,
    synopsis: "Ordained by the Heavenly Father for afflicting souls by not eating or drinking for entire day. Humble hearts with prayers and praise. Only sacrificial law removed by Christ - the day continues. Paul kept the fast proving it wasn't abolished.",
    videoPlaceholder: "/videos/atonement-explanation.mp4",
    timing: "10th day of 7th month - from evening 9th day to evening 10th day",
    scriptures: ["LEV 23:26-32", "HEB 10:1-10", "ACT 27:9", "ROM 5:8-11", "LEV 16:29-34"],
    keyPoints: ["Complete fast - no eating/drinking", "Afflict your souls", "Holy convocation", "No work permitted", "Sabbath of rest", "Cut off if not observed", "Christ fulfilled sacrifices only", "Paul kept the fast", "Day itself continues", "Mercy for sick/infants", "False religions deceive about abolishment", "From evening to evening"]
  },
  {
    id: "tabernacles",
    name: "Feast of Tabernacles",
    hebrewName: "Sukkot",
    category: "fall",
    icon: Home,
    synopsis: "Seven-day feast dwelling in booths, remembering God's provision in wilderness. Prophetically points to Christ's millennial kingdom when ALL nations will be required to keep this feast or face drought and plagues. Israel will rule under Christ in the everlasting kingdom.",
    videoPlaceholder: "/videos/tabernacles-explanation.mp4",
    timing: "15th-21st days of 7th month - 1st and 8th days are Sabbaths",
    scriptures: ["LEV 23:33-44", "ZEC 14:16-21", "ACT 1:6-7", "DAN 2:44", "DAN 7:27-28", "DEU 16:13-17"],
    keyPoints: ["Seven days dwelling in booths", "Holy convocations 1st and 8th days", "No servile work on Sabbath days", "Gather fruit of the land", "Boughs of goodly trees", "Palm branches and willows", "Rejoice before the Lord", "Statute forever", "All nations will keep in kingdom", "No rain if disobedient", "Plagues for non-compliance", "Kingdom given to Israel", "Christ will rule eternally", "No more Canaanites in temple"]
  },
  {
    id: "dedication",
    name: "Feast of Dedication",
    hebrewName: "Hanukkah",
    category: "winter",
    icon: Flame,
    synopsis: "Christ observed this feast in Jerusalem's Temple. Fulfills Daniel 8 prophecy about Antiochus (little horn from Seleucus) who defiled the sanctuary for 2,300 days. After Alexander's death, his empire divided among four generals. Judas Maccabeus cleansed the Temple exactly as prophesied. Eight days celebration connects to Feast of Tabernacles, not oil miracle (man-made tradition).",
    videoPlaceholder: "/videos/dedication-explanation.mp4",
    timing: "25th day of 9th month (Kislev) for eight days - winter season",
    scriptures: ["JOH 10:22-23", "DAN 8:8-14", "DAN 11:31-36", "1MAC 4:1-61", "1MAC 1:44-47", "2MAC 1:18", "1MAC 4:52-59", "DAN 8:9-12"],
    keyPoints: ["Christ walked in Solomon's porch during feast", "Daniel 8: Alexander (he goat) died strong", "Four generals: Cassander (Macedonia), Lysimachus (Thrace), Seleucus (Syria), Ptolemy (Egypt)", "Little horn Antiochus from Seleucus lineage", "2,300 days sanctuary desolation (171-165 BC)", "Daily sacrifice abolished by transgression", "Antiochus called himself Epiphanes (God manifest)", "Host of heaven (Israelites) cast down", "Judas Maccabeus cleansed sanctuary as prophesied", "New altar built with whole stones", "Eight days like Feast of Tabernacles", "No oil miracle - man-made tradition", "25th Kislev year 148 dedication", "Offered sacrifice with songs and instruments", "Crowns of gold and shields decorated", "Annual celebration ordained forever", "Temple fortified against Gentiles", "Christ's observance validates feast"]
  },
  {
    id: "nicanor",
    name: "Destruction of Nicanor",
    hebrewName: "Yom Nicanor",
    category: "winter",
    icon: Shield,
    synopsis: "In year 151, wicked Israelite Alcimus desired to be High Priest and accused Judas Maccabeus to King Demetrius. Demetrius commissioned Nicanor, who hated Israel, to destroy them. Nicanor blasphemously threatened to level Solomon's Temple and erect a temple to Bacchus unless Judas was delivered. Judas defeated Nicanor's innumerable host with elephants through prayer.",
    videoPlaceholder: "/videos/nicanor-explanation.mp4",
    timing: "13th day of 12th month (Adar) - one day before Purim",
    scriptures: ["1MAC 7:1-50", "2MAC 14:3-46", "2MAC 8:1-36", "2MAC 15:1-36", "2MAC 14:31-33", "1MAC 7:35", "2MAC 15:28-35"],
    keyPoints: ["Alcimus made wicked accusations to King Demetrius", "Nicanor commissioned with deadly hate for Israel", "Blasphemous oath to level Solomon's Temple", "Threatened to erect temple to Bacchus (Greek god)", "Innumerable host with war elephants", "Judas led small army through prayer", "Nicanor slain in his harness", "Head, hand and shoulder cut off", "Tongue cut out and given to fowls", "Blasphemer's reward hung before Temple", "Head displayed on tower as sign", "Day of great gladness established", "Not a Sabbath - no work restrictions", "Yearly celebration with thanksgiving", "God kept His temple undefiled", "Victory through faith and prayer"]
  },
  {
    id: "purim",
    name: "Purim",
    hebrewName: "Purim",
    category: "winter",
    icon: Crown,
    synopsis: "King Ahasuerus held a competition to replace rebellious Queen Vashti. Mordecai's cousin Hadassah (Esther) of Benjamin won but kept her Jewish identity secret. Haman the Macedonian (Greek) cast Pur (lots) to destroy all Jews from India to Ethiopia and transfer Persia's kingdom to Macedonia. Esther and Mordecai's courage saved the nation.",
    videoPlaceholder: "/videos/purim-explanation.mp4",
    timing: "14th day of 12th month (Adar) - day after Nicanor's defeat",
    scriptures: ["EST 9:24-29", "EST 3:8-15", "EST 8:11-17", "EST 9:20-32", "EST 16:10-14", "EST 7:1-10", "EST 8:1-10", "EST 9:1-19", "EST 3:1-7"],
    keyPoints: ["Vashti replaced for rebellion against king", "Hadassah (Esther) of tribe Benjamin", "Mordecai instructed to hide nationality", "Haman the Macedonian sought kingdom transfer", "Pur (lots) cast for destruction date", "Plot to destroy Jews India to Ethiopia", "Esther revealed identity to save people", "Mordecai exposed assassination plot", "Royal decree allowed Jewish self-defense", "75,000 enemies destroyed in one day", "Haman hanged on his own gallows", "Two days celebration established forever", "Send portions to one another", "Give gifts to the poor", "Read Book of Esther annually", "God's hidden providence protecting Israel", "Memorial never to perish from seed", "Letters with authority sent throughout provinces"]
  }
];

// Event type colors
const categoryColors = {
  "weekly": "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-800",
  "monthly": "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/20 dark:text-cyan-300 dark:border-cyan-800",
  "spring": "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/20 dark:text-green-300 dark:border-green-800",
  "fall": "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-800",
  "winter": "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/20 dark:text-purple-300 dark:border-purple-800"
};

export function BiblicalHolyDaysPage() {
  const [selectedHolyDay, setSelectedHolyDay] = useState<HolyDay>(holyDays[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Filter holy days by category
  const filteredHolyDays = selectedCategory === "all" 
    ? holyDays 
    : holyDays.filter(day => day.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-20">
      {/* Hero Section */}
      <section className="pb-12">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <VisualHierarchyText
                primary="Holy Means Separate"
                secondary="Biblical Holy Days"
                size="large"
                orientation="vertical"
                animation={true}
                primaryFont="outfit"
                secondaryFont="cormorant"
                primaryWeight="normal"
                secondaryWeight="medium"
                className="mb-8"
              />
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Discover the appointed times ordained by the Most High with detailed scripture references 
              and video teachings for each sacred day.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 text-sm flex-wrap"
            >
              <Badge variant="outline" className={categoryColors["weekly"]}>
                <Star className="h-3 w-3 mr-1" />
                Weekly
              </Badge>
              <Badge variant="outline" className={categoryColors["monthly"]}>
                <Moon className="h-3 w-3 mr-1" />
                Monthly
              </Badge>
              <Badge variant="outline" className={categoryColors["spring"]}>
                <Sun className="h-3 w-3 mr-1" />
                Spring
              </Badge>
              <Badge variant="outline" className={categoryColors["fall"]}>
                <Calendar className="h-3 w-3 mr-1" />
                Fall
              </Badge>
              <Badge variant="outline" className={categoryColors["winter"]}>
                <Flame className="h-3 w-3 mr-1" />
                Winter
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Sacred Calendar | 2025 - 2026</h2>
            
            {/* Category Filter */}
            <Tabs defaultValue="all" className="w-auto" onValueChange={setSelectedCategory}>
              <TabsList className="bg-muted">
                <TabsTrigger value="all">All Days</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="spring">Spring</TabsTrigger>
                <TabsTrigger value="fall">Fall</TabsTrigger>
                <TabsTrigger value="winter">Winter</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Holy Day Viewer and List - 65/35 ratio like your calendar */}
          <div className="grid grid-cols-12 gap-6">
            {/* Holy Day Viewer - 65% */}
            <div className="col-span-12 lg:col-span-8">
              <Card className="bg-card border h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <selectedHolyDay.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-2xl">{selectedHolyDay.name}</CardTitle>
                        <Badge variant="outline" className={categoryColors[selectedHolyDay.category]}>
                          {selectedHolyDay.category}
                        </Badge>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">
                        {selectedHolyDay.hebrewName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedHolyDay.timing}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Video Placeholder */}
                  <div className="relative bg-muted/30 rounded-lg aspect-video flex items-center justify-center group cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="text-center space-y-3">
                      <PlayCircle className="w-16 h-16 text-primary mx-auto group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Video Teaching Available</p>
                        <p className="text-sm text-muted-foreground">{selectedHolyDay.name} Explanation</p>
                      </div>
                    </div>
                  </div>

                  {/* Synopsis */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Synopsis</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedHolyDay.synopsis}
                    </p>
                  </div>

                  {/* Key Points */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Points</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedHolyDay.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scripture References */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Scripture References</h4>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {selectedHolyDay.scriptures.map((scripture, index) => (
                          <Badge key={index} variant="outline" className="text-xs justify-center">
                            {scripture}
                          </Badge>
                        ))}
                      </div>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Holy Days List - 35% */}
            <div className="col-span-12 lg:col-span-4">
              <Card className="bg-card border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Holy Days</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {filteredHolyDays.length} sacred appointments
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-96 overflow-y-auto">
                    <div className="space-y-1">
                      {filteredHolyDays.map((holyDay, index) => (
                        <div key={holyDay.id}>
                          <button
                            onClick={() => setSelectedHolyDay(holyDay)}
                            className={`w-full p-4 text-left hover:bg-muted/50 transition-colors ${
                              selectedHolyDay.id === holyDay.id ? 'bg-muted/70' : ''
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                selectedHolyDay.id === holyDay.id ? 'bg-primary/20' : 'bg-muted'
                              }`}>
                                <holyDay.icon className={`w-5 h-5 ${
                                  selectedHolyDay.id === holyDay.id ? 'text-primary' : 'text-muted-foreground'
                                }`} />
                              </div>
                              <div className="space-y-1 flex-1">
                                <div className="flex items-center gap-2">
                                  <p className="font-medium text-sm">{holyDay.name}</p>
                                  <Badge variant="outline" className={`text-xs ${categoryColors[holyDay.category]}`}>
                                    {holyDay.category}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground font-medium">
                                  {holyDay.hebrewName}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-2">
                                  {holyDay.synopsis}
                                </p>
                              </div>
                              {selectedHolyDay.id === holyDay.id && (
                                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </button>
                          {index < filteredHolyDays.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Download Resources */}
          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download Holy Days Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BiblicalHolyDaysPage;