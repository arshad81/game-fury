/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'poinciana':'#da392b',
        'montego-bay'  :'#f6f4f0',
        'midnight-velvet':'#272443',
        'vanilla-pudding':'#f6e66a'
      },
      fontFamily: {
        'cursive':['customCursive'],
        'suez':['suez']
      },
    },
  },
  plugins: [],
}