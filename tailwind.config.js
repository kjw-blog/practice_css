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
        10: '1030ms',
        20: '880ms',
        30: '1010ms',
        40: '1040ms',
        50: '1070ms',
        60: '1190ms',
        70: '1160ms',
        80: '1100ms',
      },
      animation: {
        scale: 'scale 1.6s linear infinite',
        snowing: 'snowing 1s linear infinite',
        snowman: 'snowman 4s linear infinite',
      },
      keyframes: {
        scale: {
          '50%': {
            transform: 'scale(0.5)',
          },
        },
        snowing: {
          '0%': { transform: 'translateY(0) scale(1) ' },
          '70%': { transform: 'translateY(300px) scale(1) translateX(-50px)' },
          '100%': { transform: 'translateY(300px) scale(0) translateX(-50px)' },
        },
        snowman: {
          '70%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(300px) translateY(20px) scale(0)' },
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
