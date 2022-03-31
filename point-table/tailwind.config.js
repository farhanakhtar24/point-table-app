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
            border: "#A08A17",
            text: "#fff",
            bg: "#000"
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