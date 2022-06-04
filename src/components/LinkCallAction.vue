<template>
  <div class="link_call_action_box">
    <router-link to="/concurso-especifico" class="link_call_action">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkCallAction',
};
</script>

<style>
.link_call_action {
  font-family: var(--family-text);
  font-size: 1.25rem;
  color: var(--black-main);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.link_call_action::after {
  content: '';
  display: inline-block;
  width: 1.25rem;
  height: 0.625rem;
  background: url(../assets/arrow-icon.svg) no-repeat;
  transition: 0.3s;
}

.link_call_action:hover::after {
  transform: translate3d(0.625rem, 0, 0);
}

.link_call_action_box::after {
  content: '';
  display: block;
  width: 100%;
  height: 0.125rem;
  background: var(--green-main);
}

@media (max-width: 50rem) {
  .link_call_action {
    font-size: 1rem;
  }
}

@media (max-width: 23.125rem) {
  .link_call_action::after {
    display: none;
  }
}
</style>
