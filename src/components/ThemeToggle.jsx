import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full transition-all duration-200 relative overflow-hidden
                 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700
                 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:border-white/10 dark:text-slate-200
                 hover:scale-105 active:scale-95 cursor-pointer"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun 
          size={16} 
          className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
            theme === 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`} 
        />
        <Moon 
          size={16} 
          className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
            theme === 'light' ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
