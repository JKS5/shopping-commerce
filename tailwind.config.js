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
        banner1: `url('../public/images/Women/fashion_banner.jpg')`,
        banner2: `url('../public/images/Men/man_With_Sunglassess.jpg')`,
        banner3: `url('../public/images/Men/man_redSuit_Rings_Bag_Italy.jpg')`,
      },

      fontFamily: {
        sans: ["graphik", "helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
