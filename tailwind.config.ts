import type { Config } from 'tailwindcss'

const wine = {
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
}

const gold = {
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
}

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        wine,
        gold,
        // wedance-site-kit's theme tokens, in Montuno's colors.
        site: {
          'bg': wine[950],
          'surface': wine[900],
          'border': wine[800],
          'border-strong': wine[700],
          'border-button': wine[600],
          'heading': '#ffffff',
          'text': wine[200],
          'muted': wine[300],
          'subtle': wine[400],
          'faint': wine[500],
          'accent': gold[500],
          'highlight': gold[400],
          'on-accent': wine[950],
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
