import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@views/home.vue')
  },
  {
    path: '/v2',
    name: 'v2',
    component: () => import(/* webpackChunkName: "v2" */ '@views/v2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
