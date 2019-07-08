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
    name: 'forgetPassword',
    path: '/password/forget',
    component: () => import('@/views/auth/AuthForgetPassword'),
    meta: {
      title: 'ROUTER.AUTH.FORGET',
      requireAuth: false
    }
  }
]
