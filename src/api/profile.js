import instance from '@/lib/http'

export const getProfile = () => {
  return instance.get('/api/profile/')
}
