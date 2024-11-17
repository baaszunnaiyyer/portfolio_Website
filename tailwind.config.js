/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#f83d0c'
      },
      transitionDuration: {
        '3000': '3000ms',
      },
      lineHeight: {
        '12': '3rem',
      }
    },
  },
  plugins: [],
}

