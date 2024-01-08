<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <NuxtLayout>
    <main class="page container">
      <pre>{{ props }}</pre>
      <button @click="handleError">Clear errors</button>
    </main>
  </NuxtLayout>
</template>
