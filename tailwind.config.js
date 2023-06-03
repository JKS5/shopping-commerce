/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#222222",
        footer: "#757575",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
      fontFamily: {
        sans: ["graphik", "helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
