<template>
  <a class="phone" :href="`tel:${contactsEnums.phone}`"><CommonSvgPhone /></a>
</template>

<style lang="scss" scoped>
.phone {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  place-self: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--blue);
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 160, 220, 0.7);
    border-radius: 50%;
    background-color: transparent;
    animation: animate-pulse 2s ease-in infinite;
  }
  &::before {
    animation: animate-pulse 2s 1s ease-in infinite;
  }
}

@keyframes animate-pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* br mobile */
@media (max-width: 767px) {
  .phone {
    width: 130px;
    height: 130px;
  }
}
</style>
