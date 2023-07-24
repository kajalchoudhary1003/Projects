/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors:{
        'darkest':'#27374D',
        'darker':'#526D82',
        'dark': '#9DB2BF',
        'light':'#DDE6ED',
      },
    },
  },
  plugins: [],
}

