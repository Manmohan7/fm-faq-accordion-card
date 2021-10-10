module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          dark: 'hsl(237, 12%, 33%)',
          DEFAULT: 'hsl(240, 6%, 50%)',
          light: 'hsl(240, 5%, 91%)',
          soft: 'hsl(240, 73%, 65%)'
        },
        desaturated: 'hsl(238, 29%, 16%)',
        red: 'hsl(14, 88%, 65%)',
        violet: 'hsl(273, 75%, 66%)',
      },
      rotate: {
        '-135': '-135deg'
      },
      transitionProperty: {
        'mh': 'max-height'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
