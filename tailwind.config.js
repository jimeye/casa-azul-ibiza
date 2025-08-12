/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#020b46",
        primaryBg: "#f9f7f2"
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
