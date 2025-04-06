import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Monserrat",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "#FF7800",
        secondary: "#252525",
        tertiary: "#0C0E14",
        background: "#0F1219",
        border: "#A54E00",
      },
      keyframes: {
        bounceGlow: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        bounceUp: {
          "0%, 100%": { transform: "translateY(10%) scale(0.9)" },
          "50%": { transform: "translateY(-10%) scale(1)" },
        },
        bounceDown: {
          "0%, 100%": { transform: "translateY(-10%) scale(0.9)" },
          "50%": { transform: "translateY(10%) scale(1)" },
        },
      },
      animation: {
        bounceGlow: "bounceGlow 5s ease-in-out infinite",
        bounceUp: "bounceUp 5s ease-in-out infinite",
        bounceDown: "bounceDown 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
