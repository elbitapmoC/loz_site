import { TribeData } from "./TribePageTemplate";
import { Users, Sword, Divide } from "lucide-react";

export const simeonTribeData: TribeData = {
  // Basic Info
  tribeName: "Simeon",
  hebrewName: "שִׁמְעוֹן",
  hebrewTransliteration: "Shim'on",
  meaning: "Affliction Heard",
  modernIdentity: "Dominicans",
  
  // Hero Section
  badgeText: "Affliction Heard",
  heroDescription: `
    <p>Simeon was the 2nd born son to Jacob and Leah. His name means <strong>"Affliction Heard"</strong> (Genesis 29:33).</p>
    <br/>
    <p>According to historical interpretation and <strong>2 Esdras 13:40-44</strong>, the tribe of Simeon was among the 10 tribes that migrated to Arsareth (the Americas). They inhabited the island of Hispaniola long before European arrival in 1492.</p>
    <br/>
    <p>In the 1600s, they were joined by the tribe of Levi (Haitians), fulfilling the prophecy that these brethren would dwell together in the last days.</p>
  `,
  
  heroCharacteristics: [
    {
      icon: Users,
      title: "Brethren in Hispaniola",
      description: "Simeon (Dominicans) and Levi (Haitians) share the island, fulfilling Genesis 49:5."
    },
    {
      icon: Sword,
      title: "Fierce Resistance", 
      description: "Known for their fierce anger, including the first recorded slave rebellion in 1522."
    },
    {
      icon: Divide,
      title: "Divided in Jacob",
      description: "A deep historical and cultural division (Spanish vs French) splits the island."
    }
  ],
  
  // This field is used in the "Ancient Prophecy" section for historical proof
  historicalConnection: "In 1522, Europeans in the Americas first learned that slavery did not easily lead to enormous wealth. On Christmas Day, African (Levi) and Indian (Simeon) slaves on a plantation owned by Diego Columbus rose and slew their masters... The beautiful island of Hispaniola shook with the first recorded slave rebellion in the New World. (Ref: 'Black Indians' by W.L. Katz pg. 33)",
  
  // Modern Identity Section (The Card Content)
  modernPeopleTitle: "The People of Hispaniola",
  modernDescription: `
    <div class="space-y-6">
      <div>
        <h4 class="text-primary font-serif text-lg mb-2">Instruments of Cruelty</h4>
        <p class="text-sm italic opacity-80 mb-2">"Simeon and Levi are brethren; instruments of cruelty are in their habitations." (Genesis 49:5)</p>
        <p>While the Levites were once the Priests of the Most High, this prophecy points to a departure toward "instruments of cruelty"—historically interpreted as the harsh spiritual forces of <strong>Voodoo</strong> (Haiti) and <strong>Brujeria</strong> (Dominican Republic).</p>
      </div>

      <div>
        <h4 class="text-primary font-serif text-lg mb-2">The Great Division</h4>
        <p class="text-sm italic opacity-80 mb-2">"I will divide them in Jacob, and scatter them in Israel." (Genesis 49:7)</p>
        <p>Although sharing one island, there is no unity. The "wall" of division is evident in the linguistic split (Spanish vs. French/Creole) and the deep economic and class disparities that separate the two nations.</p>
      </div>

      <div>
        <h4 class="text-primary font-serif text-lg mb-2">The Biblical Consequence</h4>
        <p class="text-sm italic opacity-80 mb-2">"Therefore have I also made you contemptible and base before all the people..." (Malachi 2:9)</p>
        <p>The current poverty and hardship faced by the region are viewed not as random misfortune, but as the consequence of straying from the original laws and Covenant.</p>
      </div>
    </div>
  `,
  migrationYear: "Pre-1492",
  territory: "Hispaniola", 
  warriorLegacy: "Instigated the first recorded slave rebellion in the New World (1522) against Diego Columbus.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1745501231504-de0fed94286e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEb21pbmljYW4lMjBSZXB1YmxpYyUyMHRyYWRpdGlvbmFsJTIwY2xvdGhpbmclMjBoaXN0b3JpY3xlbnwxfHx8fDE3NjQ4MDQyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  mainHeritageImageAlt: "Dominican Republic Traditional Culture",
  tribalLeaderImage: "https://images.unsplash.com/photo-1675875467901-1a8c06411761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWlubyUyMEluZGlhbiUyMGFydCUyMG9yJTIwd2FycmlvcnxlbnwxfHx8fDE3NjQ4MDcwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  leaderTitle: "The Sword of Zeal",
  territoryImage: "https://images.unsplash.com/photo-1723745999496-4b3b936b8cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEb21pbmljYW4lMjBSZXB1YmxpYyUyMGxhbmRzY2FwZSUyMG1vdW50YWlucyUyMHNjZW5pY3xlbnwxfHx8fDE3NjQ4MDcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  territoryImageAlt: "Dominican Republic Landscape",
  familyHeritageImage: "https://images.unsplash.com/photo-1745501231791-1787b4bd53fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEb21pbmljYW4lMjBSZXB1YmxpYyUyMHBlb3BsZSUyMHBvcnRyYWl0cyUyMGRpdmVyc2V8ZW58MXx8fHwxNzY0ODA3MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Biblical Quote (Prophecy Section)
  jacobsBlessing: "Simeon and Levi are brethren; instruments of cruelty are in their habitations.",
  jacobsBlessingReference: "Genesis 49:5",
  
  // Quote Card
  quoteTitle: "Dios, Patria, Libertad",
  quoteDescription: "United by faith and fierce independence, the Dominican people (Simeon) carry the banner of God, Fatherland, and Liberty.",

  // Navigation
  nextTribeName: "Levi",
  nextTribePath: "/learn/levi",
  previousTribeName: "Reuben",
  previousTribePath: "/learn/reuben",
  
  bibliography: [
    "“Why the Cock the Cox Fight Dominicans Haitians and the Struggle for Espanola” Page 37",
    "“Why the Cock the Cox Fight Dominicans Haitians and the Struggle for Espanola” Page 38",
    "“Why the Cock the Cox Fight Dominicans Haitians and the Struggle for Espanola” Page 40",
    "“Why the Cock the Cox Fight Dominicans Haitians and the Struggle for Espanola” Page 41",
    "“A History of the Jews (or Jewish Life in Spain)” Page 211",
    "“The Hope of Israel” Pages 112 and 113",
    "“Lost Tribes and Promised Lands” Ronald Sanders (cited as general reference for Hispaniola containing Ten Tribes)"
  ]
};
