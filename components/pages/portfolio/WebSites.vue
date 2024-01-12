<template>
  <section class="web-sites container">
    <div class="web-sites-grid">
      <h5 class="header-title h5">Веб-сайти</h5>
      <p class="header-descr text2">
        Ми створюємо захоплюючий цифровий досвід, який викликає емоції, створює відносини та зміцнює зв’язки
        між брендами та споживачами.
      </p>
      <div
        class="project-item skewElem"
        :id="`service${index}`"
        v-for="(item, index) in data"
        :key="index"
        :style="{ backgroundImage: `url('/projects-slides/${item.img}')`, '--gridrow': `${index}` }"
      >
        <NuxtLink :to="localePath(item.url)" class="btn circle-big-btn"
          ><span class="up">Дивитись<br />проєкт</span></NuxtLink
        >
        <div class="item-content">
          <div class="content-left">
            <time :datetime="item.year" class="numbers">{{ item.year }}</time>
            <h5 class="h3 title">{{ item.title }}</h5>
            <p class="text text-14">{{ item.descr }}</p>
          </div>
          <div class="content-right">
            <span class="tag" v-for="(tag, index) in item.tags" :key="index">{{ tag }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = ref([
  {
    title: 'ShoСo',
    descr:
      'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн-магазин із доступним та простим функціоналом для клієнтів.',
    year: 2021,
    tags: ['Design', 'Website', 'Langing Page'],
    img: '1.webp',
    url: '/',
  },
  {
    title: 'Bot Boim',
    descr:
      'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн-магазин із доступним та простим функціоналом для клієнтів.',
    year: 2021,
    tags: ['Design', 'Website', 'Langing Page'],
    img: '2.webp',
    url: '/',
  },
]);
</script>

<style scoped>
@import url('~/assets/css/components/pages/portfolio/web-sites.scss');
</style>
