<template>
  <div>
    <app-header></app-header>
    <app-breadcrumb></app-breadcrumb>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppBreadcrumb from '@/components/AppBreadcrumb'
export default {
  name: 'Profile',
  components: {
    AppHeader,
    AppBreadcrumb
  }
}
</script>

<style lang="stylus" scoped>
</style>
