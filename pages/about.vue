<template>
  <main class="page">
    <section style="position: relative; height: 100vh">
      <div class="canvas-main-hero" style="width: 100%; height: 100%; background-color: #121212">
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <!-- <CommonTresHero /> -->
          <Test />
        </ClientOnly>
        <!-- <TresCanvas clear-color="#82DBC5" class="canvas">
        <OrbitControls />
        <TresPerspectiveCamera :position="[1, 2, 5]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
        <TresMesh ref="boxRef" :scale="1" cast-shadow>
          <TresBoxGeometry :args="[1, 1, 1]" :position="[0, 0, 0]" />
          <TresMeshNormalMaterial />
        </TresMesh>
      </TresCanvas> -->
      </div>
      About
      <div>
        <form>
          <select v-model="locale">
            <option value="en">en</option>
            <option value="uk">uk</option>
          </select>
          <p>{{ $t('main.welcome') }}</p>
        </form>
        <NuxtLink v-for="lang in locales" :key="lang.code" :to="switchLocalePath(lang.code)">{{
          lang.name
        }}</NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ['foo'],
  },
});
useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js',
    },
  ],
});
console.log(i18nHead.value.link);
console.log(i18nHead.value.meta);
</script>
