/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#0f1533',
        dusk: '#263463',
        dusk2: '#3a4b80',
        gold: '#ffd89c',
        goldsoft: '#ffe9c2',
        teal: '#6fb8ad',
        rose: '#e79a86',
        cloth: '#f5f0e6',
      },
      fontFamily: {
        display: ['Comfortaa', 'sans-serif'],
        body: ['Mulish', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%,100%': { transform: 'scaleY(1) translateX(0)' },
          '30%': { transform: 'scaleY(1.08) translateX(1px)' },
          '60%': { transform: 'scaleY(0.94) translateX(-1px)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseGlow: {
          '0%,100%': { transform: 'scale(1)', opacity: 0.85 },
          '50%': { transform: 'scale(1.15)', opacity: 1 },
        },
      },
      animation: {
        flicker: 'flicker 1.6s ease-in-out infinite',
        floaty: 'floaty 2.6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
