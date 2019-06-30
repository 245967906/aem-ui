export default [
  {
    path: '/admin',
    component: () => import('@/views/admin'),
    meta: { title: 'ROUTER.ADMIN.TITLE' },
    children: [
      { path: '/', redirect: { name: 'userList' } },
      {
        name: 'userList',
        path: 'users',
        component: () => import('@/views/user/UserList'),
        meta: { title: 'ROUTER.ADMIN.CHILDREN.USER.LIST' }
      },
      {
        name: 'userDetail',
        path: 'users/:name',
        component: () => import('@/views/user/UserDetail'),
        meta: {
          title: 'ROUTER.ADMIN.CHILDREN.USER.DETAIL',
          hideNav: true
        }
      },
      {
        name: 'userCreate',
        path: 'users/create/new',
        component: () => import('@/views/user/UserCreate'),
        meta: {
          title: 'ROUTER.ADMIN.CHILDREN.USER.CREATE',
          hideNav: true
        }
      },
      {
        name: 'permissionList',
        path: 'permissions',
        component: () => import('@/views/permission/PermissionList'),
        meta: { title: 'ROUTER.ADMIN.CHILDREN.PERM.LIST' }
      }
    ]
  }
]
