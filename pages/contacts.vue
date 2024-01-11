<template>
  <main class="page">
    <section class="contacts">
      <div class="contacts-header container">
        <h1 class="title">Зв'яжіться з нами, щоб створити успішний проект</h1>
        <CommonPulsePhone class="pulse-phone" />
      </div>
      <div class="contacts-line container">
        <a class="h6 f-line" :href="`mailto:${contactsEnums.email}`">{{ contactsEnums.email }}</a>
        <a class="h6 f-line" :href="`tel:${contactsEnums.phone}`">{{ contactsEnums.phone }}</a>
        <a class="h6" :href="contactsEnums.telegram">Telegram</a>
        <a class="h6" :href="contactsEnums.whatsApp">WhatsApp</a>
        <a class="h6" :href="contactsEnums.viber">Viber</a>
      </div>
      <div class="img-wrapper">
        <img src="~/assets/img/contacts/1.webp" width="1342" height="550" alt="Команда Sofenty" />
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'Contacts - Sofenty',
  meta: [
    {
      name: 'description',
      content: 'Контаты',
    },
  ],
});
</script>

<style scoped>
@import url('~/assets/css/components/pages/contacts.scss');
</style>
