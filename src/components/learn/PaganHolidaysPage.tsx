import React, { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Calendar,
  Skull,
  Gift,
  Egg,
  Ghost,
  Heart,
  Clover,
  ChefHat,
  Cake,
  Sun,
  BookOpen,
  PlayCircle,
  Download,
  Volume2,
  ArrowRight,
  AlertTriangle,
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

// Pagan Holiday interface
interface PaganHoliday {
  id: string;
  name: string;
  originalName: string;
  category: "witchcraft" | "sun-worship" | "fertility" | "commerce" | "tradition";
  icon: React.ComponentType<any>;
  synopsis: string;
  videoPlaceholder: string;
  timing: string;
  scriptures: string[];
  keyPoints: string[];
}

// Pagan holidays data - exposing false celebrations
const paganHolidays: PaganHoliday[] = [
  {
    id: "birthdays",
    name: "Birthday Celebrations",
    originalName: "Egyptian/Babylonian Birth Worship & Astrology",
    category: "witchcraft",
    icon: Cake,
    synopsis: "Birthdays connect to ancient Egyptian/Babylonian worship where birth dates determined destinies by star alignment. Early Christians avoided birthdays as pagan practice. Only two biblical birthday celebrations - both resulted in death (Pharaoh beheaded baker, Herod beheaded John Baptist). Candles, wishes, zodiac signs all stem from ancient witchcraft and divination practices forbidden by Scripture.",
    videoPlaceholder: "/videos/birthdays-exposed.mp4",
    timing: "Individual birth dates - connecting to zodiac constellations",
    scriptures: ["GEN 40:20-22", "MAT 14:6-10", "JER 10:2", "DEU 18:10-12", "LEV 19:26", "ISA 47:13-14"],
    keyPoints: ["Only two biblical birthdays - both ended in death", "Pharaoh's birthday - baker beheaded (Gen 40:20-22)", "Herod's birthday - John Baptist beheaded (Mat 14:6-10)", "Ancient connection to star worship and destiny", "Candles represent communication with spirits", "Birthday wishes = divination and sorcery", "Zodiac signs determine 'personality traits'", "Early Christians avoided as pagan practice", "Learn not the way of the heathen (Jer 10:2)", "Don't regard times or use enchantments (Lev 19:26)", "No observer of times or enchanter (Deu 18:10)", "Monthly prognosticators shall not save (Isa 47:13)"]
  },
  {
    id: "christmas",
    name: "Christmas",
    originalName: "Sol Invictus/Saturnalia Tree Worship & Babylonian Tammuz",
    category: "sun-worship",
    icon: Gift,
    synopsis: "December 25th is Roman Sol Invictus (Unconquered Sun) birthday, not Christ's. Romans celebrated Saturnalia with gift-giving, feasting, role reversals. Christmas tree directly condemned in Jeremiah 10:2-4 - cutting tree from forest, fastening with nails and hammers, decking with silver and gold. Ancient worship of Tammuz (Babylonian dying/rising god). Catholic church merged pagan festivals with Christianity to ease conversion.",
    videoPlaceholder: "/videos/christmas-exposed.mp4",
    timing: "December 25th - Roman Sol Invictus birthday",
    scriptures: ["JER 10:2-4", "EZE 8:14", "ROM 1:25", "DEU 12:30-32", "2COR 6:14-17", "1COR 10:20-21"],
    keyPoints: ["December 25th = Sol Invictus (Unconquered Sun) birthday", "Roman Saturnalia festival merged with Christianity", "Christmas tree condemned in Jeremiah 10:2-4", "Cut tree from forest, fasten with nails", "Deck with silver and gold forbidden", "Tammuz worship - Babylonian dying/rising god", "Women weeping for Tammuz (Eze 8:14)", "Gift-giving from Roman Saturnalia tradition", "Holly, mistletoe from Druid tree worship", "Santa Claus = Germanic/Norse Odin mythology", "Reindeer flight from shamanic spirit journeys", "Catholic church merged paganism for easier conversion", "Christ likely born during Feast of Tabernacles", "No biblical command to celebrate Christ's birth", "Learn not the way of the heathen (Jer 10:2)", "What fellowship light with darkness (2Cor 6:14)"]
  },
  {
    id: "new-years",
    name: "New Year's Day",
    originalName: "Roman Janus Two-Faced God & Gregorian Calendar",
    category: "tradition",
    icon: Calendar,
    synopsis: "January 1st honors Roman god Janus (two-faced deity looking backward/forward). Biblical new year begins with first new moon of spring (Abib/Nisan) when God delivered Israel from Egypt. Gregorian calendar imposed by Pope Gregory XIII in 1582 to replace biblical reckoning. Resolutions, parties, midnight celebrations follow pagan patterns rather than God's appointed times.",
    videoPlaceholder: "/videos/new-year-deception.mp4",
    timing: "January 1st - Roman Janus god celebration",
    scriptures: ["EXO 12:2", "EXO 13:4", "EST 3:7", "NEH 2:1", "DEU 16:1", "LEV 23:5"],
    keyPoints: ["January 1st honors Janus - Roman two-faced god", "Janus looks backward to past, forward to future", "Biblical new year = first new moon of Abib/Nisan", "God said 'this month shall be unto you beginning of months' (Exo 12:2)", "Passover in month Abib when came out of Egypt (Deu 16:1)", "Gregorian calendar imposed by Pope Gregory XIII 1582", "Replaced biblical lunar calendar with solar system", "New Year's resolutions = self-improvement vs. repentance", "Midnight celebrations follow pagan festival patterns", "Ball dropping represents sun worship symbolism", "Champagne toasts honor false gods", "Biblical calendar begins with spring, not winter", "Month Nisan = first month (Est 3:7, Neh 2:1)", "God's people should follow His timing", "Don't learn way of heathen calendar systems"]
  },
  {
    id: "easter",
    name: "Easter",
    originalName: "Ashtoreth/Ishtar Fertility Goddess & Anglo-Saxon Eostre",
    category: "fertility",
    icon: Egg,
    synopsis: "Easter comes from Ashtoreth/Ishtar, Babylonian fertility goddess. Anglo-Saxons worshipped Eostre, spring fertility deity. Eggs represent fertility/new life, rabbits symbolize sexual reproduction. Sunrise services worship sun god at dawn. Hot cross buns marked with cross of Tammuz. Date determined by vernal equinox and full moon - pagan astronomical calculations. Christ rose during Passover/Unleavened Bread season, not fertility festival.",
    videoPlaceholder: "/videos/easter-exposed.mp4",
    timing: "First Sunday after first full moon after vernal equinox",
    scriptures: ["1KIN 11:5", "1KIN 11:33", "2KIN 23:13", "JER 7:18", "JER 44:17-19", "EZE 8:16"],
    keyPoints: ["Easter = Ashtoreth/Ishtar Babylonian fertility goddess", "Anglo-Saxon Eostre spring fertility deity", "Solomon went after Ashtoreth (1Kin 11:5,33)", "Josiah defiled high places of Ashtoreth (2Kin 23:13)", "Queen of heaven worship forbidden (Jer 7:18)", "Women made cakes to queen of heaven (Jer 44:17-19)", "Eggs symbolize fertility and new life", "Rabbits represent sexual reproduction", "Easter bunny from Germanic Ostara/Eostre myths", "Sunrise services = sun worship at dawn", "Men worshipping sun toward east (Eze 8:16)", "Hot cross buns marked with Tammuz cross", "Date set by vernal equinox and full moon", "Pagan astronomical calculations determine timing", "Christ rose during Passover season, not Easter", "No biblical command to celebrate resurrection annually"]
  },
  {
    id: "lent",
    name: "Lent & Ash Wednesday",
    originalName: "Babylonian Tammuz Mourning & Norse Odin Sacrifice Ritual",
    category: "tradition",
    icon: Skull,
    synopsis: "Lent's 40 days copying ancient mourning for Tammuz, Babylonian dying god. Ezekiel saw women weeping for Tammuz at temple door. Ash Wednesday from Norse mythology - Odin hung on World Tree for 9 days pierced by spear to gain wisdom. Ashes on forehead marks followers of false gods. Catholic church merged various pagan 40-day fasting traditions into Christian practice without biblical authority.",
    videoPlaceholder: "/videos/lent-exposed.mp4",
    timing: "40 days before Easter - Ash Wednesday to Holy Saturday",
    scriptures: ["EZE 8:14", "JER 10:2", "LEV 19:28", "DEU 14:1", "REV 7:3", "REV 9:4"],
    keyPoints: ["40 days mourning for Tammuz Babylonian god", "Ezekiel saw women weeping for Tammuz (Eze 8:14)", "Ash Wednesday from Norse Odin mythology", "Odin hung on World Tree 9 days pierced by spear", "Ashes on forehead mark followers of false gods", "God's people sealed in foreheads (Rev 7:3)", "Don't make cuttings in flesh for dead (Lev 19:28)", "Don't make baldness between eyes for dead (Deu 14:1)", "Learn not the way of the heathen (Jer 10:2)", "Catholic church merged pagan 40-day traditions", "Babylonian, Egyptian, Germanic fasting merged", "No biblical command for Lenten season", "Christ fasted 40 days after baptism, not annually", "Self-imposed religious observances", "Adding to God's Word forbidden", "True fasting follows biblical guidelines"]
  },
  {
    id: "halloween",
    name: "Halloween",
    originalName: "Samhain Celtic Festival of Fire Honoring Dead & Powers of Darkness",
    category: "witchcraft",
    icon: Ghost,
    synopsis: "Halloween was originally a festival of fire that honored the dead and powers of darkness. Celebrated evening of October 31st continuing past midnight to November 1st. Catholic church introduced All Saints Day (originally May 13th) moving it to November 1st in 8th century to Christianize pagan festival of dead. Pagans hollowed turnips, rutabagas, gourds, potatoes and beets, placing lights to ward off evil spirits and keep undead soul 'Jack' away - original Jack O'Lanterns. Celtic priests converted to Christianity but kept stories of dead traveling afterworld, fairies became fallen angels.",
    videoPlaceholder: "/videos/halloween-truth.mp4",
    timing: "October 31st evening continuing past midnight to November 1st",
    scriptures: ["DEU 18:10-12", "1COR 10:19-21", "LEV 19:31", "ISA 8:19-20", "EPH 6:12", "1JOH 4:4"],
    keyPoints: ["Celtic Samhain festival of fire honoring dead and darkness", "October 31st evening continuing past midnight November 1st", "All Saints Day moved from May 13th to November 1st to Christianize pagan festival", "Hollowed turnips, rutabagas, gourds, potatoes, beets with lights", "Jack O'Lanterns to ward off evil spirits and undead soul 'Jack'", "1800s immigrants discovered pumpkins bigger and easier to carve", "Celtic stories of dead traveling to afterworld on Halloween", "Fairies, hobgoblins, vampires, werewolves became 'fallen angels'", "Making charms, divining future, practicing magic with unclean spirits", "Costumes as visible representation of ghosts and goblins", "Door-to-door demands for offerings or death/punishment", "Trick or treat evolved from ancient tribute demands", "No divination, observer of times, enchanter, witch (Deu 18:10)", "Cannot drink cup of Lord and cup of devils (1Cor 10:21)", "Don't seek dead for living (Isa 8:19)", "Halloween activities explicitly forbidden in Scripture"]
  },
  {
    id: "mothers-day",
    name: "Mother's Day",
    originalName: "Rhea/Isis Queen of Heaven Mother Goddess Worship",
    category: "fertility",
    icon: Heart,
    synopsis: "Everyone loves their mother and Exodus 20:12 teaches 'Honor thy father and mother.' However man has established his own day of reverence to honor mothers - not scriptural but based on Satanic idolatrous principles. Ancient Greeks honored powerful titan Rhea, wife of Cronus, 'Mother of the Gods.' Romans held three-day Hilaria festival honoring Magna Mater (Great Mother) dating to 250 BC with temple on Palatine hill. Israelites in Egypt followed goddess Isis, also called 'Queen of Heaven.' Catholic church transferred goddess worship to 'Mary mother of god, queen of heaven.' We are not commanded to establish our own holidays, adding to scriptures.",
    videoPlaceholder: "/videos/mothers-day-origins.mp4",
    timing: "Second Sunday in May - spring fertility goddess season",
    scriptures: ["EXO 20:12", "JER 44:15-23", "LUK 1:28", "LUK 11:27-28", "DEU 12:30-32", "PRO 30:6"],
    keyPoints: ["Ancient Greek Rhea worship - powerful titan 'Mother of the Gods'", "Roman three-day Hilaria festival for Magna Mater (Great Mother) 250 BC", "Temple on Palatine hill in Rome with gifts and cakes offerings", "Egyptian Isis goddess worship - 'Queen of Heaven'", "Israelites in Egypt following Queen of Heaven goddess", "Catholic church transferring worship to 'Mary mother of god, queen of heaven'", "Celebration of 'Mother Church'/Roman Catholic Church replacing pagan tradition", "Mary as spiritual power giving life and protection from harm", "Middle Ages servants given day off in springtime to visit mothers", "Bringing small gifts or 'mothering cake' to show appreciation", "Establishment of man-made holiday adding to Scripture", "Honor thy father and mother (Exo 20:12)", "We will burn incense to queen of heaven (Jer 44:17)", "Gabriel said 'blessed art thou among women' not worship Mary (Luk 1:28)", "Christ said 'blessed are they that hear word of God and keep it' (Luk 11:28)", "Not commanded to establish our own holidays"]
  },
  {
    id: "valentines-day",
    name: "Valentine's Day",
    originalName: "Lupercalia Sexual Partner Drawing & Cupid Worship",
    category: "fertility",
    icon: Heart,
    synopsis: "Saint Valentine takes us back to 3rd Century, around 269 AD. Roman priest/bishop who performed weddings so men could avoid military draft. Emperor Claudius II banned marriage believing married men made poor soldiers. Valentine defied emperor, married couples secretly in castle basements and wine cellars. Considered treason against Imperio Romano! When discovered, Valentine imprisoned and beheaded February 14, 270 AD. Day kept as tradition to honor sexual unions. Roman youths drew names of young ladies to be romantic/sexual partners for entire year. Roman pagan god Cupid (Eros/Erotic in Greek) joined with St. Valentine to bring pagan worshippers to Catholic church.",
    videoPlaceholder: "/videos/valentines-exposed.mp4",
    timing: "February 14th - Valentine's execution date 270 AD & Roman sexual partner festival",
    scriptures: ["1THE 4:3-5", "1JOH 4:7-8", "1COR 13:4-8", "EPH 5:25", "SON 8:6-7", "LEV 18"],
    keyPoints: ["Saint Valentine 3rd century Roman priest defying Emperor Claudius II", "Emperor banned marriage believing married men made poor soldiers", "Valentine performed secret weddings in castle basements and wine cellars", "Valentine's defiance considered treason against Imperio Romano", "Valentine beheaded February 14, 270 AD for his treasonous activities", "Day kept as tradition to honor sexual unions and partnerships", "Roman youths drew names of young ladies for sexual partners", "Chosen girl became sexual partner for remainder of year", "Roman pagan god Cupid (Eros/Erotic in Greek mythology)", "Cupid's arrows symbolized male penis, valentines symbolized female vagina", "Cupid's penile arrows struck libido stimulating sexual desires", "Cupid termed mischievous joining men with men, women with women", "Mankind with animal kind, adults with children in sexual unions", "Latin CONCUPISCENSE meaning strong sexual coveting", "This is will of God your sanctification (1The 4:3)", "Not in lust of concupiscence as Gentiles know not God (1The 4:5)"]
  },
  {
    id: "st-patricks-day",
    name: "St. Patrick's Day",
    originalName: "Celtic Druids Shamrock Worship & Irish Snake God Ritual",
    category: "witchcraft",
    icon: Clover,
    synopsis: "March 17th honors Catholic Saint Patrick, but celebration rooted in ancient Celtic Druidism. Patrick allegedly drove snakes from Ireland - but snakes represent ancient Celtic serpent worship and Druid priests called 'snakes.' Shamrock (three-leaf clover) sacred to Celtic trinity goddess. Green color honors Irish fertility spirits. Leprechauns are Celtic fairies/demonic spirits. Drinking, partying, wearing green all connect to ancient Celtic nature worship and spirit summoning. Ireland's conversion mixed Christianity with Druid paganism creating syncretic false worship.",
    videoPlaceholder: "/videos/st-patricks-exposed.mp4",
    timing: "March 17th - death date of Saint Patrick 461 AD & Celtic spring festival",
    scriptures: ["2COR 11:13-15", "GAL 1:6-8", "2TIM 4:3-4", "DEU 18:10-12", "JER 10:2", "1COR 10:20-21"],
    keyPoints: ["Saint Patrick died March 17, 461 AD - Catholic missionary to Ireland", "Patrick's 'snakes' were actually Celtic Druid priests called 'snakes'", "Shamrock three-leaf clover sacred to Celtic trinity goddess", "Irish mythology three goddesses: Banba, Fodla, Eriu (Ireland)", "Green color honors Irish fertility spirits and nature worship", "Leprechauns are Celtic fairies - demonic spirits in Irish folklore", "Celtic Druids practiced divination, enchantments, witchcraft", "Ireland's conversion mixed Christianity with Druid paganism", "Syncretic false worship combining Christ with Celtic gods", "Drinking and partying honor Celtic fertility celebrations", "Learn not the way of the heathen (Jer 10:2)", "False apostles, deceitful workers (2Cor 11:13)", "Though angel preach another gospel let him be accursed (Gal 1:8)", "They will not endure sound doctrine (2Tim 4:3)", "No divination, observer of times, enchanter (Deu 18:10)", "Cannot drink cup of Lord and cup of devils (1Cor 10:21)"]
  },
  {
    id: "sunday",
    name: "Sunday Worship",
    originalName: "Ra/Sol Invictus Sun God Day",
    category: "sun-worship",
    icon: Sun,
    synopsis: "From ancient Egypt and Babylon, sun was main false god (Ra the sun god). Idol worshippers chose day to honor false god called 'Sunday.' After Christ's death and resurrection, enemies infiltrated true Church as Scripture warned. False prophets arose teaching Sabbath was done away and Sunday exalted as Lord's day, making it easier for idol worshippers to join church and increase financial income if Christians met same day as pagan world. Only eight scriptures in New Testament mention first day of week - none teach change of Sabbath to Sunday.",
    videoPlaceholder: "/videos/sunday-deception.mp4",
    timing: "Every Sunday - weekly sun god worship replacing biblical Sabbath",
    scriptures: ["MAT 24:11", "ACT 20:29-30", "MAT 28:1", "MAR 16:1-2", "MAR 16:9", "LUK 24:1", "JOH 20:1", "JOH 20:19", "ACT 20:7-8", "1COR 16:1-2", "MAT 5:17", "MAT 12:8"],
    keyPoints: ["Ancient Egyptian Ra sun god worship", "Babylonian sun god as main false deity", "Idol worshippers choosing day to honor false sun god", "Roman Sol Invictus (Unconquered Sun) veneration", "False teachers infiltrating church after apostles died", "Sunday exalted as 'Lord's day' to replace biblical Sabbath", "Financial motivation - easier for pagans to join if same meeting day", "Many false prophets shall arise and deceive many (Mat 24:11)", "Grievous wolves enter not sparing flock (Act 20:29)", "Eight mentions of first day - none establish Sunday worship", "Disciples assembled for fear of Jews, not worship (Joh 20:19)", "Acts 20:7-8 farewell gathering for Paul's departure", "1 Corinthians 16:1-2 about collecting money, not worship", "Think not I came to destroy law or prophets (Mat 5:17)", "Son of man is Lord even of sabbath day (Mat 12:8)", "No scriptural authority for changing Sabbath to Sunday"]
  }
];

// Event type colors
const categoryColors = {
  "witchcraft": "bg-red-100 text-red-700 border-red-200 dark:bg-red-950/20 dark:text-red-300 dark:border-red-800",
  "sun-worship": "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/20 dark:text-orange-300 dark:border-orange-800",
  "fertility": "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-950/20 dark:text-pink-300 dark:border-pink-800",
  "commerce": "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-800",
  "tradition": "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-800"
};

export function PaganHolidaysPage() {
  const [selectedHoliday, setSelectedHoliday] = useState<PaganHoliday>(paganHolidays[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Filter holidays by category
  const filteredHolidays = selectedCategory === "all" 
    ? paganHolidays 
    : paganHolidays.filter(holiday => holiday.category === selectedCategory);

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
                primary="Micah 2:10"
                secondary="Holidays aren't Holy Days"
                size="large"
                orientation="vertical"
                animation={true}
                primaryFont="outfit"
                secondaryFont="cormorant"
                primaryWeight="regular"
                secondaryWeight="medium"
                className="mb-8"
              />
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Learn the shocking pagan origins of popular holidays with detailed scripture references 
              exposing false worship condemned by the Most High.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 text-sm flex-wrap"
            >
              <Badge variant="outline" className={categoryColors["witchcraft"]}>
                <AlertTriangle className="h-3 w-3 mr-1" />
                Witchcraft
              </Badge>
              <Badge variant="outline" className={categoryColors["sun-worship"]}>
                <Sun className="h-3 w-3 mr-1" />
                Sun Worship
              </Badge>
              <Badge variant="outline" className={categoryColors["fertility"]}>
                <Heart className="h-3 w-3 mr-1" />
                Fertility
              </Badge>
              <Badge variant="outline" className={categoryColors["commerce"]}>
                <Gift className="h-3 w-3 mr-1" />
                Commerce
              </Badge>
              <Badge variant="outline" className={categoryColors["tradition"]}>
                <Calendar className="h-3 w-3 mr-1" />
                Tradition
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Biblical Warning Section */}
      <section className="py-16 bg-gradient-to-b from-red-50/50 to-background dark:from-red-950/10 dark:to-background">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="space-y-8"
          >

            {/* Main Warning Content */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-card border-2 border-red-200 dark:border-red-800/50 shadow-lg">
                <CardContent className="p-8">
                  {/* Scripture-Centered Design */}
                  <div className="text-center space-y-8">
                    {/* Opening Question */}
                    <div className="space-y-4">
                      <VisualHierarchyText
                        primary="Who Has Authority?"
                        secondary="The Church or the Lord?"
                        size="medium"
                        orientation="vertical"
                        animation={false}
                        primaryFont="cormorant"
                        secondaryFont="outfit"
                        primaryWeight="medium"
                        secondaryWeight="regular"
                        className="text-red-600 dark:text-red-400"
                      />
                      <p className="text-muted-foreground max-w-2xl mx-auto text-left">
                        <span className="font-semibold text-red-600 dark:text-red-400">
                          Today's Christian holidays are celebrated worldwide, yet none are substantiated in Biblical text.
                        </span>{" "}
                        All are rooted in ancient paganism.
                      </p>
                    </div>

                    {/* Scripture Authority */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 p-6 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <Badge variant="secondary" className="text-xs">
                            Leviticus 23:1-2
                          </Badge>
                        </div>
                        <blockquote className="text-left space-y-2">
                          <p className="text-sm italic text-muted-foreground">
                            "And the Lord spake unto Moses saying, Speak unto the children of Israel, and say unto them concerning the feasts of the Lord..."
                          </p>
                          <p className="font-semibold text-primary">
                            "These are my feasts."
                          </p>
                        </blockquote>
                      </div>

                      <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/10 p-6 rounded-lg border border-red-200 dark:border-red-800/50">
                        <div className="flex items-center gap-2 mb-4">
                          <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                          <Badge variant="destructive" className="text-xs">
                            James 4:4
                          </Badge>
                        </div>
                        <blockquote className="text-left">
                          <p className="text-sm italic text-muted-foreground mb-2">
                            "Ye adulterers and adulteresses, know ye not that..."
                          </p>
                          <p className="font-semibold text-red-600 dark:text-red-400">
                            "The friendship of the world is enmity with God"
                          </p>
                        </blockquote>
                      </div>
                    </div>

                    {/* Truth Declaration */}
                    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 dark:from-primary/20 dark:via-primary/10 dark:to-primary/20 p-6 rounded-lg border-2 border-primary/30 dark:border-primary/40">
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-xs uppercase tracking-wider font-medium text-primary">
                            Biblical Truth
                          </span>
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <p className="font-semibold text-lg text-primary">
                          Only keep the days hallowed by the Lord recorded in the Holy Bible
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                          <span>Proverbs 30:6</span>
                          <span>•</span>
                          <span>Ecclesiasticus 33:8-9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Pagan Origins Exposed | Biblical Truth</h2>
            
            {/* Category Filter */}
            <Tabs defaultValue="all" className="w-auto" onValueChange={setSelectedCategory}>
              <TabsList className="bg-muted">
                <TabsTrigger value="all">All Holidays</TabsTrigger>
                <TabsTrigger value="witchcraft">Witchcraft</TabsTrigger>
                <TabsTrigger value="sun-worship">Sun Worship</TabsTrigger>
                <TabsTrigger value="fertility">Fertility</TabsTrigger>
                <TabsTrigger value="commerce">Commerce</TabsTrigger>
                <TabsTrigger value="tradition">Tradition</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Holiday Viewer and List - 65/35 ratio like BiblicalHolyDaysPage */}
          <div className="grid grid-cols-12 gap-6">
            {/* Holiday Viewer - 65% */}
            <div className="col-span-12 lg:col-span-8">
              <Card className="bg-card border h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <selectedHoliday.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-2xl">{selectedHoliday.name}</CardTitle>
                        <Badge variant="outline" className={categoryColors[selectedHoliday.category]}>
                          {selectedHoliday.category}
                        </Badge>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">
                        {selectedHoliday.originalName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedHoliday.timing}
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
                        <p className="text-sm text-muted-foreground">{selectedHoliday.name} Exposed</p>
                      </div>
                    </div>
                  </div>

                  {/* Synopsis */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Synopsis</h4>
                    <p className="text-muted-foreground leading-relaxed text-left">
                      {selectedHoliday.synopsis}
                    </p>
                  </div>

                  {/* Key Points */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Points</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedHoliday.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground text-left">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scripture References */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Scripture References</h4>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {selectedHoliday.scriptures.map((scripture, index) => (
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

            {/* Holidays List - 35% */}
            <div className="col-span-12 lg:col-span-4">
              <Card className="bg-card border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Pagan Holidays</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {filteredHolidays.length} false celebrations exposed
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-96 overflow-y-auto">
                    <div className="space-y-1">
                      {filteredHolidays.map((holiday, index) => (
                        <div key={holiday.id}>
                          <button
                            onClick={() => setSelectedHoliday(holiday)}
                            className={`w-full p-4 text-left hover:bg-muted/50 transition-colors ${
                              selectedHoliday.id === holiday.id ? 'bg-muted/70' : ''
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                selectedHoliday.id === holiday.id ? 'bg-red-100 dark:bg-red-950/20' : 'bg-muted'
                              }`}>
                                <holiday.icon className={`w-5 h-5 ${
                                  selectedHoliday.id === holiday.id ? 'text-red-600 dark:text-red-400' : 'text-muted-foreground'
                                }`} />
                              </div>
                              <div className="space-y-1 flex-1">
                                <div className="flex items-center gap-2">
                                  <p className="font-medium text-sm">{holiday.name}</p>
                                  <Badge variant="outline" className={`text-xs ${categoryColors[holiday.category]}`}>
                                    {holiday.category}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground font-medium">
                                  {holiday.originalName}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-2 text-left">
                                  {holiday.synopsis}
                                </p>
                              </div>
                              {selectedHoliday.id === holiday.id && (
                                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </button>
                          {index < filteredHolidays.length - 1 && <Separator />}
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
              Download Pagan Holidays Exposure Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaganHolidaysPage;