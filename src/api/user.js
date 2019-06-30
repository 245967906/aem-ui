import instance from '@/lib/http'

export const list = params => {
  return instance({
    method: 'get',
    url: '/api/users',
    params
  })
}

export const retrieve = name => {
  return instance({
    method: 'get',
    url: `/api/users/${name}`
  })
}

export const create = data => {
  return instance({
    method: 'post',
    url: '/api/users',
    data
  })
}

export const update = (name, data) => {
  return instance({
    method: 'patch',
    url: `/api/users/${name}`,
    data
  })
}

export const destroy = name => {
  return instance({
    method: 'delete',
    url: `/api/users/${name}`
  })
}
