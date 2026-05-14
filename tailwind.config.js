/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0b1315',
        primary: '#c9ab81',
        default: '#715b3e',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        cursive: ['Mrs Saint Delafield', 'cursive'],
        display: ['Limelight', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
