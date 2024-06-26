/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'sacramento': ['"Sacramento"', 'cursive'],
      },
      padding: {
        'custom': 'calc((100vw - 1536px)/2)',
        'custom-2': 'calc((100vw - 2560px)/2)',
      },
      screens: {
        'ss': '375px',
        's': '425px',
        '2s': '440px',
        '2ss': '520px',
        'sm':	'640px',
        'md':	'768px',
        'lg':	'1024px',
        'xl':	'1280px',
        '1.5xl': '1380px',
        '2xl':	'1536px',
        'screen-1080': '1080px',
        'screen-1081': '1081px',
        'screen-426': '426px',
        'screen-600': '600px',
        'screen-max-425': {'raw':'(max-width: 425px)'},
        'screen-max-600': {'raw':'(max-width: 600px)'},
        'screen-h-1081': {'raw': '(min-height: 1081px)'},
        'min-426-max-1080': {'raw': '(min-width: 426px) and (max-width: 1080px)'},
        'min-426-max-768': {'raw': '(min-width: 426px) and (max-width: 768px)'}
      },
      colors: {             
        redcustom: '#D00000',
        orangecustom: '#FF8906',
        grayfooter: '#F8F8F8',
      },
      gridTemplateRows: {
        '8-custom': 'repeat(8, minmax(0, auto))',
      },
    },
  },
  plugins: [],
}

export default tailwindConfig;

