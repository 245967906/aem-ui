<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item :index="$router.match({ name: 'admin.user' }).path">
      <router-link :to="$router.match({ name: 'admin.user' })">{{
        $t('ROUTER.ADMIN.CHILDREN.USER.LIST')
      }}</router-link>
    </el-menu-item>
    <el-menu-item :index="$router.match({ name: 'admin.permission' }).path">
      <router-link :to="$router.match({ name: 'admin.permission' })">{{
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
