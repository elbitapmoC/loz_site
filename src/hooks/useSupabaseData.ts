import { useState, useEffect } from 'react';
import { apiClient } from '../utils/supabase/client';

// Hook for calendar events from Supabase
export function useSupabaseCalendarData() {
  const [allEvents, setAllEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Loading calendar events...');
        
        const events = await apiClient.getCalendarEvents();
        console.log('✅ Calendar events loaded:', events.length);
        setAllEvents(events || []);
      } catch (err: any) {
        console.error('❌ Error fetching calendar events:', err);
        setError(err?.message || 'Failed to load calendar events');
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
  const [locations, setLocations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Loading locations...');
        
        const data = await apiClient.getLocations();
        console.log('✅ Locations loaded:', data.length);
        setLocations(data || []);
      } catch (err: any) {
        console.error('❌ Error fetching locations:', err);
        setError(err?.message || 'Failed to load locations');
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
  const [tribes, setTribes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTribes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Loading tribes...');
        
        const data = await apiClient.getTribes();
        console.log('✅ Tribes loaded:', data.length);
        setTribes(data || []);
      } catch (err: any) {
        console.error('❌ Error fetching tribes:', err);
        setError(err?.message || 'Failed to load tribes');
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
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUpcomingEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('🔄 Loading upcoming events...');
        
        const data = await apiClient.getUpcomingEvents(limit);
        console.log('✅ Upcoming events loaded:', data.length);
        setEvents(data || []);
      } catch (err: any) {
        console.error('❌ Error fetching upcoming events:', err);
        setError(err?.message || 'Failed to load upcoming events');
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
