// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#1C1B1B',
        warmWhite: '#F4EDE4',
        softYellow: '#F3E5AB',
        richBrown: '#4A2E2B',
        accentOrange: '#FF8C42',
        accentTeal: '#56C0C1',
      },
    },
  },
  plugins: [],
};
