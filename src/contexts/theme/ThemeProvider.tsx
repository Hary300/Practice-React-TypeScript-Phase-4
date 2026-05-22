import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme } from '../../types/Theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = document.documentElement.classList;
    if (theme === 'dark') {
      root.add('dark');
    } else {
      root.remove('dark');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
