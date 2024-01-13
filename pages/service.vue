<template>
  <main class="page">
    <PagesServiceFirstScreen />
    <PagesServiceHeroSlider />
    <PagesAboutNumbers />
    <PagesHomeClients />
  </main>
</template>

<script setup>
useHead({
  title: 'Service - Sofenty',
  meta: [
    {
      name: 'description',
      content: 'Послуги',
    },
  ],
  script: [
    {
      src: '/simplex-noise.min.js',
    },
  ],
});
// let lenis;

// onMounted(() => {
//   lenis = useLenis();
//   lenis.init();
// });

// onUnmounted(() => {
//   lenis.destroy();
// });
</script>
