export default [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/AuthLogin'),
    meta: {
      title: 'ROUTER.LOGIN.META.TITLE'
    }
  }
]
