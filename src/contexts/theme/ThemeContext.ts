import { createContext } from 'react';
import type { Theme } from '../../types/Theme';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
