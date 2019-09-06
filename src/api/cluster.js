import instance from '@/lib/http'

export const list = params => {
  return instance({
    method: 'get',
    url: '/api/clusters',
    params,
    loading: true
  })
}

export const retrieve = name => {
  return instance({
    method: 'get',
    url: `/api/clusters/${name}`
  })
}

export const create = data => {
  return instance({
    method: 'post',
    url: '/api/clusters',
    data
  })
}

export const update = (name, data) => {
  return instance({
    method: 'patch',
    url: `/api/clusters/${name}`,
    data
  })
}

export const destroy = name => {
  return instance({
    method: 'delete',
    url: `/api/clusters/${name}`
  })
}
