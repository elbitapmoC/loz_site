import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertTriangle, 
  Skull, 
  Ghost, 
  Flame, 
  Gift,
  Calendar,
  Heart,
  Egg,
  Clover,
  Sun,
  Search, 
  FileWarning, 
  ChevronDown,
  X,
  BookOpen,
  Gavel
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle, DialogDescription } from "../ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "../ui/drawer";
import { cn } from "../ui/utils";

// --- RESTORED DATA WITH FULL CONTENT ---

interface PaganHoliday {
  id: string;
  name: string;
  originalName: string;
  category: "witchcraft" | "sun-worship" | "fertility" | "commerce" | "tradition";
  icon: React.ElementType;
  synopsis: string;
  videoPlaceholder: string;
  timing: string;
  scriptures: string[];
  keyPoints: string[];
}

const paganHolidays: PaganHoliday[] = [
  {
    id: "birthdays",
    name: "Birthday Celebrations",
    originalName: "Egyptian/Babylonian Birth Worship & Astrology",
    category: "witchcraft",
    icon: Flame, // Cake replaced with Flame for "Ritual" vibe
    synopsis: "Birthdays connect to ancient Egyptian/Babylonian worship where birth dates determined destinies by star alignment. Early Christians avoided birthdays as pagan practice. Only two biblical birthday celebrations - both resulted in death (Pharaoh beheaded baker, Herod beheaded John Baptist). Candles, wishes, zodiac signs all stem from ancient witchcraft and divination practices forbidden by Scripture.",
    videoPlaceholder: "/videos/birthdays-exposed.mp4",
    timing: "Individual birth dates - connecting to zodiac constellations",
    scriptures: ["GEN 40:20-22", "MAT 14:6-10", "JER 10:2", "DEU 18:10-12", "LEV 19:26", "ISA 47:13-14"],
    keyPoints: ["Only two biblical birthdays - both ended in death", "Pharaoh's birthday - baker beheaded (Gen 40:20-22)", "Herod's birthday - John Baptist beheaded (Mat 14:6-10)", "Ancient connection to star worship and destiny", "Candles represent communication with spirits", "Birthday wishes = divination and sorcery", "Zodiac signs determine 'personality traits'", "Early Christians avoided as pagan practice", "Learn not the way of the heathen (Jer 10:2)", "Don't regard times or use enchantments (Lev 19:26)", "No observer of times or enchanter (Deu 18:10)", "Monthly prognosticators shall not save (Isa 47:13)"]
  },
  {
    id: "christmas",
    name: "Christmas",
    originalName: "Sol Invictus / Saturnalia",
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
    originalName: "Roman Janus Two-Faced God",
    category: "tradition",
    icon: Calendar,
    synopsis: "January 1st honors Roman god Janus (two-faced deity looking backward/forward). Biblical new year begins with first new moon of spring (Abib/Nisan) when God delivered Israel from Egypt. Gregorian calendar imposed by Pope Gregory XIII in 1582 to replace biblical reckoning. Resolutions, parties, midnight celebrations follow pagan patterns rather than God's appointed times.",
    videoPlaceholder: "/videos/new-year-deception.mp4",
    timing: "January 1st - Roman Janus god celebration",
    scriptures: ["EXO 12:2", "EXO 13:4", "EST 3:7", "NEH 2:1", "DEU 16:1", "LEV 23:5"],
    keyPoints: ["January 1st honors Janus - Roman two-faced god", "Janus looks backward to past, forward to future", "Biblical new year = first new moon of Abib/Nisan", "God said 'this month shall be unto you beginning of months' (Exo 12:2)", "Passover in month Abib when came out of Egypt (Deu 16:1)", "Gregorian calendar imposed by Pope Gregory XIII 1582", "Replaced biblical lunar calendar with solar system", "New Year's resolutions = self-improvement vs. repentance", "Midnight celebrations follow pagan festival patterns", "Ball dropping represents sun worship symbolism", "Champagne toasts honor false gods", "Biblical calendar begins with spring, not winter", "Month Nisan = first month (Est 3:7, Neh 2:1)", "God's people should follow His timing", "Don't learn way of the heathen calendar systems"]
  },
  {
    id: "easter",
    name: "Easter",
    originalName: "Ashtoreth / Ishtar / Eostre",
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
    originalName: "Babylonian Tammuz Mourning",
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
    originalName: "Samhain Festival of Fire",
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
    originalName: "Rhea / Isis / Queen of Heaven",
    category: "fertility",
    icon: Heart,
    synopsis: "Everyone loves their mother and Exodus 20:12 teaches 'Honor thy father and mother.' However man has established his own day of reverence to honor mothers - not scriptural but based on Satanic idolatrous principles. Ancient Greeks honored powerful titan Rhea, wife of Cronus, 'Mother of the Gods.' Romans held three-day Hilaria festival honoring Magna Mater (Great Mother) dating to 250 BC with temple on Palatine hill. Israelites in Egypt followed goddess Isis, also called 'Queen of Heaven.' Catholic church transferred goddess worship to 'Mary mother of god, queen of heaven.'",
    videoPlaceholder: "/videos/mothers-day-origins.mp4",
    timing: "Second Sunday in May - spring fertility goddess season",
    scriptures: ["EXO 20:12", "JER 44:15-23", "LUK 1:28", "LUK 11:27-28", "DEU 12:30-32", "PRO 30:6"],
    keyPoints: ["Ancient Greek Rhea worship - powerful titan 'Mother of the Gods'", "Roman three-day Hilaria festival for Magna Mater (Great Mother) 250 BC", "Temple on Palatine hill in Rome with gifts and cakes offerings", "Egyptian Isis goddess worship - 'Queen of Heaven'", "Israelites in Egypt following Queen of Heaven goddess", "Catholic church transferring worship to 'Mary mother of god, queen of heaven'", "Celebration of 'Mother Church'/Roman Catholic Church replacing pagan tradition", "Mary as spiritual power giving life and protection from harm", "Middle Ages servants given day off in springtime to visit mothers", "Bringing small gifts or 'mothering cake' to show appreciation", "Establishment of man-made holiday adding to Scripture", "Honor thy father and mother (Exo 20:12)", "We will burn incense to queen of heaven (Jer 44:17)", "Gabriel said 'blessed art thou among women' not worship Mary (Luk 1:28)", "Christ said 'blessed are they that hear word of God and keep it' (Luk 11:28)", "Not commanded to establish our own holidays"]
  },
  {
    id: "valentines-day",
    name: "Valentine's Day",
    originalName: "Lupercalia / Cupid Worship",
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
    originalName: "Celtic Druids & Snake God Rituals",
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
    originalName: "Ra / Sol Invictus Sun God Day",
    category: "sun-worship",
    icon: Sun,
    synopsis: "From ancient Egypt and Babylon, sun was main false god (Ra the sun god). Idol worshippers chose day to honor false god called 'Sunday.' After Christ's death and resurrection, enemies infiltrated true Church as Scripture warned. False prophets arose teaching Sabbath was done away and Sunday exalted as Lord's day, making it easier for idol worshippers to join church and increase financial income if Christians met same day as pagan world. Only eight scriptures in New Testament mention first day of week - none teach change of Sabbath to Sunday.",
    videoPlaceholder: "/videos/sunday-deception.mp4",
    timing: "Every Sunday - weekly sun god worship replacing biblical Sabbath",
    scriptures: ["MAT 24:11", "ACT 20:29-30", "MAT 28:1", "MAR 16:1-2", "MAR 16:9", "LUK 24:1", "JOH 20:1", "JOH 20:19", "ACT 20:7-8", "1COR 16:1-2", "MAT 5:17", "MAT 12:8"],
    keyPoints: ["Ancient Egyptian Ra sun god worship", "Babylonian sun god as main false deity", "Idol worshippers choosing day to honor false sun god", "Roman Sol Invictus (Unconquered Sun) veneration", "False teachers infiltrating church after apostles died", "Sunday exalted as 'Lord's day' to replace biblical Sabbath", "Financial motivation - easier for pagans to join if same meeting day", "Many false prophets shall arise and deceive many (Mat 24:11)", "Grievous wolves enter not sparing flock (Act 20:29)", "Eight mentions of first day - none establish Sunday worship", "Disciples assembled for fear of Jews, not worship (Joh 20:19)", "Acts 20:7-8 farewell gathering for Paul's departure", "1 Corinthians 16:1-2 about collecting money, not worship", "Think not I came to destroy law or prophets (Mat 5:17)", "Son of man is Lord even of sabbath day (Mat 12:8)", "No scriptural authority for changing Sabbath to Sunday"]
  }
];

// --- COMPONENTS ---

// 1. Glitch Hero (Preserved from Cinematic, adjusted for tone)
const GlitchHero = () => {
  return (
    <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground pb-20">
      {/* Glitch Background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay" />
         <video 
           autoPlay 
           muted 
           loop 
           playsInline
           className="w-full h-full object-cover grayscale opacity-20 dark:opacity-30"
         >
           <source src="https://cdn.coverr.co/videos/coverr-static-tv-noise-5463/1080p.mp4" type="video/mp4" />
         </video>
      </div>

      <div className="z-10 text-center space-y-8 max-w-5xl px-4 pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Badge variant="outline" className="border-red-500 text-red-600 dark:text-red-500 tracking-[0.5em] uppercase mb-8 bg-red-50/50 dark:bg-red-950/10 hover:bg-red-100/50 dark:hover:bg-red-900/20">
            Warning: Deception Detected
          </Badge>
        </motion.div>

        <div className="relative">
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-muted-foreground to-transparent dark:from-white dark:via-gray-400 dark:to-gray-800">
             THE LIE
           </h1>
           <motion.h1 
              className="absolute inset-0 text-6xl md:text-9xl font-black tracking-tighter text-red-600 mix-blend-overlay dark:mix-blend-color-dodge opacity-0"
              animate={{ 
                opacity: [0, 0.5, 0, 0.2, 0],
                x: [0, -5, 5, -2, 0],
                skewX: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
           >
             THE TRUTH
           </motion.h1>
        </div>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-mono leading-relaxed">
          "Learn not the way of the heathen... for the customs of the people are <span className="text-red-600 dark:text-red-500 font-bold">vain</span>."
          <br/>
          <span className="text-sm opacity-50 mt-4 block">- Jeremiah 10:2-3</span>
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-red-600 dark:text-red-500 animate-pulse">Expose The Files</span>
        <ChevronDown className="text-red-600 dark:text-red-500 animate-bounce" />
      </motion.div>
    </div>
  );
};

// 2. "Case File" Card
const CaseFileCard = ({ holiday, onClick }: { holiday: PaganHoliday; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative cursor-pointer h-full"
    >
      <div className="relative h-full overflow-hidden bg-card border border-border hover:border-red-600/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
        {/* Header Strip */}
        <div className="h-2 w-full bg-gradient-to-r from-red-900 to-background" />
        
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <Badge variant="secondary" className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-500 border-red-200 dark:border-red-900/50 font-mono uppercase tracking-wider text-[10px]">
                Classified
              </Badge>
              <holiday.icon className="w-6 h-6 text-muted-foreground group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-1 group-hover:text-red-700 dark:group-hover:text-red-100 transition-colors">{holiday.name}</h3>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{holiday.timing}</p>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed border-l-2 border-red-500/30 pl-3">
              {holiday.synopsis}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
             <span className="text-xs font-mono text-red-600/80 dark:text-red-500/60 group-hover:text-red-600 dark:group-hover:text-red-400 flex items-center gap-2">
               <Search className="w-3 h-3" />
               VIEW EVIDENCE
             </span>
             <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
               <ChevronDown className="w-4 h-4 -rotate-90" />
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 3. Detailed Modal (The "Dossier")
function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

const EvidenceBody = ({ holiday }: { holiday: PaganHoliday }) => (
  <div className="flex flex-col gap-8 md:gap-12 pb-8">
    {/* Left Column: The Charge (Synopsis) */}
    <div className="space-y-8 md:space-y-10">
      <div>
        <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-3 border-b border-border pb-4">
          <FileWarning className="w-5 h-5 md:w-7 md:h-7 text-red-600 dark:text-red-500" />
          The Deception
        </h3>
        <div className="prose dark:prose-invert prose-base md:prose-xl leading-loose text-muted-foreground max-w-none">
          <p>{holiday.synopsis}</p>
        </div>
      </div>

      <div>
          <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-3 border-b border-border pb-4">
          <Search className="w-5 h-5 md:w-7 md:h-7 text-red-600 dark:text-red-500" />
          Key Evidence
        </h3>
        <ul className="space-y-4 md:space-y-5">
          {holiday.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-red-600 shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Right Column: The Verdict (Scriptures) */}
    <div className="space-y-6 md:space-y-8 pt-2">
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <h3 className="text-lg md:text-xl font-bold text-red-700 dark:text-red-400 mb-4 md:mb-6 flex items-center gap-3">
            <Gavel className="w-5 h-5 md:w-6 md:h-6" />
            Biblical Verdict
          </h3>
          <p className="text-xs md:text-sm text-red-600/80 dark:text-red-400/80 mb-6 md:mb-8 uppercase tracking-widest font-semibold">The Most High forbids this practice:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {holiday.scriptures.map((ref, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background/60 rounded-xl border border-red-200 dark:border-red-900/20 hover:border-red-500/30 transition-colors group">
                <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                <span className="text-sm md:text-base font-mono text-red-800 dark:text-red-200 group-hover:text-red-900 dark:group-hover:text-white transition-colors">{ref}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
          <h4 className="text-sm md:text-base font-bold text-card-foreground mb-3">Timing</h4>
          <div className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
            <Calendar className="w-5 h-5" />
            {holiday.timing}
          </div>
        </div>
    </div>
  </div>
);

const EvidenceModal = ({ holiday, isOpen, onClose }: { holiday: PaganHoliday | null; isOpen: boolean; onClose: () => void }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!holiday) return null;

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-4xl bg-background border-red-200 dark:border-red-900/20 text-foreground p-0 overflow-hidden h-[90vh] md:h-[85vh] flex flex-col">
          {/* Header */}
          <div className="bg-red-50 dark:bg-red-950/10 border-b border-red-200 dark:border-red-900/20 p-6 flex items-start justify-between shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-2">
                 <Badge variant="destructive" className="bg-red-600 text-white hover:bg-red-700 tracking-widest font-mono uppercase text-xs">
                   Origin Identified
                 </Badge>
                 <span className="text-red-600/50 dark:text-red-500/50 font-mono text-xs uppercase">Case ID: #{holiday.id.toUpperCase()}</span>
              </div>
              <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-serif tracking-wide">
                {holiday.name}
              </DialogTitle>
              <DialogDescription className="text-red-600 dark:text-red-400 font-mono uppercase tracking-wider text-sm">
                Formerly: {holiday.originalName}
              </DialogDescription>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-8">
             <EvidenceBody holiday={holiday} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="bg-background border-red-200 dark:border-red-900/20 text-foreground h-[90vh] flex flex-col">
        <DrawerHeader className="bg-red-50 dark:bg-red-950/10 border-b border-red-200 dark:border-red-900/20 p-6 text-left shrink-0">
            <div className="flex items-center gap-3 mb-2">
               <Badge variant="destructive" className="bg-red-600 text-white hover:bg-red-700 tracking-widest font-mono uppercase text-xs">
                 Origin Identified
               </Badge>
               <span className="text-red-600/50 dark:text-red-500/50 font-mono text-xs uppercase">Case ID: #{holiday.id.toUpperCase()}</span>
            </div>
            <DrawerTitle className="text-3xl font-bold text-foreground mb-1 font-serif tracking-wide">
              {holiday.name}
            </DrawerTitle>
            <DrawerDescription className="text-red-600 dark:text-red-400 font-mono uppercase tracking-wider text-sm">
              Formerly: {holiday.originalName}
            </DrawerDescription>
        </DrawerHeader>
        
        <div className="flex-1 overflow-y-auto p-6">
           <EvidenceBody holiday={holiday} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export function PaganHolidaysPage() {
  const [selectedHoliday, setSelectedHoliday] = useState<PaganHoliday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openHoliday = (holiday: PaganHoliday) => {
    setSelectedHoliday(holiday);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-red-200 selection:text-red-900 dark:selection:bg-red-900 dark:selection:text-white">
      <GlitchHero />
      
      {/* Grid Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-12 flex items-center gap-4">
           <div className="h-px flex-1 bg-border" />
           <h2 className="text-xl md:text-3xl font-mono font-bold uppercase tracking-tighter text-muted-foreground">
             Declassified Files <span className="text-red-600 dark:text-red-500">({paganHolidays.length})</span>
           </h2>
           <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paganHolidays.map((holiday) => (
            <CaseFileCard 
              key={holiday.id} 
              holiday={holiday} 
              onClick={() => openHoliday(holiday)} 
            />
          ))}
        </div>
      </section>

      <EvidenceModal 
        holiday={selectedHoliday} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Footer Quote */}
      <footer className="py-20 bg-muted/20 border-t border-border text-center px-4">
        <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto">
          "And ye shall know the truth, and the truth shall make you free."
          <br/>
          <span className="text-red-600 dark:text-red-500 block mt-2">JOHN 8:32</span>
        </p>
      </footer>
    </div>
  );
}

export default PaganHolidaysPage;
