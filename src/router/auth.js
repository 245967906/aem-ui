export default [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/AuthLogin'),
    meta: {
      title: 'ROUTER.AUTH.LOGIN',
      requireAuth: false
    }
  },
  {
    name: 'passwordForget',
    path: '/password/forget',
    component: () => import('@/views/auth/AuthPasswordForget'),
    meta: {
      title: 'ROUTER.AUTH.FORGET',
      requireAuth: false
    }
  },
  {
    name: 'passwordReset',
    path: '/password/reset',
    component: () => import('@/views/auth/AuthPasswordReset'),
    meta: {
      title: 'ROUTER.AUTH.RESET',
      requireAuth: false
    }
  }
]
