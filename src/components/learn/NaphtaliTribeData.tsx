import { TribeData } from "./TribePageTemplate";
import { Wind, Flame, Map, MessageCircle } from "lucide-react";
import naphtaliFamilyImage from "figma:asset/tribeFamilyData.png";
import naphtaliFamilyImageWebp from "figma:asset/tribeFamilyData.webp";

export const naphtaliTribeData: TribeData = {
  // Basic Info
  tribeName: "Naphtali",
  hebrewName: "נַפְתָּלִי",
  hebrewTransliteration: "Nap̄tālī",
  meaning: "My Wrestling",
  modernIdentity: "Argentineans and Chileans",
  
  // Hero Section
  badgeText: "Hind Let Loose",
  heroDescription: `Naphtali, the 6th born son of Jacob, means "My Wrestling" (Genesis 30:8). The tribe is likened to a "hind let loose" (Genesis 49:21), symbolizing the spirited and free nature of the people of Argentina and Chile, who inhabit the vast plains and mountainous regions of the "West and South".`,
  
  heroCharacteristics: [
    {
      icon: Wind,
      title: "Hind Let Loose",
      description: "Likened to a deer released from captivity. This represents the freedom and endurance of the people, similar to the Gauchos roaming the vast Pampas."
    },
    {
      icon: Flame,
      title: "Fires of the Andes", 
      description: "Inhabiting lands marked by 'fires'—the volcanic peaks of the Andes mountains which run through Chile and Argentina."
    },
    {
      icon: Map,
      title: "West and South",
      description: "Possessing the 'west and the south' (Deut 33:23)—Chile on the western coast and Argentina in the southern cone of South America."
    }
  ],
  
  historicalConnection: `The Tribe of Naphtali (Argentineans and Chileans) migrated after the decree of Cyrus in **530 B.C.** (Ezra 1). While some returned to Jerusalem, a large remnant "took counsel among themselves" to go to a "further country" (2 Esdras 13:41).

They settled in the southern regions of the Americas, establishing a culture known for its resilience and connection to the land. The description of Naphtali as a "hind let loose" perfectly mirrors the history of the Gauchos and the indigenous peoples of the Patagonian plains—skilled horsemen and warriors who valued their freedom above all.`,
  
  // Modern Identity Section
  modernPeopleTitle: "The People of the Southern Cone",
  modernDescription: `
    <p class="mb-4">You are the descendants of Naphtali. Your territory spans the majestic Andes mountains to the vast plains of the Pampas.</p>
    
    <p class="mb-4"><strong>"Naphtali is a hind let loose: he giveth goodly words."</strong> (Gen 49:21)<br/>
    This prophecy speaks to a people of swiftness and grace. The "hind" (deer) is a symbol of the wild beauty found in your lands. "Goodly words" reflects the rich cultural and literary heritage of the region.</p>
    
    <p class="mb-4"><strong>"Possess thou the west and the south."</strong> (Deut 33:23)<br/>
    Geographically, no other people fit this description better. Chile occupies the western strip of the continent, while Argentina dominates the south. You hold the keys to the southern gates of the Americas.</p>
    
    <p class="mb-4"><strong>The Warrior Spirit</strong><br/>
    Like the "hind let loose," your history is one of resisting containment. From the Mapuche resistance to the independence movements, the spirit of Naphtali is one of unyielding strength and "wrestling" against oppression.</p>
  `,
  migrationYear: "530 B.C.",
  territory: "Argentina and Chile", 
  warriorLegacy: "The Gauchos and indigenous Mapuche are renowned for their fighting spirit, horsemanship, and ability to thrive in rugged terrains.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1605447207190-da4289c65d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmRlcyUyME1vdW50YWlucyUyMENoaWxlJTIwQXJnZW50aW5hfGVufDF8fHx8MTc2NDk1MzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  mainHeritageImageAlt: "The Andes Mountains",
  tribalLeaderImage: "https://images.unsplash.com/photo-1651305333878-6a857d075a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcmdlbnRpbmlhbiUyMEdhdWNobyUyMEhvcnNlfGVufDF8fHx8MTc2NDk1MjE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  leaderTitle: "Gaucho of the Pampas",
  territoryImage: "https://images.unsplash.com/photo-1712152777732-330545724613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXRhZ29uaWElMjBMYW5kc2NhcGV8ZW58MXx8fHwxNzY0OTUzMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  territoryImageAlt: "Patagonian Landscape",
  familyHeritageImage: naphtaliFamilyImage,
  familyHeritageImageWebp: naphtaliFamilyImageWebp,
  
  // Biblical Quote
  jacobsBlessing: "Naphtali is a hind let loose: he giveth goodly words.",
  jacobsBlessingReference: "Genesis 49:21",
  
  quoteTitle: "Possessor of the South",
  quoteDescription: "Deuteronomy 33:23 commands Naphtali to 'possess the west and the south.' This geographic identifier points directly to the nations of Chile (the West) and Argentina (the South), the lands where the exiles settled and multiplied.",

  bibliography: [
    "Genesis 30:8, 49:21",
    "Deuteronomy 33:23",
    "Ezra 1:2-3",
    "2 Esdras 13:41"
  ],
  
  // Navigation
  nextTribeName: "Ephraim",
  nextTribePath: "/learn/ephraim",
  previousTribeName: "Asher",
  previousTribePath: "/learn/asher"
};
