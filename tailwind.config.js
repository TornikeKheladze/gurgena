/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeWhite: "#DDCCAA",
        primaryRed: "#D71820",
        textBlack: "#333333",
      },
      height: {
        screen80: "80vh",
      },
      backgroundImage: {
        1: 'url("./images/1.jpg")',
        2: 'url("./images/2.jpg")',
        3: 'url("./images/3.jpg")',
        4: 'url("./images/4.jpg")',
        5: 'url("./images/5.jpg")',
      },
      boxShadow: {
        button: "0px 3px 0px 0px #D71820",
      },
    },
  },
  plugins: [],
};
