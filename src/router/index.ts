import { createRouter, createMemoryHistory } from 'vue-router'
import MiniHomePage from '../components/miniHome/Page/MiniHomePage.vue'
import MiniProfilePage from '@/components/miniHome/Page/MiniProfilePage.vue'
const router = createRouter({
  history: createMemoryHistory(),
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
    },
  ],
})

export default router
