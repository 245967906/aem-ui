import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import api from './api'
import ElementUI from 'element-ui'
import './assets/themes/element-variables.scss'

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(ElementUI)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
