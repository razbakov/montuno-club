import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9ba',
          400: '#ec7896',
          500: '#df4d75',
          600: '#cb2d5d',
          700: '#ab1f4a',
          800: '#8f1d41',
          900: '#7a1c3c',
          950: '#440a1d',
        },
        gold: {
          50: '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd24a',
          400: '#ffbe20',
          500: '#f99b07',
          600: '#dd7302',
          700: '#b75006',
          800: '#943d0c',
          900: '#7a330d',
          950: '#461902',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
