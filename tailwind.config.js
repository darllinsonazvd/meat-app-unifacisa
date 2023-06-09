/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: false,
    prefix: "daisy-",
  },
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "cover-img": "url('assets/img/restaurants/cover.png')",
        "cover-imgBig": "url('assets/img/restaurants/cover-big.png')",
      },
      boxShadow: {
        onTop: "0 -20px 20px -20px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "onTop-xl": "12px 12px 0 0",
      },
      rotate: {
        360: "360deg",
      },
      keyframes: {
        float: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-10px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
      animation: {
        float: "float 4s linear infinite",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), require("daisyui")],
  darkMode: "class",
};
