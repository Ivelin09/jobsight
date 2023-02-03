/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: '#FF5722',
            'primary-focus': '#512DA8',
            'primary-content': '#673AB7',
            accent: '#FF5722',
            'accent-focus': '#9CA3AF',
            'accent-content': '#F2F2F2',
            'base-100': '#FFFFFF',
            error: '#F87272',
            'error-content': '#470000',
          },
        },
      ],
    },
    plugins: [require('daisyui')],
  };
   