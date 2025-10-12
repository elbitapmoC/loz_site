# 🚀 Fix PGRST205 Errors - Database Setup Instructions

## Problem
Your app is showing PGRST205 "table not found" errors because the database tables don't exist in Supabase yet.

## ⚡ Quick Fix (5 minutes)

### Step 1: Copy the SQL Script
Copy the entire contents of `/database-setup.sql` to your clipboard.

### Step 2: Run in Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Select your project: `jtvjibppklwuyfuctkue`
3. Click **"SQL Editor"** in the left sidebar
4. Paste the copied SQL script
5. Click **"RUN"** button
6. Wait 2-3 minutes for the schema cache to update

### Step 3: Refresh Your App
Refresh your church website - all PGRST205 errors will be gone!

## ✅ What Gets Created

### Database Tables:
- **`locations`** - Your 2 church locations (HQ & PSL)
- **`tribes`** - All 12 tribes with Hebrew names and modern identities  
- **`calendar_events`** - Biblical calendar with 20+ events for 2025

### Sample Data Includes:
- **Church Locations**: 
  - HQ: 2937 W Broward Blvd, Fort Lauderdale
  - PSL: 718 SW Port Saint Lucie Blvd, Suite #6, Port St. Lucie
- **12 Tribes**: Complete with Hebrew names, meanings, and modern identities
- **Biblical Events**: Sabbaths, Holy Days, New Moons, Passover, Pentecost, Day of Atonement, etc.

## 📋 Verification Steps

After running the script, check your Supabase dashboard:

1. Go to **"Database"** → **"Tables"**
2. You should see 3 new tables:
   - `locations` (2 rows)
   - `tribes` (12 rows) 
   - `calendar_events` (20+ rows)

## 🎯 Expected Result

After setup completes:
- ✅ No more PGRST205 errors
- ✅ Calendar page loads with events
- ✅ Tribe pages show proper data
- ✅ Location information displays correctly
- ✅ Full church website functionality restored

## 🔧 Alternative: Install Supabase Package

If you need to install the Supabase client:

```bash
npm install @supabase/supabase-js
```

But the client code is already created and ready to use once tables exist.

## 🆘 Troubleshooting

**If you still see errors after running the script:**
1. Wait 3-5 minutes for schema cache to fully update
2. Hard refresh your browser (Ctrl+F5 / Cmd+Shift+R)
3. Check browser console for any new error messages

**If tables don't appear:**
1. Make sure you selected the correct project
2. Check that the SQL script ran without errors
3. Look for any red error messages in the SQL Editor

Your beautiful Thee Light of Zion website will be fully functional once this database setup is complete!