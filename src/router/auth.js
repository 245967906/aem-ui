export default [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/login'),
    meta: {
      title: 'ROUTER.LOGIN'
    }
  }
]
