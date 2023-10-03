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
    shim: true,
  },
  modules: ["nuxt-icon", "nuxt-headlessui"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
