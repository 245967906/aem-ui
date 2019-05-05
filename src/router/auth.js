export default [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/AuthLogin'),
    meta: {
      title: 'ROUTER.LOGIN.META.TITLE'
    },
    beforeEnter: (to, from, next) => {
      const auth = JSON.parse(localStorage.getItem('auth'))
      const timestamp = new Date().getTime()
      auth && auth.expires > timestamp ? next({ name: 'home' }) : next()
    }
  }
]
