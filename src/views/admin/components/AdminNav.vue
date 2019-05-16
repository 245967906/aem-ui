<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0">
      <router-link :to="$router.match({ name: 'admin.user' })">{{
        $t('ROUTER.ADMIN.CHILDREN.USER.META.TITLE')
      }}</router-link>
    </el-menu-item>
    <el-menu-item index="1">
      <router-link :to="$router.match({ name: 'admin.permission' })">{{
        $t('ROUTER.ADMIN.CHILDREN.PERM.META.TITLE')
      }}</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AdminNav',
  data () {
    return {
      activeIndex: '0'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
