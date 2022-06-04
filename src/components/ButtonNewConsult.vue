<template>
  <button class="new_consult">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonNewConsult',
};
</script>

<style scoped>
.new_consult {
  font-family: var(--family-text);
  font-weight: 500;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: var(--white-main);
  background: var(--green-main);
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  cursor: pointer;
  box-shadow: 0px 0.125rem 0.0625rem rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s;
}

.new_consult:hover {
  box-shadow: 0 0 0.125rem 0.25rem var(--green-light);
}
</style>
