/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['"Archivo Black"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        brand: {
          yellow: "#FFCD00",
          yellow2: "#FFCE09",
          dark: "#120F00",
          black: "#1F1F1F",
          input: "#FFF4C8",
        },
      },
      maxWidth: {
        custom: "1300px",
      },
    },
  },
  plugins: [],
}

