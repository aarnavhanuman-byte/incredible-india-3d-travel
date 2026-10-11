import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050b16',
        panel: '#091827',
        gold: '#f4c76a',
        saffron: '#d9a74b',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(244, 199, 106, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
