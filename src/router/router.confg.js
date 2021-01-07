export const routes = [{
  path: '/',
  name: 'home',
  redirect: '/table',
  component: () =>
    import('@/views/home'),
  children: [{
    path: 'table',
    name: 'table',
    meta: {
      title: '表格'
    },
    component: () =>
      import('@/views/table.vue'),
  },
  {
    path: 'model',
    name: 'model',
    meta: {
      title: '弹窗'
    },
    component: () =>
      import('@/views/model.vue'),
  },
  {
    path: 'demo',
    name: 'demo',
    meta: {
      title: 'demo'
    },
    component: () =>
      import('@/views/demo'),
  },
  {
    path: 'vmedol',
    name: 'vmedol',
    meta: {
      title: '自定义medol'
    },
    component: () =>
      import('@/views/demo/v-model/v-model.vue'),
  },
  {
    path: 'slot-demo',
    name: 'slot-demo',
    meta: {
      title: '插槽demo'
    },
    component: () =>
      import('@/views/slot-demo/slot-demo.vue'),
  },
  {
    path: 'js-demo',
    name: 'js-demo',
    meta: {
      title: 'jsdemo'
    },
    component: () =>
      import('@/views/js-demo/index.vue'),
  },
  {
    path: 'watch-demo',
    name: 'watch-demo',
    meta: {
      title: 'watch-demo'
    },
    component: () =>
      import('@/views/watch-demo/watch-demo.vue'),
  },
  {
    path: 'vuex-demo',
    name: 'vuex-demo',
    meta: {
      title: 'vuex-demo'
    },
    component: () =>
      import('@/views/vuex-demo.vue'),
  },
  {
    path: "notify",
    name: 'notify',
    meta: {
      title: '全局提示'
    },
    component: () =>
      import('@/views/notify/notify.vue'),
  },
  {
    path: "order",
    name: 'order',
    meta: {
      title: '生命周期'
    },
    component: () =>
      import('@/views/order/order-a.vue'),
  },
  {
    path: "style",
    name: 'style',
    meta: {
      title: '样式'
    },
    component: () =>
      import('@/views/styles/index'),
  },
  {
    path: "promisedemo",
    name: 'promisedemo',
    meta: {
      title: 'promisedemo'
    },
    component: () =>
      import('@/views/promisedemo/index'),
  },
  ]
},]