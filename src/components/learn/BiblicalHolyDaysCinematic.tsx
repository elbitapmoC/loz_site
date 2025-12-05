import React, { useRef } from "react";
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
  ArrowDown
} from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "../ui/utils";

// --- DATA ---
interface HolyDay {
  id: string;
  name: string;
  hebrewName: string;
  category: "weekly" | "monthly" | "spring" | "fall" | "winter";
  icon: React.ElementType;
  synopsis: string;
  timing: string;
  season: string;
  color: string;
}

const holyDays: HolyDay[] = [
  {
    id: "sabbath",
    name: "The Sabbath",
    hebrewName: "Shabbat",
    category: "weekly",
    icon: Star,
    synopsis: "The first holiday ordained by the Most High. A perpetual covenant and sign between God and Israel forever.",
    timing: "Every 7th Day",
    season: "Weekly",
    color: "bg-blue-500"
  },
  {
    id: "passover",
    name: "Passover",
    hebrewName: "Pesach",
    category: "spring",
    icon: Shield,
    synopsis: "Commemorates the deliverance from Egypt. The blood of the lamb saved the firstborn, pointing to the ultimate sacrifice.",
    timing: "14th Day of 1st Month",
    season: "Spring",
    color: "bg-green-500"
  },
  {
    id: "firstfruits",
    name: "First Fruits",
    hebrewName: "Bikkurim",
    category: "spring",
    icon: Wheat,
    synopsis: "The beginning of the harvest. Christ is the firstfruits of the resurrection, fulfilling this feast.",
    timing: "During Unleavened Bread",
    season: "Spring",
    color: "bg-green-600"
  },
  {
    id: "trumpets",
    name: "Trumpets",
    hebrewName: "Yom Teruah",
    category: "fall",
    icon: Volume2,
    synopsis: "A day of shouting and blowing trumpets. A memorial of the blowing of trumpets, a holy convocation.",
    timing: "1st Day of 7th Month",
    season: "Fall",
    color: "bg-amber-500"
  },
  {
    id: "atonement",
    name: "Day of Atonement",
    hebrewName: "Yom Kippur",
    category: "fall",
    icon: ScaleIcon,
    synopsis: "The holiest day of the year. A day of fasting and affliction of the soul for the cleansing of sin.",
    timing: "10th Day of 7th Month",
    season: "Fall",
    color: "bg-amber-600"
  },
  {
    id: "tabernacles",
    name: "Tabernacles",
    hebrewName: "Sukkot",
    category: "fall",
    icon: Home,
    synopsis: "Dwelling in booths to remember the wilderness journey. Prophetic of the Kingdom age.",
    timing: "15th Day of 7th Month",
    season: "Fall",
    color: "bg-amber-700"
  },
  {
    id: "dedication",
    name: "Feast of Dedication",
    hebrewName: "Hanukkah",
    category: "winter",
    icon: Flame,
    synopsis: "Celebrating the cleansing of the Temple by the Maccabees. Christ walked in the temple during this feast.",
    timing: "25th Day of 9th Month",
    season: "Winter",
    color: "bg-purple-500"
  }
];

function ScaleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}

// --- COMPONENTS ---

// 1. Celestial Hero
const CelestialHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#FDFCF8] dark:bg-[#050505] text-foreground">
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
          The Divine Calendar
        </Badge>

        <h1 className="text-6xl md:text-9xl font-serif text-foreground font-medium tracking-tight">
          Sacred <span className="text-primary italic">Time</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif italic leading-relaxed">
          "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons..."
        </p>

        <div className="pt-12 flex justify-center">
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

// 2. Feast Card (3D Tilt)
const FeastCard = ({ day, index }: { day: HolyDay; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-16 py-24",
        index % 2 !== 0 && "md:flex-row-reverse"
      )}
    >
      {/* Time Node */}
      <div className="relative">
        <div className={cn(
          "w-24 h-24 rounded-full flex items-center justify-center shadow-2xl z-10 relative bg-background border-2",
          isInView ? "border-primary" : "border-muted"
        )}>
          <day.icon className={cn(
            "w-10 h-10 transition-colors duration-500",
            isInView ? "text-primary" : "text-muted-foreground"
          )} />
        </div>
        {/* Connector Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-border -z-10 md:hidden" />
      </div>

      {/* Content Card */}
      <div className="flex-1 text-center md:text-left">
        <div className={cn(
          "space-y-4",
          index % 2 !== 0 && "md:text-right"
        )}>
          <div className={cn(
            "flex items-center gap-3 text-sm font-medium text-primary uppercase tracking-widest",
            index % 2 !== 0 && "md:justify-end justify-center",
            index % 2 === 0 && "md:justify-start justify-center"
          )}>
             <span className="w-8 h-[1px] bg-primary" />
             {day.season}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-foreground">{day.name}</h2>
          <h3 className="text-xl text-muted-foreground font-serif italic">{day.hebrewName}</h3>
          
          <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
            {day.synopsis}
          </p>

          <div className={cn(
             "pt-6 flex items-center gap-4",
             index % 2 !== 0 && "md:justify-end justify-center",
             index % 2 === 0 && "md:justify-start justify-center"
          )}>
             <div className="px-4 py-2 rounded-full bg-primary/5 border border-primary/10 flex items-center gap-2">
               <Clock className="w-4 h-4 text-primary" />
               <span className="text-sm font-medium">{day.timing}</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 3. The Covenant Line (Timeline)
const CovenantTimeline = () => {
  return (
    <section className="relative py-20 container max-w-6xl mx-auto px-6">
      {/* Central Line for Desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

      <div className="relative z-10">
        {holyDays.map((day, i) => (
          <FeastCard key={day.id} day={day} index={i} />
        ))}
      </div>
    </section>
  );
};

// 4. Prophetic Significance Footer
const PropheticFooter = () => {
  return (
    <section className="py-32 bg-[#0A0A0A] text-white text-center relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
       
       <div className="container relative z-10 max-w-3xl mx-auto px-6">
          <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">A Shadow of Things to Come</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            "Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days: Which are a shadow of things to come; but the body is of Christ."
            <br/> <span className="text-[#D4AF37] mt-4 block font-serif italic">- Colossians 2:16-17</span>
          </p>
          
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
             <div>
               <div className="text-2xl font-bold text-white mb-2">Past</div>
               <div className="text-sm text-white/40">Deliverance from Egypt</div>
             </div>
             <div>
               <div className="text-2xl font-bold text-[#D4AF37] mb-2">Present</div>
               <div className="text-sm text-white/40">Sanctification & Rest</div>
             </div>
             <div>
               <div className="text-2xl font-bold text-white mb-2">Future</div>
               <div className="text-sm text-white/40">The Millennial Reign</div>
             </div>
          </div>
       </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---

export function BiblicalHolyDaysCinematic() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white font-sans">
       <CelestialHero />
       <CovenantTimeline />
       <PropheticFooter />
    </div>
  );
}
