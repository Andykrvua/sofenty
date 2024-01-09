<template>
  <div class="contacts">
    <h6 class="text">Контакти</h6>
    <a class="tab" :href="`mailto:${contactsEnums.email}`">{{ contactsEnums.email }}</a>
    <a class="tab" :href="`tel:${contactsEnums.phone}`">{{ contactsEnums.phone }}</a>
    <a class="tab" style="margin-top: 15px" :href="contactsEnums.telegram">Telegram</a>
    <a class="tab" :href="contactsEnums.whatsApp">WhatsApp</a>
    <a class="tab" :href="contactsEnums.viber">Viber</a>
  </div>
</template>

<style lang="scss">
/* br mobile */
@media (max-width: 767px) {
  #main-menu {
    .contacts {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  .tab + .tab {
    margin-top: 5px;
  }
}

.text {
  margin-bottom: 15px;
  color: var(--f-w-40);
}

.tab {
  display: flex;
  transition: color var(--base-tr);
}

.tab:active {
  color: var(--blue);
}

@media (hover: hover) {
  .tab:hover {
    color: var(--blue);
  }
}

/* br mobile */
@media (max-width: 767px) {
  .text {
    margin-bottom: 13px;
    font-size: 16px;
  }
}
</style>
