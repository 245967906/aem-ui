import axios from 'axios'
import settings from '@/settings'

const instance = axios.create({
  baseURL: settings.baseURL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

instance.interceptors.request.use(
  request => {
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
