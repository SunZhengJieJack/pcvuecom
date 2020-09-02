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
      {
        path: 'slot-demo',
        name: 'slot-demo',
        meta: {
          title:'插槽demo'
        },
        component: () => import('@/views/slot-demo/slot-demo.vue'),
      },
      {
        path: 'js-demo',
        name: 'js-demo',
        meta: {
          title:'jsdemo'
        },
        component: () => import('@/views/js-demo/index.vue'),
      },
      {
        path: 'watch-demo',
        name: 'watch-demo',
        meta: {
          title:'watch-demo'
        },
        component: () => import('@/views/watch-demo/watch-demo.vue'),
      },
      {
        path: 'vuex-demo',
        name: 'vuex-demo',
        meta: {
          title:'vuex-demo'
        },
        component: () => import('@/views/vuex-demo.vue'),
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
