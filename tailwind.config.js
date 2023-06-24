/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        "#FBD1A1": "#FBD1A1",
        "#secundario": "#F79E38",
        "#primario": "#C96C26",
        "#terciario": "#EDDBB3",
        "#231E1A": "#231E1A",
      },
      zIndex: {
         '0': 0,
         '10': 10,
         '20': 20,
         '30': 30,
         '40': 40,
         '50': 50,
         '25': 25,
         '50': 50,
         '75': 75,
         '100': 100,
         'auto': 'auto',
      }
    },
    plugins: [],
  },
};
