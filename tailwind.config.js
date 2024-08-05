module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
     "./node_modules/flowbite/**/*.{js,ts}"
  ],

  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat'],
        sevillana: ['Sevillana'],
        EBGaramond: ['EB Garamond'],
        NunitoSans: ['Nunito Sans']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
}