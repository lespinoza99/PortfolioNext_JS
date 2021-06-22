module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black-darkest': 'rgba(0, 0, 0, 0.9)',
      'black-darker': 'rgba(0, 0, 0, 0.75)',
      'black-dark': 'rgba(0, 0, 0, 0.6)',
      'black-half': 'rgba(0, 0, 0, 0.5)',
      'black-light': 'rgba(0, 0, 0, 0.4)',
      'black-lighter': 'rgba(0, 0, 0, 0.25)',
      'black-lightest': 'rgba(0, 0, 0, 0.1)'
    },
    extend: {
      keyframes: {
        'fadeInUp': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fadeIn':{
          '0%': {
            opacity: '0',
          },
          '100%':{
            opacity: '1'
          },
        }
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.5s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
