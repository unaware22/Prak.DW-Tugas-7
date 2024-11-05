/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['indes.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['HomeVideoFont','sans-serif'],
      },
      boxShadow: {
        'custom': '3px 3px 0px black',
        'custom-hover': '1px 1px 0px black'
      }
    },
  },
  plugins: [],
}

