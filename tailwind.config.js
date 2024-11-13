const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      transitionDelay: {
        450: '450ms',
      },
    },
  },
  safelist: [{ pattern: /opacity-(\d*)/ }],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.kode-mono-400': {
          fontFmily: '"Kode Mono", monospace',
          fontOpticalSizing: 'auto',
          fontWeight: 400,
          fontStyle: 'normal',
        },
        '.kode-mono-500': {
          fontFamily: '"Kode Mono", monospace',
          fontOpticalSizing: 'auto',
          fontWeight: 500,
          fontStyle: 'normal',
        },
        '.kode-mono-600': {
          fontFamily: '"Kode Mono", monospace',
          fontOpticalSizing: 'auto',
          fontWeight: 600,
          fontStyle: 'normal',
        },
        '.kode-mono-700': {
          fontFamily: '"Kode Mono", monospace',
          fontOpticalSizing: 'auto',
          fontWeight: 700,
          fontStyle: 'normal',
        },
        '.min-h-content': {
          minHeight: 'calc(100vh - (var(--header-height) + var(--footer-height)))',
        },
        '.h-content': {
          height: 'calc(100vh - (var(--header-height) + var(--footer-height)))',
        },
        '.max-h-content': {
          maxHeight: 'calc(100vh - (var(--header-height) + var(--footer-height)))',
        },
      });
    }),
  ],
};
