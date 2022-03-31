module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'table-fixtures-page': "url('..//public/Assets/table-fixtures-wallpaper.jpg')",
        'team-select-page': "url('..//public/Assets/team-select-page-wallpaper.jpg')",
        'root-page': "url('..//public/Assets/root-page-wallpaper.jpg')",
      },
      colors: {
        'main-item-box-background': '#C6CADD',
        'text-primary': "#33314E",
        UI: {
          activeButton: {
            border: "#06113D",
            text: "#fff",
            bg: "#02094F"
          },
          button: {
            bg: "#D6DCF1",
            text: "#33314E"
          }
        }
      },
    },
  },
  plugins: [],
}