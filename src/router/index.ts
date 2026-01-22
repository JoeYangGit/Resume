import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/components/HelloWorld.vue'),
            children: []
        }
    ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ path: '/home' })
    // window.scrollTo(0, 0)
  } else {
    next()
  }
  window.scrollTo(0, 0)
})

export default router