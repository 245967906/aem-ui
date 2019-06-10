import instance from '@/lib/http'

export const list = params => {
  return instance({
    method: 'get',
    url: '/api/users',
    params
  })
}

export const retrieve = id => {
  return instance({
    method: 'get',
    url: `/api/users/${id}`
  })
}

export const create = data => {
  return instance({
    method: 'post',
    url: '/api/users',
    data
  })
}
