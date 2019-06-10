import instance from '@/lib/http'

export const getUserProfile = () => {
  return instance({
    method: 'get',
    url: '/api/me'
  })
}

export const updateUserProfile = data => {
  return instance({
    method: 'patch',
    url: '/api/me',
    data
  })
}
