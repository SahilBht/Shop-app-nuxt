import { builtinModules } from "module";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'ShopApp',
      meta: [
        {name: 'description', content: 'Everything about Nuxt'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  // runtimeConfig:{
  //   currencyKey: process.env.CURRENCY_API_KEY
  // }
})

