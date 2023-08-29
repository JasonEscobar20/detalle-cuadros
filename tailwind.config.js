/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'display': ['Montserrat', 'sans-serif']
    },
    extend: {
      height: {
        '100': '28rem',
        '104': '32rem',
      }
    },
  },
  plugins: [require("daisyui")],
}

