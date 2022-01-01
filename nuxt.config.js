import { defineNuxtConfig } from "@nuxt/bridge"

export default defineNuxtConfig({
  buildModules: ["nuxt-windicss", "@pinia/nuxt"],

  components: true,

  windicss: {
    analyze: true,
  },
})
