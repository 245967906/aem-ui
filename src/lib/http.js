import axios from 'axios'
import router from '@/router'
import settings from '@/settings'
import { Message } from 'element-ui'

const interceptRequest = request => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  request.headers['Authorization'] = auth ? auth.token : null
  request.headers['Accept-Language'] = localStorage.getItem('language')
  return request
}

const interceptResponseError = error => {
  if (router.currentRoute.name != 'login') {
    switch (error.response.data.code) {
      case 10002:
        router.replace({
          name: 'login',
          query: { redirect: router.currentRoute.fullPath }
        })
        break
      case 10101:
        delete localStorage.auth
        Message({
          showClose: true,
          message: error.response.data.message,
          type: 'error'
        })
        break
      default:
        console.log(error.response.data)
    }
  }
  return error
}

const instance = axios.create({
  baseURL: settings.baseURL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

instance.interceptors.request.use(
  request => {
    return interceptRequest(request)
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
    error = interceptResponseError(error)
    return Promise.reject(error)
  }
)

export default instance
