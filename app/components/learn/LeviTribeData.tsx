import { TribeData } from "./TribePageTemplate";
import { Crown, BookOpen, Heart } from "lucide-react";

export const leviTribeData: TribeData = {
  // Basic Info
  tribeName: "Levi",
  hebrewName: "לֵוִי",
  hebrewTransliteration: "Lēwî",
  meaning: "Joined, attached",
  modernIdentity: "Haitians",
  
  // Hero Section
  badgeText: "The Priestly Tribe",
  heroDescription: `Levi, the third son of Jacob and Leah, was chosen by the Most High to serve as the priestly tribe of Israel. The Haitian people, believed to be descendants of Levi, have maintained a profound spiritual connection through their history, blending Hebrew traditions with their deep faith practices. Despite facing tremendous hardships, they have preserved their role as <span class="text-primary font-semibold">spiritual leaders and teachers</span> among the scattered tribes.`,
  
  heroCharacteristics: [
    {
      icon: Crown,
      title: "Priestly Calling",
      description: "Chosen by the Most High to serve as priests and spiritual leaders among the tribes"
    },
    {
      icon: BookOpen,
      title: "Spiritual Wisdom", 
      description: "Deep connection to spiritual practices, maintaining faith traditions through adversity"
    },
    {
      icon: Heart,
      title: "Revolutionary Faith",
      description: "Led the first successful slave revolution with unwavering faith in divine justice"
    }
  ],
  
  historicalConnection: "Toussaint Louverture, known as the 'Black Napoleon,' led the Haitian Revolution with the spiritual fervor characteristic of Levi's priestly calling, invoking divine justice against oppression.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the Haitian People",
  modernDescription: `<strong class="text-foreground">The Republic of Haiti</strong> carries the sacred bloodline of Levi, the priestly tribe chosen to serve the Most High. Your ancestors maintained their spiritual calling even through the horrors of slavery, emerging as the first free black nation in the Western Hemisphere.<br><br>Through your rich spiritual traditions, revolutionary spirit, and unwavering faith, you continue to fulfill the <em class="text-primary">priestly role of Levi</em> - teaching, leading, and maintaining the spiritual flame among the scattered tribes.`,
  migrationYear: "536 BC",
  territory: "Middle East → Haiti", 
  warriorLegacy: "Led the greatest slave revolution in history through faith and spiritual calling. Levi's priestly strength manifested through divine justice and liberation.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1606146485651-f12ff4c3b0dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWl0aWFuJTIwY3VsdHVyZSUyMHNwaXJpdHVhbCUyMHRyYWRpdGlvbnN8ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "Haitian Spiritual and Cultural Traditions",
  tribalLeaderImage: "https://images.unsplash.com/photo-1619962977567-37a9885cd1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJpZXN0JTIwc3Bpcml0dWFsJTIwbGVhZGVyfGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1609848421296-e7d31051d0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWl0aSUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Haiti - The Mountainous Refuge",
  familyHeritageImage: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWl0aWFuJTIwZmFtaWx5JTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzU3MjY3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Simeon and Levi are brethren; instruments of cruelty are in their habitations... I will divide them in Jacob, and scatter them in Israel.",
  jacobsBlessingReference: "Genesis 49:5-7",
  
  // Navigation
  nextTribeName: "Judah",
  nextTribePath: "/learn/judah",
  previousTribeName: "Simeon",
  previousTribePath: "/learn/simeon"
};