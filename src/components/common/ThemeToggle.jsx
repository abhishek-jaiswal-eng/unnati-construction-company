import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex items-center justify-center w-9 h-9 rounded-pill
                 border border-border text-text-primary
                 hover:border-accent transition-colors duration-300"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
