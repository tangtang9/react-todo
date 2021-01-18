module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '50': '50rem',
       },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/bg.png')",
        'delete': "url('/src/delete.png')",
        'save': "url('/src/save.png')",
       }),
       backgroundSize: {
        '100': '100% auto',
        '15': '1.5rem auto',
        '16': '1.6rem auto',
      },
      fontFamily: {
        'myh': 'Microsoft YaHei',
       }









    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
