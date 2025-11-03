export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  gold: '#E6B7A9', // rose gold soft
  rosegold: {
    light: '#F5CBA7',
    DEFAULT: '#E6B7A9',
    dark: '#DFAFA2',
  },

     softGray: "#f5f5f5",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
