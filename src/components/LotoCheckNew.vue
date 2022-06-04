<template>
  <section class="loto_check" aria-label="Consultar resultado mais recente">
    <title-main>Consultar:</title-main>
    <div class="loto_check_form">
      <title-second>Resultado mais recente:</title-second>
      <div v-if="loading">
        <LoadingMain />
      </div>
      <form
        v-else
        v-show="formVisible"
        id="loto_check_form"
        @submit.prevent="handleSubmit"
      >
        <div>
          <select
            name="contests"
            v-model="selectContest"
            id="contests"
            class="loto_check_form_select"
          >
            <option value="" disabled>Selecione um concurso</option>
            <option :value="item" v-for="item in contests" :key="item">
              {{ item }}
            </option>
          </select>
        </div>
        <div>
          <button class="logo_check_form_button">
            <img src="../assets/search-icon.svg" alt="Buscar" />
          </button>
          <p class="error">{{ error }}</p>
        </div>
      </form>
      <div
        class="loto_check_form_result"
        v-if="resultContest"
        aria-label="Resultado"
      >
        <ul>
          <li class="loto_check_result_item">
            <p>
              Loteria:
              <span class="loto_result_name">{{ resultContest.loteria }}</span>
            </p>
          </li>
          <li class="loto_result_numbers">
            <p>Dezenas:</p>
            <ul>
              <li v-for="result in resultContest.dezenas" :key="result">
                {{ result }}
              </li>
            </ul>
          </li>
          <li class="loto_check_result_item">
            <p>Concurso: {{ resultContest.concurso }}</p>
          </li>
          <li class="loto_check_result_item">
            <p>Data: {{ resultContest.data }}</p>
          </li>
          <li class="loto_check_result_item">
            <p>Data próximo concurso: {{ resultContest.dataProxConcurso }}</p>
          </li>
          <li class="loto_check_result_item">
            <p>Acumulado: {{ valueAccumulated }}</p>
          </li>
          <li class="loto_check_result_item">
            <p>
              {{
                resultContest.acumulou
                  ? 'Acumulado próximo concurso:'
                  : 'Valor do próximo concurso:'
              }}
              {{ resultContest.acumuladaProxConcurso }}
            </p>
          </li>
          <li class="loto_check_result_item">
            Próximo concurso: {{ resultContest.proxConcurso }}
          </li>
        </ul>
      </div>
      <button-new-consult
        class="loto_new_button_search"
        @click="startNewConsult"
        v-show="newSearch"
      >
        Nova busca
      </button-new-consult>
      <div class="loto_check_call_action">
        <link-call-action>Buscar por um concurso especifico?</link-call-action>
      </div>
    </div>
  </section>
</template>

<script>
import TitleSecond from '@/components/TitleSecond.vue';
import TitleMain from '@/components/TitleMain.vue';
import LoadingMain from '@/components/LoadingMain.vue';
import ButtonNewConsult from '@/components/ButtonNewConsult.vue';
import LinkCallAction from '@/components/LinkCallAction.vue';
import allContests from '@/mixins/allContests.js';

export default {
  name: 'LotoCheckNew',
  components: {
    TitleSecond,
    TitleMain,
    LoadingMain,
    ButtonNewConsult,
    LinkCallAction,
  },
  mixins: [allContests],
  data() {
    return {
      selectContest: '',
      resultContest: null,
      error: null,
      loading: false,
      formVisible: true,
      newSearch: false,
    };
  },
  computed: {
    valueAccumulated() {
      return this.resultContest.acumulou ? 'SIM' : 'NÃO';
    },
  },
  methods: {
    fetchContest() {
      (this.error = null),
        (this.loading = true),
        fetch(
          `https://loteriascaixa-api.herokuapp.com/api/${this.selectContest}/latest`
        )
          .then((r) => r.json())
          .then((r) => {
            this.loading = false;
            if (r.status === 404) {
              this.error = 'Erro: state not found | faça a busca novamente';
            } else {
              this.resultContest = r;
              this.formVisible = false;
              this.newSearch = true;
            }
          });
    },
    handleSubmit() {
      if (this.selectContest) {
        this.fetchContest();
        this.error = null;
      } else {
        this.error = 'Error: selecione um concurso';
      }
    },
    startNewConsult() {
      this.formVisible = true;
      this.newSearch = false;
      this.selectContest = '';
      this.resultContest = null;
    },
  },
  watch: {
    selectContest() {
      this.error = null;
    },
  },
  created() {
    // method que puxa os concursos disponíveis do mixins
    this.fetchContests();
  },
};
</script>

<style scoped>
.loto_check {
  margin-bottom: 7.5rem;
}

.loto_check h1 {
  margin-bottom: 3.75rem;
}

.loto_check_form {
  display: grid;
  place-items: center;
}

.loto_check_form h2 {
  margin-bottom: 2.625rem;
}

/* form-select */
.loto_check_form_select {
  font-family: var(--family-roboto);
  font-size: 1.5rem;
  color: var(--white-main);
  font-weight: normal;
  background: var(--green-main);
  border-radius: 0.4rem;
  box-shadow: 0px 0.125rem 0.0625rem rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem;
  cursor: pointer;
  border: 0.125rem solid transparent;
  z-index: 10;
}

.loto_check_form_select:focus {
  outline: none;
  border-color: var(--black-light);
}

/* message-error */
#loto_check_form {
  position: relative;
}

@keyframes show-error {
  from {
    opacity: 0;
    transform: translate3d(-2.5rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.error {
  position: absolute;
  left: 1.25rem;
  margin-top: 1rem;
  font-family: var(--family-title);
  font-size: 0.875rem;
  font-weight: normal;
  color: var(--red-alert);
  border-radius: 0.25rem;
  animation: show-error 0.4s forwards;
}

/* form-button */
.logo_check_form_button {
  border: none;
  border-radius: 0.4rem;
  background: var(--green-light);
  box-shadow: 0px 0.125rem 0.0625rem rgba(0, 0, 0, 0.25);
  padding: 1rem;
  height: 4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* form */
#loto_check_form {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 0.5rem;
}

/* call-action */
.loto_check_call_action {
  margin-top: 4rem;
}

@media (max-width: 50rem) {
  .loto_check_form_select {
    font-size: 1.25rem;
    padding: 1rem;
  }

  .logo_check_form_button {
    padding: 0.6rem;
    height: 3.75rem;
  }
}

@media (max-width: 23.375rem) {
  #loto_check_form {
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .logo_check_form_button {
    width: 100%;
  }
}
</style>
