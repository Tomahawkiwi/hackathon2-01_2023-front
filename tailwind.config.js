/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: (theme) => ({
      "primary-blue-gradient":
        "linear-gradient(157.47deg, #00A1B4 4.9%, #009FE3 95.65%)",
    }),
    extend: {},
  },
  plugins: [],
};
