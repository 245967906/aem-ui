<template>
  <app-layout>
    <template v-slot:title>
      <admin-nav></admin-nav>
    </template>

    <template v-slot:default>
      <router-view></router-view>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout'
import AdminNav from './components/AdminNav'
export default {
  name: 'Admin',
  components: {
    AppLayout,
    AdminNav
  }
}
</script>

<style lang="stylus" scoped>
</style>
