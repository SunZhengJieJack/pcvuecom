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
          title:'表格'
        },
        component: () => import('@/views/table.vue'),
      },
      {
        path: 'model',
        name: 'model',
        meta: {
          title:'弹窗'
        },
        component: () => import('@/views/model.vue'),
      },
      {
        path: 'demo',
        name: 'demo',
        meta: {
          title:'demo'
        },
        component: () => import('@/views/demo'),
      },
      {
        path: 'vmedol',
        name: 'vmedol',
        meta: {
          title:'自定义medol'
        },
        component: () => import('@/views/demo/v-model/v-model.vue'),
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
