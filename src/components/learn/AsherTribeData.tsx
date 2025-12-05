import { TribeData } from "./TribePageTemplate";
import { Smile, Wheat, Droplet, Gem } from "lucide-react";

export const asherTribeData: TribeData = {
  // Basic Info
  tribeName: "Asher",
  hebrewName: "אָשֵׁר",
  hebrewTransliteration: "’Āšēr",
  meaning: "Happy",
  modernIdentity: "South Americans (Incas)",
  
  // Hero Section
  badgeText: "The Happy One",
  heroDescription: `Asher, the 8th born son of Jacob, means "Happy" (Genesis 30:13). This name foreshadowed the immense natural wealth and cultural vibrancy of South America—from the Incas to modern-day Brazil, Colombia, and Peru—lands overflowing with "fat bread" and "royal dainties."`,
  
  heroCharacteristics: [
    {
      icon: Wheat,
      title: "Royal Dainties",
      description: "Land rich in resources (coffee, cocoa, sugar) and culture known for exquisite festivals and attire (Gen 49:20)."
    },
    {
      icon: Droplet,
      title: "Dip Foot in Oil", 
      description: "A literal geographic prophecy—Venezuela and Colombia sit atop some of the world's largest oil reserves (Deut 33:24)."
    },
    {
      icon: Gem,
      title: "Shoes of Iron & Brass",
      description: "Standing on vast mineral wealth. The Hebrew word for iron, 'Barzel', bears a striking similarity to 'Brazil'."
    }
  ],
  
  historicalConnection: `The Tribe of Asher (Incas/South Americans) migrated to the Americas around **536 B.C.**, as supported by the **Paraiba Inscription** found in Brazil. This ancient Phoenician/Hebrew stone tablet, authenticated by scholar Cyrus Gordon, reads: *"We are sons of Canaan from Sidon... we came here, twelve men and three women, on this new shore..."* Sidon was the biblical territory of Asher.

The "blessing of children" (Deut 33:24) has persisted despite the devastation of the Spanish Conquest, where Pizarro executed the Inca leader Atahualpa. Today, the population is vast, though facing significant social challenges.`,
  
  // Modern Identity Section
  modernPeopleTitle: "The People of the Andes and the Amazon",
  modernDescription: `
    <p class="mb-4">You are the descendants of Asher. Your land is a testament to the "fat bread" promised in Genesis—producing the world's coffee, sugar, and cattle. The "royal dainties" are seen in your vibrant culture and festivals, which are renowned globally for their beauty and opulence.</p>
    
    <p class="mb-4">The prophecy "thy shoes shall be iron and brass" (Deut 33:25) speaks to the immense mineral wealth beneath your feet. It is no coincidence that the Hebrew word for iron is <strong>Barzel</strong>, echoing the name <strong>Brazil</strong>.</p>
    
    <p class="mb-4">Yet, the "blessing of children" is accompanied by struggle. The tragedy of <em>meninos da rua</em> (street children) in Brazil highlights a need for restoration. The history of the Inca civilization—distinct and isolated ("separated from his brethren")—shows a people of immense capability and tragedy.</p>
    
    <p class="italic text-muted-foreground mt-4 border-l-2 border-primary pl-4">
      "Out of Asher his bread shall be fat, and he shall yield royal dainties." — Genesis 49:20
    </p>
  `,
  migrationYear: "536 B.C.",
  territory: "South America (Colombia, Brazil, Peru, Venezuela, etc.)", 
  warriorLegacy: "The Inca Empire was the largest in pre-Columbian America, known for its administrative organization, architecture, and resilience against conquest.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1734793807531-36c3ff274892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmNhJTIwUnVpbnMlMjBNYWNodSUyMFBpY2NodXxlbnwxfHx8fDE3NjQ5NTE2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  mainHeritageImageAlt: "Machu Picchu - The Lost City of the Incas",
  tribalLeaderImage: "https://images.unsplash.com/photo-1735837260637-c812cf4bab56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBDYXJuaXZhbCUyMENvc3R1bWV8ZW58MXx8fHwxNzY0OTUxNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  leaderTitle: "Cultural Splendor (Royal Dainties)",
  territoryImage: "https://images.unsplash.com/photo-1724521446460-36a80dc05803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWF6b24lMjBSYWluZm9yZXN0JTIwUml2ZXJ8ZW58MXx8fHwxNzY0OTUxNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  territoryImageAlt: "The Amazon River and Rainforest",
  familyHeritageImage: "https://images.unsplash.com/photo-1759375279842-883759f7a647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFtZXJpY2FuJTIwUGVvcGxlJTIwQ3VsdHVyZXxlbnwxfHx8fDE3NjQ5NTE2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  
  // Biblical Quote
  jacobsBlessing: "Out of Asher his bread shall be fat, and he shall yield royal dainties.",
  jacobsBlessingReference: "Genesis 49:20",
  
  quoteTitle: "The Paraiba Witness",
  quoteDescription: "In 1872, a stone tablet was found in Paraiba, Brazil, describing a voyage from Sidon (Asher's territory) to a 'new shore' in the 19th year of King Hiram. Authenticated by Dr. Cyrus Gordon, it stands as archaeological proof of the Israelite migration to the Americas.",

  bibliography: [
    "2 Esdras 13:40-45",
    "History of the American Indians by James Adair (p. 223, 226)",
    "Feats and Wisdom of the Ancients (Time Life Books, p. 118)",
    "Genesis 30:13, 49:20",
    "Deuteronomy 33:24-25"
  ],
  
  // Navigation
  nextTribeName: "Issachar",
  nextTribePath: "/learn/issachar",
  previousTribeName: "Gad",
  previousTribePath: "/learn/gad"
};
