<template>
  <footer class="footer container" :class="{ light: mode === 'light', contacts: type === 'contacts' }">
    <div v-if="type === 'default'" class="footer-content">
      <p class="h4">
        Прагнучи дати клієнтам краще, ми об'єднуємо зусилля, віддаємо душу та серце роботі, а результати
        говорять самі за себе.
      </p>
      <CommonPulsePhone />
    </div>
    <div class="footer-navs">
      <p class="h4" v-if="type === 'contacts'">
        Замовте дзвінок.<br />Протягом 10 хвилин ми вам зателефонуємо.
      </p>
      <CommonFormAction :mode="mode" />
      <div v-if="type === 'default'" class="nav-wrapper">
        <CommonContactsBlock />
        <nav class="nav">
          <h6 class="text">Меню</h6>
          <ul>
            <li>
              <NuxtLink :to="localePath(navEnums.about)" class="tab">Про нас</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(navEnums.service)" class="tab">Послуги</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(navEnums.portfolio)" class="tab">Портфоліо</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(navEnums.vacancies)" class="tab">Вакансії</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(navEnums.contacts)" class="tab">Контакти</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="copyright">@2022 Sofenty</div>
    </div>
  </footer>
</template>

<script setup>
// dark or light
// default or contacts
const props = defineProps({
  mode: {
    type: String,
    default: 'dark',
  },
  type: {
    type: String,
    default: 'default',
  },
});
</script>

<style lang="scss" scoped>
@import url('~/assets/css/components/footer.scss');
</style>
