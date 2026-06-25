import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Caroline Robillard — Développeuse Full-Stack Senior' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ?? 'Caroline Robillard — Développeuse Full-Stack Senior'

  // Remettre le focus sur le contenu principal à chaque changement de page (RGAA)
  requestAnimationFrame(() => {
    const main = document.getElementById('main-content')
    if (main) {
      main.focus()
    }
  })
})

export default router
