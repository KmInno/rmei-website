/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    "animate-fadeIn",
    "animate-fadeIn200",
    "animate-fadeIn400",
    "animate-fadeIn600",
    "animate-slideUp",
    "animate-slideUp200",
    "animate-slideUp400",
    "animate-slideLeft",
    "animate-slideRight",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        slideUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        slideRight: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        fadeIn200: "fadeIn 0.8s ease-out 0.2s forwards",
        fadeIn400: "fadeIn 0.8s ease-out 0.4s forwards",
        fadeIn600: "fadeIn 0.8s ease-out 0.6s forwards",

        slideUp: "slideUp 0.8s ease-out forwards",
        slideUp200: "slideUp 0.8s ease-out 0.2s forwards",
        slideUp400: "slideUp 0.8s ease-out 0.4s forwards",

        slideLeft: "slideLeft 0.8s ease-out forwards",
        slideRight: "slideRight 0.8s ease-out forwards",
      },

      backgroundImage: {
        "hero": "url('/images/hero-image.webp')",

      },

      width: {
        '500': '300px',
      },
      height: {
        '500': '300px',
      },
      width: {
        '500': '500px',
      },
      height: {
        '500': '500px',
      },

      plugins: [],
    }
  },
};

