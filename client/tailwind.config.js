/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    spacing: {
      section: "1rem",
      element: "1rem",
    },
    fontFamily: {
      kode: ['"Kode Mono"', "monospace"],
      concert: ['"Concert One"', "sans-serif"],
    },
    fontSize: {},
    colors: {
      customYellow: "#fff559",
      rgbYellow: "rgba(255,245,89,255)",
    },
  },
};
export const plugins = [];
