import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Brewery from '../views/Brewery.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/brewery',
    name: 'brewery',
    component: Brewery
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router