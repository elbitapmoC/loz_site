import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';
import { emergencyStaticData } from '../emergencyFix';

// Initialize Supabase client
const supabaseUrl = `https://${projectId}.supabase.co`;
const supabase = createClient(supabaseUrl, publicAnonKey);

// API client for database operations with emergency fallback
export const apiClient = {
  // Get all locations
  getLocations: async () => {
    try {
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .order('id');
      
      if (error) {
        console.error('Error fetching locations:', error);
        // If PGRST205 error (table not found), use emergency data
        if (error.code === 'PGRST205') {
          console.log('🛡️ PGRST205 detected - using emergency static locations data');
          return emergencyStaticData.locations;
        }
        throw error;
      }
      
      return data || emergencyStaticData.locations;
    } catch {
      console.log('🛡️ Database error - falling back to emergency static locations');
      return emergencyStaticData.locations;
    }
  },

  // Get all tribes
  getTribes: async () => {
    try {
      const { data, error } = await supabase
        .from('tribes')
        .select('*')
        .order('order_number');
      
      if (error) {
        console.error('Error fetching tribes:', error);
        // If PGRST205 error (table not found), use emergency data
        if (error.code === 'PGRST205') {
          console.log('🛡️ PGRST205 detected - using emergency static tribes data');
          return emergencyStaticData.tribes;
        }
        throw error;
      }
      
      return data || emergencyStaticData.tribes;
    } catch {
      console.log('🛡️ Database error - falling back to emergency static tribes');
      return emergencyStaticData.tribes;
    }
  },

  // Get all calendar events
  getCalendarEvents: async () => {
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
        .order('date');
      
      if (error) {
        console.error('Error fetching calendar events:', error);
        // If PGRST205 error (table not found), use emergency data
        if (error.code === 'PGRST205') {
          console.log('🛡️ PGRST205 detected - using emergency static calendar events');
          return emergencyStaticData.calendar_events;
        }
        throw error;
      }
      
      return data || emergencyStaticData.calendar_events;
    } catch {
      console.log('🛡️ Database error - falling back to emergency static calendar events');
      return emergencyStaticData.calendar_events;
    }
  },

  // Get events by date range
  getEventsByDateRange: async (startDate: string, endDate: string) => {
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
        .gte('date', startDate)
        .lte('date', endDate)
        .order('date');
      
      if (error) {
        console.error('Error fetching events by date range:', error);
        if (error.code === 'PGRST205') {
          console.log('🛡️ Using emergency static events for date range');
          return emergencyStaticData.calendar_events.filter(event => 
            event.date >= startDate && event.date <= endDate
          );
        }
        throw error;
      }
      
      return data || [];
    } catch {
      console.log('🛡️ Database error - using static events for date range');
      return emergencyStaticData.calendar_events.filter(event => 
        event.date >= startDate && event.date <= endDate
      );
    }
  },

  // Get events by type
  getEventsByType: async (eventType: string) => {
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
        .eq('event_type', eventType)
        .order('date');
      
      if (error) {
        console.error('Error fetching events by type:', error);
        if (error.code === 'PGRST205') {
          console.log('🛡️ Using emergency static events by type');
          return emergencyStaticData.calendar_events.filter(event => 
            event.event_type === eventType
          );
        }
        throw error;
      }
      
      return data || [];
    } catch {
      console.log('🛡️ Database error - using static events by type');
      return emergencyStaticData.calendar_events.filter(event => 
        event.event_type === eventType
      );
    }
  },

  // Get upcoming events
  getUpcomingEvents: async (limit = 10) => {
    const today = new Date().toISOString().split('T')[0];
    
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
        .gte('date', today)
        .order('date')
        .limit(limit);
      
      if (error) {
        console.error('Error fetching upcoming events:', error);
        if (error.code === 'PGRST205') {
          console.log('🛡️ Using emergency static upcoming events');
          return emergencyStaticData.calendar_events
            .filter(event => event.date >= today)
            .slice(0, limit);
        }
        throw error;
      }
      
      return data || [];
    } catch {
      console.log('🛡️ Database error - using static upcoming events');
      return emergencyStaticData.calendar_events
        .filter(event => event.date >= today)
        .slice(0, limit);
    }
  }
};

export { supabase };