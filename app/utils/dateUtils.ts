// Enhanced date utilities for calendar management

// Format date in a more readable format
export function formatDate(dateStr: string): string {
  // Ensure we're parsing the date properly by explicitly creating a local date
  // Split the date string into parts
  const [year, month, day] = dateStr.split('-').map(Number);
  
  // Create a date using local time (no timezone offset)
  const date = new Date(year, month - 1, day);
  
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

// Format date for display in short format
export function formatDateShort(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
}

// Get the current date as a date string (YYYY-MM-DD)
export function getCurrentDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

// Create a Date object from date string
export function createDateFromString(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

// Check if a date string represents today
export function isToday(dateStr: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const date = createDateFromString(dateStr);
  date.setHours(0, 0, 0, 0);
  
  return date.getTime() === today.getTime();
}

// Check if a date string is in the past
export function isPast(dateStr: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const date = createDateFromString(dateStr);
  return date < today;
}

// Check if a date string is in the future
export function isFuture(dateStr: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const date = createDateFromString(dateStr);
  return date > today;
}

// Check if a date is within the next N days
export function isWithinDays(dateStr: string, days: number): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + days);
  
  const date = createDateFromString(dateStr);
  return date >= today && date <= futureDate;
}

// Get days until a date
export function getDaysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const date = createDateFromString(dateStr);
  date.setHours(0, 0, 0, 0);
  
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

// Sort dates chronologically
export function sortDates(dates: {date: string, title: string, description?: string, type: string}[]): typeof dates {
  return [...dates].sort((a, b) => {
    // Parse dates correctly for comparison
    const dateA = createDateFromString(a.date);
    const dateB = createDateFromString(b.date);
    
    return dateA.getTime() - dateB.getTime();
  });
}

// Get month name from date string
export function getMonthName(dateStr: string): string {
  const date = createDateFromString(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long' });
}

// Get year from date string
export function getYear(dateStr: string): number {
  const [year] = dateStr.split('-').map(Number);
  return year;
}

// Get day of week from date string (full name)
export function getDayOfWeek(dateStr: string): string {
  const date = createDateFromString(dateStr);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

// Get abbreviated day of week from date string  
export function getDayOfWeekShort(dateStr: string): string {
  const date = createDateFromString(dateStr);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
}

// Format relative time (e.g., "in 3 days", "yesterday")
export function formatRelativeTime(dateStr: string): string {
  const daysUntil = getDaysUntil(dateStr);
  
  if (daysUntil === 0) return 'Today';
  if (daysUntil === 1) return 'Tomorrow';
  if (daysUntil === -1) return 'Yesterday';
  if (daysUntil > 1) return `In ${daysUntil} days`;
  if (daysUntil < -1) return `${Math.abs(daysUntil)} days ago`;
  
  return dateStr;
}

// Get the start of the current month
export function getCurrentMonthStart(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

// Get the end of the current month
export function getCurrentMonthEnd(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0);
}

// Get the start of a specific month
export function getMonthStart(year: number, month: number): Date {
  return new Date(year, month - 1, 1);
}

// Get the end of a specific month
export function getMonthEnd(year: number, month: number): Date {
  return new Date(year, month, 0);
}

// Check if a date is in the current month
export function isCurrentMonth(dateStr: string): boolean {
  const date = createDateFromString(dateStr);
  const now = new Date();
  
  return date.getFullYear() === now.getFullYear() && 
         date.getMonth() === now.getMonth();
}

// Check if a date is in a completed month (before current month)
export function isCompletedMonth(dateStr: string): boolean {
  const date = createDateFromString(dateStr);
  const currentMonthStart = getCurrentMonthStart();
  
  return date < currentMonthStart;
}

// Get the month and year string from a date (e.g., "June 2025")
export function getMonthYearString(dateStr: string): string {
  const date = createDateFromString(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });
}

// Get days remaining in current month
export function getDaysRemainingInMonth(): number {
  const now = new Date();
  const monthEnd = getCurrentMonthEnd();
  const diffTime = monthEnd.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Check if we're in the last week of the month
export function isLastWeekOfMonth(): boolean {
  return getDaysRemainingInMonth() <= 7;
}

// Get next month's start date
export function getNextMonthStart(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1);
}

// Calculate milliseconds until the start of next month
export function getMillisecondsUntilNextMonth(): number {
  const now = new Date();
  const nextMonthStart = getNextMonthStart();
  return nextMonthStart.getTime() - now.getTime();
}

// Get a human-readable description of when the next month starts
export function getNextMonthDescription(): string {
  const msUntilNextMonth = getMillisecondsUntilNextMonth();
  const daysUntilNextMonth = Math.ceil(msUntilNextMonth / (1000 * 60 * 60 * 24));
  const nextMonthStart = getNextMonthStart();
  const nextMonthName = nextMonthStart.toLocaleDateString('en-US', { month: 'long' });
  
  if (daysUntilNextMonth === 1) {
    return `Tomorrow (${nextMonthName} 1st)`;
  } else if (daysUntilNextMonth <= 7) {
    return `In ${daysUntilNextMonth} days (${nextMonthName} 1st)`;
  } else {
    return `${nextMonthName} 1st`;
  }
}

// Removed getEastCoastSunTimes function as requested