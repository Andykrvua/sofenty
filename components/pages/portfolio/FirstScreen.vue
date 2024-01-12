<template>
  <section class="first-screen container">
    <h1 class="h1">Проекти</h1>
    <div class="portfolio-links">
      <NuxtLink :to="localePath(navEnums.portfolio)" class="btn folio-nav">Всі</NuxtLink>
      <NuxtLink :to="localePath(navEnums.websites)" class="btn folio-nav">Веб-сайти</NuxtLink>
      <NuxtLink :to="localePath(navEnums.mobileapps)" class="btn folio-nav">Мобільні додатки</NuxtLink>
      <NuxtLink :to="localePath(navEnums.chatbots)" class="btn folio-nav">Чат-боти</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
@import url('~/assets/css/components/pages/portfolio/first-screen.scss');
</style>
