/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      spacing: {},
      borderRadius: {},
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        // BODY COLORS
        "light-bg-clr": "#FEFEFE",
        "dark-text-clr": "#09080A",
        // CARD COLORS
        "card-bg-clr": "#F7F6F8",
        // PRIMARY COLORS
        "primary-30": "#9AD0FF",
        "primary-50": "#BDE0FF",
        "primary-70": "#CBE7FF",
        // SECONDARY COLORS
        "secondary-30": "#9EDCAC",
        "secondary-50": "#D2F1D9",
      },
    },
  },
  plugins: [],
};

