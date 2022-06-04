<template>
  <h1 class="title_main">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'TitleMain',
};
</script>

<style scoped>
.title_main {
  font-family: var(--family-title);
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.5;
  color: var(--black-light);
}

.title_main::after {
  content: '';
  display: block;
  width: 6.25rem;
  height: 0.1875rem;
  background: var(--green-main);
  margin-top: 0.4rem;
}

@media (max-width: 50rem) {
  .title_main {
    font-size: 2.625rem;
  }

  .title_main::after {
    width: 3.75rem;
  }
}

@media (max-width: 37.5rem) {
  .title_main {
    font-size: 2rem;
  }
}
</style>
