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
      Signika: ["Signika Negative", "sans-serif"],
      Caveat: ["Caveat Brush", "sans-serif"],
    },
    textColor: {
      "custom-white": "#FFFFFF",
      "custom-dark": "#434343",
      "custom-blue-endGrad": "#019FE3",
      "custom-red": "#FC5B38",
      "custom-green": "#00D2A0",
    },
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "600",
      bold: "700",
    },
    backgroundColor: {
      "custom-white": "#FFFFFF",
      "custom-dark": "#434343",
      "custom-blue-endGrad": "#019FE3",
    },
    backgroundImage: (theme) => ({
      "primary-blue-gradient":
        "linear-gradient(157.47deg, rgba(0, 161, 180, 1), rgba(0, 159, 227, 1))",
      "primary-blue-gradient-to-transparent":
        "linear-gradient(rgba(0, 161, 180, 1), rgba(0, 159, 227, 0))",
      "CTA-ok-green-gradient":
        "linear-gradient(rgba(0, 161, 180, 1), rgba(0, 210, 160, 1))",
      "error-red-gradient":
        "linear-gradient(rgba(252, 91, 56, 1), rgba(194, 152, 0, 1))",
    }),

    extend: {},
  },
  plugins: [],
};
