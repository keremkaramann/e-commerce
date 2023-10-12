/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "1050px",
      },
      colors: {
        "cs-Lgblue": "#243c5a",
        "secondary-text": "#737373",
        "primary-blue": "#23A6F0",
        "success-color": "#2DC071",
        "dark-navy": "#252B42",
        "alert-color": "#E77C40",
        "muted-color": "#BDBDBD",
      },
    },
    screens: {
      xs: "290px",
      mdCstm: "1120px",
    },
    gridTemplateColumns: {
      products: "grid-template-columns: repeat(4, minmax(auto,auto));",
    },
  },
  plugins: [],
};
