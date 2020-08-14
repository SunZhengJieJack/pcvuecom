import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/table',
    component: () => import('@/views/home'),
    children: [
      {
        path: 'table',
        name: 'table',
        meta: {

        },
        component: () => import('@/views/table.vue'),
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
