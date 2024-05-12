/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
      colors: {
        primary: '#FF6436',
        secondary: '#191A1F',
        tersier: {
          100: '#FEFEFE',
          200: '#F4F4F4',
          300: '#D5ECFA'
        }
      }
    }
  },
  plugins: []
}
