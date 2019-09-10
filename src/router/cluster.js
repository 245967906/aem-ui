export default [
  {
    name: 'clusterList',
    path: '/clusters',
    component: () => import('@/views/cluster/ClusterList'),
    meta: {
      title: 'ROUTER.CLUSTER.LIST',
      requireAuth: true
    }
  },
  {
    name: 'clusterDetail',
    path: '/clusters/:name',
    component: () => import('@/views/cluster/ClusterDetail'),
    meta: {
      title: 'ROUTER.CLUSTER.DETAIL',
      requireAuth: true
    }
  }
]
