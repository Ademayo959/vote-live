import { defineConfig } from "tailwindcss"

export default defineConfig({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        'xs': {'max': '380px'},
      },
      colors: {
        primary: "#1c71e8",
      },
    },
  },
  plugins: [],
})

