/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a4f7',
          500: '#0c87e8',
          600: '#006ac6',
          700: '#0254a3',
          800: '#064786',
          900: '#0b3c6f',
          950: '#062548',
        },
        navy: {
          800: '#0b1329',
          900: '#070d1e',
          950: '#030712',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          accent: '#00f2fe',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(12, 135, 232, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 242, 254, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
