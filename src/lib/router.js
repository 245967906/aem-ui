import store from '@/store'
import api from '@/api'

export class NavGuard {
  constructor (to, from, next) {
    this.to = to
    this.from = from
    this.next = next
    this.authInfo = JSON.parse(localStorage.getItem('auth'))
    this.curTimestamp = new Date().getTime()
    this.authenticated =
      this.authInfo && this.authInfo.expires > this.curTimestamp
    this.fetchUserProfile()
  }
  dispatch () {
    const routerName = this.to.name || ''
    const methodName =
      'handle' + routerName.replace(/^\S/, s => s.toUpperCase())
    Reflect.has(this, methodName) ? this[methodName]() : this.handleDefault()
  }
  fetchUserProfile () {
    if (this.authenticated && !Object.keys(store.state.userProfile).length) {
      api.getProfile().then(res => {
        store.dispatch('changeUserProfile', res.data.data)
      })
    }
  }
  handleLogin () {
    this.authenticated ? this.next({ name: 'home' }) : this.next()
  }
  handleDefault () {
    this.authenticated ? this.next() : this.next({ name: 'login' })
  }
}
