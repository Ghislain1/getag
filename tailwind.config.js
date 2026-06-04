/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--bg)',
          '2': 'var(--bg2)',
          '3': 'var(--bg3)',
        },
        glass: {
          DEFAULT: 'var(--glass)',
          hover: 'var(--glass-hover)',
          border: 'var(--glass-border)',
        },
        ink: {
          DEFAULT: 'var(--text)',
          '2': 'var(--text2)',
          '3': 'var(--text3)',
        },
        red: 'var(--red)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
