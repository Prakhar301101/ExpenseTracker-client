/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
    colors:{
      'white':'white',
      'bgpri':'#4A55A2',
      'bgsec':'#7895CB',
      'bgter':'#A0BFE0',
      'bgquart':'#C5DFF8'
    },
    fontFamily: {
      Roboto:'Roboto'
    }
  }
  },
  plugins: [],
}