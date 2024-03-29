/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      container: {
        center:true,
        padding: {
          DEFAULT: '2rem',
          sm: '1.5rem'
        }
      },
      colors:{
        "primary-color":"#EFC3A4",
        "primary-color-dark":"#4B1F0E",
        "primary-color-light":"#EFC3A4",
        "black-in":"#0E0504",
        "brown":"#4B1F0E",
      },
    },
  },
  plugins: [],
}

