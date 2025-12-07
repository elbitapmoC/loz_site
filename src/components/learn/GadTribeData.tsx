import { TribeData } from "./TribePageTemplate";
import { Users, Crown, Shield } from "lucide-react";

export const gadTribeData: TribeData = {
  // Basic Info
  tribeName: "Gad",
  hebrewName: "גָּד",
  hebrewTransliteration: "Gāḏ",
  meaning: "Troop",
  modernIdentity: "North American Indians",
  
  // Hero Section
  badgeText: "The Troop",
  heroDescription: `Gad, the 7th born son of Jacob, means "Troop" (Genesis 30:11). This name foretold the destiny of the North American Indians, who would face the overwhelming "troop" of the US Cavalry but are prophesied to "overcome at the last" (Genesis 49:19).`,
  
  heroCharacteristics: [
    {
      icon: Users,
      title: "A Troop Shall Overcome",
      description: "Fulfilling Genesis 49:19, facing the overwhelming forces of colonization (US Cavalry) but destined to overcome."
    },
    {
      icon: Shield,
      title: "Dwelleth as a Lion", 
      description: "Possessing the strength and fearsome nature of a lion, with warriors described as having 'faces like lions' (1 Chron 12:8)."
    },
    {
      icon: Crown,
      title: "Crown of the Head",
      description: "Known for the distinctive war bonnets (crown of feathers) and the 'blood brother' pact (tearing the arm) - Deut 33:20."
    }
  ],
  
  historicalConnection: `The Tribe of Gad (North American Indians) migrated to the Americas around **536 B.C.** during the Persian captivity. 

History records their conflict with the "troop" mentioned in Genesis 49:19—the United States Cavalry—spanning from the 1600s to the Battle of Wounded Knee in 1890. Despite historical devastation, the prophecy in Deuteronomy 33:20 speaks of "enlarging Gad," which is seen in the survival of over **300 Indigenous nations** today.

They acted as lawgivers (Deut 33:21) and executed justice alongside their brethren (Ephraim and Manasseh) during the migration.`,
  
  // Modern Identity Section
  modernPeopleTitle: "The Indigenous Peoples of North America",
  modernDescription: `
    <p class="mb-4">You are the descendants of Gad. Your history of survival against a "troop" (Gen 49:19) serves as a testament to your identity. The "troop" that overcame you was the colonial powers and the US Cavalry.</p>
    
    <p class="mb-4">Your warriors were described in the Bible as having "faces like lions" (war paint) and being "swift as roes upon the mountains" (1 Chron 12:8), a perfect description of the Indigenous warriors' legendary speed and elusive nature.</p>
    
    <p class="mb-4">Despite the attempts to destroy your culture ("destroying the arm with the crown of the head" - attacking your strength and leadership), the prophecy promises that Gad "shall overcome at the last."</p>
    
    <p class="italic text-muted-foreground mt-4 border-l-2 border-primary pl-4">
      "And of Gad, he said, Blessed be he that enlargeth Gad: he dwelleth as a lion, and teareth the arm with the crown of the head." — Deuteronomy 33:20
    </p>
  `,
  migrationYear: "536 B.C.",
  territory: "North America", 
  warriorLegacy: "Fearsome as lions, swift as roes. Renowned for their bravery, war paint, and the ability to fight against overwhelming odds.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1764352103890-0833f7f86ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXRpdmUlMjBBbWVyaWNhbiUyMFdhcnJpb3IlMjBIb3JzZXxlbnwxfHx8fDE3NjQ5NTA4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  mainHeritageImageAlt: "Warrior of Gad - North American Indian",
  tribalLeaderImage: "https://images.unsplash.com/photo-1584348075595-8afb0a0a0c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXRpdmUlMjBBbWVyaWNhbiUyMEN1bHR1cmUlMjBDaGllZnxlbnwxfHx8fDE3NjQ5NTA4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  leaderTitle: "Chief in War Bonnet",
  territoryImage: "https://images.unsplash.com/photo-1752035682767-c4306b9c2570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOb3J0aCUyMEFtZXJpY2ElMjBMYW5kc2NhcGUlMjBQbGFpbnN8ZW58MXx8fHwxNzY0OTUwODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  territoryImageAlt: "The Vast Plains of North America",
  familyHeritageImage: "https://images.unsplash.com/photo-1676034469176-9310bf2d6a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXRpdmUlMjBBbWVyaWNhbiUyMEZhbWlseSUyMENvbW11bml0eXxlbnwxfHx8fDE3NjQ5NTA4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  
  // Biblical Quote
  jacobsBlessing: "Gad, a troop shall overcome him: but he shall overcome at the last.",
  jacobsBlessingReference: "Genesis 49:19",
  
  quoteTitle: "The Handsome Lake Revelation",
  quoteDescription: "In 'Stolen Continents' (pg. 235), the Seneca prophet Handsome Lake describes a vision of a figure with hands and feet torn by iron nails. The figure told him: 'They slew me... So I have gone home to shut the doors of heaven that they may not see me again until the earth passes away... Now tell your people that they will become lost when they follow the ways of the white man.'",

  bibliography: [
    "“Gad: Israel's Lion in the New World” (source explicitly identifies the tribe as North American Indians/prophetic text fulfillment)",
    "“History of the American Indians” by James Adair (cited concerning swiftness, customs, dietary laws, and mourning rites matching Hebraic traditions)",
    "“American Holocaust” by David E. Stannard (context on massacres where victims were killed by fire and not spared)",
    "“Lost Tribes and Promised Lands” by Ronald Sanders (Seminoles identifying themselves as the Tribe of Reuben, suggesting proximity to Joseph/Gad lineage in America)",
    "“American Discovery” by Jack Forbes (Native American captives traded for goods and sold overseas to Lisbon and Spain)",
    "“Africans and Native Americans” by Jack Forbes (Indian prisoners sold to the West Indies, Mediterranean Coast, and North Africa (Tangers))",
    "“Stolen Continents” by Ronald Wright",
    "“The enslavement of the American Indian in colonial times” (cruelty and massacres described by William Bradford)",
    "“wisdom sits in places: landscape and language among the Western Apachi” by Keith H. Basso (Navajo recognizing themselves as Gad, meaning 'good fortune')"
  ],
  
  // Navigation
  nextTribeName: "Asher",
  nextTribePath: "/learn/asher",
  previousTribeName: "Manasseh (Dan)",
  previousTribePath: "/learn/dan"
};
