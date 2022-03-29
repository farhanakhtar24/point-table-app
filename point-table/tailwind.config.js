module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'table-fixtures-page': "url('..//components/Assets/table-fixtures-wallpaper.jpg')",
        'team-select-page': "url('..//components/Assets/team-select-page-wallpaper.jpg')",
        'root-page': "url('..//components/Assets/root-page-wallpaper.jpg')",
      },
      colors: {
        'main-item-box-background': '#C6CADD',
        'text-primary': "#33314E",
      },
    },
  },
  plugins: [],
}