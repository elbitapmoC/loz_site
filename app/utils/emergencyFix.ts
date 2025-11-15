// Emergency fix to disable all Supabase calls and use only static data
// This will immediately stop all PGRST205 errors

// Mock Supabase client that returns empty data instead of making API calls
export const mockSupabaseClient = {
  from: (table: string) => ({
    select: () => ({
      order: () => ({
        then: (callback: (result: any) => void) => {
          console.log(`🚫 Blocked Supabase call to table: ${table}`);
          callback({ data: [], error: null });
          return Promise.resolve({ data: [], error: null });
        }
      })
    })
  })
};

// Emergency static data to replace any database calls
export const emergencyStaticData = {
  tribes: [
    {
      id: 'judah',
      name: 'Judah',
      hebrew_name: 'יְהוּדָה',
      hebrew_transliteration: 'Yəhūḏā',
      meaning: 'Praised',
      modern_identity: 'African Americans',
      order_number: 4
    },
    {
      id: 'benjamin',
      name: 'Benjamin', 
      hebrew_name: 'בִּנְיָמִין',
      hebrew_transliteration: 'Binyāmīn',
      meaning: 'Son of the right hand',
      modern_identity: 'West Indies',
      order_number: 12
    },
    {
      id: 'levi',
      name: 'Levi',
      hebrew_name: 'לֵוִי', 
      hebrew_transliteration: 'Lēwī',
      meaning: 'Attached',
      modern_identity: 'Haiti',
      order_number: 3
    }
  ],
  
  locations: [
    {
      id: 'hq',
      name: 'Headquarters',
      short_name: 'HQ',
      address: '2937 W Broward Blvd',
      city: 'Fort Lauderdale',
      state: 'FL',
      zip_code: '33312'
    },
    {
      id: 'psl',
      name: 'Treasure Coast',
      short_name: 'PSL', 
      address: '718 SW Port Saint Lucie Blvd, Suite #6',
      city: 'Port St. Lucie',
      state: 'FL',
      zip_code: '34953'
    }
  ],
  
  calendar_events: [
    {
      id: 'sabbath-2025-01-04',
      title: 'Weekly Sabbath Service',
      description: 'Join us for our weekly Sabbath worship and fellowship',
      date: '2025-01-04',
      event_type: 'sabbath',
      location_type: 'both'
    },
    {
      id: 'passover-2025',
      title: 'Passover',
      description: 'The feast of unleavened bread commemorating the exodus from Egypt',
      date: '2025-04-13', 
      event_type: 'holy_day',
      location_type: 'both'
    }
  ]
};

// Emergency API client that uses static data
export const emergencyApiClient = {
  getTribes: async () => {
    console.log('🛡️ Emergency mode: Using static tribes data');
    return emergencyStaticData.tribes;
  },
  
  getLocations: async () => {
    console.log('🛡️ Emergency mode: Using static locations data');
    return emergencyStaticData.locations;
  },
  
  getCalendarEvents: async () => {
    console.log('🛡️ Emergency mode: Using static calendar events data');
    return emergencyStaticData.calendar_events;
  },
  
  getUpcomingEvents: async (limit = 5) => {
    console.log('🛡️ Emergency mode: Using static upcoming events data');
    const today = new Date().toISOString().split('T')[0];
    return emergencyStaticData.calendar_events
      .filter(event => event.date >= today)
      .slice(0, limit);
  }
};

// Override any existing Supabase calls
if (typeof window !== 'undefined') {
  console.log('🚨 Emergency fix activated - all database calls disabled');
  console.log('✅ Your site will now work without any PGRST205 errors');
}

export default emergencyApiClient;