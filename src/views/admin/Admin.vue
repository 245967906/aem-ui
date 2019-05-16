<template>
  <app-layout>
    <template v-slot:title>
      {{ $t('ROUTER.ADMIN.META.TITLE') }}
    </template>

    <template v-slot:default>
      <router-view></router-view>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout'
export default {
  name: 'Admin',
  components: {
    AppLayout
  }
}
</script>

<style lang="stylus" scoped>
</style>
