<template>
  <section class="services container">
    <NuxtLink :to="localePath(navEnums.service)" class="btn rounded-btn-arrow"
      ><span>Послуги<CommonSvgArrow :color="'var(--black)'" :size="'small'" /></span
    ></NuxtLink>
    <div class="services-slides">
      <ul class="content-slide-titles" :style="{ '--marker-top-pos': `${hover}px` }">
        <li
          @mouseover="hover = hoverEnum[1]"
          @mouseleave="hover = curHover ? curHover : hoverEnum[1]"
          @click="setSlide"
        >
          <button class="btn dots-btn black">Веб - сайти</button>
        </li>
        <li
          @mouseover="hover = hoverEnum[2]"
          @mouseleave="hover = curHover ? curHover : hoverEnum[1]"
          @click="setSlide"
        >
          <button class="btn dots-btn black">Мобільні додатки</button>
        </li>
        <li
          @mouseover="hover = hoverEnum[3]"
          @mouseleave="hover = curHover ? curHover : hoverEnum[1]"
          @click="setSlide"
        >
          <button class="btn dots-btn black">Формування ідеї бізнесу</button>
        </li>
        <li
          @mouseover="hover = hoverEnum[4]"
          @mouseleave="hover = curHover ? curHover : hoverEnum[1]"
          @click="setSlide"
        >
          <button class="btn dots-btn black">Ентерпрайз рішення</button>
        </li>
      </ul>
      <div class="content-slide__wrapper">
        <div class="content-slide" ref="slideList">
          <div class="slide-item" :class="{ active: curHover === hoverEnum[1] }">
            <div class="slide-descr">
              <h3 class="h3">Веб-сайти</h3>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності. Ми вдумливо і
                комплексно підходимо до його створення. В результаті ви отримуєте чудовий ux та сучасний
                дизайн.
              </p>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності.
              </p>
              <div class="slide-btn__wrapper">
                <button class="btn circle-btn" @click="nextSlide" tabindex="-1">
                  <CommonSvgArrow />
                </button>
              </div>
            </div>
            <div class="slide-imgs">
              <img
                class="main-img"
                src="~/assets/img/services-slides/1.svg"
                width="701"
                height="482"
                alt="приклад Веб-сайту"
                loading="lazy"
              />
              <img
                class="second-img"
                srcset="
                  ~/assets/img/services-slides/1-2-1x.webp 1x,
                  ~/assets/img/services-slides/1-2-2x.webp 2x
                "
                src="~/assets/img/services-slides/1-2-1x.webp"
                width="234"
                height="431"
                alt="приклад Веб-сайту"
                loading="lazy"
              />
            </div>
          </div>
          <div class="slide-item" :class="{ active: curHover === hoverEnum[2] }">
            <div class="slide-descr">
              <h3 class="h3">Моб. додатки</h3>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності. Ми вдумливо і
                комплексно підходимо до його створення. В результаті ви отримуєте чудовий ux та сучасний
                дизайн.
              </p>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності.
              </p>
              <div class="slide-btn__wrapper">
                <button class="btn circle-btn" @click="nextSlide" tabindex="-1">
                  <CommonSvgArrow />
                </button>
              </div>
            </div>
            <div class="slide-imgs">
              <img
                class="main-img-2"
                srcset="~/assets/img/services-slides/2-1x.webp 1x, ~/assets/img/services-slides/2-2x.webp 2x"
                src="~/assets/img/services-slides/2-1x.webp"
                width="250"
                height="526"
                alt="приклад мобільного додатку"
                loading="lazy"
              />
              <img
                class="second-img-2"
                srcset="
                  ~/assets/img/services-slides/2-2-1x.webp 1x,
                  ~/assets/img/services-slides/2-2-2x.webp 2x
                "
                src="~/assets/img/services-slides/2-2-1x.webp"
                width="250"
                height="526"
                alt="приклад мобільного додатку"
                loading="lazy"
              />
            </div>
          </div>
          <div class="slide-item" :class="{ active: curHover === hoverEnum[3] }">
            <div class="slide-descr">
              <h3 class="h3">Формування ідеї бізнесу</h3>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності. Ми вдумливо і
                комплексно підходимо до його створення. В результаті ви отримуєте чудовий ux та сучасний
                дизайн.
              </p>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності.
              </p>
              <div class="slide-btn__wrapper">
                <button class="btn circle-btn" @click="nextSlide" tabindex="-1">
                  <CommonSvgArrow />
                </button>
              </div>
            </div>
            <div class="slide-imgs">
              <img
                class="main-img-3"
                src="~/assets/img/services-slides/3.svg"
                width="616"
                height="565"
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          </div>
          <div class="slide-item" :class="{ active: curHover === hoverEnum[4] }">
            <div class="slide-descr">
              <h3 class="h3">Ентерпрайз рішення</h3>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності. Ми вдумливо і
                комплексно підходимо до його створення. В результаті ви отримуєте чудовий ux та сучасний
                дизайн.
              </p>
              <p class="text text-14">
                Наша команда створює чудовий дизайн для будь чого та будь-якої складності.
              </p>
              <div class="slide-btn__wrapper">
                <button class="btn circle-btn" @click="nextSlide" tabindex="-1">
                  <CommonSvgArrow />
                </button>
              </div>
            </div>
            <div class="slide-imgs">
              <img
                class="main-img-3"
                src="~/assets/img/services-slides/4.svg"
                width="546"
                height="602"
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const hoverEnum = {
  1: 23,
  2: 77,
  3: 131,
  4: 185,
};
const hover = ref(hoverEnum[1]);
const curHover = ref(hoverEnum[1]);
const currentShift = ref(0);
const slideList = ref(null);

const setSlide = () => {
  curHover.value = hover.value;
  if (curHover.value === hoverEnum[1]) {
    slideList.value.style.transform = `translateX(0%)`;
    currentShift.value = 0;
  } else if (curHover.value === hoverEnum[2]) {
    slideList.value.style.transform = `translateX(-25%)`;
    currentShift.value = -25;
  } else if (curHover.value === hoverEnum[3]) {
    slideList.value.style.transform = `translateX(-50%)`;
    currentShift.value = -50;
  } else if (curHover.value === hoverEnum[4]) {
    slideList.value.style.transform = `translateX(-75%)`;
    currentShift.value = -75;
  }
};

const nextSlide = () => {
  currentShift.value += -25;

  if (currentShift.value === -100) {
    currentShift.value = 0;
  }

  if (currentShift.value === 0) {
    hover.value = hoverEnum[1];
    curHover.value = hoverEnum[1];
  } else if (currentShift.value === -25) {
    hover.value = hoverEnum[2];
    curHover.value = hoverEnum[2];
  } else if (currentShift.value === -50) {
    hover.value = hoverEnum[3];
    curHover.value = hoverEnum[3];
  } else if (currentShift.value === -75) {
    hover.value = hoverEnum[4];
    curHover.value = hoverEnum[4];
  }

  if (slideList.value) {
    slideList.value.style.transform = `translateX(${currentShift.value}%)`;
  }
};
</script>

<style scoped>
@import url('~/assets/css/components/pages/home/services.scss');
</style>
