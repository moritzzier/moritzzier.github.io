const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './app/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Comfortaa', ...defaultTheme.fontFamily.sans],
      'body': ['Noto Serif', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        'typo-dark': '#693A3B',
        'typo-light': '#A45B5D',
        'background': '#E8D6CB',
        'paper': '#D0ADA1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
