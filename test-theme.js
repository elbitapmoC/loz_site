// Simple test to check if exports are working
const { useTheme, ThemeProvider } = require('./app/components/providers/ThemeProvider.tsx');

console.log('useTheme:', typeof useTheme);
console.log('ThemeProvider:', typeof ThemeProvider);

if (typeof useTheme === 'function') {
  console.log('useTheme is a function - SUCCESS');
} else {
  console.log('useTheme is NOT a function - PROBLEM');
}