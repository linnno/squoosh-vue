import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/myHome.vue'

const routes = [
  {
    path: '/',
    component: home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
