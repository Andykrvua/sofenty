<template>
  <section class="portfolio container">
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

<style scoped>
@import url('~/assets/css/components/pages/about/portfolio.scss');
</style>
