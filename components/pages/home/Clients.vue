<script setup>
import gsap from 'gsap';

import shoco from '~/assets/img/clients-logo/shoco.svg';
import cheeseBakery from '~/assets/img/clients-logo/cheese_bakery.svg';
import tile from '~/assets/img/clients-logo/tile.svg';

const sliderOffsetInPx = ref(283);

const clients = [
  {
    name: 'ShoСo',
    url: '/',
    img: shoco,
    alt: 'ShoCo logo',
    descr: 'Веб-сайти',
    year: '2019',
    tags: ['Інтернет-магазин', 'Лендінг', 'Чат бот', 'Дизайн'],
  },
  {
    name: 'Cheese Bakery',
    url: '/',
    img: cheeseBakery,
    alt: 'Cheese Bakery logo',
    descr: 'Веб-сайти',
    year: '2020',
    tags: ['Дизайн', 'Інтернет-магазин', 'Чат бот', 'Лендінг'],
  },
  {
    name: 'Tile',
    url: '/',
    img: tile,
    alt: 'Tile logo',
    descr: 'Мобільні додатки',
    year: '2021',
    tags: ['Лендінг', 'Чат бот', 'Інтернет-магазин', 'Дизайн'],
  },
  {
    name: 'Kenzo',
    url: '/',
    img: cheeseBakery,
    alt: 'ShoCo logo',
    descr: 'Дизайн',
    year: '2021',
    tags: ['Лендінг', 'Інтернет-магазин', 'Чат бот', 'Дизайн'],
  },
  {
    name: 'Adidas',
    url: '/',
    img: shoco,
    alt: 'ShoCo logo',
    descr: 'Мобільні додатки',
    year: '2022',
    tags: ['Чат бот', 'Дизайн', 'Інтернет-магазин', 'Лендінг'],
  },
  {
    name: 'Nasa',
    url: '/',
    img: tile,
    alt: 'ShoCo logo',
    descr: 'Веб-сайти',
    year: '2023',
    tags: ['Лендінг', 'Чат бот', 'Інтернет-магазин', 'Дизайн'],
  },
];

const resizeHandler = () => {
  if (window.matchMedia('(max-width: 1270px)').matches) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      sliderOffsetInPx.value = 10;
    } else {
      sliderOffsetInPx.value = 50;
    }
  } else {
    sliderOffsetInPx.value = 283;
  }
};

const animStart = (_, e) => {
  animHandler(e);
};

const animEnd = () => {
  animHandler();
};

const animHandler = (e) => {
  const slides = document.querySelectorAll('.card');
  if (!slides) return;

  slides.forEach((el) => {
    gsap.to(el, {
      skewX: () => (e ? (e.movementX > 0 ? -3 : 3) : 0),
      duration: 1,
      ease: 'power4.out',
    });
  });
};

onMounted(() => {
  window.addEventListener('resize', resizeHandler);
  resizeHandler();
});
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <section class="clients">
    <div class="clients-header container">
      <div class="link-wrapper">
        <NuxtLink :to="localePath('/')" class="btn rounded-btn-arrow">
          <span> Клієнти<CommonSvgArrow :color="'var(--black)'" :size="'small'" /></span>
        </NuxtLink>
      </div>
      <div class="title-wrapper">
        <h3 class="h3">Наші клієнти</h3>
        <p class="text text-14">
          Наші клієнти розкажуть самі про нас. З якими ми працювали на протязі останіх трьох років. Наші
          клієнти розкажуть самі якими ми працювали на протязі останіх трьох років.
        </p>
      </div>
    </div>
    <Swiper
      @sliderMove="animStart"
      @touchEnd="animEnd"
      :slidesOffsetBefore="sliderOffsetInPx"
      :loop="false"
      :slides-per-view="'auto'"
      :spaceBetween="20"
    >
      <SwiperSlide v-for="(client, i) in clients" :key="i">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">{{ client.name }}</h5>
            <NuxtLink :to="localePath(client.url)" class="card-share"><CommonSvgShare /></NuxtLink>
          </div>
          <img :src="client.img" :alt="client.alt" width="280" height="280" loading="lazy" />
          <div class="card-footer">
            <div class="card-footer__flip">
              <div class="flip-front">
                <span>{{ client.descr }}</span>
                <time :datetime="client.year">{{ client.year }}</time>
              </div>
              <div class="flip-back">
                <div class="flip-back__helper">
                  <span v-for="(tag, ind) in client.tags" :key="ind" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="link-wrapper container">
      <NuxtLink :to="localePath('/')" class="btn rounded-btn-arrow">
        <span> Клієнти<CommonSvgArrow :color="'var(--black)'" :size="'small'" /></span>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('~/assets/css/components/pages/home/clients.scss');

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 430px;
}

/* br mobile */
@media (max-width: 767px) {
  .swiper-slide {
    width: 250px;
    height: 370px;
  }
}
</style>
