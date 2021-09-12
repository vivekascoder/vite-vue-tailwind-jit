import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'
import Page404 from '/src/pages/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/404',
    component: Page404
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
