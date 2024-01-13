<template>
  <main class="page">
    <PagesAboutFirstScreen />
    <CommonTeamsBlock :page="'about'" />
    <PagesAboutNumbers />
    <PagesHomeClients />
    <PagesAboutPortfolio />
  </main>
</template>

<script setup>
useHead({
  title: 'About - Sofenty',
  meta: [
    {
      name: 'description',
      content: 'Про нас',
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
