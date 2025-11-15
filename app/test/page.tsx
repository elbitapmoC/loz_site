'use client';

import { useTheme } from '@/components/providers/ThemeProvider';

export default function TestPage() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <h1>Test Page</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}