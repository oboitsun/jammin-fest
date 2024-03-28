/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        40: "2.5rem",
      },
      colors: {
        peach: "#FF8C00",
        green: "#3B6E2B",
        error: "#EE584D",
        mustard: "#FF8C00",
        purp: "#7200FF",
      },
    },
  },
  plugins: [],
};
