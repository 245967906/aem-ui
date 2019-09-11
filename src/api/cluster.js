import instance from '@/lib/http'

export const list = params => {
  return instance({
    method: 'get',
    url: '/api/clusters',
    params,
    withRegion: true,
    loading: true
  })
}

export const retrieve = name => {
  return instance({
    method: 'get',
    url: `/api/clusters/${name}`,
    withRegion: true,
    loading: true
  })
}

export const create = data => {
  return instance({
    method: 'post',
    url: '/api/clusters',
    withRegion: true,
    data
  })
}

export const update = (name, data) => {
  return instance({
    method: 'patch',
    url: `/api/clusters/${name}`,
    withRegion: true,
    data
  })
}

export const destroy = name => {
  return instance({
    method: 'delete',
    url: `/api/clusters/${name}`,
    withRegion: true
  })
}
