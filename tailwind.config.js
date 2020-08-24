module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'bg-dark-cs': '#1A202C'
      },
      spacing: {
        '66': '18rem',
        '68': '20rem',
        '70': '22rem',
        '(screen-16)': 'calc(100vh - 4rem)'
      },
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)'
      },
      fontFamily: {
        sans: [
          'Nunito',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      }
    },
  },
  variants: {},
  plugins: [],
};
