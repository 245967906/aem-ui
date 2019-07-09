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
  },
  {
    name: 'resetPassword',
    path: '/password/reset',
    component: () => import('@/views/auth/AuthResetPassword'),
    meta: {
      title: 'ROUTER.AUTH.RESET',
      requireAuth: false
    }
  }
]
