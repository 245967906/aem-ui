import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'
import home from './home'
import profile from './profile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Array.prototype.concat(auth, home, profile)
})

router.beforeEach((to, from, next) => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  const timestamp = new Date().getTime()
  switch (to.name) {
    case 'login':
      auth && auth.expires > timestamp ? next({ name: 'home' }) : next()
      break
    default:
      auth && auth.expires > timestamp ? next() : next({ name: 'login' })
  }
})

export default router
