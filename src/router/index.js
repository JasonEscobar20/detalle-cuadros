import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue';
import PaintingView from '../views/PaintingsView.vue';
import PaintingDetail from '../views/PaitingDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cuadros/',
      name: 'cuadros',
      component: PaintingView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: PaintingDetail 
    }

  ]
})

export default router
