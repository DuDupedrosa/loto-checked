<template>
  <section class="help_client" aria-label="Entre em contato">
    <div class="container_main">
      <title-main>Entre em contato:</title-main>
      <div v-if="loading" class="help_client_loading">
        <LoadingMain />
        <p class="message_loading">Enviando mensagem</p>
      </div>
      <form
        v-else
        v-show="formVisible"
        class="help_client_form"
        @submit.prevent="handleChange"
      >
        <div>
          <label for="email">Seu melhor e-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="lotocheck@teste.com"
            v-model="userEmail"
          />
        </div>
        <div>
          <label for="message">Mensagem:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="minha dúvida é...."
            v-model="userMessage"
          ></textarea>
        </div>
        <p v-show="error" class="message_error">{{ error }}</p>
        <button-new-consult class="help_client_button"
          >Enviar</button-new-consult
        >
      </form>
      <div v-show="messageOkVisible" class="message_ok">
        <p>
          <span class="message_ok_send">Mensagem enviada com sucesso.</span>
          Dentro de 2-3 horas, a nossa equipe de suporte entrara em contato,
          para solucionar seu problema. Fique atento a sua caixa e-mail.
        </p>
        <router-link to="/" class="message_ok_return_home"
          >Voltar para home</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import TitleMain from '@/components/TitleMain.vue';
import ButtonNewConsult from '@/components/ButtonNewConsult.vue';
import LoadingMain from '@/components/LoadingMain.vue';
import pageTitle from '@/mixins/pageTitle.js';

export default {
  name: 'HelpClientView',
  components: {
    TitleMain,
    ButtonNewConsult,
    LoadingMain,
  },
  mixins: [pageTitle],
  data() {
    return {
      userEmail: '',
      userMessage: '',
      formVisible: true,
      messageOkVisible: false,
      loading: false,
      error: null,
    };
  },
  methods: {
    sendEmail() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.formVisible = false;
        this.messageOkVisible = true;
      }, 2000);
    },
    handleChange() {
      if (this.userEmail && this.userMessage) {
        this.sendEmail();
      } else {
        this.error = 'Error: preenche os campos acima e faça o envio novamente';
      }
    },
  },
  created() {
    this.changeTitle('| ' + this.$route.name);
  },
};
</script>

<style scoped>
.help_client_loading {
  display: grid;
  place-items: center;
  margin-top: 15%;
}

.help_client {
  margin-bottom: 7.5rem;
  animation: show-component 0.5s forwards;
}

.help_client h1 {
  margin-bottom: 2rem;
}

.help_client_form {
  display: grid;
  gap: 1.25rem;
}

.help_client_form label {
  display: block;
  font-family: var(--family-title);
  font-size: 1.25rem;
  color: var(--black-light);
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.help_client_form input,
.help_client_form textarea {
  font-family: var(--family-text);
  font-size: 1.125rem;
  color: var(--black-main);
  padding: 1rem 2rem;
  border: 0.1875rem solid var(--green-main);
  background: var(--white-main);
  border-radius: 0.25rem;
  width: 100%;
  transition: box-shadow 0.3s;
}

.help_client_form input:focus,
.help_client_form input:hover,
.help_client_form textarea:focus,
.help_client_form textarea:hover {
  outline: none;
  box-shadow: 0 0 0px 0.1875rem var(--green-light);
}

.help_client_button {
  width: 15rem;
}

/* message que o envio foi de ok */
@keyframes show-message-ok {
  from {
    opacity: 0;
    transform: translate3d(-1.875rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.message_ok {
  animation: show-message-ok 0.4s forwards;
}

.message_ok p {
  font-family: var(--family-text);
  font-size: 1.25rem;
  color: var(--black-main);
  line-height: 1.5;
}

.message_ok_send {
  color: var(--green-main);
}

.message_ok_return_home {
  font-family: var(--family-title);
  font-size: 1.125rem;
  color: var(--black-main);
  font-weight: 600;
  max-width: max-content;
  margin-top: 4rem;
  transition: 0.3s;
}

.message_ok_return_home::after {
  content: '';
  display: block;
  width: 100%;
  height: 0.125rem;
  background: var(--green-main);
  margin-top: 0.25rem;
}

.message_ok_return_home:hover {
  color: var(--green-main);
}

/* message-loading */
.message_loading {
  font-family: var(--family-text);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: var(--black-main);
}

/* message-error */
@keyframes show-message-error {
  from {
    opacity: 0;
    transform: translate3d(-1.875rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.message_error {
  font-family: var(--family-text);
  font-size: 1rem;
  color: var(--red-alert);
  margin-left: 1rem;
  animation: show-message-error 0.4s forwards;
}

@media (max-width: 50rem) {
  .help_client_form label {
    font-size: 1.125rem;
  }

  .help_client_form input,
  .help_client_form textarea {
    font-size: 1rem;
  }

  .message_ok p {
    font-size: 1.125rem;
  }
}
</style>
