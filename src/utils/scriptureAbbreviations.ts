/**
 * Biblical Book Abbreviations Utility
 * Converts full book names to standard 3-letter abbreviations (GEN-REV)
 */

export const BOOK_ABBREVIATIONS: Record<string, string> = {
  // Torah / Pentateuch
  'Genesis': 'GEN',
  'Exodus': 'EXO',
  'Leviticus': 'LEV',
  'Numbers': 'NUM',
  'Deuteronomy': 'DEU',
  
  // Historical Books
  'Joshua': 'JOS',
  'Judges': 'JDG',
  'Ruth': 'RUT',
  '1 Samuel': '1SA',
  '2 Samuel': '2SA',
  '1 Kings': '1KI',
  '2 Kings': '2KI',
  '1 Chronicles': '1CH',
  '2 Chronicles': '2CH',
  'Ezra': 'EZR',
  'Nehemiah': 'NEH',
  'Esther': 'EST',
  
  // Wisdom Books
  'Job': 'JOB',
  'Psalms': 'PSA',
  'Psalm': 'PSA',
  'Proverbs': 'PRO',
  'Ecclesiastes': 'ECC',
  'Song of Solomon': 'SNG',
  'Song of Songs': 'SNG',
  
  // Major Prophets
  'Isaiah': 'ISA',
  'Jeremiah': 'JER',
  'Lamentations': 'LAM',
  'Ezekiel': 'EZK',
  'Daniel': 'DAN',
  
  // Minor Prophets
  'Hosea': 'HOS',
  'Joel': 'JOL',
  'Amos': 'AMO',
  'Obadiah': 'OBA',
  'Jonah': 'JON',
  'Micah': 'MIC',
  'Nahum': 'NAH',
  'Habakkuk': 'HAB',
  'Zephaniah': 'ZEP',
  'Haggai': 'HAG',
  'Zechariah': 'ZEC',
  'Malachi': 'MAL',
  
  // Gospels
  'Matthew': 'MAT',
  'Mark': 'MRK',
  'Luke': 'LUK',
  'John': 'JHN',
  
  // Acts and Epistles
  'Acts': 'ACT',
  'Romans': 'ROM',
  '1 Corinthians': '1CO',
  '2 Corinthians': '2CO',
  'Galatians': 'GAL',
  'Ephesians': 'EPH',
  'Philippians': 'PHP',
  'Colossians': 'COL',
  '1 Thessalonians': '1TH',
  '2 Thessalonians': '2TH',
  '1 Timothy': '1TI',
  '2 Timothy': '2TI',
  'Titus': 'TIT',
  'Philemon': 'PHM',
  'Hebrews': 'HEB',
  'James': 'JAS',
  '1 Peter': '1PE',
  '2 Peter': '2PE',
  '1 John': '1JN',
  '2 John': '2JN',
  '3 John': '3JN',
  'Jude': 'JUD',
  'Revelation': 'REV',
};

/**
 * Converts a scripture reference to use abbreviated book names
 * Example: "Genesis 1:1" -> "GEN 1:1"
 * Example: "1 Corinthians 13:4-7" -> "1CO 13:4-7"
 */
export function abbreviateScripture(scripture: string): string {
  if (!scripture) return scripture;
  
  // Sort book names by length (longest first) to match multi-word books first
  const bookNames = Object.keys(BOOK_ABBREVIATIONS).sort((a, b) => b.length - a.length);
  
  let result = scripture;
  for (const bookName of bookNames) {
    const abbrev = BOOK_ABBREVIATIONS[bookName];
    // Use word boundary to avoid partial matches
    const regex = new RegExp(`\\b${bookName}\\b`, 'gi');
    result = result.replace(regex, abbrev);
  }
  
  return result;
}

/**
 * Converts multiple scripture references (separated by semicolons or commas)
 * Example: "Genesis 1:1-3; Exodus 20:1-17" -> "GEN 1:1-3; EXO 20:1-17"
 */
export function abbreviateScriptures(scriptures: string): string {
  if (!scriptures) return scriptures;
  
  // Split by common separators and process each part
  const parts = scriptures.split(/([;,])/);
  return parts.map(part => {
    // If it's a separator, return as is
    if (part.match(/^[;,]$/)) return part;
    // Otherwise abbreviate
    return abbreviateScripture(part.trim());
  }).join('');
}

/**
 * Gets the abbreviation for a specific book name
 */
export function getBookAbbreviation(bookName: string): string {
  return BOOK_ABBREVIATIONS[bookName] || bookName;
}

/**
 * Torah book names with their abbreviations for filter buttons
 */
export const TORAH_BOOKS = [
  { name: "Genesis", hebrew: "בראשית", abbrev: "GEN" },
  { name: "Exodus", hebrew: "שמות", abbrev: "EXO" },
  { name: "Leviticus", hebrew: "ויקרא", abbrev: "LEV" },
  { name: "Numbers", hebrew: "במדבר", abbrev: "NUM" },
  { name: "Deuteronomy", hebrew: "דברים", abbrev: "DEU" },
];
