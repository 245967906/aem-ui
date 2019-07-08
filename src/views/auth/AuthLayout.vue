<template>
  <div class="auth-container">
    <div class="auth-wrapper">
      <slot name="logo"><auth-logo></auth-logo></slot>
      <slot></slot>
    </div>
    <app-particles></app-particles>
  </div>
</template>

<script>
import AppParticles from '@/components/AppParticles'
import AuthLogo from './AuthLogo'
export default {
  name: 'AuthLayout',
  components: {
    AppParticles,
    AuthLogo
  }
}
</script>

<style lang="stylus" scoped>
.auth-container
  height 100%
  display flex
  justify-content center
  align-items center
  .auth-wrapper
    z-index 1
    display flex
    flex-direction column
    align-items center
    width 300px
    min-height 350px
</style>
