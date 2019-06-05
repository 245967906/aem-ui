import instance from '@/lib/http'

export const getUserList = params => {
  return instance.get('/api/users', { params })
}

export const getUserDetail = id => {
  return instance.get(`/api/users/${id}`)
}
