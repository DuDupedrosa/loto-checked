import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SpecificContestView from '@/views/SpecificContestView.vue';
import HelpClientView from '@/views/HelpClientView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/concurso-especifico',
    name: 'concurso-especifico',
    component: SpecificContestView,
  },
  {
    path: '/suporte',
    name: 'suporte',
    component: HelpClientView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
