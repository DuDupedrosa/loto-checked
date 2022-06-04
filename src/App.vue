<template>
  <div class="App">
    <HeaderMain />
    <div class="App_content">
      <router-view></router-view>
    </div>
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue';
import FooterMain from '@/components/FooterMain.vue';

export default {
  name: 'App',
  components: {
    HeaderMain,
    FooterMain,
  },
};
</script>

<style>
/* css-variables */
:root {
  /* font-family */
  --family-title: 'Poppins', sans-serif;
  --family-text: 'Roboto', sans-serif;

  /* css-colors */
  --green-main: #70e000;
  --green-light: #9ef01a;
  --green-strong: #38b000;
  --black-main: #000000;
  --black-light: #111111;
  --white-main: #ffffff;
  --red-alert: #d90429;

  /* css-reset-styles */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  display: inline-block;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

ul {
  list-style: none;
}

/* animacao componente */
@keyframes show-component {
  from {
    opacity: 0;
    transform: translate3d(-2.5rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* previvindo para que o footer fique sempre no final */
.App {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 3.75rem);
}

.App_content {
  flex: 1;
}

/* css-global-styles */
.container_main {
  max-width: 58.75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  box-sizing: border-box;
}

/* estilos globais para o retorno do resultado da pesquisa */
/* loto-result */
@keyframes show-result {
  from {
    opacity: 0;
    transform: translate3d(-2.5rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.loto_check_form_result {
  margin-bottom: 1rem;
  animation: show-result 0.5s forwards;
}

.loto_check_result_item {
  font-family: var(--family-text);
  font-size: 1.25rem;
  color: var(--black-light);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.5;
}

.loto_check_result_item::before {
  content: '';
  display: inline-block;
  width: 0.75rem;
  height: 0.1875rem;
  background: var(--green-main);
}

.loto_check_form_result > ul {
  display: grid;
  gap: 2rem;
}

/* loto-name */
.loto_check_form_result ul li:first-child p {
  font-size: 1.5rem;
  font-family: var(--family-text);
  font-weight: normal;
  color: var(--black-light);
}

.loto_result_name {
  color: var(--green-main);
}

/* loto-numbers */
.loto_result_numbers p {
  font-family: var(--family-text);
  font-size: 1.25rem;
  color: var(--black-light);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.loto_result_numbers p::before {
  content: '';
  display: inline-block;
  width: 0.75rem;
  height: 0.1875rem;
  background: var(--green-main);
}

.loto_result_numbers ul {
  margin-left: 1.25rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 0.5rem;
}

.loto_result_numbers ul li {
  font-family: var(--family-title);
  font-size: 1.25rem;
  color: var(--white-main);
  background: var(--green-main);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  letter-spacing: 0.015rem;
}

@media (max-width: 50rem) {
  .loto_check_result_item {
    font-size: 1.125rem;
  }

  .loto_check_form_result ul li:first-child p {
    font-size: 1.25rem;
  }

  .loto_result_numbers p {
    font-size: 1.125rem;
  }

  .loto_result_numbers ul {
    grid-template-columns: repeat(4, auto);
  }

  .loto_result_numbers ul li {
    font-size: 1.25rem;
    padding: 0.4rem;
  }
}

@media (max-width: 23.125rem) {
  .loto_result_numbers ul {
    grid-template-columns: repeat(2, auto);
  }
}
</style>
