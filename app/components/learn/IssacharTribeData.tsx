import { TribeData } from "./TribePageTemplate";
import { Clock, Hammer, Heart } from "lucide-react";

export const issacharTribeData: TribeData = {
  // Basic Info
  tribeName: "Issachar",
  hebrewName: "יִשָּׂשכָר",
  hebrewTransliteration: "Yiśśāśkār",
  meaning: "Reward, wages",
  modernIdentity: "Mexicans",
  
  // Hero Section
  badgeText: "The Laboring Tribe",
  heroDescription: `Issachar, son of Jacob and Leah, was described as a strong donkey lying down between two burdens, willing to bear tribute and become a servant unto tribute. The Mexican people, believed to be descendants of Issachar, have demonstrated remarkable <span class="text-primary font-semibold">work ethic, endurance, and dedication to labor</span>. Their willingness to bear heavy burdens and work diligently reflects the industrious character prophesied for Issachar.`,
  
  heroCharacteristics: [
    {
      icon: Hammer,
      title: "Strong Labor",
      description: "Exceptional work ethic and willingness to bear heavy burdens for family and community"
    },
    {
      icon: Clock,
      title: "Discerning Times", 
      description: "Understanding of seasons, times, and what needs to be done for survival and prosperity"
    },
    {
      icon: Heart,
      title: "Sacrificial Service",
      description: "Willing to serve and sacrifice for the betterment of family and future generations"
    }
  ],
  
  historicalConnection: "Mexican laborers have historically demonstrated Issachar's character through their incredible work ethic, agricultural expertise, and willingness to bear heavy burdens to support their families.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the Mexican People",
  modernDescription: `<strong class="text-foreground">The Mexican people</strong> carry the industrious bloodline of Issachar, known for strength, endurance, and willingness to work. Your ancestors have consistently demonstrated the ability to bear heavy burdens while maintaining dignity and family values.<br><br>Through your exceptional work ethic, agricultural wisdom, and sacrificial dedication to family, you fulfill the <em class="text-primary">calling of Issachar</em> - being strong as a donkey, understanding the times, and willingly bearing the burdens necessary for survival and prosperity.`,
  migrationYear: "536 BC",
  territory: "Middle East → Mexico", 
  warriorLegacy: "Strength through labor and endurance. Issachar's legacy lives on through generations of hard-working people who build and sustain communities through dedicated service.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwY3VsdHVyZSUyMGhlcml0YWdlfGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "Mexican Cultural Heritage and Labor Traditions",
  tribalLeaderImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwbGVhZGVyJTIwd29ya2VyfGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY28lMjBsYW5kc2NhcGUlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Mexican Agricultural Landscape",
  familyHeritageImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZmFtaWx5JTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzU3MjY3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Issachar is a strong ass couching down between two burdens: And he saw that rest was good, and the land that it was pleasant; and bowed his shoulder to bear, and became a servant unto tribute.",
  jacobsBlessingReference: "Genesis 49:14-15",
  
  // Navigation
  nextTribeName: "Zebulun",
  nextTribePath: "/learn/zebulun",
  previousTribeName: "Asher",
  previousTribePath: "/learn/asher"
};