/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mochiypop: ["Mochiy Pop P One", "sans-serif"],
      },
      backgroundImage: {
        main: "url('/main/background.png')",
      },
      width: {
        120: "30rem",
        180: "45rem",
      },
      spacing: {
        120: "30rem",
        144: "37rem",
        320: "80rem",
      },
      colors: {
        twitter: "#0796ed",
        "twitter-hover": "#096dab",

        brown: "#D1B37D",
        "brown-dark": "#ba9f6e",

        base: "#fffcf5",
        "base-hover": "#edeae4",

        first: "#ffca47",
        second: "#fff2d8",
        third: "#dbad3b",
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
        dot: ["DotGothic16", "sans-serif"],
      },
    },
  },
};
