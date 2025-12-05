import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Star, 
  Moon, 
  Sun, 
  Calendar, 
  Flame, 
  Wheat, 
  Shield, 
  Home, 
  Volume2, 
  Crown,
  Clock,
  ArrowDown,
  BookOpen,
  PlayCircle,
  ChevronRight
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

// --- RESTORED DATA WITH FULL CONTENT ---

interface HolyDay {
  id: string;
  name: string;
  hebrewName: string;
  category: "weekly" | "monthly" | "spring" | "fall" | "winter";
  icon: React.ElementType;
  synopsis: string;
  videoPlaceholder: string;
  timing: string;
  scriptures: string[];
  keyPoints: string[];
  season: string; // Added for visual grouping
}

const holyDays: HolyDay[] = [
  {
    id: "sabbath",
    name: "The Sabbath",
    hebrewName: "Shabbat",
    category: "weekly",
    icon: Star,
    synopsis: "The 7th day literally means 'rest' - the first holiday ordained by the Most High. Created 3 days after sun/moon, proving it's not lunar-based. A perpetual covenant and sign between God and Israel forever.",
    videoPlaceholder: "/videos/sabbath-explanation.mp4",
    timing: "Every Friday evening to Saturday evening",
    season: "Weekly",
    scriptures: ["GEN 2:1-3", "EXO 20:8-11", "ISA 58:13-14", "EXO 31:16-17"],
    keyPoints: ["No work (you, family, servants, animals)", "No cooking or fire", "No buying or selling", "Perpetual covenant with Israel"]
  },
  {
    id: "newmoon",
    name: "New Moon",
    hebrewName: "Rosh Chodesh",
    category: "monthly",
    icon: Moon,
    synopsis: "The New Moon is the FULL Moon - not the dark phase. Made on 4th day of creation to rule the night and be for signs and seasons. All feasts are kept according to the new moon.",
    videoPlaceholder: "/videos/newmoon-explanation.mp4",
    timing: "First day of each Hebrew month (Full Moon)",
    season: "Monthly",
    scriptures: ["GEN 1:14-19", "LEV 23:1-4", "PSA 81:3", "ISA 66:23"],
    keyPoints: ["New Moon = Full Moon (not dark)", "Made 4th day for signs/seasons", "Rules the night with light", "Feasts kept by new moon timing"]
  },
  {
    id: "passover",
    name: "Passover",
    hebrewName: "Pesach",
    category: "spring",
    icon: Shield,
    synopsis: "Commemorates Israel's deliverance from Egypt when the Most High passed over houses marked with blood. Christ is our Passover lamb without blemish.",
    videoPlaceholder: "/videos/passover-explanation.mp4",
    timing: "14th day of first month (Abib)",
    season: "Spring",
    scriptures: ["EXO 12:1-14", "LEV 23:5", "1COR 5:7-8", "LUK 22:15"],
    keyPoints: ["Deliverance from Egypt", "Christ as Passover Lamb", "Removal of leaven (sin)", "Teaching children the meaning"]
  },
  {
    id: "simon",
    name: "Day of Simon",
    hebrewName: "Yom Shimon",
    category: "spring",
    icon: Crown,
    synopsis: "Commemorates Simon's trials and victories after Jonathan's capture. On the 23rd day of the 2nd month, Simon cleansed the tower in Jerusalem. A day of gladness.",
    videoPlaceholder: "/videos/simon-explanation.mp4",
    timing: "23rd day of the second month (Iyyar)",
    season: "Spring",
    scriptures: ["1MAC 13:1-52", "PRO 30:5-6"],
    keyPoints: ["Simon elected leader", "Cleansed tower in Jerusalem", "Day of gladness with feasting", "Not a Sabbath (work permitted)"]
  },
  {
    id: "firstfruits",
    name: "Feast of First Fruits",
    hebrewName: "Yom HaBikkurim",
    category: "spring",
    icon: Wheat,
    synopsis: "Occurs at beginning of wheat harvest. Pentecost (50th day) fulfills this feast - Holy Spirit came upon Christ's followers in Acts 2. Christ is the firstfruits of resurrection.",
    videoPlaceholder: "/videos/firstfruits-explanation.mp4",
    timing: "50th day after Sabbath (Pentecost)",
    season: "Spring",
    scriptures: ["LEV 23:15-22", "ACT 2:1-4", "1COR 15:20-23"],
    keyPoints: ["Count 50 days (Pentecost)", "Holy Spirit outpouring", "Christ as firstfruits", "Thanksgiving for harvest"]
  },
  {
    id: "trumpets",
    name: "Memorial of Trumpets",
    hebrewName: "Yom Teruah",
    category: "fall",
    icon: Volume2,
    synopsis: "A 'day of horn-blasts', it is a day of rest and the foremost of New Moon celebrations. Silver trumpets called assemblies, signaled journeys, and served as memorials before God.",
    videoPlaceholder: "/videos/trumpets-explanation.mp4",
    timing: "1st day of the seventh month (Tishrei)",
    season: "Fall",
    scriptures: ["LEV 23:24-25", "NUM 10:1-10", "PSA 81:3"],
    keyPoints: ["Day of horn-blasts", "Sabbath rest required", "Foremost New Moon celebration", "Memorial before God"]
  },
  {
    id: "atonement",
    name: "Day of Atonement",
    hebrewName: "Yom Kippur",
    category: "fall",
    icon: Star, // Replaced Scale with Star/Generic if Scale missing
    synopsis: "Ordained for afflicting souls by not eating or drinking for entire day. Humble hearts with prayers. Only sacrificial law removed by Christ - the day continues.",
    videoPlaceholder: "/videos/atonement-explanation.mp4",
    timing: "10th day of 7th month",
    season: "Fall",
    scriptures: ["LEV 23:26-32", "LEV 16:29-34", "ACT 27:9"],
    keyPoints: ["Complete fast (no food/water)", "Afflict your souls", "Sabbath of rest", "Most holy day of year"]
  },
  {
    id: "tabernacles",
    name: "Feast of Tabernacles",
    hebrewName: "Sukkot",
    category: "fall",
    icon: Home,
    synopsis: "Seven-day feast dwelling in booths, remembering God's provision in wilderness. Prophetically points to Christ's millennial kingdom when ALL nations will keep this feast.",
    videoPlaceholder: "/videos/tabernacles-explanation.mp4",
    timing: "15th-21st days of 7th month",
    season: "Fall",
    scriptures: ["LEV 23:33-44", "ZEC 14:16-21", "DEU 16:13-15"],
    keyPoints: ["Seven days in booths", "Rejoice before the Lord", "Ingathering of harvest", "Kingdom prophecy"]
  },
  {
    id: "dedication",
    name: "Feast of Dedication",
    hebrewName: "Hanukkah",
    category: "winter",
    icon: Flame,
    synopsis: "Christ observed this feast. Judas Maccabeus cleansed the Temple exactly as prophesied in Daniel. Eight days celebration connects to Feast of Tabernacles. No oil miracle (man-made tradition).",
    videoPlaceholder: "/videos/dedication-explanation.mp4",
    timing: "25th day of 9th month for eight days",
    season: "Winter",
    scriptures: ["JOH 10:22-23", "1MAC 4:36-61", "DAN 8:13-14"],
    keyPoints: ["Cleansing of Sanctuary", "Judas Maccabeus victory", "Christ observed it", "Eight days of gladness"]
  },
  {
    id: "nicanor",
    name: "Destruction of Nicanor",
    hebrewName: "Yom Nicanor",
    category: "winter",
    icon: Shield,
    synopsis: "Nicanor blasphemously threatened to level Solomon's Temple. Judas Maccabeus defeated Nicanor's innumerable host through prayer. Nicanor was slain in his harness.",
    videoPlaceholder: "/videos/nicanor-explanation.mp4",
    timing: "13th day of 12th month (Adar)",
    season: "Winter",
    scriptures: ["1MAC 7:26-50", "2MAC 15:1-36"],
    keyPoints: ["Victory over blasphemer", "Preservation of Temple", "Power of prayer in war", "Day of great gladness"]
  },
  {
    id: "purim",
    name: "Purim",
    hebrewName: "Purim",
    category: "winter",
    icon: Crown,
    synopsis: "Queen Esther and Mordecai saved the Jews from Haman's plot to destroy them. God's hidden providence protecting Israel. A time of sending portions to one another.",
    videoPlaceholder: "/videos/purim-explanation.mp4",
    timing: "14th & 15th days of 12th month (Adar)",
    season: "Winter",
    scriptures: ["EST 9:20-32", "EST 4:14"],
    keyPoints: ["Deliverance from Haman", "Esther's courage", "Sending portions/gifts", "Memorial for all generations"]
  }
];

// --- COMPONENTS ---

// 1. Celestial Hero
const CelestialHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#FDFCF8] dark:bg-[#050505] text-foreground">
      {/* Background Pattern - Sacred Geometry */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Rotating Ring (3D Effect) */}
      <div className="absolute w-[800px] h-[800px] border border-primary/10 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

      <motion.div 
        style={{ y: y1, opacity }}
        className="z-10 text-center space-y-6 max-w-4xl px-4"
      >
        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 px-6 py-2 tracking-[0.2em] uppercase backdrop-blur-sm">
          Holy Days
        </Badge>

        <h1 className="text-6xl md:text-9xl font-serif text-foreground font-medium tracking-tight">
          Set Apart <span className="text-primary italic">Times</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif italic leading-relaxed">
          "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons..."
        </p>
        
        <div className="pt-8">
           <p className="text-sm font-mono text-primary/60 uppercase tracking-widest">Scroll to Walk The Path</p>
        </div>

        <div className="pt-12 flex justify-center">
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

// 2. The "Living Scroll" Item
const FeastSection = ({ day, index }: { day: HolyDay; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      className="relative min-h-screen flex items-center py-24 overflow-hidden selection:bg-primary/30"
    >
      {/* Background Atmosphere (Cinematic Ambient Movement) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
           className="opacity-[0.03] text-foreground"
        >
           <day.icon className="w-[120vh] h-[120vh]" strokeWidth={0.5} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 items-center",
          index % 2 !== 0 ? "lg:grid-flow-dense" : ""
        )}>
          
          {/* Text Side - Storytelling */}
          <div className={cn(
             "space-y-8",
             index % 2 !== 0 ? "lg:col-start-2" : ""
          )}>
             <motion.div 
               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
               <div className="flex items-center gap-4 mb-6">
                 <span className="px-4 py-1 rounded-full border border-primary/20 text-xs font-mono uppercase tracking-widest text-primary/80 bg-primary/5 backdrop-blur-sm">
                   {day.season}
                 </span>
                 <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
               </div>

               <h2 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-4 leading-[0.85] tracking-tight">
                 {day.name}
               </h2>
               <h3 className="text-3xl text-primary/60 font-serif italic mb-8">
                 {day.hebrewName}
               </h3>

               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6 font-serif italic">
                 "{day.synopsis}"
               </p>
             </motion.div>
          </div>

          {/* Visual/Card Side - 3D Glassmorphism */}
          <div className={cn(
             "[perspective:1000px]",
             index % 2 !== 0 ? "lg:col-start-1" : ""
          )}>
             <motion.div
               initial={{ opacity: 0, y: 100, rotateX: 10 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, type: "spring" }}
               whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: -5, scale: 1.02 }}
               className="relative bg-card/50 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border border-border/50 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group transition-all duration-500"
             >
                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-500" />
                
                <div className="relative z-10 space-y-10">
                   <div className="flex items-center justify-between">
                     <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                       <day.icon className="w-8 h-8" />
                     </div>
                     <div className="text-right">
                       <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 flex items-center justify-end gap-2">
                         <Clock className="w-3 h-3" /> Timing
                       </div>
                       <div className="text-sm font-mono text-foreground border-b border-primary/30 pb-1">{day.timing}</div>
                     </div>
                   </div>

                   <div className="space-y-6">
                     <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-foreground/80">
                       <Star className="w-4 h-4 text-primary" />
                       Key Observances
                     </h4>
                     <ul className="space-y-3">
                       {day.keyPoints.map((point, i) => (
                         <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm group/item">
                           <ChevronRight className="w-4 h-4 text-primary/40 mt-0.5 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                           {point}
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="pt-6 border-t border-border/50 dark:border-white/5">
                     <div className="flex flex-wrap gap-2">
                       {day.scriptures.map((ref, i) => (
                         <Badge key={i} variant="outline" className="border-primary/20 text-primary/60 hover:text-primary hover:border-primary/50 bg-transparent transition-colors cursor-default">
                           {ref}
                         </Badge>
                       ))}
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};


export function BiblicalHolyDaysPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white font-sans">
       <CelestialHero />
       
       <section className="relative pb-32">
         {holyDays.map((day, i) => (
           <FeastSection key={day.id} day={day} index={i} />
         ))}
       </section>

       {/* Prophetic Footer */}
       <section className="py-32 bg-[#0A0A0A] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-muted dark:bg-[#0A0A0A] after:absolute after:inset-0 after:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] after:opacity-[0.05] after:content-['']" />
          <div className="container relative z-10 max-w-4xl mx-auto px-6">
             <Crown className="w-16 h-16 text-primary mx-auto mb-8" />
             <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Set Apart from the World</h2>
             <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
               Keeping God's laws means more than just knowing them—it means living them. We must separate ourselves from the customs of this world and put away pagan holidays to walk in the truth.
             </p>
             
             <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-10 max-w-3xl mx-auto">
               <p className="text-foreground/90 italic text-lg mb-4">
                 "Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days: Which are a shadow of things to come; but the body is of Christ."
               </p>
               <p className="text-primary font-serif">— Colossians 2:16-17</p>
             </div>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link to="/calendar">
                 <Button size="lg" className="h-12 px-8 text-base gap-2 group">
                   <Calendar className="w-5 h-5" />
                   View Holy Day Calendar
                   <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </Link>
             </div>
          </div>
       </section>
    </div>
  );
}

export default BiblicalHolyDaysPage;
