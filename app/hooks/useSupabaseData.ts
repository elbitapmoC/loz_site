import { useState, useEffect } from 'react';
import { apiClient } from '../utils/supabase/client';

type CalendarEvent = {
  id: string;
  title: string;
  description?: string;
  date: string; // YYYY-MM-DD
  event_type: string;
  location_type?: string;
};

type Location = {
  id: string;
  name: string;
  short_name?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
};

type Tribe = {
  id: string;
  name: string;
  modern_identity?: string;
  order_number?: number;
};

function getErrorMessage(err: unknown): string {
  if (err && typeof err === 'object' && 'message' in err) {
    const msg = (err as { message?: string }).message;
    return msg || 'Unknown error';
  }
  return 'Unknown error';
}

// Hook for calendar events from Supabase
export function useSupabaseCalendarData() {
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Fetching calendar events from Supabase...');
        
        const events = await apiClient.getCalendarEvents();
        console.log('✅ Calendar events loaded:', events.length);
        setAllEvents((events || []) as CalendarEvent[]);
      } catch (err: unknown) {
        console.error('❌ Error fetching calendar events:', err);
        setError(getErrorMessage(err) || 'Failed to load calendar events');
        setAllEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  return {
    allEvents,
    isLoading,
    error
  };
}

// Hook for locations from Supabase
export function useSupabaseLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Fetching locations from Supabase...');
        
        const data = await apiClient.getLocations();
        console.log('✅ Locations loaded:', data.length);
        setLocations((data || []) as Location[]);
      } catch (err: unknown) {
        console.error('❌ Error fetching locations:', err);
        setError(getErrorMessage(err) || 'Failed to load locations');
        setLocations([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadLocations();
  }, []);

  return {
    locations,
    isLoading,
    error
  };
}

// Hook for tribes from Supabase
export function useSupabaseTribes() {
  const [tribes, setTribes] = useState<Tribe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTribes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Fetching tribes from Supabase...');
        
        const data = await apiClient.getTribes();
        console.log('✅ Tribes loaded:', data.length);
        setTribes((data || []) as Tribe[]);
      } catch (err: unknown) {
        console.error('❌ Error fetching tribes:', err);
        setError(getErrorMessage(err) || 'Failed to load tribes');
        setTribes([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTribes();
  }, []);

  return {
    tribes,
    isLoading,
    error
  };
}

// Hook for upcoming events
export function useUpcomingEvents(limit = 5) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUpcomingEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Fetching upcoming events from Supabase...');
        
        const data = await apiClient.getUpcomingEvents(limit);
        console.log('✅ Upcoming events loaded:', data.length);
        setEvents((data || []) as CalendarEvent[]);
      } catch (err: unknown) {
        console.error('❌ Error fetching upcoming events:', err);
        setError(getErrorMessage(err) || 'Failed to load upcoming events');
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadUpcomingEvents();
  }, [limit]);

  return {
    events,
    isLoading,
    error
  };
}