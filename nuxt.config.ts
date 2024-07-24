// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/global.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-svgo",
    "@primevue/nuxt-module",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],
  image: {
    dir: "assets/images",
  },
  primevue: {
    options: {
      // unstyled: true,
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".app-dark",
          cssLayer: false,
        },
      },
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      Poppins: true,
      Inter: true,
    },
  },

  compatibilityDate: "2024-04-03",
});
