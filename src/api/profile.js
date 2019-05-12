import instance from '@/lib/http'

export const getUserProfile = () => {
  return instance.get('/api/profile/')
}

export const updateUserProfile = params => {
  return instance.put('/api/profile/', params)
}
