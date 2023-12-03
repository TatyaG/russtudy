import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BookPage from '../views/BookPage.vue'
import testPage from '../views/v-testPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/v-service.vue')
  },
  {
    path: '/testPage/:testId',
    name: 'testPage',
    component: testPage,

  },
  {
    path: '/textbook',
    name: 'book',
    component: BookPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
