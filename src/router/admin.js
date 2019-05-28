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
        meta: { title: 'ROUTER.ADMIN.CHILDREN.USER.META.TITLE' },
        component: () => import('@/views/admin/components/AdminUserList')
      },
      {
        name: 'admin.permission',
        path: 'permission',
        meta: { title: 'ROUTER.ADMIN.CHILDREN.PERM.META.TITLE' },
        component: () => import('@/views/admin/components/AdminPermList')
      }
    ]
  }
]
