import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/thomasboidun.github.io/' : '/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
  ],
});

export default router;
