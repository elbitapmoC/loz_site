import { TribeData } from "./TribePageTemplate";
import { Crown, Scroll, Sword } from "lucide-react";

export const judahTribeData: TribeData = {
  // Basic Info
  tribeName: "Judah",
  hebrewName: "יְהוּדָה",
  hebrewTransliteration: "Yəhūdāh",
  meaning: "Yahawah's Praise",
  modernIdentity: "American Blacks",
  
  // Hero Section
  badgeText: "Yahawah's Praise",
  heroDescription: `
    <p>Judah was the 4th born son of Jacob and Leah. His name means <strong>"Yahawah's Praise"</strong> (Genesis 29:35).</p>
    <br/>
    <p>Historically known as the <strong>Byzantine Empire</strong> during the Middle Ages, the tribe of Judah (American Blacks), along with Benjamin and Levi, was sold into captivity and transported on slave ships to America between the late 1500s and early 1800s.</p>
    <br/>
    <p>Prophecy states that Judah would be the "head tribe" in the last days, tasked with teaching the truth to Israel. <strong>"Judah, thou art he whom thy brethren shall praise..."</strong> (Genesis 49:8).</p>
  `,
  
  heroCharacteristics: [
    {
      icon: Crown,
      title: "The Lawgiver",
      description: "The Sceptre shall not depart from Judah (Gen 49:10). They are the chosen leaders to gather the people to Christ."
    },
    {
      icon: Sword,
      title: "Neck of Enemies", 
      description: "From Civil Rights to spiritual truth, Judah has 'choked' the political and religious systems of their oppressors."
    },
    {
      icon: Scroll,
      title: "Spirit of Life",
      description: "After 350 years of silence (1620-1970), the 'Spirit of Life' (Rev 11:11) has entered them to teach the Bible correctly."
    }
  ],
  
  historicalConnection: "Revelation 11:11: 'And after three days and an half the Spirit of life from God entered into them...' This 3.5 'days' represents 350 years of captivity. From the arrival of slaves in 1620 to around 1970, when the truth of their identity began to be taught, marking the spiritual resurrection of the people.",
  
  // Modern Identity Section
  modernPeopleTitle: "The Lion of Judah",
  modernDescription: `
    <div class="space-y-6">
      <div>
        <h4 class="text-primary font-serif text-lg mb-2">The Lion's Whelp</h4>
        <p class="text-sm italic opacity-80 mb-2">"Judah is a lion's whelp... he couched as a lion... who shall rouse him up?" (Genesis 49:9)</p>
        <p>Like a young lion, Judah was powerful but became "couched" (distracted) by societal infiltration and drugs (e.g., during the militant era of the 60s). Only the Most High could "rouse him up" to his true identity and purpose.</p>
      </div>

      <div>
        <h4 class="text-primary font-serif text-lg mb-2">The First Tents</h4>
        <p class="text-sm italic opacity-80 mb-2">"The Lord also shall save the tents of Judah first..." (Zechariah 12:7)</p>
        <p>Despite being looked down upon by other tribes, Judah is prophesied to be saved first. They are given the understanding of scripture to gather and lead the rest of Israel under Christ.</p>
      </div>

      <div>
        <h4 class="text-primary font-serif text-lg mb-2">Teeth White with Milk</h4>
        <p class="text-sm italic opacity-80 mb-2">"His eyes shall be red with wine, and his teeth white with milk." (Genesis 49:12)</p>
        <p>Historically, this physical trait (bright white teeth against dark skin) was mocked during slavery (e.g., Sambo caricatures), but it stands as a biblical marker of the tribe's identity alongside Christ.</p>
      </div>
    </div>
  `,
  migrationYear: "1619 / 1620",
  territory: "North America", 
  warriorLegacy: "Fought in every American war, led the Civil Rights movement, and now leads the spiritual awakening of the 12 Tribes.",
  
  // Heritage Images
  mainHeritageImage: "https://images.unsplash.com/photo-1745174837801-b7f37abe9d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwQW1lcmljYW4lMjBtYW4lMjBwb3J0cmFpdCUyMGRpZ25pZmllZHxlbnwxfHx8fDE3NjQ4MzEwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  mainHeritageImageAlt: "The Face of Judah",
  tribalLeaderImage: "https://images.unsplash.com/photo-1762114432763-e25002e5599a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGJsYWNrJTIwbWFuJTIwcG9ydHJhaXQlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc2NDgzMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  leaderTitle: "The Lion of Judah",
  territoryImage: "https://images.unsplash.com/photo-1761268775050-f68884299285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMGFmcmljYW4lMjBhbWVyaWNhbiUyMG5laWdoYm9yaG9vZCUyMGdyaXR0eXxlbnwxfHx8fDE3NjQ5NjEzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  territoryImageAlt: "North America - The Land of Captivity",
  familyHeritageImage: "https://images.unsplash.com/photo-1609253932702-796cbf3d3171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwQW1lcmljYW4lMjBmYW1pbHklMjBjb21tdW5pdHklMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzY0ODMxMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  
  // Biblical Quote
  jacobsBlessing: "The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come...",
  jacobsBlessingReference: "Genesis 49:10",
  
  // Quote Card
  quoteTitle: "The Sceptre",
  quoteDescription: "Judah is the head tribe and Lawgiver. The gathering of the people shall be unto him (Christ), springing from this lineage.",

  // Navigation
  nextTribeName: "Zebulon",
  nextTribePath: "/learn/zebulun",
  previousTribeName: "Levi",
  previousTribePath: "/learn/levi",
  
  bibliography: [
    "Code Noir",
    "Robert Kirk, The Secret Commonwealth",
    "Rev. Gilbert White, The Natural History of Selbourne",
    "Memoirs of the Secret Services of John Macky"
  ]
};
