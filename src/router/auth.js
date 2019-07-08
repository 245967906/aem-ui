export default [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/AuthLogin'),
    meta: {
      title: 'ROUTER.LOGIN',
      requireAuth: false
    }
  },
  {
    name: 'forget',
    path: '/password/forget',
    component: () => import('@/views/auth/AuthForget'),
    meta: {
      title: 'ROUTER.FORGET',
      requireAuth: false
    }
  }
]
