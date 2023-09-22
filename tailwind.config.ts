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
    },
  },
  plugins: [],
};
export default config;
