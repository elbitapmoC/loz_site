import { TribeData } from "./TribePageTemplate";
import { BookOpen, Flame, Sword } from "lucide-react";

export const leviTribeData: TribeData = {
  // Basic Info
  tribeName: "Levi",
  hebrewName: "לֵוִי",
  hebrewTransliteration: "Lēwî",
  meaning: "Joined to me",
  modernIdentity: "Haitians",
  
  // Hero Section
  badgeText: "Joined to Me",
  heroDescription: `
    <p>Levi was the 3rd born son to Jacob and Leah. His name means <strong>"Joined to me"</strong> (Genesis 29:34).</p>
    <br/>
    <p>According to <strong>2 Esdras 13:40-44</strong>, the Tribe of Levi migrated to Arsareth (the Americas) and inhabited the island of Hispaniola prior to 1492.</p>
    <br/>
    <p>In the 1600s, the people identified as Levi (Haitians), along with Judah and Benjamin, were taken into captivity and transported on slave ships to serve in bondage.</p>
  `,
  
  heroCharacteristics: [
    {
      icon: Flame,
      title: "The Priesthood",
      description: "Historically ordained as the Priesthood (Deut 33:10), but prophesied to stray into 'instruments of cruelty' (Voodoo)."
    },
    {
      icon: Sword,
      title: "Fierce Anger", 
      description: "Prophesied to be fierce and cruel in their wrath (Gen 49:7), manifested in historical resistance and revolution."
    },
    {
      icon: BookOpen,
      title: "Keepers of the Covenant",
      description: "Deuteronomy 33:9 recalls their stand with Moses, prioritizing the law of the Most High above their own kin."
    }
  ],
  
  historicalConnection: "In 1522, Europeans in the Americas first learned that slavery did not easily lead to enormous wealth. On Christmas Day, African (Levi) and Indian (Simeon) slaves on a plantation owned by Diego Columbus rose and murdered their masters... The beautiful island of Hispaniola shook with the first recorded slave rebellion in the New World. (Ref: 'Black Indians' by W.L. Katz pg. 33)",
  
  // Modern Identity Section
  modernPeopleTitle: "The People of Haiti",
  modernDescription: `
    <div class="space-y-6">
      <div>
        <h4 class="text-primary font-serif text-lg mb-2">Instruments of Cruelty</h4>
        <p class="text-sm italic opacity-80 mb-2">"Simeon and Levi are brethren; instruments of cruelty are in their habitations." (Genesis 49:5)</p>
        <p>Historically renowned for the Priesthood, this prophecy suggests a departure toward spiritual practices like <strong>Voodoo</strong>, viewed as contrary to the original laws given to Levi.</p>
      </div>

      <div>
        <h4 class="text-primary font-serif text-lg mb-2">Divided in Jacob</h4>
        <p class="text-sm italic opacity-80 mb-2">"Unto their assembly... be not thou united..." (Genesis 49:6)</p>
        <p>While sharing Hispaniola with Simeon, there is no unity. The division between Haiti (French/Creole) and the Dominican Republic (Spanish) is the result of colonial history and prophecy.</p>
      </div>

      <div>
        <h4 class="text-primary font-serif text-lg mb-2">The Corrupted Covenant</h4>
        <p class="text-sm italic opacity-80 mb-2">"But ye are departed out of the way... ye have corrupted the covenant of Levi..." (Malachi 2:8)</p>
        <p>Malachi explains the difficult socio-economic status of Haiti today ("contemptible and base") not as coincidence, but as a consequence of leaving the commandments and mixing the holy laws with other practices.</p>
      </div>
    </div>
  `,
  migrationYear: "Pre-1492",
  territory: "Haiti (Hispaniola)", 
  warriorLegacy: "Great leaders such as Toussaint Louverture rose against oppressors to cast them out of Haiti, fulfilling the protection promised in Deuteronomy 33:11.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1712850583273-50a176c164ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYWl0aSUyMG1vdW50YWlucyUyMG1pc3QlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzY0NTY5MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "The Mystic Mountains of Haiti",
  tribalLeaderImage: "https://images.unsplash.com/photo-1605555867009-5d443a4d7739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYWl0aWFuJTIwbWFuJTIwcG9ydHJhaXQlMjBzZXJpb3VzJTIwbGVhZGVyJTIwZGFyayUyMHNraW58ZW58MXx8fHwxNzY0OTA3MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  leaderTitle: "Guardian of the Covenant",
  territoryImage: "https://images.unsplash.com/photo-1656173282609-d09a64435f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYWl0aSUyMENpdGFkZWwlMjBMYWZlcnJpZXJlJTIwZm9ydHJlc3N8ZW58MXx8fHwxNzY0NTY5MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Citadelle Laferrière - The Fortress of Freedom",
  familyHeritageImage: "https://images.unsplash.com/photo-1730997363688-4fbdc16a9266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYWl0aWFuJTIwbWFya2V0JTIwc3RyZWV0JTIwdmlicmFudHxlbnwxfHx8fDE3NjQ5MDczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote
  jacobsBlessing: "Simeon and Levi are brethren; instruments of cruelty are in their habitations.",
  jacobsBlessingReference: "Genesis 49:5",
  
  // Quote Card
  quoteTitle: "L'Union Fait La Force",
  quoteDescription: "Unity Makes Strength. This national motto reflects the Levite calling to unite the tribes in spiritual warfare, just as the Haitian people united to break the chains of empire.",

  // Navigation
  nextTribeName: "Judah",
  nextTribePath: "/learn/judah",
  previousTribeName: "Simeon",
  previousTribePath: "/learn/simeon",
  
  bibliography: [
    "“Black Indians” by W.L. Katz pg. 33",
    "The Hope of Israel By Menasseh Ben Israel, Pages 112-113"
  ]
};
