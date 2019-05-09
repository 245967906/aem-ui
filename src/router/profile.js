export default [
  {
    name: 'profile',
    path: '/profile',
    component: () => import('@/views/profile/Profile'),
    meta: {
      title: 'ROUTER.PROFILE.META.TITLE'
    }
  }
]
