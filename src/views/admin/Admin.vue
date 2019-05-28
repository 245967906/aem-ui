<template>
  <app-layout>
    <template v-if="!$route.meta.hideNav" v-slot:title>
      <transition leave-active-class="hide">
        <admin-nav></admin-nav>
      </transition>
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
.hide
  display none
</style>
