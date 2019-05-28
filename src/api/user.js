import instance from '@/lib/http'

export const getUserList = params => {
  return instance.get('/api/users/', { params })
}
