import instance from '@/lib/http'

export const login = data => {
  return instance({
    method: 'post',
    url: '/api/tokens',
    data
  })
}

export const sendConfirmation = data => {
  return instance({
    method: 'post',
    url: '/api/confirmations',
    data
  })
}

export const resetPassword = data => {
  return instance({
    method: 'post',
    url: '/api/password',
    data
  })
}
