<template>
  <main class="page">
    <PagesAboutFirstScreen />
    <PagesHomeServices />
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
</script>
