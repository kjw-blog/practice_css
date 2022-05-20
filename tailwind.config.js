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
      animation: {
        scale: 'scale 1.6s linear infinite',
      },
      keyframes: {
        scale: {
          '50%': {
            transform: 'scale(0.5)',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animation-delay'),
  ],
};
