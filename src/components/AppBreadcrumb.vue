<template>
  <el-breadcrumb
    class="breadcrumb-container"
    separator-class="el-icon-arrow-right"
  >
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbs"
      :key="index"
      :to="item.path"
    >
      <span>{{ $t(item.meta.title) }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  data () {
    return {
      breadcrumbs: this.getBreadcrumbs()
    }
  },
  methods: {
    getBreadcrumbs () {
      const matchedRoutes = this.$route.matched
      const homeRoute = this.$router.options.routes.filter(
        x => x.name == 'home'
      )
      const breadcrumbs =
        matchedRoutes[0].name != homeRoute[0].name
          ? homeRoute.concat(matchedRoutes)
          : matchedRoutes
      return breadcrumbs
    }
  },
  watch: {
    $route () {
      this.breadcrumbs = this.getBreadcrumbs()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.breadcrumb-container >>> .el-breadcrumb__inner
.breadcrumb-container >>> .el-breadcrumb__inner:hover
  font-size 13px
  font-weight 400
  color $hue
.breadcrumb-container >>> .el-breadcrumb__separator
  color $hue
.breadcrumb-container
  display flex
  align-items center
  padding 0 20px
  height 22px
  background #00adb5
</style>
