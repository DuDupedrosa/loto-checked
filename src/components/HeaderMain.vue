<template>
  <header class="header_bg">
    <div class="header container_main">
      <div>
        <router-link to="/" aria-label="Retornar para home">
          <img src="../assets/logo-icon.svg" alt="Home" />
        </router-link>
      </div>
      <nav class="header_nav_box" aria-label="Navegação principal">
        <button class="button_menu_mobile" @click="openMenu" aria-label="Menu">
          <img
            v-show="iconMenuOpen"
            src="../assets/menu-mobile.svg"
            alt="Menu"
          />
          <img
            v-show="iconMenuClose"
            src="../assets/menu-close.svg"
            alt="Menu"
          />
        </button>
        <ul class="header_nav">
          <li>
            <router-link to="/suporte" @click="openMenu">Suporte</router-link>
          </li>
          <li>
            <router-link to="/concurso-especifico" @click="openMenu"
              >Concurso</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderMain',
  data() {
    return {
      iconMenuOpen: true,
      iconMenuClose: false,
    };
  },
  methods: {
    openMenu() {
      document.querySelector('.header_nav').classList.toggle('active');
      this.iconMenuOpen = !this.iconMenuOpen;
      this.iconMenuClose = !this.iconMenuClose;
    },
  },
};
</script>

<style>
.header_bg {
  background: var(--green-main);
  padding: 2rem 0;
  margin-bottom: 7.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.header_nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.header_nav li a {
  font-family: var(--family-title);
  color: var(--white-main);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 0.15rem;
  padding: 0.5rem 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header_nav li a::before {
  content: '';
  display: inline-block;
  width: 0.25rem;
  height: 1.5rem;
  background: transparent;
  transition: 0.3s;
  border-radius: 0.4rem;
}

.header_nav li a:hover::before {
  background: var(--green-strong);
}

/* estilos do menu mobile */
.button_menu_mobile {
  display: none;
}

@media (max-width: 50rem) {
  .header_bg {
    margin-bottom: 3.75rem;
  }
  /* button menu mobile */
  .button_menu_mobile {
    display: block;
  }

  .button_menu_mobile {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  /* estilos da lista com a nav */
  .header_nav_box {
    position: relative;
  }

  @keyframes show-menu {
    from {
      opacity: 0;
      transform: translate3d(-1.875rem, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .header_nav {
    position: absolute;
    flex-direction: column;
    gap: 0.4rem;
    align-items: flex-start;
    right: 0;
    background: var(--green-strong);
    border-radius: 0.25rem;
    padding: 1rem 1rem 1rem 0.4rem;
    margin-top: 1.5rem;
    z-index: 10;
    animation: show-menu 0.3s forwards;
    display: none;
  }

  .header_nav.active {
    display: flex;
  }

  .header_nav::before {
    content: '';
    display: block;
    border-bottom: 0.875rem solid var(--green-strong);
    border-left: 0.875rem solid transparent;
    border-right: 0.875rem solid transparent;
    position: absolute;
    top: -0.875rem;
    right: 0.625rem;
  }

  /* nav-link */
  .header_nav li a {
    font-size: 1rem;
    padding: 0.6rem 0.2rem;
    text-transform: uppercase;
  }

  .header_nav li a::before {
    width: 0.75rem;
    height: 0.25rem;
    background: var(--green-light);
    transition: 0.3s;
    border-radius: 0;
  }

  .header_nav li a:hover::before {
    background: var(--green-light);
  }
}
</style>
