/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      fade: {
        "0%, 100%": { opacity: 0 },
        "50%": { opacity: 1 },
      },
      scale: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.2)" },
      },
    },
    animation: {
      "fade-infinite": "fade 5s ease-in-out infinite",
      "scale-loop": "scale 1s ease-in-out infinite",
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
      rgbYellow: "rgba(255,245,89,0.7)",
    },

    picSize: {
      15: "500px",
    },
  },
};
export const plugins = [];
