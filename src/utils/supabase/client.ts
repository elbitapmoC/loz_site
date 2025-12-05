import { emergencyApiClient, emergencyStaticData } from '../emergencyFix';

// API client for database operations with emergency fallback
export const apiClient = {
  getLocations: async () => emergencyApiClient.getLocations(),
  getTribes: async () => emergencyApiClient.getTribes(),
  getCalendarEvents: async () => emergencyApiClient.getCalendarEvents(),
  getEventsByDateRange: async (startDate: string, endDate: string) =>
    emergencyStaticData.calendar_events.filter(event => event.date >= startDate && event.date <= endDate),
  getEventsByType: async (eventType: string) =>
    emergencyStaticData.calendar_events.filter(event => event.event_type === eventType),
  getUpcomingEvents: async (limit = 10) => emergencyApiClient.getUpcomingEvents(limit),
};

 
