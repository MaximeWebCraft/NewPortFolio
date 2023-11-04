export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        1072: '1072',
      },

      colors: {
        greenp: '#27FB6B',
        greenp2: '#00ff00',
        bluep: '#5BB2D7',
        bg: '#282725',
      },
      fontFamily: {
        custom: ['pixel', 'sans'],
      },

      animation: {
        'scale-slow': 'scale-slow 2s infinite',
        pulse: 'pulse 0.5s infinite',
        loading: 'loading 1s  infinite',
        loading2: 'loading2 1.1s  infinite',
        loading3: 'loading3 1.1s  infinite',
        vibration: 'vibration 1s infinite',
        zoom: 'zoom 1s infinite',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'scale-slow': {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
        },
        pulse: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        loading: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        loading2: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        loading3: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        vibration: {
          '0%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(2)',
          },
          '50%': {
            transform: 'translateX(-2)',
          },
          '75%': {
            transform: 'translateX(2)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
    plugins: [],
  },
};
