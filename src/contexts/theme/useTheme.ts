import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export default function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return theme;
}
