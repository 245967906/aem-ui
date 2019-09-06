import Vue from 'vue'
import Router from 'vue-router'
import { NavGuard } from '@/lib/router'
import auth from './auth'
import home from './home'
import profile from './profile'
import admin from './admin'
import cluster from './cluster'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Array.prototype.concat(auth, home, profile, admin, cluster)
})

router.beforeEach((to, from, next) => {
  const guard = new NavGuard(to, from, next)
  guard.dispatch()
})

export default router
