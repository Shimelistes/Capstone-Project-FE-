import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 z-50"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;