/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-spinner::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '.no-spinner::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '.no-spinner': {
          '-moz-appearance': 'textfield',
        },
      });
    },
  ],
};
