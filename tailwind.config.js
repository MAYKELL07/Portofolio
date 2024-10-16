// tailwind.config.js

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add other directories if necessary
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Example primary color
        accent: '#F59E0B',  // Example accent color
        secondary: '#F3F4F6', // Light mode secondary color
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
