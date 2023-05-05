/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
      keyframes: {
        float: {
          "0%": { transform: "translatey(0px)" },
          "40%": { transform: "translatey(-20px)" },
          "80%": { transform: "translatey(10px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
      animation: {
        float: "float 4s linear infinite",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
