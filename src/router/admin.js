export default [
  {
    path: '/admin',
    component: () => import('@/views/admin/Admin'),
    meta: { title: 'ROUTER.ADMIN.META.TITLE' },
    children: [
      { path: '/', redirect: { name: 'admin.user' } },
      {
        name: 'admin.user',
        path: 'user',
        component: () => import('@/views/admin/components/AdminUserList'),
        meta: { title: 'ROUTER.ADMIN.CHILDREN.USER.META.TITLE' }
      },
      {
        name: 'admin.user.detail',
        path: '/admin/user/:id',
        component: () => import('@/views/admin/components/AdminUserDetail'),
        meta: {
          title: 'ROUTER.ADMIN.CHILDREN.USER_DETAIL.META.TITLE',
          hideNav: true
        }
      },
      {
        name: 'admin.permission',
        path: 'permission',
        component: () => import('@/views/admin/components/AdminPermList'),
        meta: { title: 'ROUTER.ADMIN.CHILDREN.PERM.META.TITLE' }
      }
    ]
  }
]
