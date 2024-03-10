/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "verde" : "#496F5D",
        "verde-lima" : "#B6EEA6",
        "gris" : "#E7E6E6",
        "carbon" : "#1E1E1E",
      }
    },
  },
  plugins: [],
}

