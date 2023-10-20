/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sml: "520px",
      xsm: "285px",
    },
    extend: {
      fontFamily: {
        lucida: [
          "Trebuchet MS",
          "Lucida Sans Unicode",
          "Lucida Grande",
          "Lucida Sans",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        redOrange: " #d84869",
        pink1: "#ec0076",
        orange1: "#ff4b1e",
        blue1: "#5648d8",
        violet1: "#8641f4",
        borderColor: "#ffffff30",
        cardColor: "#fffff1a",
      },
      backgroundColor: {
        transparentWhite: "#ffffff1a",
        transparentWhite2: "#ffffff00",
      },

      keyframes: {
        circle1animate: {
          "50%": { transform: "translateX(-33%) translateY(-4%) scale(1.2)" },
        },
        circle2animate: {
          "50%": { transform: "translateX(20%) translateY(2%) scale(1.2)" },
        },
      },
      animation: {
        circle1animate: "circle1animate 15s infinite",
        circle2animate: "circle2animate 8s infinite",
      },
    },
  },
  plugins: [],
};
