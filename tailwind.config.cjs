/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#18191b',
        surface: '#222427',
        'surface-alt': '#2c2f35',
        ink: '#eff0f1',
        muted: '#9c9ea3',
        accent: {
          DEFAULT: '#ff4a1f',
          ink: '#18191b',
          hover: '#e03a12',
        },
        field: {
          bg: '#eff0f1',
          ink: '#18191b',
        },
      },
      fontFamily: {
        display: ['"League Spartan"', 'sans-serif'],
        sans: ['"Figtree"', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
};
