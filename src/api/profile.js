import instance from '@/lib/http'

export const getUserProfile = () => {
  return instance.get('/api/me')
}

export const updateUserProfile = params => {
  return instance.patch('/api/me', params)
}
