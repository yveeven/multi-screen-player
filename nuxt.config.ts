// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@unocss/nuxt", "nuxt-lodash"],
  css: ["@unocss/reset/normalize.css", "@unocss/reset/tailwind.css"],
});
