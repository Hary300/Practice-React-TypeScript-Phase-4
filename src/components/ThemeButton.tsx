import useTheme from '../contexts/theme/useTheme';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-1 rounded-lg cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}
