/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': 'url(./assets/img/bussiness/businessman6.jpg)',
        'discovery': 'url(./assets/img/icon/discovery.jpg)',
        'video': 'url(./assets/video/5823401530981.mp4)',
        'discovery-page': 'url(./assets/img/bussiness/businessman5.jpg)',
        'custom-gradient': 'linear-gradient(to top, rgb(200, 200, 200) 0%, white 50%, white 60%, rgb(200, 200, 200) 100%)',
      },
      boxShadow: {
        'custom-shadow': '0 -1px 1px rgb(179, 177, 177), 2px 0 2px rgb(179, 177, 177), -1px 0 1px rgb(179, 177, 177)',
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
        'nav': '4.2rem', // chiều cao nav cố định

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
  plugins: [],
}

