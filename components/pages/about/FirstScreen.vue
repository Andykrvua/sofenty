<template>
  <section ref="main" class="first-screen">
    <div class="first-screen__content container">
      <div class="title-wrapper">
        <h1 class="h1 title">Про нас</h1>
        <img
          class="second-img"
          srcset="~/assets/img/about/first_screen-1x.webp 1x, ~/assets/img/about/first_screen-2x.webp 2x"
          src="~/assets/img/about/first_screen-1x.webp"
          width="140"
          height="85"
          fetchpriority="high"
          aria-hidden="true"
        />
        <p class="text">
          Ми об'єднуємо зусилля, віддаємо серце роботі, а результати говорять самі за себе працюємо, віддаємо
          говорять серце роботі.
        </p>
      </div>
    </div>
    <div class="hero-wrapper">
      <div class="canvas-main-hero">
        <ClientOnly>
          <Heavy3D :page="'about'" />
        </ClientOnly>
      </div>
      <div class="hero">
        <div class="btn-wrapper p1" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
          <button class="btn point-btn p1">1</button>
        </div>
        <div class="btn-wrapper p2" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
          <button class="btn point-btn">2</button>
        </div>
        <div class="btn-wrapper p3" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
          <button class="btn point-btn">3</button>
        </div>
        <div class="btn-wrapper p4" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
          <button class="btn point-btn">4</button>
        </div>
      </div>
    </div>
    <!-- <div class="canvas-main-hero">
      <ClientOnly>
        <Heavy3D />
      </ClientOnly>
    </div> -->
  </section>
</template>

<style scoped>
@import url('~/assets/css/components/pages/about/first-screen.scss');
.canvas-main-hero {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: var(--menu-overlay);
  z-index: var(--z-canvas-main-hero);
}
</style>

<script setup>
import { defineAsyncComponent } from 'vue';
import gsap from 'gsap';

const Heavy3D = defineAsyncComponent(() => import('/components/ThreeHero.vue'), { deferred: true });

const main = ref();
const onAnimation = ref(false);
let ctx;

function parallaxIt(e, movement) {
  if (onAnimation.value) return;
  var boundingRect = e.target.getBoundingClientRect();

  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  gsap.to(e.target.querySelector('button') ? e.target.querySelector('button') : e.target, {
    x: (relX - boundingRect.width / 2) * movement,
    y: (relY - boundingRect.height / 2 - scrollTop) * movement,
    // scale: 1.2,
    ease: 'power1',
    duration: 0.6,
  });
}

const handleMouseMove = (e) => {
  parallaxIt(e, 1);
};

const handleMouseLeave = (e) => {
  (onAnimation.value = true),
    gsap.to(e.target.querySelector('button'), {
      scale: 1,
      x: 0,
      y: 0,
      ease: 'power3',
      duration: 0.6,
      onComplete: () => {
        console.log('end');
        onAnimation.value = false;
      },
    });
};

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
