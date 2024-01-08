<template>
  <section ref="main" class="teams container">
    <NuxtLink :to="localePath('/')" class="btn rounded-btn-arrow rounded-btn-arrow__white">
      <span> Про нас<CommonSvgArrow :color="'var(--white)'" :size="'small'" /></span>
    </NuxtLink>
    <div class="teams-grid">
      <p class="h3">Це ми</p>
      <img src="~/assets/img/teams/1.webp" class="img-1" width="180" height="180" alt="Вася" loading="lazy" />
      <img
        src="~/assets/img/teams/2.webp"
        class="img-2"
        width="180"
        height="180"
        alt="Микола"
        loading="lazy"
      />
      <img
        src="~/assets/img/teams/3.webp"
        class="img-3"
        width="180"
        height="270"
        alt="Дмитро"
        loading="lazy"
      />
      <img
        src="~/assets/img/teams/4.webp"
        class="img-4"
        width="180"
        height="180"
        alt="Катерина"
        loading="lazy"
      />
      <img src="~/assets/img/teams/5.webp" class="img-5" width="180" height="180" alt="Оля" loading="lazy" />
      <img src="~/assets/img/teams/6.webp" class="img-6" width="180" height="180" alt="Макс" loading="lazy" />
      <img
        src="~/assets/img/teams/7.webp"
        class="img-7"
        width="180"
        height="180"
        alt="Андрій"
        loading="lazy"
      />
      <img src="~/assets/img/teams/8.webp" class="img-8" width="180" height="180" alt="Олег" loading="lazy" />
      <img
        src="~/assets/img/teams/9.webp"
        class="img-9"
        width="180"
        height="270"
        alt="Панас"
        loading="lazy"
      />
      <h3 class="h6">
        Наша професійна команда, за 7 років роботи випустила понад 1500 крутих та успішних проектів.
      </h3>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';

let ctx;
const main = ref();

const moveThree = (val) => {
  if (main.value) {
    const top = main.value.offsetTop;
    let canvas = document.querySelector('.canvas-main-hero');
    if (val) {
      canvas.style.top = top + 'px';
    } else {
      canvas.style.top = '0px';
    }
  }
};

const resizeHandler = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    moveThree(false);
  }
};

onMounted(async () => {
  ctx = gsap.context((self) => {
    const teamsGrid = self.selector('.teams-grid');
    let mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      gsap.to(main.value, {
        scrollTrigger: {
          trigger: main.value,
          onEnter: () => moveThree(true),
          onLeave: () => moveThree(false),
          onEnterBack: () => moveThree(true),
          onLeaveBack: () => moveThree(false),
        },
      });
    });

    mm.add('(min-width: 768px)', () => {
      let sections = gsap.utils.toArray('img');
      gsap.to(sections, {
        x: 0,
        rotation: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: teamsGrid,
          start: 'top center',
          scrub: true,
          end: 'end end',
        },
      });
    });
    mm.add('(max-width: 767px)', () => {
      let sections = gsap.utils.toArray('img');
      sections.forEach((item) => {
        gsap.to(item, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            scrub: true,
            end: 'center center+=200',
          },
        });
      });
    });
  }, main.value);

  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  ctx.revert();
  window.removeEventListener('resize', resizeHandler);
});
</script>

<style lang="scss" scoped>
@import url('~/assets/css/components/pages/home/teams.scss');

@media (min-width: 768px) {
  img {
    transform: translateX(200px) rotate(-540deg);
    opacity: 0;
  }
}
@media (max-width: 767px) {
  img {
    transform: translateY(150px);
    opacity: 0;
  }
}
</style>
