/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "490px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      publicSans: ["Signika Negative", "sans-serif"],
      Caveat: ["Caveat Brush", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      "primary-blue-gradient":
        "linear-gradient(157.47deg, #00A1B4 4.9%, #009FE3 95.65%)",
    }),

    extend: {},
  },
  plugins: [],
};
