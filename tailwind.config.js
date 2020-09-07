module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    margin: ['first', 'responsive'],
  },
  plugins: [],
}
