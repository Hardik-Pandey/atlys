/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    fontSize: {
      xsm: ['12px', '14.52px'],
      sm: ['14px', '16.94px'],
      base: ['16px', '19.36px'],
      lg: ['18px', '21.78px'],
      xl: ['28px', '33.89px'],
    },
    borderWidth: {
      DEFAULT: '1px',
      1.5: '1.5px',
    },
    extend: {
      backgroundColor: {
        'primary-dark-bg': '#131319',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      addUtilities(
        {
          '.backdrop-blur-3px': {
            'backdrop-filter': 'blur(3px)',
          },
          '.backdrop-blur-5px': {
            'backdrop-filter': 'blur(5px)',
          },
        },
        ['responsive']
      );
    },
  ],
};
