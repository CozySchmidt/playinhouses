/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        league_blue_header: "#0A1428",
        league_blue_body: "#1e293b",
        league_gold: "#c89b3c",
      },
      fontFamily: {
        beaufortheavy: ["BeaufortHeavy", "sans-serif"],
        beaufortheavyitalic: ["BeaufortHeavyItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
