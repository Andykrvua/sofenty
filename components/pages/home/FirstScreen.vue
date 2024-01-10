<template>
  <section ref="main" class="first-screen">
    <div class="first-screen__content container">
      <p class="hero-title">Все розумне —&nbsp;просто</p>
      <div class="card">
        <div class="card-detail__wrapper">
          <img
            ref="img1"
            class="card__detail"
            src="~/assets/img/main-hero-detail.webp"
            width="300"
            height="300"
            aria-hidden="true"
            fetchpriority="high"
          />
          <img
            ref="img2"
            class="card__detail-2"
            src="~/assets/img/main-hero-detail-2.webp"
            width="300"
            height="300"
            aria-hidden="true"
            fetchpriority="high"
          />
        </div>
        <p class="card__title p1 black">Все розумне — просто</p>
        <h2 class="card__descr text">Спрощуємо, автоматизовуємо та просуваємо бізнес на новий рівень</h2>
        <button class="lead-btn btn lead-btn__mobile">{{ $t('header.lead_btn') }}</button>
        <div class="card__popup">
          <button class="btn btn-black active">Веб-сайти</button>
          <button class="btn btn-black">Системи автматизації бізнесів</button>
          <button class="btn btn-black">CRM</button>
          <button class="btn btn-black">Чат боти</button>
          <button class="btn btn-black">Мобільні додатки</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('~/assets/css/components/pages/home/first-screen.scss');

.hero-title {
  transform: translateX(-200px);
  opacity: 0;
}

/* br > mobile */
@media (min-width: 768px) {
  .card {
    transform: translateX(700px);
    opacity: 0;
  }
  .card__popup {
    transform: translateY(600px);
    opacity: 0;
  }
}

/* br mobile */
@media (max-width: 767px) {
  .card {
    transform: translateY(600px);
    opacity: 0;
  }
}
</style>

<script setup>
import gsap from 'gsap';
const img1 = ref(),
  img2 = ref(),
  main = ref();

let ctx;

const onMouseMove = (e) => {
  parallaxIt(e, img1.value, true);
  parallaxIt(e, img2.value, false);
};

const parallaxIt = (e, target, reverse) => {
  if (!main.value) return;
  let relX = e.pageX - main.value.offsetLeft;
  let relY = e.pageY - main.value.offsetTop;
  if (reverse) {
    relY = e.pageX - main.value.offsetLeft;
    relX = e.pageY - main.value.offsetTop;
  }

  gsap.to(target, {
    x: ((relX - main.value.offsetWidth) / main.value.offsetWidth) * 5,
    y: ((relY - main.value.offsetHeight) / main.value.offsetHeight) * 5,
    duration: 4,
  });
};

onMounted(async () => {
  ctx = gsap.context((self) => {
    const heroTitle = self.selector('.hero-title');
    const card = self.selector('.card');
    const cardPopup = self.selector('.card__popup');

    gsap.to(heroTitle, {
      opacity: 1,
      x: 0,
    });

    let mm = gsap.matchMedia();

    // desktop anim
    mm.add('(min-width: 768px)', () => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
        delay: 0.3,
        // scrollTrigger: {
        // trigger: card,
        // start: `top top`,
        // endTrigger: drawing,
        // end: `bottom bottom`,
        // scrub: 4,
        // },
      });
      gsap.to(cardPopup, {
        opacity: 1,
        y: 0,
        delay: 0.6,
      });
    });

    // mobile anim
    mm.add('(max-width: 767px)', () => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        delay: 0.3,
      });
    });
  }, main.value);

  window.addEventListener('mousemove', onMouseMove, false);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  ctx.revert();
});
</script>
