module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        LightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#03a9f4",
        greenLight: "#61cea6",
        grayText: "#818597",
        LightGray: "#e2e2e2",
        grayBlue: "#6699CC",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
};
