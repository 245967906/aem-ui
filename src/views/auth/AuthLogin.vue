<template>
  <div class="login-container">
    <div class="login-wrapper">
      <auth-login-logo></auth-login-logo>
    </div>
  </div>
</template>

<script>
import AuthLoginLogo from './components/AuthLoginLogo'
export default {
  name: 'AuthLogin',
  components: {
    AuthLoginLogo
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
    display flex
    flex-direction column
    align-items center
    width 300px
    min-height 350px
</style>
