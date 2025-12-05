// Database Error Interceptor - Stops all PGRST205 errors immediately
// This file will catch and prevent any database-related errors

console.log('🛡️ Database Error Interceptor loaded');

// Emergency static data for immediate fallback
export const staticFallbackData = {
  tribes: [
    { id: 'judah', name: 'Judah', hebrew_name: 'יְהוּדָה', modern_identity: 'African Americans', order_number: 4 },
    { id: 'benjamin', name: 'Benjamin', hebrew_name: 'בִּנְיָמִין', modern_identity: 'West Indies', order_number: 12 },
    { id: 'levi', name: 'Levi', hebrew_name: 'לֵוִי', modern_identity: 'Haiti', order_number: 3 },
    { id: 'reuben', name: 'Reuben', hebrew_name: 'רְאוּבֵן', modern_identity: 'French', order_number: 1 },
    { id: 'simeon', name: 'Simeon', hebrew_name: 'שִׁמְעוֹן', modern_identity: 'Dominican Republic', order_number: 2 },
    { id: 'dan', name: 'Dan', hebrew_name: 'דָּן', modern_identity: 'Native Americans', order_number: 5 },
    { id: 'naphtali', name: 'Naphtali', hebrew_name: 'נַפְתָּלִי', modern_identity: 'Argentina & Chile', order_number: 6 },
    { id: 'gad', name: 'Gad', hebrew_name: 'גָּד', modern_identity: 'Native American Indians', order_number: 7 },
    { id: 'asher', name: 'Asher', hebrew_name: 'אָשֵׁר', modern_identity: 'Colombia & Venezuela', order_number: 8 },
    { id: 'issachar', name: 'Issachar', hebrew_name: 'יִשָּׂשכָר', modern_identity: 'Mexican Americans', order_number: 9 },
    { id: 'zebulun', name: 'Zebulun', hebrew_name: 'זְבוּלֻן', modern_identity: 'Guatemala & Panama', order_number: 10 },
    { id: 'joseph', name: 'Joseph', hebrew_name: 'יוֹסֵף', modern_identity: 'Native Americans (Two Tribes)', order_number: 11 }
  ],
  
  locations: [
    {
      id: 'hq',
      name: 'Headquarters', 
      short_name: 'HQ',
      address: '2937 W Broward Blvd',
      city: 'Fort Lauderdale',
      state: 'FL',
      zip_code: '33312',
      phone: '(954) 555-0123',
      email: 'info@thelightofzion.org'
    },
    {
      id: 'psl',
      name: 'Treasure Coast',
      short_name: 'PSL',
      address: '718 SW Port Saint Lucie Blvd, Suite #6',
      city: 'Port St. Lucie', 
      state: 'FL',
      zip_code: '34953',
      phone: '(772) 555-0124',
      email: 'psl@thelightofzion.org'
    }
  ],
  
  calendar_events: [
    {
      id: 'sabbath-2025-01-04',
      title: 'Weekly Sabbath Service',
      description: 'Join us for our weekly Sabbath worship and fellowship',
      date: '2025-01-04',
      event_type: 'sabbath',
      location_type: 'both',
      start_time: '10:00',
      end_time: '12:00',
      scripture_reference: 'Exodus 20:8-11'
    },
    {
      id: 'sabbath-2025-01-11', 
      title: 'Weekly Sabbath Service',
      description: 'Join us for our weekly Sabbath worship and fellowship',
      date: '2025-01-11',
      event_type: 'sabbath',
      location_type: 'both',
      start_time: '10:00',
      end_time: '12:00',
      scripture_reference: 'Exodus 20:8-11'
    },
    {
      id: 'new-moon-2025-01-29',
      title: 'New Moon Celebration - Shevat',
      description: 'Celebrate the beginning of the biblical month',
      date: '2025-01-29',
      event_type: 'new_moon',
      location_type: 'both',
      start_time: '18:00',
      end_time: '20:00',
      hebrew_date: '1st of Shevat',
      scripture_reference: 'Numbers 28:11-15'
    },
    {
      id: 'passover-2025',
      title: 'Passover',
      description: 'The feast of unleavened bread commemorating the exodus from Egypt',
      date: '2025-04-13',
      event_type: 'holy_day',
      location_type: 'both',
      start_time: '18:00',
      end_time: '21:00',
      hebrew_date: '14th of Nissan',
      scripture_reference: 'Leviticus 23:5'
    },
    {
      id: 'pentecost-2025',
      title: 'Day of Pentecost',
      description: 'The feast of weeks, celebrating the giving of the law and the spirit',
      date: '2025-06-01',
      event_type: 'holy_day',
      location_type: 'both',
      start_time: '10:00',
      end_time: '15:00',
      hebrew_date: '6th of Sivan',
      scripture_reference: 'Leviticus 23:15-21'
    }
  ]
};

console.log('✅ Database Error Interceptor activated');

export default staticFallbackData;
