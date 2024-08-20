/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors:{
        primary:"#f1f5f9",
        secondary:"#1e293b",
        // tertiary:"#800080"
        tertiary:"#2563eb"
      },
      fontFamily:{
        poiret:["Poiret One","sans-serif"],
        play:["Playfair Display","serif"],
        Caveat:["Caveat","cursive"],
        Bodoni:["Bodoni Moda SC","serif"]
      }
    },
  },
  plugins: [],
}

