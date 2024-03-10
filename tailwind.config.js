/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00C29F",
        },
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
