/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(220, 98%, 61%)",
      "gradient-1": "hsl(192, 100%, 67%)",
      "gradient-2": "hsl(280, 87%, 65%)",

      "LT-very-light-gray": "hsl(0, 0%, 98%)",
      "LT-very-light-grayish": "hsl(236, 33%, 92%)",
      "LT-light-grayish-blue": "hsl(233, 11%, 84%)",
      "LT-dark-grayish-blue": "hsl(236, 9%, 61%)",
      "LT-very-dark-grayish-blue": "hsl(235, 19%, 35%)",

      "DT-very-dark-blue": "hsl(235, 21%, 11%)",
      "DT-very-dark-blue-desaturated": "hsl(235, 24%, 19%)",
      "DT-light-grayish-blue": "hsl(234, 39%, 85%)",
      "DT-dark-grayish-blue": "hsl(234, 11%, 52%)",
      "DT-very-dark-grayish-blue": " hsl(237, 14%, 26%)",
      "DT-very-dark-grayish-blue-v2": "hsl(233, 14%, 35%)",
    },
    fontWeight: {
      400: "400",
      700: "700",
    },

    screens: {
      desktop: "1200px",
    },
    extend: {
      fontSize: {
        "body-mb": "12px",
        options: "14px",
        logo: "40px",
      },
      boxShadow: {
        input: "0px 35px 50px -15px hsla(235,19%,80%,0.5) ",
        "input-dark": "0px 35px 50px -15px hsla(0,0%,0%,0.5) ",
      },
    },
  },
  plugins: [
    "@tailwindcss/typography",
    "@tailwindcss/forms",
    "@tailwindcss/aspect-ratio",
  ],
};
