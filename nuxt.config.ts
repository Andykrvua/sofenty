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
        { name: 'msapplication-TileColor', content: '#181818' },
        { name: 'theme-color', content: '#181818' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', color: '#6cc417', href: '/safari-pinned-tab.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
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
