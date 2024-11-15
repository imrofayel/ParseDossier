/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-bottom': 'inset 0 -1px 3px 0 rgb(0 0 0 / 0.05)'
      },

      fontSize: {
        'heading-h1': [
          'clamp(2.8rem, 4vw, 4rem)',
          {
            lineHeight: 'clamp(3.6rem, 4.5vw, 4.5rem)',
            letterSpacing: '-0.14rem',
            fontWeight: '400'
          }
        ],

        'heading-h2': [
          'clamp(2.6rem, 3.7vw, 3.7rem)',
          {
            lineHeight: 'clamp(3.6rem, 4.5vw, 4.5rem)',
            letterSpacing: '-0.14rem',
            fontWeight: '400'
          }
        ],

        'heading-h3': [
          'clamp(2.5rem, 3.5vw, 3.5rem)',
          {
            lineHeight: 'clamp(3.8rem, 4.5vw, 4.5rem)',
            letterSpacing: '-0.1rem',
            fontWeight: '400'
          }
        ],

        'heading-h4': [
          'clamp(2.2rem, 3.1vw, 3.1rem)',
          {
            lineHeight: 'clamp(2.6rem, 3.2vw, 3.2rem)',
            letterSpacing: '-0.08rem',
            fontWeight: '400'
          }
        ],

        'heading-h5': [
          'clamp(2rem, 2.6vw, 2.6rem)',
          {
            lineHeight: 'clamp(2.6rem, 3.2vw, 3.2rem)',
            letterSpacing: '-0.08rem',
            fontWeight: '400'
          }
        ],

        'heading-h6': [
          'clamp(1.5rem, 2vw, 2rem)',
          {
            lineHeight: 'clamp(2.6rem, 3.2vw, 3.2rem)',
            letterSpacing: '-0.08rem',
            fontWeight: '400'
          }
        ],

        'paragraph': [
          'clamp(1.15rem, 1.15vw, 1.2rem)',
          {
            lineHeight: 'clamp(1.7rem, 1.7vw, 1.7rem)',
            letterSpacing: '-0.014rem',
            fontWeight: '300'
          }
        ],


      }
    },
  },
  plugins: [],
}