/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'], //Path to all my template files
  darkMode:'class', //Make a class for dark theme 
  theme: {
    extend: {
      fontFamily:{ //Chose Font Type
        inter:['inter','serif']
      }
    },
  },
  plugins: [],
}

