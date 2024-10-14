/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B', // Warm color example
        secondary: '#D97706',
        accent: '#FACC15',
      },
    },
  },
  plugins: [],
}
