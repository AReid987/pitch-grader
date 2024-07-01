import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primitive colors
        primary: {
          100: "#d8e6fd",
          200: "#b1cdfb",
          300: "#89b4fa",
          400: "#629bf8",
          500: "#3b82f6",
          600: "#2f68c5",
          700: "#234e94",
          800: "#183462",
          900: "#0c1a31",
        }, // blue-500
        secondary: {
          100: "#f7dafc",
          200: "#f0b5f9",
          300: "#e890f5",
          400: "#e16bf2",
          500: "#d946ef",
          600: "#ae38bf",
          700: "#822a8f",
          800: "#571c60",
          900: "#2b0e30",
        },
        text: {
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#efefef",
          400: "#eaeaea",
          500: "#e5e5e5",
          600: "#b7b7b7",
          700: "#898989",
          800: "#5c5c5c",
          900: "#2e2e2e",
        },
        success: {
          100: "#cff1e6",
          200: "#9fe3cd",
          300: "#70d5b3",
          400: "#40c79a",
          500: "#10b981",
          600: "#0d9467",
          700: "#0a6f4d",
          800: "#064a34",
          900: "#03251a",
        },
        warning: {
          100: "#fdecce",
          200: "#fbd89d",
          300: "#f9c56d",
          400: "#f7b13c",
          500: "#f59e0b",
          600: "#c47e09",
          700: "#935f07",
          800: "#623f04",
          900: "#312002",
        },
        error: {
          100: "#fcdada",
          200: "#f9b4b4",
          300: "#f58f8f",
          400: "#f26969",
          500: "#ef4444",
          600: "#bf3636",
          700: "#8f2929",
          800: "#601b1b",
          900: "#300e0e",
        },

        // Semantic colors
        background: {
          DEFAULT: "#f8fafc",
          alt: "#f1f5f9",
        },
        surface: "#FFFFFF",
        "on-surface": "#0F172A",
        "on-background": "#1E293B",
        border: "#CBD5E1",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "32px"],
        "2xl": ["24px", "36px"],
        "3xl": ["30px", "44px"],
        "4xl": ["36px", "48px"],
      },
      spacing: {
        "0": "0",
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
        "8": "64px",
        "10": "80px",
        "12": "96px",
        "16": "128px",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
