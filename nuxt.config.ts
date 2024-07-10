// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  server: {
    host: "0.0.0.0",
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/style.css"],
  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
});
