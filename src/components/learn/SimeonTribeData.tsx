import { TribeData } from "./TribePageTemplate";
import { Sword, Shield, Heart } from "lucide-react";

export const simeonTribeData: TribeData = {
  // Basic Info
  tribeName: "Simeon",
  hebrewName: "שִׁמְעוֹן",
  hebrewTransliteration: "Šīm'ōn",
  meaning: "Affliction heard",
  modernIdentity: "Dominicans",
  
  // Hero Section
  badgeText: "The Mighty Tribe",
  heroDescription: `Simeon, the second son of Jacob and Leah, was among the Ten Lost Tribes that migrated to Arsareth (the Americas) according to 2 Esdras 13:40-44. The <span class="text-primary font-semibold">Dominican people</span> are his descendants, conquered by Spain in 1492 and dwelling on the eastern portion of Hispaniola.`,
  
  heroCharacteristics: [
    {
      icon: Sword,
      title: "Instruments of Cruelty",
      description: "Known for spiritual forces of Satan through witchcraft called 'Brujería'"
    },
    {
      icon: Shield,
      title: "Brethren with Levi", 
      description: "Prophesied to dwell together with Levi (Haitians) on Hispaniola yet remain divided"
    },
    {
      icon: Heart,
      title: "Eastern Hispaniola",
      description: "Spanish-speaking descendants dwelling on the eastern portion of the island"
    }
  ],
  
  historicalConnection: "The 1522 Christmas Day slave rebellion where Indian slaves (Simeon) united with African slaves (Levi) against Spanish masters fulfilled the ancient prophecy of these brother tribes dwelling together yet remaining divided on Hispaniola.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the Dominican People",
  modernDescription: `<strong class="text-foreground">Dominicans</strong> are the present-day descendants of Simeon, the second son of Jacob and Leah. Genesis 49:5-6 prophesied that "Simeon and Levi are brethren; instruments of cruelty are in their habitations" - fulfilled as Dominicans (eastern Hispaniola) and Haitians (western Hispaniola) dwell together yet remain divided.<br><br>Your involvement in <em class="text-primary">Brujería (witchcraft)</em> fulfills the prophecy of being "instruments of cruelty," while your separation from Haiti demonstrates Jacob's curse: "I will divide them in Jacob, and scatter them in Israel."`,
  migrationYear: "Migration to Americas",
  territory: "Ten Lost Tribes → Arsareth → Hispaniola", 
  warriorLegacy: "Conquered by Spain in 1492. The 1522 Christmas Day rebellion united Indian (Simeon) and African (Levi) slaves against Spanish masters, paralleling the biblical account of Simeon and Levi slaying the Shechemites in Genesis 34.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1742933031988-5708fc92abcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pb2xhJTIwY2FyaWJiZWFuJTIwZG9taW5pY2FuJTIwaGFpdGklMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTc0Njg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "Dominican Cultural Heritage - Descendants of Simeon",
  tribalLeaderImage: "https://images.unsplash.com/photo-1638552713889-2d678079d441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBjb2xvbmlhbCUyMHNwYW5pc2glMjBjb25xdWVzdCUyMGlzbGFuZHxlbnwxfHx8fDE3NTc0Njg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1717700300409-9cfe51e29671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pb2xhJTIwaXNsYW5kJTIwY2FyaWJiZWFuJTIwbWFwfGVufDF8fHx8MTc1NzQ2ODkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Dominican Republic - Territory of Simeon",
  familyHeritageImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmYW1pbHklMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTcyNjczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Simeon and Levi are brethren; instruments of cruelty are in their habitations. O my soul, come not thou into their secret; unto their assembly, mine honour, be not thou united: for in their anger they slew a man, and in their selfwill they digged down a wall. Cursed be their anger, for it was fierce; and their wrath, for it was cruel: I will divide them in Jacob, and scatter them in Israel.",
  jacobsBlessingReference: "Genesis 49:5-7",
  
  // Navigation
  nextTribeName: "Levi",
  nextTribePath: "/learn/levi",
  previousTribeName: "Reuben",
  previousTribePath: "/learn/reuben"
};