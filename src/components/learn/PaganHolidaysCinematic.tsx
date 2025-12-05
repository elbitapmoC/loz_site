import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { 
  AlertTriangle, 
  Skull, 
  Ghost, 
  Flame, 
  Eye, 
  X, 
  Search, 
  FileWarning, 
  ChevronDown,
  Lock
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { cn } from "../ui/utils";

// --- DATA ---
interface PaganHoliday {
  id: string;
  name: string;
  originalName: string;
  category: "witchcraft" | "sun-worship" | "fertility" | "commerce" | "tradition";
  icon: React.ElementType;
  synopsis: string;
  timing: string;
  scriptures: string[];
  modernImage: string;
  ancientImage: string;
  evidence: string[];
}

const paganHolidays: PaganHoliday[] = [
  {
    id: "christmas",
    name: "Christmas",
    originalName: "Saturnalia / Sol Invictus",
    category: "sun-worship",
    icon: Flame,
    synopsis: "A fusion of the Roman festival Saturnalia and the birthday of the Sun God (Sol Invictus). The 'Christmas Tree' is explicitly condemned in Jeremiah 10 as a heathen custom.",
    timing: "December 25th",
    scriptures: ["Jeremiah 10:2-4", "Ezekiel 8:14"],
    modernImage: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=1000&auto=format&fit=crop",
    ancientImage: "https://images.unsplash.com/photo-1599894019794-5c2d17832d07?q=80&w=1000&auto=format&fit=crop",
    evidence: [
      "Saturnalia: A week of lawlessness, role reversals, and gift-giving.",
      "The Tree: 'Decked with silver and gold' (Jer 10:4).",
      "Nimrod/Tammuz: The evergreen tree symbolized the rebirth of the sun god."
    ]
  },
  {
    id: "easter",
    name: "Easter",
    originalName: "Ishtar / Astarte",
    category: "fertility",
    icon: Skull,
    synopsis: "Named after the Babylonian fertility goddess Ishtar. The eggs and rabbits are ancient symbols of fertility and sex worship, having no connection to the resurrection.",
    timing: "Spring Equinox",
    scriptures: ["Ezekiel 8:16", "Jeremiah 7:18"],
    modernImage: "https://images.unsplash.com/photo-1520023900380-9944d5f8318e?q=80&w=1000&auto=format&fit=crop",
    ancientImage: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=1000&auto=format&fit=crop",
    evidence: [
      "Ishtar Eggs: Symbols of fertility dipped in the blood of infants (historically).",
      "Sunrise Service: Priests facing east to worship the sun (Ezekiel 8:16).",
      "Hot Cross Buns: Cakes baked for the 'Queen of Heaven' (Jeremiah 7:18)."
    ]
  },
  {
    id: "halloween",
    name: "Halloween",
    originalName: "Samhain",
    category: "witchcraft",
    icon: Ghost,
    synopsis: "The Celtic festival of Samhain, marking the beginning of winter. Believed to be the night when the veil between the living and dead is thinnest, allowing spirits to cross over.",
    timing: "October 31st",
    scriptures: ["Deuteronomy 18:10-12", "Ephesians 5:11"],
    modernImage: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1000&auto=format&fit=crop",
    ancientImage: "https://images.unsplash.com/photo-1604148644113-d26fc863f238?q=80&w=1000&auto=format&fit=crop",
    evidence: [
      "Jack-o'-lantern: A lantern to guide evil spirits.",
      "Trick or Treat: Druid priests demanding sacrifices from households.",
      "Costumes: Disguises to hide from roaming demons."
    ]
  },
  {
    id: "valentines",
    name: "Valentine's Day",
    originalName: "Lupercalia",
    category: "fertility",
    icon: AlertTriangle,
    synopsis: "Derived from the Roman festival Lupercalia, a violent and sexual celebration honoring Faunus (Pan) and the founders of Rome. 'Cupid' is the god of erotic desire.",
    timing: "February 14th",
    scriptures: ["1 Thessalonians 4:3-5"],
    modernImage: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=1000&auto=format&fit=crop",
    ancientImage: "https://images.unsplash.com/photo-1576016770558-e9a0a802d021?q=80&w=1000&auto=format&fit=crop",
    evidence: [
      "Lupercalia: Men whipping women with goat hides to ensure fertility.",
      "Cupid: The son of Venus, inciting illicit passion.",
      "Heart Shape: Originally represented the seed of the Silphium plant (contraceptive)."
    ]
  }
];

// --- COMPONENTS ---

// 1. Glitch Hero
const GlitchHero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Glitch Background */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay" />
         <video 
           autoPlay 
           muted 
           loop 
           playsInline
           className="w-full h-full object-cover grayscale opacity-30"
         >
           <source src="https://cdn.coverr.co/videos/coverr-static-tv-noise-5463/1080p.mp4" type="video/mp4" />
         </video>
      </div>

      <div className="z-10 text-center space-y-8 max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Badge variant="outline" className="border-red-600 text-red-500 tracking-[0.5em] uppercase mb-8 bg-red-950/10">
            Warning: Deception Detected
          </Badge>
        </motion.div>

        <div className="relative">
           <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-gray-800 mix-blend-difference">
             THE LIE
           </h1>
           <motion.h1 
              className="absolute inset-0 text-7xl md:text-9xl font-black tracking-tighter text-red-600 mix-blend-color-dodge opacity-0"
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

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-mono leading-relaxed">
          "Learn not the way of the heathen... for the customs of the people are <span className="text-red-500 font-bold">vain</span>."
          <br/>
          <span className="text-sm opacity-50 mt-4 block">- Jeremiah 10:2-3</span>
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-red-500 animate-pulse">Expose The Truth</span>
        <ChevronDown className="text-red-500 animate-bounce" />
      </motion.div>
    </div>
  );
};

// 2. The Lens of Truth (Interactive Reveal)
const LensCard = ({ holiday, index }: { holiday: PaganHoliday; index: number }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative w-full aspect-[4/5] group cursor-pointer"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={() => setIsRevealed(!isRevealed)} // Mobile tap
    >
      {/* Main Container */}
      <div className="w-full h-full rounded-xl overflow-hidden relative border border-white/10 bg-[#111]">
        
        {/* The "Mask" (Modern Image) */}
        <motion.div 
          className="absolute inset-0 z-20"
          animate={{ opacity: isRevealed ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <ImageWithFallback 
            src={holiday.modernImage} 
            alt={holiday.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
             <div className="flex items-center gap-2 mb-2">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <span className="text-green-400 text-xs uppercase tracking-widest">Innocent Tradition</span>
             </div>
             <h3 className="text-3xl font-bold text-white">{holiday.name}</h3>
          </div>
        </motion.div>

        {/* The "Truth" (Ancient Image) */}
        <div className="absolute inset-0 z-10 bg-red-950/20">
           <ImageWithFallback 
            src={holiday.ancientImage} 
            alt={holiday.originalName}
            className="w-full h-full object-cover grayscale contrast-125 opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay" />
           
           {/* Revealed Content */}
           <div className="absolute inset-0 p-6 flex flex-col justify-between bg-black/80 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <Badge variant="destructive" className="uppercase tracking-widest text-[10px]">Origin Detected</Badge>
                <holiday.icon className="text-red-600 w-6 h-6" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-red-600 font-mono text-sm uppercase mb-1">True Identity</h4>
                  <h3 className="text-2xl font-bold text-white">{holiday.originalName}</h3>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-red-600 pl-3">
                  {holiday.synopsis}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-red-400 font-mono mb-2">
                     <Search className="w-3 h-3" />
                     EVIDENCE:
                  </div>
                  <ul className="space-y-1">
                    {holiday.evidence.slice(0,2).map((e, i) => (
                      <li key={i} className="text-[10px] text-gray-300 list-disc list-inside">{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
           </div>
        </div>

      </div>
    </motion.div>
  );
};

// 3. The Redacted Files (Details)
const RedactedFiles = () => {
  return (
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px]" />
       
       <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
               THE <span className="text-red-600 relative inline-block">
                 EVIDENCE
                 <span className="absolute -inset-1 border border-red-600/30 -skew-x-12" />
               </span>
             </h2>
             <p className="text-gray-500 font-mono">Declassified spiritual intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {paganHolidays.map((holiday, idx) => (
               <LensCard key={holiday.id} holiday={holiday} index={idx} />
             ))}
          </div>
       </div>
    </section>
  );
};

// 4. Timeline of Corruption (Horizontal Scroll)
const CorruptionTimeline = () => {
  const timelineData = [
    { year: "321 AD", event: "Constantine decrees Sunday as the day of rest.", icon: FileWarning },
    { year: "325 AD", event: "Council of Nicaea establishes Easter timing.", icon: Eye },
    { year: "354 AD", event: "First record of Christmas on Dec 25th.", icon: Flame },
    { year: "609 AD", event: "All Saints Day established (precursor to Halloween).", icon: Ghost },
  ];

  return (
    <section className="py-24 bg-black border-y border-white/5">
       <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
             <div className="w-3 h-3 bg-red-600 animate-pulse rounded-full" />
             <h3 className="font-mono text-red-500 uppercase tracking-widest text-sm">Timeline of Corruption</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
             {timelineData.map((item, i) => (
               <div key={i} className="relative pl-6 border-l border-white/10 group hover:border-red-600 transition-colors">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#222] group-hover:bg-red-600 rounded-full transition-colors" />
                  <h4 className="text-4xl font-black text-white/20 group-hover:text-white transition-colors mb-4">{item.year}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors">{item.event}</p>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---

export function PaganHolidaysCinematic() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-900 selection:text-white font-sans">
       {/* Overlay Noise */}
       <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
       
       <GlitchHero />
       <RedactedFiles />
       <CorruptionTimeline />
       
       {/* Final Call to Action */}
       <section className="py-32 flex items-center justify-center bg-[#080808] relative overflow-hidden">
          <div className="absolute inset-0 bg-red-950/10 radial-gradient" />
          <div className="relative z-10 text-center max-w-2xl px-6">
             <Search className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-80" />
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Will You Continue the Tradition?</h2>
             <p className="text-gray-400 mb-10 leading-relaxed">
               "And ye shall know the truth, and the truth shall make you free."
               <br/>- John 8:32
             </p>
             <Button size="lg" variant="destructive" className="h-14 px-8 text-lg tracking-widest bg-red-700 hover:bg-red-600">
               BREAK THE CYCLE
             </Button>
          </div>
       </section>
    </div>
  );
}
