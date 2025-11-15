import { useState, useEffect, useCallback, useMemo } from 'react';
import { tlozEventService } from '../utils/tlozEventService';
import { torahPortionService } from '../utils/torahPortionService';
import { CalendarEventData } from '../utils/eventService';
import type { TorahPortion } from '../utils/torahPortionService';

interface CalendarData {
  nextEvent: CalendarEventData | null;
  events: CalendarEventData[];
  currentTorahPortion: TorahPortion | null;
  isShabbat: boolean;
  daysUntilShabbat: number;
}

interface CalendarState extends CalendarData {
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

interface UseCalendarDataOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
}

// Helper function to extract meaning from portion title
function extractMeaning(title: string): string {
  const meanings: { [key: string]: string } = {
    "B'reisheet": "In the beginning",
    "Noach": "Noah / Rest",
    "Lech-Lecha": "Go forth / Go for yourself",
    "Vayera": "And He appeared",
    "Chayei Sarah": "Life of Sarah",
    "Toldot": "Generations / History",
    "Vayetze": "And he went out",
    "Vayishlach": "And he sent",
    "Vayeshev": "And he dwelt",
    "Miketz": "At the end",
    "Vayigash": "And he drew near",
    "Vayechi": "And he lived",
    "Shemot": "Names / Exodus",
    "Vaera": "And I appeared",
    "Bo": "Go / Come",
    "Beshalach": "When he let go",
    "Yitro": "Jethro",
    "Mishpatim": "Laws / Judgments",
    "Terumah": "Offering / Contribution",
    "Tetzaveh": "You shall command",
    "Ki Tisa": "When you take",
    "Vayak'hel": "And he assembled",
    "Pekudei": "Accounts / Records",
    "Vayikra": "And He called",
    "Tzav": "Command",
    "Sh'mini": "Eighth",
    "Tazria-Metzora": "She conceives / Leper",
    "Acharei Mot-Kedoshim": "After the death / Holy ones",
    "Emor": "Speak",
    "Behar-Bechukotai": "On the mountain / In my statutes",
    "Bamidbar": "In the wilderness",
    "Nasso": "Take / Lift up",
    "Beha'alotcha": "When you light",
    "Shelach": "Send",
    "Korach": "Korah",
    "Chukat": "Statute / Decree",
    "Balak": "Balak",
    "Pinchas": "Phinehas",
    "Mattot-Massei": "Tribes / Journeys",
    "Devarim": "Words / Deuteronomy",
    "Va'etchanan": "And I pleaded",
    "Ekev": "Because / As a result",
    "Re'eh": "See",
    "Shoftim": "Judges",
    "Ki Tetze": "When you go out",
    "Ki Tavo": "When you enter",
    "Nitzavim": "Standing",
    "Vayelech": "And he went",
    "Ha'Azinu": "Give ear / Listen",
    "Vezot Ha'Bracha": "And this is the blessing",
  };
  return meanings[title] || title;
}

// Helper function to get theme for portion
function getThemeForPortion(title: string): string {
  const themes: { [key: string]: string } = {
    "B'reisheet": "Creation of the world and humanity",
    "Noach": "The flood and God's covenant with Noah",
    "Lech-Lecha": "Abraham's call and covenant",
    "Vayera": "Abraham's visitors and the binding of Isaac",
    "Chayei Sarah": "Sarah's death and Isaac's marriage",
    "Toldot": "Isaac and his sons Jacob and Esau",
    "Vayetze": "Jacob's journey and his family",
    "Vayishlach": "Jacob wrestles with the angel",
    "Vayeshev": "Joseph's dreams and trials",
    "Miketz": "Joseph interprets Pharaoh's dreams",
    "Vayigash": "Joseph reveals himself to his brothers",
    "Vayechi": "Jacob's blessing and death",
    "Shemot": "Moses and the burning bush",
    "Vaera": "The plagues begin",
    "Bo": "The final plagues and Passover",
    "Beshalach": "Crossing the Red Sea and manna",
    "Yitro": "The Ten Commandments",
    "Mishpatim": "The laws and ordinances",
    "Terumah": "The Tabernacle offerings",
    "Tetzaveh": "The priestly garments",
    "Ki Tisa": "The golden calf and Moses' intercession",
    "Vayak'hel": "Building the Tabernacle",
    "Pekudei": "Completion of the Tabernacle",
    "Vayikra": "The laws of sacrifices",
    "Tzav": "Priestly duties",
    "Sh'mini": "Inauguration of the Tabernacle",
    "Tazria-Metzora": "Laws of purity and leprosy",
    "Acharei Mot-Kedoshim": "Day of Atonement and holiness laws",
    "Emor": "Laws for priests and holy days",
    "Behar-Bechukotai": "Sabbatical year and blessings",
    "Bamidbar": "Census in the wilderness",
    "Nasso": "Priestly blessing and Nazirite vow",
    "Beha'alotcha": "The menorah and cloud of glory",
    "Shelach": "The spies and their report",
    "Korach": "Korah's rebellion",
    "Chukat": "The red heifer and Moses' sin",
    "Balak": "Balaam blesses Israel",
    "Pinchas": "Phinehas' zeal and the census",
    "Mattot-Massei": "Vows and the journey record",
    "Devarim": "Moses begins his final address",
    "Va'etchanan": "The Shema and Ten Commandments repeated",
    "Ekev": "Blessings for obedience",
    "Re'eh": "Choose blessing or curse",
    "Shoftim": "Laws of leadership and justice",
    "Ki Tetze": "Various laws for daily living",
    "Ki Tavo": "Blessings and curses",
    "Nitzavim": "The covenant renewed",
    "Vayelech": "Moses' final instructions",
    "Ha'Azinu": "Moses' final song and witness to Israel",
    "Vezot Ha'Bracha": "Moses blesses the tribes",
  };
  return themes[title] || "";
}

export function useCalendarData({ 
  autoRefresh = true, 
  refreshInterval = 60 * 60 * 1000 // 1 hour for production
}: UseCalendarDataOptions = {}): CalendarState & {
  refetch: () => Promise<void>;
  clearError: () => void;
} {
  const [state, setState] = useState<CalendarState>({
    nextEvent: null,
    events: [],
    currentTorahPortion: null,
    isShabbat: false,
    daysUntilShabbat: 0,
    isLoading: true,
    error: null,
    lastUpdated: null,
  });

  const fetchCalendarData = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Test each service call individually with detailed error handling
      console.log('🔄 Fetching calendar data... (Updated October 3, 2025)');
      let eventData: CalendarEventData[] = [];
      let next: CalendarEventData | null = null;
      
      try {
        eventData = await tlozEventService.getAllEvents();
        console.log('Event data fetched:', eventData.length);
      } catch (error) {
        console.error('Error fetching events:', error);
        throw new Error(`Failed to fetch events: ${error}`);
      }

      try {
        next = await tlozEventService.getNextEvent();
        console.log('Next event fetched:', next?.title);
      } catch (error) {
        console.error('Error fetching next event:', error);
        throw new Error(`Failed to fetch next event: ${error}`);
      }

      console.log('Fetching Torah portion data...');
      let currentTorahPortion: any = null;
      let isShabbat: boolean = false;
      let daysUntilShabbat: number = 0;

      try {
        const rawPortion = torahPortionService.getCurrentPortion();
        console.log('📖 Raw Torah portion fetched:', rawPortion?.title, 'Date:', rawPortion?.date);
        
        // Return raw portion - components can access it directly
        currentTorahPortion = rawPortion;
          
        console.log('✅ Torah portion loaded:', {
          portion: currentTorahPortion?.title,
          book: currentTorahPortion?.book,
          torah: currentTorahPortion?.leyning.torah,
        });
      } catch (error) {
        console.error('Error fetching Torah portion:', error);
        throw new Error(`Failed to fetch Torah portion: ${error}`);
      }

      try {
        isShabbat = torahPortionService.isShabbat();
        console.log('Shabbat status:', isShabbat);
      } catch (error) {
        console.error('Error checking Shabbat:', error);
        throw new Error(`Failed to check Shabbat status: ${error}`);
      }

      try {
        daysUntilShabbat = torahPortionService.getDaysUntilNextShabbat();
        console.log('Days until Shabbat:', daysUntilShabbat);
      } catch (error) {
        console.error('Error calculating days until Shabbat:', error);
        throw new Error(`Failed to calculate days until Shabbat: ${error}`);
      }

      setState({
        nextEvent: next,
        events: eventData,
        currentTorahPortion,
        isShabbat,
        daysUntilShabbat,
        isLoading: false,
        error: null,
        lastUpdated: new Date(),
      });
    } catch (error) {
      console.error('Failed to load calendar data:', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to load calendar data',
      }));
    }
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  // Initial load
  useEffect(() => {
    fetchCalendarData();
  }, [fetchCalendarData]);

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(fetchCalendarData, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchCalendarData]);

  return {
    ...state,
    refetch: fetchCalendarData,
    clearError,
  };
}

// Custom hook for event filtering and searching
export function useEventFiltering(events: CalendarEventData[], nextEventId?: string) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredEvents = useMemo(() => {
    return events
      .filter(e => e.id !== nextEventId)
      .filter(e => {
        if (!searchTerm) return true;

        const searchLower = searchTerm.toLowerCase();
        const searchVariations = [
          searchLower,
          searchLower + 's',
          searchLower.endsWith('s') ? searchLower.slice(0, -1) : searchLower + 's',
        ];

        return searchVariations.some(variation =>
          e.title.toLowerCase().includes(variation) ||
          e.description?.toLowerCase().includes(variation)
        );
      })
      .filter(e => selectedFilter === 'all' || e.type === selectedFilter)
      .slice(0, 12);
  }, [events, nextEventId, searchTerm, selectedFilter]);

  const eventStats = useMemo(() => {
    const now = new Date();
    const thisMonth = events.filter(e => {
      // Fix timezone issue by parsing date correctly
      const eventDate = new Date(e.date + 'T12:00:00');
      return eventDate.getMonth() === now.getMonth() &&
             eventDate.getFullYear() === now.getFullYear();
    }).length;

    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    
    const upcoming30Days = events.filter(e => {
      // Fix timezone issue by parsing date correctly
      const eventDate = new Date(e.date + 'T12:00:00');
      return eventDate <= thirtyDaysFromNow && eventDate >= now;
    }).length;

    return { thisMonth, upcoming30Days };
  }, [events]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
    filteredEvents,
    eventStats,
    clearSearch,
  };
}

// Custom hook for Torah portion enhancements
export function useTorahPortionEnhancements(torahPortion: TorahPortion | null) {
  const [selectedReading, setSelectedReading] = useState<'torah' | 'prophets' | 'gospel' | null>(null);
  const [expandedDetails, setExpandedDetails] = useState(false);

  const readings = useMemo(() => {
    if (!torahPortion) return [];

    return [
      {
        id: 'torah',
        title: 'Torah',
        reference: torahPortion.leyning.torah,
        color: 'torah',
        description: 'The weekly Torah reading from the Five Books of Moses'
      },
      {
        id: 'prophets',
        title: 'Prophets',
        reference: torahPortion.leyning.haftarah,
        color: 'prophets',
        description: 'The Haftarah reading from the Prophets'
      },
      {
        id: 'gospel',
        title: 'Gospel',
        reference: torahPortion.leyning.gospel,
        color: 'gospel',
        description: 'The corresponding Gospel reading'
      }
    ] as const;
  }, [torahPortion]);

  const toggleDetails = useCallback(() => {
    setExpandedDetails(prev => !prev);
  }, []);

  const selectReading = useCallback((reading: 'torah' | 'prophets' | 'gospel' | null) => {
    setSelectedReading(reading);
  }, []);

  return {
    readings,
    selectedReading,
    selectReading,
    expandedDetails,
    toggleDetails,
  };
}