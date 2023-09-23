import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#150E28",
        secondary: "#903AFF",
        tertiary: "#D434FE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        linkHover: "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
        background: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
        blink: "blink 2s linear infinite",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 1, 0.5, 1) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        slideDownCubiBezier: "slideDown 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        slideLeftToRight: "slideLeftToRight 1s ease-in-out",
        slideRightToLeft: "slideRightToLeft 1s ease-in-out",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
