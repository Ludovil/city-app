/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wallpoet: ["Wallpoet", "sans-serif"],
      },
      colors: {
        "custom-grey": "#D3D4D3",
        "custom-darkblue": "#025E73",
        "custom-black": "#011F26",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
