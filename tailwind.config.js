/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      slate: colors.slate,
      pink: colors.pink,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'primaryColor1': '#4A3AFF',
      'secondaryColor1': '#ffc226',
      'darkBg': '#9E96FF',
      'lightDarkBg': '#DEDBFF',
      'neutral': {
        100: '#ffffff',
        200: '#d9dbe9',
        300: '#eff0f6',
        400: '#d9dbe9',
        500: '#a0a3bd',
        600: '#6e7191',
        700: '#4e4b66',
        800: '#14142b',
      },
    },
  },
  important: '#app',
  plugins: [],
}
