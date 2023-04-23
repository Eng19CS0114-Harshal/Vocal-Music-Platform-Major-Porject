/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#181E30",
        "primary-hover": "#151b2b",
        "secondary-main": "#13192C",
        "secondary-hover": "#243c5a",
        "white-hover": "#eeeeee62",
        "or-primary": "#ED9A38",
        "or-grad-strong": "#ED9A3880",
        "or-grad-weak": "#C9893E00",
      },
    },
  },
  plugins: [],
};
