// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Todhy App",
    },
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
  },
  typescript: {
    shim: false,
  },
  modules: ["nuxt-icon"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
