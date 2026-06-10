/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#141210',
          light:   '#2A2421',
          dark:    '#0A0908',
          50:      '#F5F3F2',
        },
        coral: {
          DEFAULT: '#FF5A00',
          light:   '#FF8A47',
          dark:    '#C7410A',
        },
        sand: {
          DEFAULT: '#FFE2D1',
          light:   '#FFF1E8',
          dark:    '#FFCBB0',
        },
        ink: '#141210',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body:    ['Archivo', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        coral: '0 4px 20px rgba(255,90,0,.38)',
        card:  '0 2px 14px rgba(20,18,16,.07)',
        navy:  '0 4px 20px rgba(20,18,16,.25)',
      },
      lineHeight: {
        heading: '1.15',
      },
    },
  },
  plugins: [],
}
