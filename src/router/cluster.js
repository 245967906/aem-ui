export default [
  {
    name: 'clusterList',
    path: '/clusters',
    component: () => import('@/views/cluster/ClusterList'),
    meta: {
      title: 'ROUTER.CLUSTER.LIST',
      requireAuth: true
    }
  }
]
