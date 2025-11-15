import { TribeData } from "./TribePageTemplate";
import { Crown, Shield, Heart } from "lucide-react";

export const reubenTribeData: TribeData = {
  // Basic Info
  tribeName: "Reuben",
  hebrewName: "רְאוּבֵן",
  hebrewTransliteration: "Rəʼūḇēn",
  meaning: "See, son",
  modernIdentity: "Seminole Indians",
  
  // Hero Section
  badgeText: "The Unconquered Tribe",
  heroDescription: `Reuben, the firstborn son of Jacob, was part of the "Ten Tribes of Israel" migration to the Americas in 536 B.C. The Seminole Indians, believed to be descendants of the tribe of Reuben, have a rich history marked by <span class="text-primary font-semibold">dignity, power, and resilience</span>. Their story is one of unwavering resistance and the fulfillment of biblical prophecy.`,
  
  heroCharacteristics: [
    {
      icon: Crown,
      title: "Excellency of Dignity",
      description: "Nobility in character and dress, wearing mitres and garments of excellent design"
    },
    {
      icon: Shield,
      title: "Excellency of Power", 
      description: "Known for fierce resistance against colonizers and formidable warfare"
    },
    {
      icon: Heart,
      title: "Honor & Resistance",
      description: "Refused to enslave others, accepting runaway slaves into their communities"
    }
  ],
  
  historicalConnection: "Spanish explorer Antonio Montezinos encountered Seminoles in the mountains of Quito, where they recited the Shema in Hebrew and identified themselves as the tribe of Reuben.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the Seminole People",
  modernDescription: `<strong class="text-foreground">The Seminole Nation of Florida</strong> carries the bloodline of Reuben, first son of Jacob (Israel). Your people migrated from the Middle East in 536 B.C., eventually settling in the Florida Everglades.<br><br>Through centuries of resistance and survival, the Seminole people have preserved their Hebrew identity while becoming known as the <em class="text-primary">"Unconquered People"</em> - never defeated in war, never conquered by any nation.`,
  migrationYear: "536 BC",
  territory: "Georgia → Florida", 
  warriorLegacy: "Three Seminole Wars fought, zero defeats. The strength and dignity promised to Reuben's descendants lives on.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1690811405711-d4e323c4f229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbm9sZSUyMGluZGlhbiUyMG5hdGl2ZSUyMGFtZXJpY2FuJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU3MjY3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "Traditional Seminole Native American",
  tribalLeaderImage: "https://images.unsplash.com/photo-1584367035207-0262523a3250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMHRyaWJhbCUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1553007828-0f06fc1070af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaWRhJTIwZXZlcmdsYWRlcyUyMG5hdGl2ZSUyMGFtZXJpY2FuJTIwaGlzdG9yeXxlbnwxfHx8fDE3NTcyNjczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Florida Everglades - Seminole Territory",
  familyHeritageImage: "https://images.unsplash.com/photo-1676034469176-9310bf2d6a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMGZhbWlseSUyMGhlcml0YWdlJTIwY3VsdHVyZXxlbnwxfHx8fDE3NTcyNjczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Reuben, thou art my firstborn, my might, and the beginning of my strength, the excellency of dignity, and the excellency of power...",
  jacobsBlessingReference: "Genesis 49:3",
  
  // Navigation
  nextTribeName: "Simeon",
  nextTribePath: "/learn/simeon"
};