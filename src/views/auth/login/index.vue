<template>
  <div class="login-container">
    <div class="login-wrapper">
      <auth-login-logo></auth-login-logo>
      <auth-login-form></auth-login-form>
    </div>
    <app-particles></app-particles>
  </div>
</template>

<script>
import AppParticles from '@/components/AppParticles'
import AuthLoginLogo from './AuthLoginLogo'
import AuthLoginForm from './AuthLoginForm'
export default {
  name: 'AuthLogin',
  components: {
    AppParticles,
    AuthLoginLogo,
    AuthLoginForm
  }
}
</script>

<style lang="stylus" scoped>
.login-container
  height 100%
  display flex
  justify-content center
  align-items center
  .login-wrapper
    z-index 1
    display flex
    flex-direction column
    align-items center
    width 300px
    min-height 350px
</style>
