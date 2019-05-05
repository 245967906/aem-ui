import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'
import home from './home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Array.prototype.concat(auth, home)
})
