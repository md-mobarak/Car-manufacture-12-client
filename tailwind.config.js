module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1C4D60",

          "secondary": "#42393A",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#28AAA9",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}