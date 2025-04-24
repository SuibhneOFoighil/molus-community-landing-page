/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
      fontSize: {
        'base': '16px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      padding: {
        'touch': '12px',
      },
      colors: {
        primary: {
          light: '#E2D210',
          dark: '#F2E220'
        }
      }
    },
  },
  plugins: [],
};