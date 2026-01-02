import { createRouter, createWebHistory } from 'vue-router';
import HeroesComponent from '../components/heroes/HeroesComponent.vue';
import HeroeComponent from '../components/heroe/HeroeComponent.vue';

const routes = [
  { path: '/', component: HeroesComponent },
  { path: '/heroes', component: HeroesComponent },
  { path: '/heroe/:nombre', component: HeroeComponent },
  { path: '/:pathMatch(.*)*', component: HeroesComponent } // Ruta comodín al final
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
