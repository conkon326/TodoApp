// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
  ],
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
})
