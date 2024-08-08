// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt','@nuxtjs/google-fonts',],
  googleFonts: {
    families: {
      Robuto: true,
      Sevillana: true,
      'EB Garamond': true,
      'Nunito Sans': true// Exemplo de fonte
      // Você pode adicionar mais fontes aqui
      // Exemplo: 'Open+Sans': true,
      // Ou com diferentes pesos e estilos
      // 'Lobster': [400],
      // 'Lato': [100, 300],
    }
  },
//   devServer: {
//   host: '0.0.0.0',
//   port: 3000
// }
})
