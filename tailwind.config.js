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
        banner0: `url('../public/images/Women/fashion_banner_Edited.jpg')`,
        banner1: `url('../public/images/Men/man_With_Sunglassess_Edited.jpg')`,
        banner2: `url('../public/images/Men/man_redSuit_Rings_Bag_Italy_Edited.jpg')`,
      },
      fontFamily: {
        sans: ["graphik", "helvetica", "sans-serif"],
      },
      keyframes: {
        "fade-in-100px-0": {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-100px-0-btn1": {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-right-left": {
          "0%": { transform: "translateX(25%)", opacity: "0" },
          "50%": { transform: "translateX(20%)", opacity: "0.5" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "width-color-transition": {
          "0%": { width: "16px", backgroundColor: "#757575" },
          "100%": { width: "48px", backgorundColor: "#ED1C24" },
        },
        "width-color-transition-reverse1": {
          "0%": { width: "48px", backgorundColor: "#ED1C24" },
          "100%": { width: "16px", backgroundColor: "#757575" },
        },
      },
      animation: {
        "fade-in": "fade-in-100px-0 1.5s ease-in-out",
        "fade-in-50": "fade-in-out-0-50-100 1.5s ease-in-out",
        "btn-fade-in": "fade-in-100px-0-btn1 3s ease-in-out ",
        "text-fade-in": "fade-in-100px-0-btn1 2s ease-in-out",
        "width-color-transition": "width-color-transition 0.6s ease-in-out ",
        "width-color-transition-reverse":
          "width-color-transition-reverse1 0.6s ease-in-out ",
      },
    },
  },
  plugins: [],
};
