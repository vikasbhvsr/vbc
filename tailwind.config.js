/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Avenir'],
      'body': ['Avenir'],
      'sans': ['Avenir']
    },
    extend: {},
  },
  plugins: [],
}