<template>
  <main class="page">
    <PagesHomeFirstScreen />
    <PagesHomeServices />
    <PagesHomeProjects />
    <PagesHomeTeams />
    <PagesHomeClients />
    <div class="canvas-main-hero">
      <ClientOnly>
        <Heavy3D />
      </ClientOnly>
    </div>
  </main>
</template>

<style scoped>
.canvas-main-hero {
  position: absolute;
  width: 100%;
  height: 100svh;
  inset: 0;
  background: var(--menu-overlay);
  z-index: var(--z-canvas-main-hero);
}
</style>

<script setup>
import { defineAsyncComponent } from 'vue';

const Heavy3D = defineAsyncComponent(() => import('/components/ThreeHero.vue'), { deferred: true });

useHead({
  script: [
    {
      src: '/simplex-noise.min.js',
    },
  ],
});
</script>
