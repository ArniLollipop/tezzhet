// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Nuxt",
      charset: "utf-8",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:3000",
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },

  modules: [
    "@pinia/nuxt",
    "nuxt-swiper",
    "@nuxt/image",
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        langDir: "./locales/",
        strategy: "no_prefix",
        locales: [
          {
            name: "Русский",
            code: "ru",
            file: "ru",
          },
          {
            name: "Қазақша",
            code: "kz",
            file: "kz",
          },
        ],
        defaultLocale: "ru",
      },
    ],
  ],

  css: ["@/assets/sass/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/sass/helpers/variables.scss" as *;',
        },
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
  },
  image: {
    inject: true,
    quality: 90,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
