/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        marope: ['Manrope', 'sans-serif'],
      },
      colors: {
        darkerBlue: '#080C20',
        accent: '#3EE9E5',
        gray: '#777F98',
        darkBlue: '#093f68',
        error: '#FF2965',
      },
    },
  },
  plugins: [],
};
