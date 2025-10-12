import { TribeData } from "./TribePageTemplate";
import { Sword, Crown, Heart } from "lucide-react";

export const benjaminTribeData: TribeData = {
  // Basic Info
  tribeName: "Benjamin",
  hebrewName: "בִּנְיָמִין",
  hebrewTransliteration: "Binyāmîn",
  meaning: "Son of the right hand",
  modernIdentity: "West Indians & Jamaicans",
  
  // Hero Section
  badgeText: "The Warrior Tribe",
  heroDescription: `Benjamin, the youngest son of Jacob and beloved Rachel, was described as a ravenous wolf who devours the prey and divides the spoil. The West Indian and Jamaican peoples, believed to be descendants of Benjamin, have demonstrated remarkable <span class="text-primary font-semibold">fierce courage, independence, and warrior spirit</span>. Their history of resistance and their fierce protective nature reflects the wolf-like characteristics prophesied for Benjamin.`,
  
  heroCharacteristics: [
    {
      icon: Sword,
      title: "Ravenous Warrior",
      description: "Fierce fighters who devour their prey and protect their territory with wolf-like intensity"
    },
    {
      icon: Crown,
      title: "Royal Lineage", 
      description: "Son of the right hand, blessed with honor and positioned for royal service and leadership"
    },
    {
      icon: Heart,
      title: "Fierce Loyalty",
      description: "Intensely protective of family and community, showing unwavering loyalty to their own"
    }
  ],
  
  historicalConnection: "The Maroons of Jamaica and other West Indian resistance movements exemplified Benjamin's wolf-like nature, fiercely defending their freedom and never being fully conquered by colonial powers.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the West Indian and Jamaican Peoples",
  modernDescription: `<strong class="text-foreground">The West Indian and Jamaican peoples</strong> carry the fierce bloodline of Benjamin, the ravenous wolf who was the beloved youngest son. Your islands became refuges for those who refused to submit to oppression.<br><br>Through your fierce independence, cultural strength, and warrior spirit, you fulfill the <em class="text-primary">calling of Benjamin</em> - being as a ravenous wolf, devouring the prey in the morning and dividing the spoil at night.`,
  migrationYear: "536 BC",
  territory: "Middle East → West Indies", 
  warriorLegacy: "Fierce independence and resistance. Benjamin's wolf-like nature lives on through centuries of successful resistance movements and cultural preservation in the Caribbean.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1571935728924-c62d789eb1a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0JTIwaW5kaWFuJTIwamFtYWljYW4lMjBjdWx0dXJlfGVufDF8fHx8MTc1NzI5NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "West Indian and Jamaican Cultural Heritage",
  tribalLeaderImage: "https://images.unsplash.com/photo-1633158707207-caa2bf855046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0JTIwaW5kaWFuJTIwamFtYWljYW4lMjBsZWFkZXJ8ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1468413253725-0d5181091126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBpc2xhbmRzJTIwd2VzdCUyMGluZGllc3xlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Caribbean Islands - Benjamin's Territory",
  familyHeritageImage: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0JTIwaW5kaWFuJTIwZmFtaWx5JTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzU3MjY3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Benjamin shall ravin as a wolf: in the morning he shall devour the prey, and at night he shall divide the spoil.",
  jacobsBlessingReference: "Genesis 49:27",
  
  // Navigation
  previousTribeName: "Joseph",
  previousTribePath: "/learn/joseph"
};