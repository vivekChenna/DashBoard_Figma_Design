/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        Nishyan: "url(./src/assets/Images/NishyanIcon.png)",
      },
    },
  },
  plugins: [],
};
