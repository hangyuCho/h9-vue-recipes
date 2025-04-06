import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MiniHomePage from '../components/miniHome/Page/MiniHomePage.vue'
import MiniProfilePage from '@/components/miniHome/Page/MiniProfilePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mini-home',
      component: MiniHomePage,
    },
    {
      path: '/profile',
      name: 'mini-profile',
      component: MiniProfilePage,
      props: true
    },
  ],
})

export default router
