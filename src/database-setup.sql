-- Thee Light of Zion Church Database Setup
-- Run this script in your Supabase SQL Editor to fix PGRST205 errors

-- Create locations table
CREATE TABLE IF NOT EXISTS public.locations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    short_name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tribes table
CREATE TABLE IF NOT EXISTS public.tribes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    hebrew_name TEXT NOT NULL,
    hebrew_transliteration TEXT NOT NULL,
    meaning TEXT NOT NULL,
    modern_identity TEXT NOT NULL,
    order_number INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create calendar_events table
CREATE TABLE IF NOT EXISTS public.calendar_events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    event_type TEXT NOT NULL CHECK (event_type IN ('new_moon', 'holy_day', 'sabbath', 'fast_day', 'torah_portion', 'church_event')),
    location_type TEXT NOT NULL DEFAULT 'both' CHECK (location_type IN ('hq', 'psl', 'both', 'virtual')),
    start_time TIME,
    end_time TIME,
    hebrew_date TEXT,
    scripture_reference TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert church locations
INSERT INTO public.locations (id, name, short_name, address, city, state, zip_code, phone, email) VALUES
    ('hq', 'Headquarters', 'HQ', '2937 W Broward Blvd', 'Fort Lauderdale', 'FL', '33312', '(954) 555-0123', 'info@thelightofzion.org'),
    ('psl', 'Treasure Coast', 'PSL', '718 SW Port Saint Lucie Blvd, Suite #6', 'Port St. Lucie', 'FL', '34953', '(772) 555-0124', 'psl@thelightofzion.org')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    short_name = EXCLUDED.short_name,
    address = EXCLUDED.address,
    city = EXCLUDED.city,
    state = EXCLUDED.state,
    zip_code = EXCLUDED.zip_code,
    phone = EXCLUDED.phone,
    email = EXCLUDED.email,
    updated_at = NOW();

-- Insert the 12 tribes of Israel
INSERT INTO public.tribes (id, name, hebrew_name, hebrew_transliteration, meaning, modern_identity, order_number) VALUES
    ('reuben', 'Reuben', 'רְאוּבֵן', 'Rəʾūḇēn', 'Behold, a son', 'French', 1),
    ('simeon', 'Simeon', 'שִׁמְעוֹן', 'Šimʿōn', 'Heard', 'Dominican Republic', 2),
    ('levi', 'Levi', 'לֵוִי', 'Lēwī', 'Attached', 'Haiti', 3),
    ('judah', 'Judah', 'יְהוּדָה', 'Yəhūḏā', 'Praised', 'African Americans', 4),
    ('dan', 'Dan', 'דָּן', 'Dān', 'Judge', 'Native Americans', 5),
    ('naphtali', 'Naphtali', 'נַפְתָּלִי', 'Nap̄tālī', 'My struggle', 'Argentina & Chile', 6),
    ('gad', 'Gad', 'גָּד', 'Gāḏ', 'Fortune', 'Native American Indians', 7),
    ('asher', 'Asher', 'אָשֵׁר', 'ʾĀšēr', 'Happy', 'Colombia & Venezuela', 8),
    ('issachar', 'Issachar', 'יִשָּׂשכָר', 'Yiśśāš́ḵār', 'Reward', 'Mexican Americans', 9),
    ('zebulun', 'Zebulun', 'זְבוּלֻן', 'Zəḇūlun', 'Dwelling', 'Guatemala & Panama', 10),
    ('joseph', 'Joseph', 'יוֹסֵף', 'Yōsēp̄', 'He will add', 'Native Americans (Two Tribes)', 11),
    ('benjamin', 'Benjamin', 'בִּנְיָמִין', 'Binyāmīn', 'Son of the right hand', 'West Indies', 12)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    hebrew_name = EXCLUDED.hebrew_name,
    hebrew_transliteration = EXCLUDED.hebrew_transliteration,
    meaning = EXCLUDED.meaning,
    modern_identity = EXCLUDED.modern_identity,
    order_number = EXCLUDED.order_number,
    updated_at = NOW();

-- Insert calendar events for 2025
INSERT INTO public.calendar_events (id, title, description, date, event_type, location_type, start_time, end_time, hebrew_date, scripture_reference) VALUES
    -- Weekly Sabbaths (sample for January 2025)
    ('sabbath-2025-01-04', 'Weekly Sabbath Service', 'Join us for our weekly Sabbath worship and fellowship', '2025-01-04', 'sabbath', 'both', '10:00', '12:00', 'Sabbath', 'Exodus 20:8-11'),
    ('sabbath-2025-01-11', 'Weekly Sabbath Service', 'Join us for our weekly Sabbath worship and fellowship', '2025-01-11', 'sabbath', 'both', '10:00', '12:00', 'Sabbath', 'Exodus 20:8-11'),
    ('sabbath-2025-01-18', 'Weekly Sabbath Service', 'Join us for our weekly Sabbath worship and fellowship', '2025-01-18', 'sabbath', 'both', '10:00', '12:00', 'Sabbath', 'Exodus 20:8-11'),
    ('sabbath-2025-01-25', 'Weekly Sabbath Service', 'Join us for our weekly Sabbath worship and fellowship', '2025-01-25', 'sabbath', 'both', '10:00', '12:00', 'Sabbath', 'Exodus 20:8-11'),
    
    -- New Moon celebrations for 2025
    ('new-moon-2025-01-29', 'New Moon Celebration - Shevat', 'Celebrate the beginning of the biblical month', '2025-01-29', 'new_moon', 'both', '18:00', '20:00', '1st of Shevat', 'Numbers 28:11-15'),
    ('new-moon-2025-02-28', 'New Moon Celebration - Adar', 'Celebrate the beginning of the biblical month', '2025-02-28', 'new_moon', 'both', '18:00', '20:00', '1st of Adar', 'Numbers 28:11-15'),
    ('new-moon-2025-03-29', 'New Moon Celebration - Nissan', 'Celebrate the beginning of the biblical month', '2025-03-29', 'new_moon', 'both', '18:00', '20:00', '1st of Nissan', 'Numbers 28:11-15'),
    ('new-moon-2025-04-28', 'New Moon Celebration - Iyar', 'Celebrate the beginning of the biblical month', '2025-04-28', 'new_moon', 'both', '18:00', '20:00', '1st of Iyar', 'Numbers 28:11-15'),
    
    -- High Holy Days 2025
    ('passover-2025', 'Passover', 'The feast of unleavened bread commemorating the exodus from Egypt', '2025-04-13', 'holy_day', 'both', '18:00', '21:00', '14th of Nissan', 'Leviticus 23:5'),
    ('unleavened-bread-2025-start', 'First Day of Unleavened Bread', 'Beginning of the seven days of unleavened bread', '2025-04-14', 'holy_day', 'both', '18:00', '21:00', '15th of Nissan', 'Leviticus 23:6-8'),
    ('unleavened-bread-2025-end', 'Last Day of Unleavened Bread', 'Conclusion of the seven days of unleavened bread', '2025-04-20', 'holy_day', 'both', '18:00', '21:00', '21st of Nissan', 'Leviticus 23:6-8'),
    ('pentecost-2025', 'Day of Pentecost', 'The feast of weeks, celebrating the giving of the law and the spirit', '2025-06-01', 'holy_day', 'both', '10:00', '15:00', '6th of Sivan', 'Leviticus 23:15-21'),
    ('trumpets-2025', 'Day of Trumpets', 'The feast of trumpets, a memorial of blowing of trumpets', '2025-09-23', 'holy_day', 'both', '18:00', '21:00', '1st of Tishri', 'Leviticus 23:23-25'),
    ('atonement-2025', 'Day of Atonement', 'The most sacred day of the year, a day of fasting and repentance', '2025-10-02', 'fast_day', 'both', '18:00', '19:00', '10th of Tishri', 'Leviticus 23:26-32'),
    ('tabernacles-2025-start', 'First Day of Tabernacles', 'Beginning of seven days of rejoicing and dwelling in temporary shelters', '2025-10-07', 'holy_day', 'both', '18:00', '21:00', '15th of Tishri', 'Leviticus 23:33-43'),
    ('tabernacles-2025-end', 'Last Great Day', 'The eighth day, the last great day of the feast', '2025-10-14', 'holy_day', 'both', '18:00', '21:00', '22nd of Tishri', 'Leviticus 23:36'),
    
    -- Additional Fast Days
    ('fast-gedaliah-2025', 'Fast of Gedaliah', 'Commemorating the assassination of Gedaliah', '2025-09-25', 'fast_day', 'both', '06:00', '18:00', '3rd of Tishri', '2 Kings 25:25'),
    ('fast-10th-tevet-2025', 'Fast of the 10th of Tevet', 'Commemorating the siege of Jerusalem', '2025-01-09', 'fast_day', 'both', '06:00', '18:00', '10th of Tevet', '2 Kings 25:1'),
    ('fast-esther-2025', 'Fast of Esther', 'Commemorating Queen Esther''s fast before approaching the king', '2025-03-12', 'fast_day', 'both', '06:00', '18:00', '13th of Adar', 'Esther 4:16'),
    ('fast-17th-tammuz-2025', 'Fast of the 17th of Tammuz', 'Commemorating the breach of Jerusalem''s walls', '2025-07-13', 'fast_day', 'both', '06:00', '19:00', '17th of Tammuz', 'Jeremiah 39:2'),
    ('fast-9th-av-2025', 'Fast of the 9th of Av', 'Commemorating the destruction of both Temples', '2025-08-03', 'fast_day', 'both', '19:30', '20:30', '9th of Av', 'Lamentations 1:1')
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    date = EXCLUDED.date,
    event_type = EXCLUDED.event_type,
    location_type = EXCLUDED.location_type,
    start_time = EXCLUDED.start_time,
    end_time = EXCLUDED.end_time,
    hebrew_date = EXCLUDED.hebrew_date,
    scripture_reference = EXCLUDED.scripture_reference,
    updated_at = NOW();

-- Enable Row Level Security (RLS) for better security
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tribes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calendar_events ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY IF NOT EXISTS "Allow public read access on locations" ON public.locations FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Allow public read access on tribes" ON public.tribes FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Allow public read access on calendar_events" ON public.calendar_events FOR SELECT USING (true);

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.locations TO anon, authenticated;
GRANT SELECT ON public.tribes TO anon, authenticated;
GRANT SELECT ON public.calendar_events TO anon, authenticated;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_calendar_events_date ON public.calendar_events(date);
CREATE INDEX IF NOT EXISTS idx_calendar_events_type ON public.calendar_events(event_type);
CREATE INDEX IF NOT EXISTS idx_tribes_order ON public.tribes(order_number);

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'SUCCESS: All tables created and data inserted for Thee Light of Zion!';
    RAISE NOTICE 'Your app should now work without PGRST205 errors.';
    RAISE NOTICE 'Tables created: locations (2 churches), tribes (12), calendar_events (22+ events)';
END $$;