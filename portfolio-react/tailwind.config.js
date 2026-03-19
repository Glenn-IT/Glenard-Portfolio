/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Custom color palette
        amethyst: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#9B59B6", // Amethyst
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        slate_blue: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6A5ACD", // Slate Blue
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        violet_blue: {
          50: "#f3f0ff",
          100: "#ebe5ff",
          200: "#d9cfff",
          300: "#bfaeff",
          400: "#a385ff",
          500: "#4B0082", // Violet Blue / Indigo
          600: "#6241e8",
          700: "#5433d6",
          800: "#4527c4",
          900: "#3b1eb2",
        },
        klein_blue: {
          50: "#e8f0fe",
          100: "#c6d9fd",
          200: "#93b6fb",
          300: "#5e93f8",
          400: "#3578f5",
          500: "#002FA7", // International Klein Blue
          600: "#0026a0",
          700: "#001e95",
          800: "#001589",
          900: "#000d7a",
        },
        federal_blue: {
          50: "#e8eefe",
          100: "#c4d1fc",
          200: "#8fa8f8",
          300: "#5a7ef4",
          400: "#2e5ef0",
          500: "#00008B", // Federal Blue
          600: "#00006e",
          700: "#000058",
          800: "#000042",
          900: "#00002c",
        },
        // Primary shades used across the site
        primary: "#9B59B6", // Amethyst
        secondary: "#6A5ACD", // Slate Blue
        accent: "#002FA7", // Klein Blue
        dark: "#0a0a1a",
        card_dark: "#0f0f2a",
        surface: "#131340",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 40%, #131340 100%)",
        "card-gradient": "linear-gradient(145deg, #0f0f2a, #1a1a4a)",
        "btn-gradient": "linear-gradient(135deg, #9B59B6, #6A5ACD)",
        "btn-gradient-2": "linear-gradient(135deg, #002FA7, #00008B)",
        "glow-gradient":
          "radial-gradient(ellipse at center, rgba(155,89,182,0.15) 0%, transparent 60%)",
        "section-gradient":
          "linear-gradient(180deg, #0a0a1a 0%, #0d0d2a 50%, #0a0a1a 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(155,89,182,0.5), 0 0 10px rgba(155,89,182,0.3)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(155,89,182,0.8), 0 0 40px rgba(155,89,182,0.5)",
          },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(155,89,182,0.4)",
        "glow-blue": "0 0 20px rgba(0,47,167,0.4)",
        card: "0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 20px 60px rgba(155,89,182,0.3)",
      },
    },
  },
  plugins: [],
};
