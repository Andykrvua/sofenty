// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
  app: {
    head: {
      title: 'Sofenty',
      meta: [
        {
          name: 'description',
          content: 'Спрощуємо, автоматизовуємо та просуваємо бізнес на новий рівень',
        },
      ],
    },
  },
  // plugins: ['~/plugins/simplex-noise-plugin.js'],
  modules: ['@nuxtjs/i18n', 'nuxt-swiper', '@vueuse/nuxt'],
  css: ['~/assets/css/critical.scss', '~/assets/css/style.scss'],
  build: {
    transpile: ['gsap'],
  },
  i18n: {
    locales: [
      { name: 'English', code: 'en', iso: 'en-US', file: 'en.js' },
      { name: 'Ukraine', code: 'uk', iso: 'uk-UA', file: 'uk.js' },
    ],
    detectBrowserLanguage: false,
    baseUrl: '/',
    strategy: 'prefix_except_default',
    defaultLocale: 'uk',
    lazy: true,
    langDir: 'locales/',
    skipSettingLocaleOnNavigate: true,
    fallbackLocale: 'uk',
  },
});
