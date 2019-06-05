import instance from '@/lib/http'

export const login = params => {
  return instance.post('/api/tokens', params)
}
