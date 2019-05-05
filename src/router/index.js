import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/auth/AuthLogin'),
      meta: {
        title: 'ROUTER.LOGIN.META.TITLE'
      }
    }
  ]
})
