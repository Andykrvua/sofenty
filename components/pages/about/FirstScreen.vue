<template>
  <section class="first-screen">
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
        <p class="text text-14">
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
        <div class="btn-wrapper p1">
          <button
            @mouseleave="(e) => handleMouseLeave(e, '#b1')"
            @mousemove="(e) => handleMouseMove(e, '#b1')"
            @click="showTip('#b1')"
            class="magnetic-size"
          ></button>
          <div class="point-btn b1" :class="{ active: show === '#b1' }" id="b1">
            1
            <div class="tooltip b1">
              <h6 class="title">Честність</h6>
              <p class="text2">
                Ми об'єднуємо зусилля, співпрацюємо, віддаємо серце роботі, а результати говорять самі за
                себе.
              </p>
            </div>
          </div>
        </div>
        <div class="btn-wrapper p2">
          <button
            @mouseleave="(e) => handleMouseLeave(e, '#b2')"
            @mousemove="(e) => handleMouseMove(e, '#b2')"
            @click="showTip('#b2')"
            class="magnetic-size"
          ></button>
          <div class="point-btn" :class="{ active: show === '#b2' }" id="b2">
            2
            <div class="tooltip b2">
              <h6 class="title">Честність</h6>
              <p class="text2">
                Ми об'єднуємо зусилля, співпрацюємо, віддаємо серце роботі, а результати говорять самі за
                себе.
              </p>
            </div>
          </div>
        </div>
        <div class="btn-wrapper p3">
          <button
            @mouseleave="(e) => handleMouseLeave(e, '#b3')"
            @mousemove="(e) => handleMouseMove(e, '#b3')"
            @click="showTip('#b3')"
            class="magnetic-size"
          ></button>
          <div class="point-btn" :class="{ active: show === '#b3' }" id="b3">
            3
            <div class="tooltip b3">
              <h6 class="title">Честність</h6>
              <p class="text2">
                Ми об'єднуємо зусилля, співпрацюємо, віддаємо серце роботі, а результати говорять самі за
                себе.
              </p>
            </div>
          </div>
        </div>
        <div class="btn-wrapper p4">
          <button
            @mouseleave="(e) => handleMouseLeave(e, '#b4')"
            @mousemove="(e) => handleMouseMove(e, '#b4')"
            @click="showTip('#b4')"
            class="magnetic-size"
          ></button>
          <div class="point-btn" :class="{ active: show === '#b4' }" id="b4">
            4
            <div class="tooltip b4">
              <h6 class="title">Честність</h6>
              <p class="text2">
                Ми об'єднуємо зусилля, співпрацюємо, віддаємо серце роботі, а результати говорять самі за
                себе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('~/assets/css/components/pages/about/first-screen.scss');
.canvas-main-hero {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: var(--z-canvas-main-hero);
}
</style>

<script setup>
import { defineAsyncComponent } from 'vue';
import gsap from 'gsap';

const Heavy3D = defineAsyncComponent(() => import('/components/ThreeHero.vue'), { deferred: true });

const show = ref('');

const showTip = (val) => {
  if (show.value === val) {
    show.value = '';
  } else {
    mouseLeaveAnimation(val);
    show.value = val;
  }
};

const parallaxIt = (e, target, movement = 1) => {
  var boundingRect = e.target.getBoundingClientRect();

  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  gsap.to(target, {
    x: (relX - boundingRect.width / 2) * movement,
    y: (relY - boundingRect.height / 2 - scrollTop) * movement,
    ease: 'power1',
    duration: 0.6,
  });
};

const handleMouseMove = (e, target) => {
  if (show.value !== target) {
    parallaxIt(e, document.querySelector(target));
  }
};

const handleMouseLeave = (e, target) => {
  if (show.value !== target) {
    mouseLeaveAnimation(target);
  }
};

const mouseLeaveAnimation = (target) => {
  gsap.to(target, {
    scale: 1,
    x: 0,
    y: 0,
    ease: 'power3',
    duration: 0.6,
  });
};
</script>
