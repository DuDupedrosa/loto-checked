<template>
  <div>
    <img src="../assets/loading-icon.svg" alt="Loading" class="loading_main" />
  </div>
</template>

<script>
export default {
  name: 'LoadingMain',
};
</script>

<style>
@keyframes loading-rotation {
  to {
    transform: rotate(360deg);
  }
}

.loading_main {
  animation: loading-rotation 0.8s infinite;
}
</style>
