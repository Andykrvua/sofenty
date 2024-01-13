<template>
  <section class="chat-bots container">
    <div class="chat-bots-grid">
      <h5 class="header-title h5">Чат-боти</h5>
      <div v-if="onFilter" class="filters" ref="sticky">
        <button
          class="btn filter-btn"
          :class="{ active: filter === 'viber' }"
          @click="updateFilters('viber')"
          :disabled="filter === 'viber'"
        >
          Viber
        </button>
        <button
          class="btn filter-btn"
          :class="{ active: filter === 'telegram' }"
          @click="updateFilters('telegram')"
          :disabled="filter === 'telegram'"
        >
          Telegram
        </button>
        <button
          class="btn filter-btn"
          :class="{ active: filter === 'project-item' }"
          @click="updateFilters('project-item')"
          :disabled="filter === 'project-item'"
        >
          Всі
        </button>
      </div>
      <p class="header-descr text2">
        Ми створюємо захоплюючий цифровий досвід, який викликає емоції, створює відносини та зміцнює зв’язки
        між брендами та споживачами.
      </p>
      <div class="chat-bots-items-grid">
        <div
          ref="slides"
          class="project-item skewElem"
          :id="`service${index}`"
          :class="{ viber: item.platform === 'viber', telegram: item.platform === 'telegram' }"
          v-for="(item, index) in data"
          :key="index"
        >
          <div class="img-wrapper" :class="{ square: item.square }">
            <img
              :src="item.img"
              :alt="item.title"
              :width="item?.imgSize?.width"
              :height="item?.imgSize?.height"
            />
            <NuxtLink :to="localePath(item.url)" class="card-share"><CommonSvgShare /></NuxtLink>
          </div>
          <div class="item-content">
            <h5 class="title">{{ item.title }}</h5>
            <p class="text2 text-14">{{ item.descr }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('~/assets/css/components/pages/portfolio/chat-bots.scss');
@import url('~/assets/css/components/pages/portfolio/filter.scss');
</style>

<script setup>
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import img1 from '~/assets/img/chat-bots-logo/1.svg';
import img2 from '~/assets/img/chat-bots-logo/2.svg';
import img3 from '~/assets/img/chat-bots-logo/3.webp';
import img4 from '~/assets/img/chat-bots-logo/4.svg';
import img5 from '~/assets/img/chat-bots-logo/5.svg';

const props = defineProps({
  onFilter: {
    type: Boolean,
    default: false,
  },
});

const main = ref();
const slides = ref([]);
const filter = ref('project-item');
const sticky = ref();
let ctx;

const data = ref([
  {
    title: 'Freepoc',
    descr:
      'Тут ви можете знайти робочих які виконають ваше замовлення, а також товари потрібні для будівництва.',
    img: img1,
    imgSize: {
      width: '129',
      height: '35',
    },
    url: '/',
    square: false,
    platform: 'telegram',
  },
  {
    title: 'Bot Boim',
    descr: 'Тут ви можете знайти робочих які виконають ваше замовлення, а також товари потрібні',
    img: img2,
    imgSize: {
      width: '143',
      height: '27',
    },
    url: '/',
    square: false,
    platform: 'telegram',
  },
  {
    title: 'Freepoc',
    descr: 'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн',
    img: img5,
    imgSize: {
      width: '156',
      height: '45',
    },
    url: '/',
    square: true,
    platform: 'viber',
  },
  {
    title: 'Bot Boim',
    descr: 'Для мережі кафе-кондитеських SHOco.',
    img: img4,
    imgSize: {
      width: '147',
      height: '40',
    },
    url: '/',
    square: false,
    platform: 'viber',
  },
  {
    title: 'Freepoc',
    descr: 'Aробочих які виконають ваше замовлення, а також товари потрібні для будівництва.',
    img: img5,
    imgSize: {
      width: '156',
      height: '45',
    },
    url: '/',
    square: true,
    platform: 'telegram',
  },
  {
    title: 'Bot Boim',
    descr: 'Hаша команда розробила яскравий та «смачний».',
    img: img3,
    imgSize: {
      width: '107',
      height: '124',
    },
    url: '/',
    square: true,
    platform: 'viber',
  },

  {
    title: 'Freepoc',
    descr: 'Тут ви можете знайти',
    img: img4,
    imgSize: {
      width: '147',
      height: '40',
    },
    url: '/',
    square: false,
    platform: 'viber',
  },
  {
    title: 'Freepoc',
    descr:
      'Тут ви можете знайти робочих які виконають ваше замовлення, а також товари потрібні для будівництва.',
    img: img2,
    imgSize: {
      width: '143',
      height: '27',
    },
    url: '/',
    square: false,
    platform: 'telegram',
  },
]);

function updateFilters(val) {
  const state = Flip.getState(slides.value);
  filter.value = val;

  slides.value.forEach((item) => (item.style.display = item.classList.contains(val) ? 'block' : 'none'));

  Flip.from(state, {
    duration: 1,
    scale: true,
    absolute: false,
    ease: 'power1.inOut',
    onEnter: (elements) =>
      gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }),
    onLeave: (elements) => gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
    onComplete: () => scrollHandler(),
  });

  const scrollHandler = () => {
    // fix bug invisible cards
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollPos !== 0) {
      window.scrollBy(0, 1);
    }
  };
}

onMounted(() => {
  if (props.onFilter) {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(sticky.value);
  }
});
</script>
