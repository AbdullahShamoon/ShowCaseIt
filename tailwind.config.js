/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'meow': ['"Meow Script"', 'cursive'],
      'sixtyfour': ['"Sixtyfour"', 'cursive'],
      'miltonian': ['"Miltonian Tattoo"', 'cursive'],
    }
  },
  plugins: [],
}