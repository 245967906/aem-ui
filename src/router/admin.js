export default [
  {
    path: '/admin',
    component: () => import('@/views/admin/Admin'),
    meta: { title: 'ROUTER.ADMIN.TITLE' },
    children: [
      { path: '/', redirect: { name: 'admin.user' } },
      {
        name: 'admin.user',
        path: 'user',
        component: () => import('@/views/admin/components/AdminUserList'),
        meta: { title: 'ROUTER.ADMIN.CHILDREN.USER.LIST' }
      },
      {
        name: 'admin.user.detail',
        path: '/admin/user/:id',
        component: () => import('@/views/admin/components/AdminUserDetail'),
        meta: {
          title: 'ROUTER.ADMIN.CHILDREN.USER.DETAIL',
          hideNav: true
        }
      },
      {
        name: 'admin.permission',
        path: 'permission',
        component: () => import('@/views/admin/components/AdminPermList'),
        meta: { title: 'ROUTER.ADMIN.CHILDREN.PERM.LIST' }
      }
    ]
  }
]
