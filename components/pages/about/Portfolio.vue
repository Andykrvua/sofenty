<template>
  <section ref="main" class="portfolio container">
    <h3 class="h3">Наше портфоліо</h3>
    <div class="image-wrapper skewElem" style="background-image: url('/projects-slides/1.webp')">
      <NuxtLink :to="localePath(navEnums.portfolio)" class="btn circle-big-btn"
        ><span class="up"
          >Дивитись <br />
          проекти</span
        ></NuxtLink
      >
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
let ctx;

onMounted(async () => {
  ctx = gsap.context((self) => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg'),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -900);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.set('.skewElem', { transformOrigin: 'right center', force3D: true });
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
@import url('~/assets/css/components/pages/about/portfolio.scss');
</style>
