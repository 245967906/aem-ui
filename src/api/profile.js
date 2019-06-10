import instance from '@/lib/http'

export const retrieve = () => {
  return instance({
    method: 'get',
    url: '/api/me'
  })
}

export const update = data => {
  return instance({
    method: 'patch',
    url: '/api/me',
    data
  })
}
