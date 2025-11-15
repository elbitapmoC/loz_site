import { TribeData } from "./TribePageTemplate";
import { Shield, Sword, Heart } from "lucide-react";

export const gadTribeData: TribeData = {
  // Basic Info
  tribeName: "Gad",
  hebrewName: "גָּד",
  hebrewTransliteration: "Gāḏ",
  meaning: "Fortune, troop",
  modernIdentity: "North American Indians",
  
  // Hero Section
  badgeText: "The Warrior Tribe",
  heroDescription: `Gad, son of Jacob and Zilpah, was blessed to overcome troops and press upon their heel. The North American Indian tribes, believed to be descendants of Gad, have demonstrated unparalleled <span class="text-primary font-semibold">warrior courage, tactical brilliance, and fierce resistance</span> against overwhelming forces. Their history of brave warriors and strategic thinking reflects the military prowess prophesied for Gad.`,
  
  heroCharacteristics: [
    {
      icon: Shield,
      title: "Tactical Warfare",
      description: "Master strategists known for brilliant military tactics and guerrilla warfare techniques"
    },
    {
      icon: Sword,
      title: "Fierce Resistance", 
      description: "Legendary warriors who fought valiantly against impossible odds for their homeland"
    },
    {
      icon: Heart,
      title: "Honor Code",
      description: "Living by strict codes of honor, bravery, and loyalty to tribe and family"
    }
  ],
  
  historicalConnection: "From the Apache resistance under Geronimo to the Lakota stand at Little Bighorn, North American tribes have embodied Gad's prophecy of overcoming troops through superior tactics and courage.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the North American Indian Nations",
  modernDescription: `<strong class="text-foreground">The North American Indian Nations</strong> carry the warrior bloodline of Gad, blessed with military prowess and tactical superiority. Your tribes across the Great Plains, Southwest, and beyond have demonstrated the fighting spirit and strategic wisdom of your ancestor.<br><br>Through centuries of resistance, your warrior traditions, and unwavering defense of sacred lands, you fulfill the <em class="text-primary">warrior calling of Gad</em> - overcoming troops and pressing upon the heel of your enemies.`,
  migrationYear: "536 BC",
  territory: "Middle East → North America", 
  warriorLegacy: "Legendary warriors who achieved impossible victories through superior tactics and courage. Gad's military genius lives on through centuries of brave resistance and strategic warfare.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1618249648786-3a56bc6a0e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aCUyMGFtZXJpY2FuJTIwaW5kaWFuJTIwd2FycmlvcnxlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "North American Indian Warrior Heritage",
  tribalLeaderImage: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMHdhcnJpb3IlMjBsZWFkZXJ8ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1570800405923-b734f5c4a43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVhdCUyMHBsYWlucyUyMG5vcnRoJTIwYW1lcmljYXxlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Great Plains - Gad's Territory",
  familyHeritageImage: "https://images.unsplash.com/photo-1544966503-7cc72edef14d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aCUyMGFtZXJpY2FuJTIwaW5kaWFuJTIwZmFtaWx5fGVufDF8fHx8MTc1NzI2NzM5NHww&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Gad, a troop shall overcome him: but he shall overcome at the last.",
  jacobsBlessingReference: "Genesis 49:19",
  
  // Navigation
  nextTribeName: "Asher",
  nextTribePath: "/learn/asher",
  previousTribeName: "Naphtali",
  previousTribePath: "/learn/naphtali"
};