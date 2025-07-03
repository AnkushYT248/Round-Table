'use client'
import React, { useContext } from 'react';
import { ThemeModeContext } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeChanger = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`rounded-full p-2 border shadow transition-colors duration-300}`}
    >
      <span className="transition-all duration-300 flex items-center justify-center">
        {darkMode ? <Sun className="scale-110" /> : <Moon className="scale-110" />}
      </span>
    </button>
  );
};

export default ThemeChanger;