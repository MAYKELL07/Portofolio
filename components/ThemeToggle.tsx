// components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 sm:w-20 sm:h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-between p-1 transition-all duration-300 focus:outline-none"
      aria-label="Toggle theme"
    >
      {/* Toggle Knob */}
      <span
        className={`absolute transition-all duration-300 transform ${isDarkMode ? 'translate-x-8 sm:translate-x-10 bg-yellow-500' : 'translate-x-0 bg-blue-500'} w-6 h-6 sm:w-8 sm:h-8 rounded-full`}
      ></span>
      
      {/* Sun Icon (Light Mode) */}
      <FaSun className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
      
      {/* Moon Icon (Dark Mode) */}
      <FaMoon className="text-blue-300 w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default ThemeToggle;
