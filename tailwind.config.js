module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        archivo: ["archivo", "sans-serif"],
        garamond: ["garamond", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        prata: ['Prata', 'serif']
        
      },
      colors: {
        'primary' : '#a04e1f',
        'choco' : '#A04E1F',
        'choco-border': '#D4A976',
        'choco-weak' : 'rgba(160, 78, 31, .4)',
        'whiteWeak' : '#E6E6E6',
        'gray-overlay' : 'rgba(103, 103, 103, .7)',
        'whitegray': '#939393'
      },
      backgroundImage: {
        'vote' : "url('img/vote/BG.png')"
      }
    },
  },
  plugins: [],
}