<template>
  <section id="specific_contest_bg" aria-label="Busca por concurso especifico">
    <div class="container_main specific_contest_box">
      <title-main>Consultar:</title-main>
      <div class="specific_contest">
        <title-second>Resultado por concurso:</title-second>
        <div v-if="loading" class="loading_box">
          <LoadingMain />
        </div>
        <form
          v-else
          v-show="formVisible"
          class="specifc_contest_form"
          @submit.prevent="handleSubmit"
        >
          <div class="number_contest_box">
            <label for="number_contest" class="number_contest_label"
              >Número do concurso:</label
            >
            <input
              type="number"
              name="number_contest"
              id="number_contest"
              class="number_contest_input"
              v-model="selectNumberContest"
              placeholder="2485"
            />
          </div>
          <div class="specific_contest_options_box">
            <select
              name=""
              id=""
              v-model="selectNameContest"
              class="specific_contest_options"
            >
              <option value="" disabled>Selecione o concurso</option>
              <option
                :value="nameContest"
                v-for="nameContest in contests"
                :key="nameContest"
              >
                {{ nameContest }}
              </option>
            </select>
          </div>
          <div v-show="error" class="error_box">
            <p class="error_text">{{ error }}</p>
          </div>
          <button-new-consult>Buscar</button-new-consult>
        </form>
        <div class="loto_check_form_result loto_specific" v-if="dataContest">
          <ul>
            <li class="loto_check_result_item">
              <p>
                Loteria:
                <span class="loto_result_name">{{ dataContest.loteria }}</span>
              </p>
            </li>
            <li class="loto_result_numbers">
              <p>Dezenas:</p>
              <ul>
                <li v-for="result in dataContest.dezenas" :key="result">
                  {{ result }}
                </li>
              </ul>
            </li>
            <li class="loto_check_result_item">
              <p>Concurso: {{ dataContest.concurso }}</p>
            </li>
            <li class="loto_check_result_item">
              <p>Data: {{ dataContest.data }}</p>
            </li>
            <li class="loto_check_result_item">
              <p>Data próximo concurso: {{ dataContest.dataProxConcurso }}</p>
            </li>
            <li class="loto_check_result_item">
              <p>Acumulado: {{ dataContest.acumulou ? 'SIM' : 'NÃO' }}</p>
            </li>
            <li class="loto_check_result_item">
              <p>
                {{
                  dataContest.acumulou
                    ? 'Acumulado próximo concurso:'
                    : 'Valor do próximo concurso:'
                }}
                {{ dataContest.acumuladaProxConcurso }}
              </p>
            </li>
            <li class="loto_check_result_item">
              Próximo concurso: {{ dataContest.proxConcurso }}
            </li>
          </ul>
        </div>
        <button-new-consult
          class="specific_button_new_consult"
          @click="startNewConsult"
          v-show="newConsult"
          >Nova busca</button-new-consult
        >
      </div>
    </div>
  </section>
</template>

<script>
import TitleMain from '@/components/TitleMain.vue';
import TitleSecond from '@/components/TitleSecond.vue';
import allContests from '@/mixins/allContests.js';
import ButtonNewConsult from '@/components/ButtonNewConsult.vue';
import LoadingMain from '@/components/LoadingMain.vue';
import pageTitle from '@/mixins/pageTitle.js';

export default {
  name: 'SpecificContestView',
  components: {
    TitleMain,
    TitleSecond,
    ButtonNewConsult,
    LoadingMain,
  },
  mixins: [allContests, pageTitle],
  data() {
    return {
      selectNameContest: '',
      selectNumberContest: '',
      dataContest: null,
      error: null,
      loading: false,
      formVisible: true,
      newConsult: false,
    };
  },
  methods: {
    getDataContest() {
      this.error = null;
      this.loading = true;
      const trasnformInStringNumberContest =
        this.selectNumberContest.toString();
      fetch(
        `https://loteriascaixa-api.herokuapp.com/api/${this.selectNameContest}/${trasnformInStringNumberContest}`
      )
        .then((r) => r.json())
        .then((r) => {
          this.loading = false;
          if (r.status === 400) {
            this.error = 'Erro: state not found | faça uma nova busca';
          } else {
            this.dataContest = r;
            this.formVisible = false;
            this.newConsult = true;
          }
        });
    },
    handleSubmit() {
      if (this.selectNameContest && this.selectNumberContest) {
        this.getDataContest();
        this.error = null;
      } else {
        this.error = 'Erro: preencha os campos acima';
      }
    },
    startNewConsult() {
      this.formVisible = true;
      this.newConsult = false;
      this.dataContest = null;
      this.selectNameContest = '';
      this.selectNumberContest = '';
    },
  },
  created() {
    this.fetchContests();
    this.changeTitle('| ' + this.$route.name);
  },
};
</script>

<style scoped>
#specific_contest_bg {
  margin-bottom: 7.5rem;
  animation: show-component 0.5s forwards;
}

.loto_specific {
  margin-top: 2rem;
}

/* loading */
.loading_box {
  display: grid;
  place-items: center;
  margin-top: 15%;
}

/* group_of_form */
.specific_contest {
  margin-top: 3.75rem;
}

/* form */
.specifc_contest_form {
  margin-top: 2rem;
}

/* form_number */
.number_contest_box {
  margin-bottom: 2rem;
}

.number_contest_label {
  font-family: var(--family-text);
  font-size: 1.5rem;
  color: var(--black-main);
  font-weight: 400;
  display: block;
  margin-bottom: 0.75rem;
}

.number_contest_input {
  font-family: var(--family-text);
  font-size: 1.125rem;
  color: var(--black-main);
  padding: 0.8rem 1.125rem;
  background: var(--white-main);
  border: 0.1875rem solid var(--green-main);
  border-radius: 0.25rem;
  transition: box-shadow 0.2s;
  width: 100%;
}

.number_contest_input:hover,
.number_contest_input:focus,
.specific_contest_options:hover,
.specific_contest_options:focus {
  box-shadow: 0 0 0px 0.1875rem var(--green-light);
  outline: none;
}

/* fomr-select */
.specific_contest_options_box {
  margin-bottom: 2rem;
}

.specific_contest_options {
  font-family: var(--family-text);
  font-weight: 500;
  font-size: 1.125rem;
  color: var(--black-main);
  border: 0.1875rem solid var(--green-main);
  background: var(--white-main);
  border-radius: 0.25rem;
  padding: 0.8rem 1.125rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
  width: 100%;
}

/* message-error */
@keyframes show-error {
  from {
    opacity: 0;
    transform: translate3d(-1.875rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.error_text {
  font-family: var(--family-text);
  font-size: 1rem;
  color: var(--red-alert);
}

.error_box {
  margin-bottom: 0.5rem;
  animation: show-error 0.4s forwards;
}

.specific_button_new_consult {
  margin-left: 1.25rem;
}

@media (max-width: 50rem) {
  .number_contest_label {
    font-size: 1.25rem;
  }
}
</style>
