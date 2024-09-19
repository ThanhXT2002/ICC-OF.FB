/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': 'url(./assets/img/bussiness/businessman6.jpg)',
        'about__1': 'url(./assets/img/about/about_image_1.png)',
        'about__4': 'url(./assets/img/about/about_image_4.jpg)',
        'water-mark': 'url(./assets/img/water_mark.png)',
        'discovery': 'url(./assets/img/icon/discovery.jpg)',
        'video': 'url(./assets/video/5823401530981.mp4)',
        'discovery-page': 'url(./assets/img/bussiness/discovery.png)',
        'custom-gradient': 'linear-gradient(to top, rgb(240, 240, 240) 0%, white 50%, white 60%, rgb(240, 240, 240) 100%)',
        'ellipse-inner-shadow': 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.8) 0%, rgba(56, 189, 248, 0.3) 40%, transparent 70%)',
      },
      boxShadow: {
        'custom-shadow': '0 -1px 1px rgb(179, 177, 177), 2px 0 2px rgb(179, 177, 177), -1px 0 1px rgb(179, 177, 177)',
        'glow': '0 0 15px 5px rgba(255, 255, 255, 0.7)',
      },
      colors: {
        primaryColor: '#0563bb',
        primaryDark: '#052f6b',
        primaryColorLight: "#74b6e7",
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',
        whiteColor: '#ffffff',
        blackColor: "#000",
        silverColor: "#bfbfbf",
        greenColor: "#007936",
        redColor: "#fa020c",
        darkColor: '#000',
        darkColorLight: "#171717",
      },
      height: {
        'nav': '4.5rem', // chiều cao nav cố định

      },
      keyframes: {
        move: {
          "50%": { transform: 'translateY(-1rem)' }
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      },

    },
    fontFamily: {
      fira: ['Fira Sans', 'sans-serif'],

    }
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.inner-shadow-ellipse': {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-800%',
            left: '-45%',
            right: '-45%',
            bottom: '-800%',
            background: 'var(--tw-gradient-stops)',
            opacity: '0',
            transition: 'opacity 0.3s ease-in-out',
            pointerEvents: 'none',
            borderRadius: '50% / 75%', // Tạo hình elip
          },
          '&:hover::before': {
            opacity: '1',
          },
        },
      }
      addUtilities(newUtilities, ['hover'])
    })
  ],
}

