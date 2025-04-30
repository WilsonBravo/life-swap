/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./common/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        background: "#E6F9E6",
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
          100: "#E6F9E6",
          200: "#C2EDC2",
          300: "#9DDF9D",
          400: "#79D279",
          500: "#54C554",
          600: "#43A443",
          700: "#338033",
          800: "#225A22",
          900: "#113011",
        },
      },
      fontFamily: {
        "u-regular": ["Ubuntu-Regular"],
        "u-bold": ["Ubuntu-Bold"],
        "u-bold-italic": ["Ubuntu-BoldItalic"],
        "u-italic": ["Ubuntu-Italic"],
        "u-light": ["Ubuntu-Light"],
        "u-light-italic": ["Ubuntu-LightItalic"],
        "u-medium": ["Ubuntu-Medium"],
        "u-medium-italic": ["Ubuntu-MediumItalic"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "ui-sans-serif",
        }),
      },
    },
  },
  plugins: [],
};
