// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title: 'Nuxt Testing',
      meta: [
        { name: 'description', content: 'Nuxt3 Tutorial'}
      ],
      link: [
        { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' }
      ]
    }
  },

  modules:[
        '@nuxtjs/tailwindcss'
  ],
  
  runtimeConfig: {
    currenciesKey: process.env.CURRENCIES_API_KEY
  }

})
