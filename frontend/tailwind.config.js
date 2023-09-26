/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      screens: {
        "1024px": "1024px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "768px":"768px",
        "640px":"640px",
        "500px":"500px",
        "400px":"400px",
        "320px":"320px",
         'sm': '640px', // Small screens, like mobile
        'md': '768px', // Medium screens, like tablets
         'lg': '1024px', // Large screens, like laptops
         'xl': '1280px', // Extra-large screens, like desktops
      },
    },
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide')],
};
