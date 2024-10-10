/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#DB4444",
        green: "#00FF66",
        btnHover: "#E07575",
        blackBG: "#242425",
        black: "#01070A",
        text: "#FAFAFA",
        grey: "#7D8184",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(270deg,#1b1429,#140f23)",
        iphoneHero: "url('./assets/iphone-hero.png')",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
