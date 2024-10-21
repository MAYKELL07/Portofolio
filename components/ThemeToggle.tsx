// components/ThemeToggle.tsx

import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure that the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform duration-300 transform hover:scale-110"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-800 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
