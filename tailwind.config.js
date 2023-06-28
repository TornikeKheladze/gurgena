/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeWhite: "#DDCCAA",
      },
      backgroundImage: {
        // logo: 'url("/images/logo.png")',
      },
    },
  },
  plugins: [],
};
