/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#ffa500',
      },
    },
    screens: {
      mobile: "640px",
      tablet: "960px",
      desktop: "1360px",
    }
  },
  plugins: [require("daisyui")],
}

