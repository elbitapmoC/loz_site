import { TribeData } from "./TribePageTemplate";
import { Ship, Anchor, Heart } from "lucide-react";

export const zebulunTribeData: TribeData = {
  // Basic Info
  tribeName: "Zebulun",
  hebrewName: "זְבוּלֻן",
  hebrewTransliteration: "Zəḇūlun",
  meaning: "Dwelling, habitation",
  modernIdentity: "Guatemalans & Panamanians",
  
  // Hero Section
  badgeText: "The Seafaring Tribe",
  heroDescription: `Zebulun, son of Jacob and Leah, was blessed to dwell at the haven of the sea and be a haven for ships. The peoples of Guatemala and Panama, believed to be descendants of Zebulun, have become masters of <span class="text-primary font-semibold">trade, maritime commerce, and international connection</span>. Their strategic positions and commercial expertise reflect the seafaring blessing prophesied for Zebulun.`,
  
  heroCharacteristics: [
    {
      icon: Ship,
      title: "Maritime Commerce",
      description: "Natural expertise in seafaring, trade, and maritime commerce connecting nations"
    },
    {
      icon: Anchor,
      title: "Strategic Haven", 
      description: "Positioned as safe harbors and gateways for international trade and travel"
    },
    {
      icon: Heart,
      title: "Bridge Builders",
      description: "Serving as connectors between peoples, facilitating commerce and cultural exchange"
    }
  ],
  
  historicalConnection: "The Panama Canal epitomizes Zebulun's calling as a haven for ships, while Guatemala's position as a trade hub reflects the tribe's role in connecting different peoples and regions.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the Guatemalan and Panamanian Peoples",
  modernDescription: `<strong class="text-foreground">The peoples of Guatemala and Panama</strong> carry the maritime bloodline of Zebulun, blessed to be havens for ships and centers of commerce. Your lands serve as crucial gateways connecting North and South America.<br><br>Through your strategic positions, commercial expertise, and role as connectors between nations, you fulfill the <em class="text-primary">calling of Zebulun</em> - dwelling at the haven of the sea and serving as safe harbors for the commerce of nations.`,
  migrationYear: "536 BC",
  territory: "Middle East → Central America", 
  warriorLegacy: "Strength through strategic positioning and commercial excellence. Zebulun's legacy lives on through your role as gateways for international trade and connection.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF0ZW1hbGElMjBwYW5hbWElMjBjZW50cmFsJTIwYW1lcmljYXxlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "Central American Maritime Heritage - Guatemala and Panama",
  tribalLeaderImage: "https://images.unsplash.com/photo-1566899286755-b6bb0ead4bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYW1lcmljYW4lMjBsZWFkZXJ8ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1571771710686-3985540e8c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5hbWElMjBjYW5hbCUyMG1hcml0aW1lJTIwdHJhZGV8ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Panama Canal and Central American Coastlines",
  familyHeritageImage: "https://images.unsplash.com/photo-1543250803-582bd91de33b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYW1lcmljYW4lMjBmYW1pbHl8ZW58MXx8fHwxNzU3MjY3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Zebulun shall dwell at the haven of the sea; and he shall be for an haven of ships; and his border shall be unto Zidon.",
  jacobsBlessingReference: "Genesis 49:13",
  
  // Navigation
  nextTribeName: "Joseph",
  nextTribePath: "/learn/joseph",
  previousTribeName: "Issachar",
  previousTribePath: "/learn/issachar"
};