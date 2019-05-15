<template>
  <div class="app-container">
    <div class="app-header">
      <app-header></app-header>
      <app-breadcrumb></app-breadcrumb>
    </div>
    <div class="app-main">
      <div class="main-title">
        <h3>{{ $t($route.meta.title) }}</h3>
      </div>
      <div class="main-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppBreadcrumb from './AppBreadcrumb'
export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppBreadcrumb
  }
}
</script>

<style lang="stylus" scoped>
.app-main
  padding 10px 10%
  .main-title
    display flex
    align-items center
    border-bottom 1px solid #e7eaec
    height 60px
  .main-content
    display flex
    justify-content center
    padding 25px 0
</style>
