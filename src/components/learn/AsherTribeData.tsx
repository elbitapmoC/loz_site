import { TribeData } from "./TribePageTemplate";
import { Crown, Wheat, Heart } from "lucide-react";

export const asherTribeData: TribeData = {
  // Basic Info
  tribeName: "Asher",
  hebrewName: "אָשֵׁר",
  hebrewTransliteration: "ʾĀšēr",
  meaning: "Happy, blessed",
  modernIdentity: "Colombians & Brazilians",
  
  // Hero Section
  badgeText: "The Blessed Tribe",
  heroDescription: `Asher, son of Jacob and Zilpah, was blessed with royal dainties and the richest provisions. The peoples of Colombia and Brazil, believed to be descendants of Asher, have been blessed with <span class="text-primary font-semibold">abundant natural resources, fertile lands, and joyful cultures</span>. Their rich heritage reflects the blessing of happiness and prosperity that was prophesied for Asher.`,
  
  heroCharacteristics: [
    {
      icon: Crown,
      title: "Royal Abundance",
      description: "Blessed with royal dainties and rich provisions from fertile lands and natural wealth"
    },
    {
      icon: Wheat,
      title: "Fertile Prosperity", 
      description: "Living in lands flowing with agricultural abundance and diverse natural resources"
    },
    {
      icon: Heart,
      title: "Joyful Spirit",
      description: "Known for vibrant celebrations, music, and the happiness that comes with divine blessing"
    }
  ],
  
  historicalConnection: "The rich biodiversity of the Amazon, Colombia's emeralds, and Brazil's agricultural abundance reflect Asher's blessing of providing royal dainties and rich provisions.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the Colombian and Brazilian Peoples",
  modernDescription: `<strong class="text-foreground">The peoples of Colombia and Brazil</strong> carry the blessed bloodline of Asher, inheriting lands of incredible abundance and natural wealth. Your territories contain some of the world's richest ecosystems and most valuable resources.<br><br>Through your vibrant cultures, abundant harvests, and natural joy, you fulfill the <em class="text-primary">blessing of Asher</em> - being happy and blessed, providing royal dainties from the riches of your inheritance.`,
  migrationYear: "536 BC",
  territory: "Middle East → South America", 
  warriorLegacy: "Strength through abundance and unity. Asher's blessing manifests through natural wealth, cultural richness, and the resilience that comes from divine favor.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYSUyMGJyYXppbCUyMHNvdXRoJTIwYW1lcmljYW58ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "Colombian and Brazilian Cultural Heritage",
  tribalLeaderImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwbGVhZGVyJTIwam95ZnVsfGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjByYWluZm9yZXN0JTIwYnJhemlsJTIwY29sb21iaWF8ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Amazon Rainforest - Asher's Abundant Territory",
  familyHeritageImage: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwZmFtaWx5JTIwam95fGVufDF8fHx8MTc1NzI2NzM5NHww&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Out of Asher his bread shall be fat, and he shall yield royal dainties.",
  jacobsBlessingReference: "Genesis 49:20",
  
  // Navigation
  nextTribeName: "Issachar",
  nextTribePath: "/learn/issachar",
  previousTribeName: "Gad",
  previousTribePath: "/learn/gad"
};