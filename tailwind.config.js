/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // prettier-ignore
        'Poppins' : ['Poppins',' sans-serif'],
        // prettier-ignore
        'DMSans' : ['DM Sans', 'sans-serif'],
      },
      colors: {
        lightMode: "#F5F5F5",
        darkMode: "#191919",
        lightContent: "#A7A7A7",
        darkContent: "#666666",
        primary: "#42446E",
        primaryDark: "#CCCCCC",
        leftGradient: "#13B0F5",
        rightGradient: "#E70FAA",
        buttonText: "#018C0F",
        buttonSuccess: "#D7FFE0",
      },
      boxShadow: {
        cardShadow: "2px 2px 100px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
