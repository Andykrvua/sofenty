<template>
  <section class="service container">
    <h4 class="h4">Наші послуги</h4>

    <div class="service-wrapper">
      <!-- <div class="service-item item-1" :class="{active: }" @mouseenter="hover" @mouseleave="unhover"></div> -->
      <div class="service-item item-1" :class="{ active: isHover === 1 }" @mouseenter="hover(1)">
        <img src="~/assets/img/service/1.webp" alt="Веб-сайти" width="788" height="600" loading="lazy" />
        <div class="item-content">
          <NuxtLink :to="localePath(navEnums.websites)" class="btn slider-btn"
            ><CommonSvgArrow :color="'var(--black)'"
          /></NuxtLink>
          <h5 class="h5">Веб-сайти</h5>
          <div class="item-tags">
            <span class="item-tag tab">Інтернет магазини</span>
            <span class="item-tag tab">Корпоративні сайти</span>
            <span class="item-tag tab">Промо сайти</span>
          </div>
        </div>
      </div>
      <div class="service-item item-2" :class="{ active: isHover === 2 }" @mouseenter="hover(2)">
        <img
          src="~/assets/img/service/2.webp"
          alt="Мобільні додатки"
          width="641"
          height="541"
          loading="lazy"
        />
        <div class="item-content">
          <NuxtLink :to="localePath(navEnums.mobileapps)" class="btn slider-btn"
            ><CommonSvgArrow :color="'var(--black)'"
          /></NuxtLink>
          <h5 class="h5">
            Мобільні <br />
            додатки
          </h5>
          <div class="item-tags">
            <span class="item-tag tab">Інтернет магазини</span>
            <span class="item-tag tab">Корпоративні сайти</span>
            <span class="item-tag tab">Промо сайти</span>
          </div>
        </div>
      </div>
      <div class="service-item item-3" :class="{ active: isHover === 3 }" @mouseenter="hover(3)">
        <img src="~/assets/img/service/3.webp" alt="Чат боти" width="683" height="600" loading="lazy" />
        <div class="item-content">
          <NuxtLink :to="localePath(navEnums.chatbots)" class="btn slider-btn"
            ><CommonSvgArrow :color="'var(--black)'"
          /></NuxtLink>
          <h5 class="h5">Чат боти</h5>
          <div class="item-tags">
            <span class="item-tag tab">Інтернет магазини</span>
            <span class="item-tag tab">Корпоративні сайти</span>
            <span class="item-tag tab">Промо сайти</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const isHover = ref(1);
const hover = (val) => {
  isHover.value = val;
};
</script>

<style scoped>
@import url('~/assets/css/components/pages/service/hero-slider.scss');
</style>
