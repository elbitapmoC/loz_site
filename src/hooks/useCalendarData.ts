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
      let currentTorahPortion: TorahPortion | null = null;
      let isShabbat: boolean = false;
      let daysUntilShabbat: number = 0;

      try {
        currentTorahPortion = torahPortionService.getCurrentPortion();
        console.log('Torah portion fetched:', currentTorahPortion?.title);
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