<template>
  <h2 class="title_second">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'TitleSecond',
};
</script>

<style scoped>
.title_second {
  font-family: var(--family-text);
  font-size: 1.75rem;
  color: var(--black-main);
  font-weight: normal;
}

.title_second::after {
  content: '';
  display: block;
  width: 3.75rem;
  height: 0.1875rem;
  background: var(--green-main);
  margin-top: 0.4rem;
}

@media (max-width: 37.5rem) {
  .title_second {
    font-size: 1.5rem;
  }
}
</style>
