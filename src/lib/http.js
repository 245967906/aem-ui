import i18n from '@/i18n'
import axios from 'axios'
import router from '@/router'
import settings from '@/settings'
import { Loading, Message } from 'element-ui'

let loading
let count = 0

const interceptRequest = request => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  request.headers['Authorization'] = auth ? auth.token : null
  request.headers['Accept-Language'] = localStorage.getItem('language')
  if (request.loading && !count++) {
    loading = Loading.service({
      fullscreen: true,
      text: request.loadingText || i18n.t('PROMPT.LOADING'),
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.6)'
    })
  }
  return request
}

const interceptResponseError = error => {
  switch (error.response.data.code) {
    case 10002:
      delete localStorage.auth
      router.replace({
        name: 'login',
        query: { redirect: router.currentRoute.fullPath }
      })
      break
    case 10101:
      if (router.currentRoute.meta.requireAuth) {
        delete localStorage.auth
        Message({
          showClose: true,
          message: error.response.data.message,
          type: 'error'
        })
      }
      break
  }
  return error
}

const instance = axios.create({
  baseURL: settings.baseURL,
  timeout: 0,
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
    if (response.config.loading) {
      --count || loading.close()
    }
    return response
  },
  error => {
    error = interceptResponseError(error)
    return Promise.reject(error)
  }
)

export default instance
