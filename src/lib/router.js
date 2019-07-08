import api from '@/api'
import store from '@/store'

const getUserProfile = () => {
  if (!Object.keys(store.state.userProfile).length) {
    api.profile.retrieve().then(res => {
      store.dispatch('changeUserProfile', res.data)
    })
  }
}

export class NavGuard {
  constructor (to, from, next) {
    const authInfo = JSON.parse(localStorage.getItem('auth'))
    const curTimestamp = new Date().getTime()
    this.to = to
    this.from = from
    this.next = next
    this.authenticated = authInfo && authInfo.expires > curTimestamp
    this.authenticated ? getUserProfile() : null
  }
  dispatch () {
    if (this.to.meta.requireAuth) {
      this.authenticated ? this.next() : this.next({ name: 'login' })
    } else {
      this.authenticated ? this.next({ name: 'home' }) : this.next()
    }
  }
}
