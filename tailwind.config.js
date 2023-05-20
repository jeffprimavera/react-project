/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: "640px",
      tablet: "960px",
      desktop: "1280px",
    },
    container: {
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1200px",
      },
    },
  },
  plugins: [require("daisyui")],
}

