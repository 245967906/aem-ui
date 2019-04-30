import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import api from './api'
import ElementUI from 'element-ui'
import VeeValidate from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import zh from 'vee-validate/dist/locale/zh_CN'
import './assets/themes/element-variables.scss'
import './assets/styles/reset.styl'
import './assets/styles/global.styl'

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(ElementUI)
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validations',
  fieldsBagName: 'vfields',
  errorBagName: 'verrors',
  events: 'blur',
  dictionary: { en, zh }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
