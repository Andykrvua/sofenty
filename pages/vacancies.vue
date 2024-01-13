<template>
  <main class="page">
    <section class="vacancies container" ref="main">
      <div class="vacancies-header">
        <h1 class="h1">Вакансії</h1>
        <div class="foto-wrapper">
          <img
            src="~/assets/img/teams/1.webp"
            class="img-1"
            width="63"
            height="63"
            alt="Вася"
            loading="lazy"
          />
          <div class="img-helper"></div>
          <img
            src="~/assets/img/teams/3.webp"
            class="img-3"
            width="63"
            height="94"
            alt="Дмитро"
            loading="lazy"
          />
          <img
            src="~/assets/img/teams/4.webp"
            class="img-4"
            width="63"
            height="63"
            alt="Катерина"
            loading="lazy"
          />
          <div class="img-helper img-helper__rounded"></div>
          <img
            src="~/assets/img/teams/9.webp"
            class="img-9"
            width="63"
            height="94"
            alt="Панас"
            loading="lazy"
          />
          <span>...</span>
        </div>
        <p class="vacancies-header-descr text">Приєднюйся до команди професіоналів</p>
      </div>

      <div class="vacancies-grid">
        <h3 class="header-title h4">Посади які зараз вільні</h3>
        <p class="header-descr text">
          Клікнувши на розділ, ви можете детально ознайомитися з нашою вакансією.
        </p>
        <div id="accordiongroup" class="vacancies-items">
          <h2 class="item-title h4" :class="{ active: isExpand[1] }">
            <button
              @click="expand(event, 1)"
              :aria-expanded="isExpand[1]"
              class="accordion-btn"
              aria-controls="content1"
              id="accordion1"
            >
              Project manager
              <span class="item-title-arrow"><CommonSvgArrow :color="'var(--black)'" /></span>
            </button>
          </h2>
          <div class="item-content item-1" id="content1" role="region" aria-labelledby="accordion1">
            <div class="item-content-left">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <p class="h7">Володіння програмами</p>
              <p class="text-cap">Figma Webflow Readymag Photoshop</p>
            </div>
            <div class="item-content-right">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа. Нам потрібно
                знати вашу аудиторію досить добре, щоб надати персоналізовану презентацію, яка їм справді
                небайдужа.<br /><br />
                Чому це важливо для них? Нам потрібно знати вашу аудиторію досить добре, щоб надати
                персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <div class="send-resume">
                <p class="text2 op-4">
                  Нам потрібно знати вашу аудиторію досить добре, презентацію, їм небайдужа.
                </p>
                <a :href="`mailto:${contactsEnums.email}`" class="btn circle-big-btn">
                  <span class="down">Відправити портфоліо</span>
                </a>
              </div>
            </div>
          </div>
          <h2 class="item-title h4" :class="{ active: isExpand[2] }">
            <button
              @click="expand(event, 2)"
              :aria-expanded="isExpand[2]"
              class="accordion-btn"
              aria-controls="content2"
              id="accordion2"
            >
              UX/UI designer
              <span class="item-title-arrow"><CommonSvgArrow :color="'var(--black)'" /></span>
            </button>
          </h2>
          <div class="item-content item-2" id="content2" role="region" aria-labelledby="accordion2">
            <div class="item-content-left">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <p class="h7">Володіння програмами</p>
              <p class="text-cap">Figma Webflow Readymag Photoshop</p>
            </div>
            <div class="item-content-right">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа. Нам потрібно
                знати вашу аудиторію досить добре, щоб надати персоналізовану презентацію, яка їм справді
                небайдужа.<br /><br />
                Чому це важливо для них? Нам потрібно знати вашу аудиторію досить добре, щоб надати
                персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <div class="send-resume">
                <p class="text2 op-4">
                  Нам потрібно знати вашу аудиторію досить добре, презентацію, їм небайдужа.
                </p>
                <a :href="`mailto:${contactsEnums.email}`" class="btn circle-big-btn">
                  <span class="down">Відправити портфоліо</span>
                </a>
              </div>
            </div>
          </div>

          <h2 class="item-title h4" :class="{ active: isExpand[3] }">
            <button
              @click="expand(event, 3)"
              :aria-expanded="isExpand[3]"
              class="accordion-btn"
              aria-controls="content3"
              id="accordion3"
            >
              Project manager
              <span class="item-title-arrow"><CommonSvgArrow :color="'var(--black)'" /></span>
            </button>
          </h2>
          <div class="item-content item-3" id="content3" role="region" aria-labelledby="accordion3">
            <div class="item-content-left">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <p class="h7">Володіння програмами</p>
              <p class="text-cap">Figma Webflow Readymag Photoshop</p>
            </div>
            <div class="item-content-right">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа. Нам потрібно
                знати вашу аудиторію досить добре, щоб надати персоналізовану презентацію, яка їм справді
                небайдужа.<br /><br />
                Чому це важливо для них? Нам потрібно знати вашу аудиторію досить добре, щоб надати
                персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <div class="send-resume">
                <p class="text2 op-4">
                  Нам потрібно знати вашу аудиторію досить добре, презентацію, їм небайдужа.
                </p>
                <a :href="`mailto:${contactsEnums.email}`" class="btn circle-big-btn">
                  <span class="down">Відправити портфоліо</span>
                </a>
              </div>
            </div>
          </div>
          <h2 class="item-title h4 last" :class="{ active: isExpand[4] }">
            <button
              @click="expand(event, 4)"
              :aria-expanded="isExpand[4]"
              class="accordion-btn"
              aria-controls="content4"
              id="accordion4"
            >
              UX/UI designer
              <span class="item-title-arrow"><CommonSvgArrow :color="'var(--black)'" /></span>
            </button>
          </h2>
          <div class="item-content item-4" id="content4" role="region" aria-labelledby="accordion4">
            <div class="item-content-left">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <p class="h7">Володіння програмами</p>
              <p class="text-cap">Figma Webflow Readymag Photoshop</p>
            </div>
            <div class="item-content-right">
              <p class="h7">Подзвонити нам</p>
              <p class="text2">
                Хто це для? Чого вони хочуть? Чому це важливо для них? Нам потрібно знати вашу аудиторію
                досить добре, щоб надати персоналізовану презентацію, яка їм справді небайдужа. Нам потрібно
                знати вашу аудиторію досить добре, щоб надати персоналізовану презентацію, яка їм справді
                небайдужа.<br /><br />
                Чому це важливо для них? Нам потрібно знати вашу аудиторію досить добре, щоб надати
                персоналізовану презентацію, яка їм справді небайдужа.
              </p>
              <div class="send-resume">
                <p class="text2 op-4">
                  Нам потрібно знати вашу аудиторію досить добре, презентацію, їм небайдужа.
                </p>
                <a :href="`mailto:${contactsEnums.email}`" class="btn circle-big-btn">
                  <span class="down">Відправити портфоліо</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import gsap from 'gsap';

useHead({
  title: 'Vacancies - Sofenty',
  meta: [
    {
      name: 'description',
      content: 'Вакасії',
    },
  ],
});

const main = ref();
let ctx;

const isExpand = ref({
  1: false,
  2: false,
  3: false,
  4: false,
});

const expand = (e, i) => {
  let el = document.querySelector(`.item-${i}`);

  gsap.to(el, {
    height: isExpand.value[i] ? 0 : el.scrollHeight,
    ease: 'power1.inOut',
    duration: 1,
  });
  isExpand.value[i] = !isExpand.value[i];
};

onMounted(async () => {
  ctx = gsap.context((self) => {
    // const heroTitle = self.selector('.hero-title');

    let mm = gsap.matchMedia();

    // mobile anim
    // mm.add('(max-width: 767px)', () => {
    //   gsap.to(card, {
    //     opacity: 1,
    //     y: 0,
    //     delay: 0.3,
    //   });
    // });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style>
.item-title-arrow path {
  transition: fill var(--base-tr);
}
.accordion-btn:active .item-title-arrow path {
  fill: var(--white);
}
@media (hover: hover) {
  .accordion-btn:hover .item-title-arrow path {
    fill: var(--white);
  }
}
</style>
<style scoped>
@import url('~/assets/css/components/pages/vacancies.scss');
</style>
