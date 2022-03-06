module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#E95E6D",
      },
      boxShadow: {
        ld: "0px 15px 30px #BB6BD9;",
      },
      backgroundImage: {
        sun: "url('/sun.svg')",
        moon: "url('/Moon.png')",
      },
    },
  },
  plugins: [],
};
