/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wallpoet: ["Wallpoet", "sans-serif"],
      },
      colors: {
        "custom-grey": "#D9D9D9",
        "custom-darkgrey": "#B1ACAC",
        "custom-darkblue": "#011F26",
        "custom-black": "#011F26",
        "button-blue": "#025E73",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
