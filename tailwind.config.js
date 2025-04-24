/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        background: "#E0FDF2",
        default: "#1E3D34",
        primary: {
          100: "#FFE8E4",
          200: "#FFCFC7",
          300: "#FFB1A3",
          400: "#FF937E",
          500: "#FF755A",
          600: "#F2644C",
          700: "#D85742",
          800: "#BF4A38",
          900: "#A63D2E",
        },
        secondary: {
          100: "#E6FAF6",
          200: "#C2F0E5",
          300: "#9DE6D5",
          400: "#79DCC4",
          500: "#54D2B3",
          600: "#43A991",
          700: "#33806D",
          800: "#22574A",
          900: "#112E27",
        },
      },
      fontFamily: {
        heading: ["Baloo2-Regular"],
        bold: ["Baloo2-Bold"],
        sans: ["System"],
      },
    },
  },
  plugins: [],
};
