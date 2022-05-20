module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        scroll: {
          100: '#eee',
          200: '#00a8ff',
        },
      },
      transitionTimingFunction: {
        custom: '.4s linear .2s',
        custom2: '.3s ease-in-out',
      },
      animationDuration: {
        10: '830ms',
        20: '680ms',
        30: '810ms',
        40: '840ms',
        50: '870ms',
        60: '990ms',
        70: '960ms',
        80: '900ms',
      },
      animation: {
        scale: 'scale 1.6s linear infinite',
        snowing_1: 'snowing 1s linear infinite',
        snowing_2: 'snowing 1.3s linear infinite',
        snowing_3: 'snowing 1.6s linear infinite',
        snowing_4: 'snowing 1.9s linear infinite',
        snowing_5: 'snowing 2.2s linear infinite',
        snowing_6: 'snowing 2.5s linear infinite',
        snowing_7: 'snowing 2.8s linear infinite',
      },
      keyframes: {
        scale: {
          '50%': {
            transform: 'scale(0.5)',
          },
        },
        snowing: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '70%': { transform: 'translateY(300px) scale(1)' },
          '100%': { transform: 'translateY(300px) scale(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animation-delay'),
    require('tailwindcss-animation'),
  ],
};
