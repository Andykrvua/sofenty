<template>
  <svg
    :width="sizeEnum[props.size].width"
    :height="sizeEnum[props.size].height"
    viewBox="0 0 26 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.7071 8.1241C26.0976 7.73358 26.0976 7.10041 25.7071 6.70989L19.3431 0.345926C18.9526 -0.0445984 18.3195 -0.0445984 17.9289 0.345926C17.5384 0.73645 17.5384 1.36962 17.9289 1.76014L23.5858 7.41699L17.9289 13.0738C17.5384 13.4644 17.5384 14.0975 17.9289 14.4881C18.3195 14.8786 18.9526 14.8786 19.3431 14.4881L25.7071 8.1241ZM-8.74228e-08 8.41699L25 8.41699L25 6.41699L8.74228e-08 6.41699L-8.74228e-08 8.41699Z"
      :fill="props.color"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'original',
  },
  color: {
    type: String,
    default: 'var(--white)',
  },
});

const sizeEnum = {
  original: {
    width: 26,
    height: 15,
  },
  small: {
    width: 16,
    height: 9,
  },
};
</script>

<style scoped></style>
