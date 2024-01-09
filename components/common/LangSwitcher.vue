<template>
  <div class="lang-switcher" :class="{ visible: visible }">
    <NuxtLink :to="switchLocalePath('uk')" class="locale-link">UA</NuxtLink>/<NuxtLink
      :to="switchLocalePath('en')"
      class="locale-link"
      >EN</NuxtLink
    >
  </div>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="scss" scoped>
.lang-switcher {
  display: flex;
  align-self: stretch;
  align-items: center;
  color: var(--f-w-40);
  .locale-link {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
    &:last-child {
      padding: 0 10px 0 0;
    }
  }
}

.lang-switcher .router-link-active {
  color: var(--base-f);
}

/* br mobile */
@media (max-width: 767px) {
  .lang-switcher {
    display: none;
  }
  .lang-switcher.visible {
    position: absolute;
    display: flex;
    left: 50%;
    margin-top: 8px;
  }
}
</style>
