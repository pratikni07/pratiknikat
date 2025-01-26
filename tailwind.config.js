/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"], // Add Cabin font
        unigeo: ["unigeo", "sans-serif"], // Add Unigeo if needed
        oswald: ["Oswald", "sans-serif"], // Add Oswald if needed
      },
    },
  },
  plugins: [],
};
