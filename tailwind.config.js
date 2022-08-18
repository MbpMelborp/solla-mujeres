/** @type {import('tailwindcss').Config} */
// import formKitTailwind from '@formkit/themes/tailwindcss'
const formKitTailwind = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './formkit.config.{js,ts}',
    './theme.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#4fd66a',
          100: '#45cc60',
          200: '#3bc256',
          300: '#31b84c',
          400: '#27ae42',
          500: '#1da438',
          600: '#139a2e',
          700: '#099024',
          800: '#00861a',
          900: '#007c10',
        },
        yellow: {
          50: '#ffe532',
          100: '#ffdb28',
          200: '#ffd11e',
          300: '#ffc714',
          400: '#ffbd0a',
          500: '#ffb300',
          600: '#f5a900',
          700: '#eb9f00',
          800: '#e19500',
          900: '#d78b00',
        },
      },
      maxWidth: {
        '2xs': '10rem',
      },
    },
  },
  // plugins: [require('@formkit/themes/tailwindcss')],
  plugins: [formKitTailwind],
}
