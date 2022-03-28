module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'world-cup': "url('..//components/Assets/world-cup.jpg')",
      }
    },
  },
  plugins: [],
}