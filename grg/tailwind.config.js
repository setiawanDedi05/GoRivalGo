module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
      },
      colors: {
        turquoise: '#73fff7',
      },
      // custom css properties set in src/components/styled/baseStyles.js
      backgroundColor: {
        primary: 'var(--bg-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        dark: 'var(--text-dark)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
