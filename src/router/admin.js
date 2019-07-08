export default [
  {
    path: '/admin',
    component: () => import('@/views/admin'),
    meta: { title: 'ROUTER.ADMIN.INDEX' },
    children: [
      { path: '/', redirect: { name: 'userList' } },
      {
        name: 'userList',
        path: 'users',
        component: () => import('@/views/user/UserList'),
        meta: {
          title: 'ROUTER.ADMIN.USER.LIST',
          requireAuth: true
        }
      },
      {
        name: 'userDetail',
        path: 'users/:name',
        component: () => import('@/views/user/UserDetail'),
        meta: {
          title: 'ROUTER.ADMIN.USER.DETAIL',
          requireAuth: true,
          hideNav: true
        }
      },
      {
        name: 'userCreate',
        path: 'users/create/new',
        component: () => import('@/views/user/UserCreate'),
        meta: {
          title: 'ROUTER.ADMIN.USER.CREATE',
          requireAuth: true,
          hideNav: true
        }
      },
      {
        name: 'permissionList',
        path: 'permissions',
        component: () => import('@/views/permission/PermissionList'),
        meta: {
          title: 'ROUTER.ADMIN.PERM.LIST',
          requireAuth: true
        }
      }
    ]
  }
]
