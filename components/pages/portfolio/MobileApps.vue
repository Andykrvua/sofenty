<template>
  <section class="mob-apps container" ref="main">
    <div class="mob-apps-grid">
      <h5 class="header-title h5">Моб. додатки</h5>
      <div v-if="onFilter" class="filters" ref="sticky">
        <button
          class="btn filter-btn"
          :class="{ active: filter === 'ios' }"
          @click="updateFilters('ios')"
          :disabled="filter === 'ios'"
        >
          IOS
        </button>
        <button
          class="btn filter-btn"
          :class="{ active: filter === 'android' }"
          @click="updateFilters('android')"
          :disabled="filter === 'android'"
        >
          Android
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
      <div class="mob-apps-items-grid">
        <div
          ref="slides"
          class="project-item skewElem"
          :id="`service${index}`"
          v-for="(item, index) in data"
          :key="index"
          :class="{ ios: item.platform === 'ios', android: item.platform === 'android' }"
          :style="{ backgroundImage: `url('/mobile-apps-bg/${item.img}')`, '--gridrow': `${index}` }"
        >
          <NuxtLink :to="localePath(item.url)" class="card-share"><CommonSvgShare /></NuxtLink>
          <div class="item-content">
            <h5 class="title">{{ item.title }}</h5>
            <p class="text2 text-14">{{ item.descr }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('~/assets/css/components/pages/portfolio/mobile-apps.scss');
@import url('~/assets/css/components/pages/portfolio/filter.scss');
</style>

<script setup>
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

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
      'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн-магазин із доступним та простим функціоналом для клієнтів.',
    img: '1.webp',
    url: '/',
    platform: 'android',
  },
  {
    title: 'Bot Boim',
    descr:
      'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн-магазин із доступним та простим функціоналом для клієнтів. Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн-магазин із доступним та простим функціоналом для клієнтів.',
    img: '2.webp',
    url: '/',
    platform: 'android',
  },
  {
    title: 'Bot Boim',
    descr: 'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний».',
    img: '3.webp',
    url: '/',
    platform: 'ios',
  },
  {
    title: 'Bot Boim',
    descr: 'Для мережі кафе-кондитеських SHOco.',
    img: '4.webp',
    url: '/',
    platform: 'android',
  },
  {
    title: 'Freepoc',
    descr:
      'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн-магазин із доступним та простим.',
    img: '5.webp',
    url: '/',
    platform: 'ios',
  },
  {
    title: 'Bot Boim',
    descr:
      'Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний» онлайн-магазин із доступним та простим функціоналом для клієнтів. Для мережі кафе-кондитеських SHOco. наша команда розробила яскравий та «смачний».',
    img: '6.webp',
    url: '/',
    platform: 'android',
  },
]);

function updateFilters(val) {
  const state = Flip.getState(slides.value);
  filter.value = val;

  slides.value.forEach((item) => (item.style.display = item.classList.contains(val) ? 'flex' : 'none'));

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
