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
    }
  },
  plugins: [require("daisyui")],
}

