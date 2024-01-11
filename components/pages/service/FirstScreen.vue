<template>
  <section class="first-screen">
    <div class="content container">
      <div class="content-header">
        <h1 class="h1">Послуги</h1>
        <p class="h6 descr">Ми створюємо продукт, який сприяє росту вашого прибутку</p>
      </div>
      <div class="content-text">
        <p class="h4 f1">Ми слідуємо простому підходу</p>
        <div class="content-text__column f1">
          <div class="content-text-item">
            <h6 class="content-text-item__title h6">Ціль визначає все</h6>
            <p class="content-text-item__descr text text-14">
              Чого ви хочете досягти? Розуміння мети вашої презентації дозволяє нам адаптувати її, щоб вона
              досягала мети та призводила до результатів.
            </p>
          </div>
          <div class="content-text-item">
            <h6 class="content-text-item__title h6">Аудиторія на першому місці</h6>
            <p class="content-text-item__descr text text-14">
              Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію досить
              добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа.
            </p>
          </div>
        </div>

        <div class="content-text-item f1">
          <h6 class="content-text-item__title h6">Контекст має значення</h6>
          <p class="content-text-item__descr text text-14">
            Коли ви уявляєте? Онлайн чи наживо? На зустрічі з продажу, на конференції чи просто надсилаєте
            холодного електронного листа? Ми пов'язуємо контекст разом, щоб визначити стиль презентації.
          </p>
        </div>
      </div>
    </div>
    <div class="canvas-main-hero">
      <ClientOnly>
        <Heavy3D />
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped>
@import url('~/assets/css/components/pages/service/first-screen.scss');
.canvas-main-hero {
  position: absolute;
  inset: 0;
  background: var(--menu-overlay);
  pointer-events: none;
  z-index: var(--z-canvas-main-hero);
}
</style>

<script setup>
import { defineAsyncComponent } from 'vue';
import gsap from 'gsap';

const Heavy3D = defineAsyncComponent(() => import('/components/ThreeHero.vue'), { deferred: true });
</script>
