/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(47, 80, 61, 0.12)',
        glow: '0 0 0 1px rgba(212, 175, 55, 0.22), 0 24px 60px rgba(47, 80, 61, 0.14)',
      },
      colors: {
        forest: '#2F503D',
        gold: '#C9A24A',
        goldSoft: '#E7D39A',
      },
      fontFamily: {
        display: ['Rochester', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(201,162,74,0.12), transparent 28%), radial-gradient(circle at bottom right, rgba(47,80,61,0.12), transparent 34%)',
      },
    },
  },
  plugins: [],
}
