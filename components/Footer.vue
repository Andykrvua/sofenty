<template>
  <footer class="footer container">
    <div class="footer-content">
      <p class="h4">
        Прагнучи дати клієнтам краще, ми об'єднуємо зусилля, віддаємо душу та серце роботі, а результати
        говорять самі за себе.
      </p>
      <a class="phone" href="tel:+380965847201"><CommonSvgPhone /></a>
      <div class="pulse"></div>
    </div>
    <div class="footer-navs">
      <CommonFormAction />
      <div class="nav-wrapper">
        <div class="contacts">
          <h6 class="text">Контакти</h6>
          <a class="tab" :href="`mailto:${contactsEnums.email}`">{{ contactsEnums.email }}</a>
          <a class="tab" :href="`tel:${contactsEnums.phone}`">{{ contactsEnums.phone }}</a>
          <a class="tab" style="margin-top: 15px" :href="contactsEnums.telegram">Telegram</a>
          <a class="tab" :href="contactsEnums.whatsApp">WhatsApp</a>
          <a class="tab" :href="contactsEnums.viber">Viber</a>
        </div>
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

<style lang="scss" scoped>
@import url('~/assets/css/components/footer.scss');
</style>
