<template>
  <section class="home_intro container_main">
    <div class="home_intro_content">
      <title-main>Faça sua busca</title-main>
      <p>
        Aqui na loto-checked, você pode conferir os resultados dos seus jogos,
        de forma totalmente prática, rápida e confiável e ainda conferir os
        resultados mais recente de um concurso, a penas escolhendo este ou pode
        se dirigir a página de busca específica e consultar o número do concurso
        que desejar.
      </p>
    </div>
    <div class="home_intro_img">
      <img src="../assets/logo.jpg" alt="Logo" />
    </div>
  </section>
  <div class="container_main">
    <LotoCheckNew />
  </div>
</template>

<script>
import LotoCheckNew from '@/components/LotoCheckNew.vue';
import TitleMain from '@/components/TitleMain.vue';
import PageTitle from '@/mixins/pageTitle.js';

export default {
  name: 'HomeView',
  components: {
    LotoCheckNew,
    TitleMain,
  },
  mixins: [PageTitle],
  created() {
    this.changeTitle('');
  },
};
</script>

<style scoped>
.home_intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.home_intro_content h1 {
  margin-bottom: 2rem;
}

.home_intro_content p {
  font-family: var(--family-text);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--black-light);
}

.home_intro_img {
  align-self: end;
}

@media (max-width: 50rem) {
  .home_intro {
    grid-template-columns: 1fr;
  }

  .home_intro_img {
    display: none;
  }

  .home_intro_content p {
    font-size: 1rem;
    font-weight: normal;
  }
}
</style>
