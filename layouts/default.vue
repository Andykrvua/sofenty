<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>Sofenty</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body :class="{ light: colorMode === 'light' }">
      <div class="page-wrapper">
        <Header :mode="colorMode" />
        <slot />
        <Footer :mode="colorMode" :type="footerType" />
      </div>
    </Body>
  </Html>
</template>

<script setup>
const route = useRoute();
const colorMode = ref('dark');
const footerType = ref('default');

const modeToogle = () => {
  if (route.path.includes('/contacts')) {
    colorMode.value = 'light';
    footerType.value = 'contacts';
  } else if (route.path.includes('/vacancies')) {
    colorMode.value = 'light';
    footerType.value = 'default';
  } else {
    colorMode.value = 'dark';
    footerType.value = 'default';
  }
};

if (route.path.includes('/contacts') || route.path.includes('/vacancies')) {
  modeToogle();
}

watch(
  () => route.path,
  () => {
    modeToogle();
  }
);

const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
// const title = computed(() => t('layouts.title', { title: t(route.meta.title ?? 'TBD') }))

let lenis;

onMounted(() => {
  // lenis = useLenis();
  // lenis.init();
});

onUnmounted(() => {
  // lenis.destroy();
});
</script>
