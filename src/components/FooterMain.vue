<template>
  <footer class="footer_bg">
    <div class="container_main">
      <p class="footer_text">Loto-Checked@todos os direitos reservados</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterMain',
};
</script>

<style>
.footer_bg {
  background: var(--green-main);
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.footer_text {
  text-align: center;
  font-family: var(--family-text);
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--white-main);
  letter-spacing: 0.015rem;
}
</style>
