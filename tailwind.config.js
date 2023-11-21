/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./**/*.{html,js}`],
  theme: {
    extend: {
      backgroundImage: {
        pc: "url(/images/image-hero-desktop.jpg)",
        mb: "url(/images/image-hero-mobile.jpg)"
      }
      , fontFamily: {
        Commissioner: ['Commissioner', `sans-serif`]
      }
      , colors: {
        Moderate_cyan: `hsl(176, 50%, 47%)`,
        Dark_cyan: `hsl(176, 72%, 28%)`,
        Dark_gray: `hsl(0, 0%, 48%)`,
      }
    },
  },
  plugins: [

  ],
}

