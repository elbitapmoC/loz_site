import { TribeData } from "./TribePageTemplate";
import { Clock, Hammer, Mountain } from "lucide-react";

export const issacharTribeData: TribeData = {
  // Basic Info
  tribeName: "Issachar",
  hebrewName: "יִשָּׂשכָר",
  hebrewTransliteration: "Yiśśāśkār",
  meaning: "He is Hired",
  modernIdentity: "Mexicans",
  
  // Hero Section
  badgeText: "The Hired Laborer",
  heroDescription: `Issachar, the 9th born son of Jacob and Leah, was prophesied to be a "strong ass couching down between two burdens." This ancient imagery reflects the hardworking nature of the Mexican people, who often bear the heavy burdens of long hours and labor (symbolized by the burro). From ancient times to the modern day, Issachar understands the value of work and rest.`,
  
  heroCharacteristics: [
    {
      icon: Hammer,
      title: "Bearer of Burdens",
      description: "Fulfilling Genesis 49:14, bearing the heavy loads of labor and service (long hours, hard work)."
    },
    {
      icon: Clock,
      title: "Understanding Times", 
      description: "As noted in 1 Chronicles 12:32, possessing ancient wisdom of the heavens and seasons (Aztec Calendars)."
    },
    {
      icon: Mountain,
      title: "Call to the Mountain",
      description: "Fulfilling Deut 33:19, blowing the Ram's horn to call people to worship at the pyramids (Teotihuacan)."
    }
  ],
  
  historicalConnection: `The tribe of Issachar migrated to the Americas around **536 B.C.** during the Persian captivity. Known in the Middle Ages as the **Aztecs**, they built the great civilizations of Mexico.

Genesis 49:15 prophesied they would "bow the shoulder to bear, and become a servant unto tribute." This was fulfilled during the Spanish Conquest when Conquistadors like Hernan Cortes and Alvarado enslaved hundreds of thousands of Aztecs to mine gold and silver.

The tribe also has a dark history of idolatry (Hosea 8:13-14), turning from the True God to offer human sacrifices to idols like Quetzalcoatl and celebrating the "Day of the Dead" (Zampazuchil), customs that persist in various forms today.`,
  
  // Modern Identity Section
  modernPeopleTitle: "The People of Mexico",
  modernDescription: `
    <p class="mb-4">The prophecy of the "strong ass" (Gen 49:14) is seen in the industrious spirit of the Mexican people. The "burdens" represent the long hours and hard labor often performed for low wages, referencing modern economic struggles.</p>
    
    <p class="mb-4">Yet, Genesis 49:15 also says "he saw that rest was good" (the famous <em>Siesta</em>) and "the land that it was pleasant" (Mexico's beauty as a vacation destination). You are a people of strength, endurance, and deep understanding of the times.</p>
    
    <p class="italic text-muted-foreground mt-4 border-l-2 border-primary pl-4">
      "And the children of Issachar, which were men that had understanding of the times, to know what Israel ought to do..." — 1 Chronicles 12:32
    </p>
  `,
  migrationYear: "536 B.C.",
  territory: "Mexico", 
  warriorLegacy: "Men of Understanding and Endurance. Known for the precision of the Aztec calendars and the strength to build colossal pyramids like those at Teotihuacan.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1706536609840-ffc6473e05ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZW90aWh1YWNhbiUyMFB5cmFtaWRzJTIwTWV4aWNvJTIwQXp0ZWN8ZW58MXx8fHwxNzY0OTQ5NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  mainHeritageImageAlt: "Pyramids of Teotihuacan - Heritage of Issachar",
  tribalLeaderImage: "https://images.unsplash.com/photo-1651947931959-d9d01a2b3d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBenRlYyUyMEluZGlnZW5vdXMlMjBEYW5jZXIlMjBNZXhpY298ZW58MXx8fHwxNzY0OTQ5NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  leaderTitle: "Aztec Guardian",
  territoryImage: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY28lMjBsYW5kc2NhcGUlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "The Pleasant Land of Mexico",
  familyHeritageImage: "https://images.unsplash.com/photo-1762289711736-f265c93ce1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXhpY2FuJTIwRmFtaWx5JTIwQ29tbXVuaXR5JTIwVHJhZGl0aW9uYWx8ZW58MXx8fHwxNzY0OTQ5NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  
  // Biblical Quote
  jacobsBlessing: "Issachar is a strong ass couching down between two burdens: And he saw that rest was good, and the land that it was pleasant; and bowed his shoulder to bear, and became a servant unto tribute.",
  jacobsBlessingReference: "Genesis 49:14-15",
  
  quoteTitle: "Historical Witness",
  quoteDescription: "Viscount Kingsborough (19th Century) exhausted his fortune proving the Israelites were ancestors of the Mexican Indians. Friar Diego Duran also documented the 'Judaic character' of Aztec religion, including purification baths and unleavened bread.",

  bibliography: [
    "“Issachar: Aztecs and the Prophetic Burden” (source explicitly identifies the tribe)",
    "“Lost Tribes and Promised Lands” by Ronald Sanders pages 187, 188",
    "“History of the American Indians” by James Adair page 207",
    "“The History of the Indies of New Spain (Mexico)” by Friar Diego Duran (cited via Ronald Sanders)",
    "“Mysteries of the Ancient Americas” Readers Digest page 37",
    "“Origins of the American Indians” by Lee Huton page 88",
    "“The Three Americas: The Racial Past and Dominant Racial Factors of Their Future” by Joseph Whitney page 206",
    "“The Mystery of Mexican Pyramids” by Peter Tompkins page 79",
    "“Handbook of Life of ancient Maya World” by L.V. Foster pages 162, 66",
    "“Pre-Colombian Landscapes of Creation and or Origin” by John Edward Staler page 123",
    "“Maya history and religion” by John Eric Sydney Thompson page 305",
    "“Introduction to the Study of the Maya Hieroglyph” by Sylvanus Griswell Moley page 36",
    "“Ancient Great Ages of Man Ancient America” Page 43 (referenced for master-builders/pyramids)"
  ],
  
  // Navigation
  nextTribeName: "Dan",
  nextTribePath: "/learn/dan",
  previousTribeName: "Zebulun",
  previousTribePath: "/learn/zebulun"
};
