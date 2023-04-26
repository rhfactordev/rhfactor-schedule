import {createRouter, createWebHistory} from 'vue-router'
import {admin} from '@/router/admin.js'
import {user} from '@/router/user.js'

const routes = [
    {
        path: '/',
        name: 'DashboardView',
        component: () => import('@/components/DashboardView.vue')
    },
    ...admin,
    ...user
]

console.log('routes:', routes)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeEach((to, from, next) => {

    console.log(to, from)

  // const isAuthenticated = true
  // const hasAuth = to.meta.hasAuth != null && to.meta.hasAuth

  // if (to.name !== 'login' && !isAuthenticated && hasAuth) next({ name: 'login' })
  // else
      next()
})

export default router
