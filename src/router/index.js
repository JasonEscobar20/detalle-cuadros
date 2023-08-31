import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue';
import PaintingView from '../views/PaintingsView.vue';
import PaintingDetail from '../views/PaitingDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create_form/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: {
        name: 'cuadros'
      }
    },
    {
      path: '/cuadros/',
      name: 'cuadros',
      component: PaintingView,
      // redirect: '/'
    },
    {
      path: '/details/:id',
      name: 'details',
      component: PaintingDetail 
    }

  ]
})

export default router
