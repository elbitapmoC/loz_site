import { TribeData } from "./TribePageTemplate";
import { Crown, Zap, Heart } from "lucide-react";

export const judahTribeData: TribeData = {
  // Basic Info
  tribeName: "Judah",
  hebrewName: "יְהוּדָה",
  hebrewTransliteration: "Yəhūḏā",
  meaning: "Praised",
  modernIdentity: "African Americans",
  
  // Hero Section
  badgeText: "The Royal Tribe",
  heroDescription: `Judah, the fourth son of Jacob and Leah, was blessed to be the royal tribe from which kings would come. African Americans, believed to be descendants of Judah, have shown remarkable leadership, resilience, and cultural influence throughout their journey in America. Despite centuries of oppression, they have maintained their <span class="text-primary font-semibold">natural leadership, artistic excellence, and spiritual strength</span>, fulfilling the royal calling of their ancestor.`,
  
  heroCharacteristics: [
    {
      icon: Crown,
      title: "Royal Leadership",
      description: "Natural leaders in civil rights, politics, business, and cultural movements across America"
    },
    {
      icon: Zap,
      title: "Cultural Excellence", 
      description: "Unprecedented contributions to music, arts, literature, and spiritual movements worldwide"
    },
    {
      icon: Heart,
      title: "Enduring Faith",
      description: "Maintained faith and dignity through slavery, segregation, and ongoing struggles for justice"
    }
  ],
  
  historicalConnection: "From the Underground Railroad to the Civil Rights Movement, African Americans have consistently demonstrated the leadership and courage characteristic of Judah's royal bloodline.",
  
  // Modern Identity Section
  modernPeopleTitle: "You Are the African American People",
  modernDescription: `<strong class="text-foreground">African Americans</strong> carry the royal bloodline of Judah, the tribe blessed to produce kings and leaders. Brought to America through the slave trade, your people have never lost their inherent nobility and leadership qualities.<br><br>Through your contributions to American culture, your leadership in civil rights, and your influence on global music and arts, you continue to fulfill the <em class="text-primary">royal calling of Judah</em> - leading by example and inspiring others toward righteousness and justice.`,
  migrationYear: "536 BC",
  territory: "Middle East → West Africa → Americas", 
  warriorLegacy: "Led every major movement for freedom and civil rights in America. The leadership spirit of Judah manifests through generations of extraordinary leaders and cultural pioneers.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1582992323679-9413075aa58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBjdWx0dXJlJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "African American Cultural Heritage and Leadership",
  tribalLeaderImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTcyOTQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImage: "https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhJTIwc291dGglMjBhZnJpY2FuJTIwYW1lcmljYW58ZW58MXx8fHwxNzU3Mjk0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "American South - Judah's Territory",
  familyHeritageImage: "https://images.unsplash.com/photo-1609220136736-443140cffec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBmYW1pbHklMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTcyNjczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Judah, thou art he whom thy brethren shall praise: thy hand shall be in the neck of thine enemies; thy father's children shall bow down before thee. The sceptre shall not depart from Judah...",
  jacobsBlessingReference: "Genesis 49:8-10",
  
  // Navigation
  nextTribeName: "Dan",
  nextTribePath: "/learn/dan",
  previousTribeName: "Levi",
  previousTribePath: "/learn/levi"
};