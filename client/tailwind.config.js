/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      fade: {
        "0%, 100%": { opacity: 0 },
        "50%": { opacity: 1 },
      },
    },
    animation: {
      "fade-infinite": "fade 5s ease-in-out infinite",
    },

    spacing: {
      section: "1rem",
      element: "1rem",
    },
    fontFamily: {
      kode: ['"Kode Mono"', "monospace"],
      concert: ['"Concert One"', "sans-serif"],
    },

    colors: {
      customYellow: "#fff559",
      rgbYellow: "rgba(255,245,89,255)",
    },
    width: {
      128: "40rem", // Custom width
    },
    height: {
      128: "40rem", // Custom height
    },
  },
};
export const plugins = [];
