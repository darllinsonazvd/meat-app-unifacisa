/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
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
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
