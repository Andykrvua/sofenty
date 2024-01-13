<template>
  <main class="page" ref="main">
    <PagesPortfolioFirstScreen />
    <PagesPortfolioWebSites />
    <PagesPortfolioMobileApps />
    <PagesPortfolioChatBots />
  </main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

useHead({
  title: 'Portfolio - Sofenty',
  meta: [
    {
      name: 'description',
      content: 'Портфоліо',
    },
  ],
});

const main = ref();
let ctx;
// let lenis;

onMounted(async () => {
  // lenis = useLenis();
  // lenis.init();

  ctx = gsap.context((self) => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg'),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -500);
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
  // lenis.destroy();
  ctx.revert();
});
</script>
