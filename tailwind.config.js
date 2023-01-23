/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'chocolate':'#291507'
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        mystery:["Mystery Quest", ...defaultTheme.fontFamily.sans],
        lora:["Lora", ...defaultTheme.fontFamily.sans],
        hind:["Hind Madurai", ...defaultTheme.fontFamily.sans],
        tillana:["Tillana"],

      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fill, minmax(18rem, 1fr))',
      }
    },
  },
  plugins: [],
}
