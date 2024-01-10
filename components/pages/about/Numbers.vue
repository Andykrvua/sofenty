<template>
  <section ref="main" class="numbers container">
    <h2 class="h3">Sofenty в цифрах</h2>
    <div class="numbers-wrapper">
      <div class="table-header">
        <p class="text text-14">
          Приєднайся до нашої команди. Ми раді новим залишаються після співпраці з нами
        </p>
        <NuxtLink :to="localePath(navEnums.vacancies)" class="btn circle-big-btn"
          ><span class="up"
            >Приєднатися <br />
            до команди</span
          ></NuxtLink
        >
      </div>

      <div class="numbers-grid">
        <div class="fact bb">
          <span class="fact-number h2">4011</span>
          <p class="fact-descr text2">Реалізованих проектів</p>
        </div>
        <div class="fact bl bb col2">
          <span class="fact-number h2">1000000+</span>
          <p class="fact-descr text2">
            Активних користувачів на створених нами торгових платформах. Клієнтів залишаються задоволені після
            співпраці з нами
          </p>
        </div>
        <div class="fact pt-40 ml">
          <p class="fact-descr text2">Хочеш заповнити цю колонку своєю історією успіху?</p>
        </div>
        <div class="fact bl pt-40">
          <span class="fact-number h2">35+</span>
          <p class="fact-descr text2">Професіоналів в нашій команді</p>
        </div>
        <div class="fact bl pt-40 ml">
          <span class="fact-number h2">97%</span>
          <p class="fact-descr text2">Клієнтів залишаються задоволені після співпраці з нами</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';

const main = ref();
let ctx;

onMounted(async () => {
  ctx = gsap.context((self) => {
    // const heroTitle = self.selector('.hero-title');
    // gsap.to(heroTitle, {
    //   opacity: 1,
    //   x: 0,
    // });
    // let mm = gsap.matchMedia();
    // desktop anim
    // mm.add('(min-width: 768px)', () => {
    //   gsap.to(card, {
    //     opacity: 1,
    //     x: 0,
    //     delay: 0.3,
    // scrollTrigger: {
    // trigger: card,
    // start: `top top`,
    // endTrigger: drawing,
    // end: `bottom bottom`,
    // scrub: 4,
    // },
    //   });
    //   gsap.to(cardPopup, {
    //     opacity: 1,
    //     y: 0,
    //     delay: 0.6,
    //   });
    // });
    // mobile anim
    // mm.add('(max-width: 767px)', () => {
    //   gsap.to(card, {
    //     opacity: 1,
    //     y: 0,
    //     delay: 0.3,
    //   });
    // });
  }, main.value);

  // window.addEventListener('mouseenter', onMouse);
  // $('body').on( 'mouseenter' , '.container', function(e){
  //   gsap.to( this, {duration: 0.3, height: 200, width: 200} );
  //   gsap.to( $(this).find('.circle'), {duration: 0.3, scale:1.3} );
  // });
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style scoped>
@import url('~/assets/css/components/pages/about/numbers.scss');
</style>
