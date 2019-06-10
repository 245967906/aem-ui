<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item :index="$router.match({ name: 'userList' }).path">
      <router-link :to="$router.match({ name: 'userList' })">{{
        $t('ROUTER.ADMIN.CHILDREN.USER.LIST')
      }}</router-link>
    </el-menu-item>
    <el-menu-item :index="$router.match({ name: 'permissionList' }).path">
      <router-link :to="$router.match({ name: 'permissionList' })">{{
        $t('ROUTER.ADMIN.CHILDREN.PERM.LIST')
      }}</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AdminNav',
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  watch: {
    $route () {
      this.activeIndex = this.$route.path
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
