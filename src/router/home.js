export default [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home/Home'),
    meta: {
      title: 'ROUTER.HOME.META.TITLE'
    }
  }
]
