<template>
  <section ref="main" class="projects">
    <div class="projects-header container">
      <NuxtLink :to="localePath(navEnums.portfolio)" class="btn rounded-btn-arrow"
        ><span>Проєкти<CommonSvgArrow :color="'var(--black)'" :size="'small'" /></span
      ></NuxtLink>
      <h4 class="h4">Спрощуємо, автоматизовуємо та виводимо бізнес на новий рівень.</h4>
    </div>
    <div class="projects-container">
      <div class="horizontal-scroll">
        <div
          class="project-item"
          :id="`service${index}`"
          v-for="(item, index) in data"
          :key="index"
          :style="{ backgroundImage: `url('/projects-slides/${item.img}')` }"
        >
          <NuxtLink :to="localePath(item.url)" class="btn circle-big-btn"
            ><span class="up">Дивитись<br />проєкт</span></NuxtLink
          >
          <div class="item-content">
            <div class="content-left">
              <span class="numbers">0{{ index + 1 }} — 0{{ data.length }}</span
              ><time :datetime="item.year" class="numbers">{{ item.year }}</time>
              <h5 class="h3 title">{{ item.title }}</h5>
              <p class="text">{{ item.descr }}</p>
            </div>
            <div class="content-right">
              <span class="tag" v-for="(tag, index) in item.tags" :key="index">{{ tag }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mobile-btn-wrapper">
      <NuxtLink :to="localePath(navEnums.portfolio)" class="btn rounded-btn-arrow"
        ><span>Проєкти<CommonSvgArrow :color="'var(--black)'" :size="'small'" /></span
      ></NuxtLink>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';

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

let ctx;
const main = ref();

onMounted(async () => {
  ctx = gsap.context((self) => {
    let mm = gsap.matchMedia();

    // desktop anim
    mm.add('(min-width: 768px)', () => {
      let sections = gsap.utils.toArray('.project-item');
      gsap.to(sections, {
        xPercent: -70 * (sections.length - 1),
        ease: 'none', // <-- IMPORTANT!
        scrollTrigger: {
          trigger: '.horizontal-scroll',
          // start: 'top-=100',
          start: 'top',
          pin: true,
          // markers: true,
          anticipatePin: 1,
          // scrub: 0.1,
          scrub: true,
          // invalidateOnRefresh: true,
          end: '+=1000',
        },
      });
    });
    mm.add('(max-width: 767px)', () => {
      let sections = gsap.utils.toArray('.project-item');
      gsap.to(sections, {
        xPercent: -80 * (sections.length - 1),
        ease: 'none', // <-- IMPORTANT!
        scrollTrigger: {
          trigger: '.horizontal-scroll',
          // start: 'top-=120',
          start: 'top',
          pin: true,
          // markers: true,
          anticipatePin: 1,
          // scrub: 0.1,
          scrub: true,
          // invalidateOnRefresh: true,
          end: '+=600',
        },
      });
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style lang="scss" scoped>
@import url('~/assets/css/components/pages/home/projects.scss');

.projects-container {
  overflow-x: hidden;
}

/* br tablet */
@media (max-width: 1270px) {
  .projects-container {
    margin: 20px 0;
  }
}
.horizontal-scroll {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
  width: 140%;
  min-height: 100vh;
}
@media (max-width: 767px) {
  .horizontal-scroll {
    width: 160%;
    gap: 15px;
  }
}
.project-item {
  width: 70%;
}
@media (max-width: 767px) {
  .project-item {
    width: 80%;
  }
}
@media (max-width: 550px) {
  .project-item {
    height: 80vh;
  }
}
</style>
