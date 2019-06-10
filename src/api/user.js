import instance from '@/lib/http'

export const getUserList = params => {
  return instance({
    method: 'get',
    url: '/api/users',
    params
  })
}

export const getUserDetail = id => {
  return instance({
    method: 'get',
    url: `/api/users/${id}`
  })
}
