import instance from '@/lib/http'

export const login = data => {
  return instance({
    method: 'post',
    url: '/api/tokens',
    data
  })
}
