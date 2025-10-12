import { CalendarEventData } from "./eventService";

// 🔥 TIMEZONE FIX: Fixed date parsing to prevent off-by-1 errors - October 3rd, 2025 - v3.0

// TLOZ 2025-2026 Sacred Calendar Data - CORRECTED DATES (Updated: October 3, 2025)
const tlozEvents: CalendarEventData[] = [
  // NEW MOONS (18 events)
  {
    id: "new-moon-4-2025",
    title: "New Moon #4",
    date: "2025-06-24",
    type: "new-moon",
    description: "Fourth New Moon of the sacred year",
  },
  {
    id: "new-moon-5-2025",
    title: "New Moon #5",
    date: "2025-07-23",
    type: "new-moon",
    description: "Fifth New Moon of the sacred year",
  },
  {
    id: "new-moon-6-2025",
    title: "New Moon #6",
    date: "2025-08-22",
    type: "new-moon",
    description: "Sixth New Moon of the sacred year",
  },
  {
    id: "new-moon-7-2025",
    title: "New Moon #7 - BIG New MOON",
    date: "2025-09-20",
    type: "new-moon",
    description: "Memorial Blowing of The Trumpets - Seventh New Moon of the sacred year",
    enhancedTitle: "Memorial Blowing of The Trumpets",
    hebrewName: "רֹאשׁ הַשָּׁנָה"
  },
  {
    id: "new-moon-8-2025",
    title: "New Moon #8",
    date: "2025-10-20",
    type: "new-moon",
    description: "Eighth New Moon of the sacred year",
  },
  {
    id: "new-moon-9-2025",
    title: "New Moon #9",
    date: "2025-11-19",
    type: "new-moon",
    description: "Ninth New Moon of the sacred year",
  },
  {
    id: "new-moon-10-2025",
    title: "New Moon #10",
    date: "2025-12-18",
    type: "new-moon",
    description: "Tenth New Moon of the sacred year",
  },
  {
    id: "new-moon-11-2026",
    title: "New Moon #11",
    date: "2026-01-17",
    type: "new-moon",
    description: "Eleventh New Moon of the sacred year",
  },
  {
    id: "new-moon-12-2026",
    title: "New Moon #12 - Month of Nadar",
    date: "2026-02-16",
    type: "new-moon",
    description: "Twelfth New Moon - Month of Nadar",
  },
  {
    id: "new-moon-2-2026",
    title: "New Moon #2",
    date: "2026-04-16",
    type: "new-moon",
    description: "Second New Moon of the new sacred year",
  },
  {
    id: "new-moon-3-2026",
    title: "New Moon #3",
    date: "2026-05-15",
    type: "new-moon",
    description: "Third New Moon of the sacred year",
  },
  {
    id: "new-moon-4-2026",
    title: "New Moon #4",
    date: "2026-06-14",
    type: "new-moon",
    description: "Fourth New Moon of the sacred year",
  },
  {
    id: "new-moon-5-2026",
    title: "New Moon #5",
    date: "2026-07-13",
    type: "new-moon",
    description: "Fifth New Moon of the sacred year",
  },
  {
    id: "new-moon-6-2026",
    title: "New Moon #6",
    date: "2026-08-11",
    type: "new-moon",
    description: "Sixth New Moon of the sacred year",
  },
  {
    id: "new-moon-7-2026",
    title: "New Moon #7 - BIG New MOON",
    date: "2026-09-10",
    type: "new-moon",
    description: "Memorial Blowing of The Trumpets - Seventh New Moon of the sacred year",
    enhancedTitle: "Memorial Blowing of The Trumpets",
    hebrewName: "רֹאשׁ הַשָּׁנָה"
  },
  {
    id: "new-moon-8-2026",
    title: "New Moon #8",
    date: "2026-10-09",
    type: "new-moon",
    description: "Eighth New Moon of the sacred year",
  },
  {
    id: "new-moon-9-2026",
    title: "New Moon #9",
    date: "2026-11-08",
    type: "new-moon",
    description: "Ninth New Moon of the sacred year",
  },
  {
    id: "new-moon-10-2026",
    title: "New Moon #10",
    date: "2026-12-08",
    type: "new-moon",
    description: "Tenth New Moon of the sacred year",
  },

  // HIGH HOLY DAYS (18 events)
  {
    id: "pentecost-2025",
    title: "Feast of Weeks/Pentecost",
    date: "2025-06-08",
    type: "holy-day",
    description: "Celebration of the giving of the Torah and the harvest festival",
    enhancedTitle: "Shavuot (Pentecost)",
    hebrewName: "שָׁבוּעוֹת"
  },
  {
    id: "yom-kippur-2025",
    title: "YOM Kippur/The Day of Atonement",
    date: "2025-09-30",
    type: "holy-day",
    description: "The holiest day in the Hebrew calendar - Day of Atonement",
    enhancedTitle: "Yom Kippur",
    hebrewName: "יוֹם כִּפּוּר"
  },
  {
    id: "sukkot-begin-2025",
    title: "Sukkot/Feast of Tabernacles Begins",
    date: "2025-10-04",
    type: "holy-day",
    description: "Beginning of the Sukkot Festival (October 4th - 11th) - Feast of Tabernacles",
    enhancedTitle: "Sukkot (Feast of Tabernacles)",
    hebrewName: "סֻכּוֹת"
  },
  {
    id: "sukkot-end-2025",
    title: "Sukkot/Feast of Tabernacles Ends",
    date: "2025-10-11",
    type: "holy-day",
    description: "Conclusion of the Sukkot Festival",
    enhancedTitle: "Shemini Atzeret",
    hebrewName: "שְׁמִינִי עֲצֶרֶת"
  },
  {
    id: "hanukkah-begin-2025",
    title: "Hanukkah Begins",
    date: "2025-12-13",
    type: "holy-day",
    description: "Beginning of the Festival of Lights",
    enhancedTitle: "Hanukkah (Festival of Lights)",
    hebrewName: "חֲנֻכָּה"
  },
  {
    id: "hanukkah-end-2025",
    title: "Hanukkah Closing",
    date: "2025-12-20",
    type: "holy-day",
    description: "Conclusion of the Festival of Lights",
    enhancedTitle: "Last Day of Hanukkah",
    hebrewName: "זֹאת חֲנֻכָּה"
  },
  {
    id: "nicanor-2026",
    title: "Nicanor",
    date: "2026-02-27",
    type: "holy-day",
    description: "Day of Nicanor celebration",
  },
  {
    id: "purim-open-2026",
    title: "Purim Opening",
    date: "2026-02-28",
    type: "holy-day",
    description: "Beginning of Purim celebration",
    enhancedTitle: "Purim",
    hebrewName: "פּוּרִים"
  },
  {
    id: "purim-close-2026",
    title: "Purim Closing",
    date: "2026-03-01",
    type: "holy-day",
    description: "Conclusion of Purim celebration",
    enhancedTitle: "Shushan Purim",
    hebrewName: "שׁוּשַׁן פּוּרִים"
  },
  {
    id: "abib-new-year-2026",
    title: "Month of ABIB/New Year's",
    date: "2026-03-18",
    type: "holy-day",
    description: "Beginning of the sacred new year - Month of ABIB",
  },
  {
    id: "passover-2026",
    title: "Passover/Feast of Unleavened Bread Opening",
    date: "2026-03-31",
    type: "holy-day",
    description: "Beginning of Passover and the Feast of Unleavened Bread",
    enhancedTitle: "Passover",
    hebrewName: "פֶּסַח"
  },
  {
    id: "unleavened-bread-end-2026",
    title: "Feast of Unleavened Breads Closing",
    date: "2026-04-06",
    type: "holy-day",
    description: "Conclusion of the Feast of Unleavened Bread",
  },
  {
    id: "day-of-simon-2026",
    title: "Day of Simon",
    date: "2026-05-06",
    type: "holy-day",
    description: "Day of Simon observance",
  },
  {
    id: "pentecost-2026",
    title: "Pentecost/Feast of Weeks",
    date: "2026-05-10",
    type: "holy-day",
    description: "Celebration of the giving of the Torah and the harvest festival",
    enhancedTitle: "Shavuot (Pentecost)",
    hebrewName: "שָׁבוּעוֹת"
  },
  {
    id: "yom-kippur-2026",
    title: "YOM Kippur/The Day of Atonement",
    date: "2026-09-19",
    type: "holy-day",
    description: "The holiest day in the Hebrew calendar - Day of Atonement",
    enhancedTitle: "Yom Kippur",
    hebrewName: "יוֹם כִּפּוּר"
  },

  // FASTING DAYS (8 events)
  {
    id: "fast-1-2025",
    title: "FAST #1 (Morning to Evening)",
    date: "2025-07-08",
    type: "fast",
    description: "First fast of the year - Morning to Evening",
  },
  {
    id: "fast-2-2025",
    title: "FAST #2 (Evening to Evening)",
    date: "2025-07-30",
    type: "fast",
    description: "Second fast of the year - Evening to Evening",
  },
  {
    id: "fast-3-2025",
    title: "FAST #3 (Evening to Evening)",
    date: "2025-09-14",
    type: "fast",
    description: "Third fast of the year - Evening to Evening",
  },
  {
    id: "fast-4-2025",
    title: "FAST #4 (Morning to Evening)",
    date: "2025-12-28",
    type: "fast",
    description: "Fourth fast of the year - Morning to Evening",
  },
  {
    id: "fast-1-2026",
    title: "FAST #1 (Morning to Evening)",
    date: "2026-06-28",
    type: "fast",
    description: "First fast of the new year - Morning to Evening",
  },
  {
    id: "fast-2-2026",
    title: "FAST #2 (Evening to Evening)",
    date: "2026-07-21",
    type: "fast",
    description: "Second fast of the year - Evening to Evening",
  },
  {
    id: "fast-3-2026",
    title: "FAST #3 (Evening to Evening)",
    date: "2026-09-03",
    type: "fast",
    description: "Third fast of the year - Evening to Evening",
  },
  {
    id: "fast-4-2026",
    title: "FAST #4 (Morning to Evening)",
    date: "2026-12-19",
    type: "fast",
    description: "Fourth fast of the year - Morning to Evening",
  },
];

// Simple event return without scripture enhancement
const enhanceEventDescription = (
  event: CalendarEventData,
): CalendarEventData => {
  return { ...event };
};

// Get all events including past ones (for calendar display)
const getAllEventsIncludingPast = (): CalendarEventData[] => {
  try {
    return tlozEvents
      .map(enhanceEventDescription)
      .sort((a, b) => {
        try {
          // Fix timezone issue by parsing date correctly
          return (
            new Date(a.date + 'T12:00:00').getTime() -
            new Date(b.date + 'T12:00:00').getTime()
          );
        } catch (error) {
          console.error("Error sorting events:", error);
          return 0;
        }
      });
  } catch (error) {
    console.error("Error in getAllEventsIncludingPast:", error);
    return [];
  }
};

// Filter out past events - only show future events
const getFutureEvents = (): CalendarEventData[] => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    return tlozEvents
      .filter((event) => {
        try {
          // Fix timezone issue by parsing date correctly
          const eventDate = new Date(event.date + 'T12:00:00');
          return eventDate >= today;
        } catch (error) {
          console.error(
            "Error parsing event date:",
            event.date,
            error,
          );
          return false;
        }
      })
      .map(enhanceEventDescription)
      .sort((a, b) => {
        try {
          // Fix timezone issue by parsing date correctly
          return (
            new Date(a.date + 'T12:00:00').getTime() -
            new Date(b.date + 'T12:00:00').getTime()
          );
        } catch (error) {
          console.error("Error sorting events:", error);
          return 0;
        }
      });
  } catch (error) {
    console.error("Error in getFutureEvents:", error);
    return [];
  }
};

// Helper function to get event type label
export const getEventTypeLabel = (type: string): string => {
  const typeLabels: Record<string, string> = {
    "new-moon": "New Moon",
    "holy-day": "Holy Day", 
    "fast": "Fasting Day",
    "sabbath": "Sabbath",
    "setup": "Setup Day"
  };
  
  return typeLabels[type] || "Event";
};

export const tlozEventService = {
  getAllEvents: async (): Promise<CalendarEventData[]> => {
    try {
      const events = getAllEventsIncludingPast(); // Returns all events for calendar display
      console.log("📅 tlozEventService.getAllEvents() called, returning", events.length, "events");
      console.log("📅 First few events:", events.slice(0, 3).map(e => ({ date: e.date, title: e.title })));
      return events;
    } catch (error) {
      console.error("Error in getAllEvents:", error);
      return [];
    }
  },

  getNextEvent: async (): Promise<CalendarEventData | null> => {
    try {
      const futureEvents = getFutureEvents();
      return futureEvents.length > 0 ? futureEvents[0] : null;
    } catch (error) {
      console.error("Error in getNextEvent:", error);
      return null;
    }
  },

  getEventsByType: async (
    type: string,
  ): Promise<CalendarEventData[]> => {
    try {
      const allEvents = getAllEventsIncludingPast(); // Include all events
      if (type === "all") return allEvents;
      return allEvents.filter(
        (event) => event.type === type,
      );
    } catch (error) {
      console.error("Error in getEventsByType:", error);
      return [];
    }
  },

  getEventsByMonth: async (
    year: number,
    month: number,
  ): Promise<CalendarEventData[]> => {
    try {
      const allEvents = getAllEventsIncludingPast(); // Include all events
      return allEvents.filter((event) => {
        // Fix timezone issue by parsing date correctly
        const eventDate = new Date(event.date + 'T12:00:00');
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() === month
        );
      });
    } catch (error) {
      console.error("Error in getEventsByMonth:", error);
      return [];
    }
  },
};