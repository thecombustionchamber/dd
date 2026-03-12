/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
      },
      keyframes: {
        "blue-glow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))",
          },
          "50%": {
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        },
      },
      animation: {
        "blue-glow": "blue-glow 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
