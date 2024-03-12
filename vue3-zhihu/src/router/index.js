import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/layout/index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        redirect: '/index/interest',
        component: () => import('../components/layout/index.vue'),
        children: [
          {
            path: '/index/interest',
            name: 'interest',
            component: () => import('../views/index/interest/index.vue')
          },
          {
            path: '/index/recommend',
            name: 'recommend',
            component: () => import('../views/index/recommend/index.vue')
          },
          {
            path: '/index/hotlist',
            name: 'hotlist',
            component: () => import('../views/index/hotlist/index.vue')
          },
          {
            path: '/index/video',
            name: 'video',
            component: () => import('../views/index/video/index.vue')
          },
        ]
      },
      {
        path: '/education',
        name: 'education',
        component: () => import('../views/education/index.vue')
      },
      {
        path: '/explore',
        name: 'explore',
        component: () => import('../views/explore/index.vue')
      },
      {
        path: '/waiting',
        name: 'waiting',
        component: () => import('../views/waiting/index.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router