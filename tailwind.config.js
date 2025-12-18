/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Hebrew"', 'sans-serif'],
        open: ['"Open Sans Hebrew"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#F54387', // Pink
          dark: '#F42574',
          light: '#F14285',
        },
        secondary: {
          DEFAULT: '#040035', // Dark Blue
          light: '#0A0B1F',
        },
        accent: {
          yellow: '#F9B816',
          orange: '#F66E45',
          blue: '#41AEF7',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          off: '#FDF9FC',
          gray: '#FBFBFB',
        }
      },
      boxShadow: {
        'card': '4px 4px 20px 0px rgba(0, 0, 0, 0.05)',
        'card-hover': '4px 4px 25px 0px rgba(0, 0, 0, 0.1)',
        'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #F54387 0%, #F77541 100%)',
        'gradient-text-blue': 'linear-gradient(90deg, #F54387 0%, #41AEF7 100%)',
      }
    },
  },
  plugins: [],
}
