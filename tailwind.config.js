module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans"'],
      },
      boxShadow: {
        bottom:
          '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          primary: '#6419E6',
          secondary: '#D926A9',
          accent: '#1FB2A6',
          neutral: '#191D24',
          'base-100': '#1F2937',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  darkMode: 'class',
};
