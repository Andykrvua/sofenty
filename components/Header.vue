<template>
  <header class="header container">
    <NuxtLink to="/" class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 58 40"
        aria-labelledby="Sofenty logo"
        role="img"
        width="58"
        height="40"
        fill="none"
      >
        <path
          fill="#C8C8C8"
          d="M18.397 5.958 6.01 18.336l-4.25-4.244a6.007 6.007 0 0 0 0 8.496L19.177 40l16.638-16.631L18.397 5.958Z"
        />
        <path
          fill="#006889"
          d="M51.186 19.515 38.799 31.9l4.25 4.248a6.01 6.01 0 0 1-8.5 0L17.13 18.734 33.769 2.099l17.418 17.416Z"
        />
        <path
          fill="#00A0DC"
          d="M55.34 15.173a6.14 6.14 0 0 1 0 8.685l-6.602 6.6-5.686 5.691a3.999 3.999 0 0 1-.111.107l-.087.08a4.106 4.106 0 0 1-.259.222c-.037.03-.08.067-.12.098l-.1.074c-.035.024-.094.07-.134.1a.63.63 0 0 1-.095.063c-.069.049-.14.093-.215.133-.072.04-.11.068-.168.1l-.028.015-.17.092-.093.045a.078.078 0 0 1-.023.011 4.286 4.286 0 0 1-.404.18l-.02.01c-.076.027-.15.057-.225.082h-.01c-.082.031-.166.057-.25.08-.084.023-.133.04-.21.059l-.08.021c-.077.02-.153.036-.23.052-.077.016-.133.025-.203.037h-.013l-.08.012c-.04.008-.08.012-.12.02l-.152.018a7.556 7.556 0 0 1-.2.019c-.056 0-.111.008-.166.009h-.167a2.483 2.483 0 0 0 1.32-.446c.058-.044.116-.087.17-.134a2.448 2.448 0 0 0 .69-.93 2.485 2.485 0 0 0-.505-2.702l-1.789-1.788-3.452-3.45-6.72-6.715L41.021 9.34l4.25-4.25 10.07 10.083Z"
        />
        <path
          fill="#F8F8F8"
          d="M22.734 1.801a6.136 6.136 0 0 0-8.676-.01l-.01.01-4.42 4.42-7.87 7.867a6.462 6.462 0 0 0-.988 1.294l-.012.02c-.04.072-.077.142-.113.213-.04.08-.08.157-.113.237l-.017.04-.023.055-.06.14-.017.038a5.817 5.817 0 0 0-.223.68c-.01.035-.02.07-.026.103-.02.073-.036.147-.05.223a8.852 8.852 0 0 0-.038.203v.012c0 .025-.009.052-.012.08-.002.027-.013.084-.018.126l-.02.143-.018.2c-.006.067-.008.11-.01.167v.165a2.52 2.52 0 0 1 .336-1.141 2.487 2.487 0 0 1 3.88-.533l1.786 1.79 1.27 1.27 8.903 8.895 12.381-12.384 4.25-4.25L22.735 1.801Z"
        />
      </svg>
      <p class="logo-txt">Sofenty</p>
    </NuxtLink>
    <div class="header__controls">
      <button class="burger-btn"></button>
      <div class="lang-switcher">
        <NuxtLink :to="switchLocalePath('uk')" class="locale-link">UA</NuxtLink>/<NuxtLink
          :to="switchLocalePath('en')"
          class="locale-link"
          >EN</NuxtLink
        >
      </div>
    </div>
    <button class="lead-btn btn">{{ $t('header.lead_btn') }}</button>

    <!-- <NuxtLink :to="localePath('/')">main</NuxtLink>a
    <NuxtLink :to="localePath('/about')">about</NuxtLink> -->
  </header>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="scss" scoped>
@import url('~/assets/css/components/header.scss');
</style>