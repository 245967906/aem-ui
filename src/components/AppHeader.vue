<template>
  <el-row class="header-container">
    <el-col :span="4">
      <router-link
        class="header-brand"
        :to="this.$router.match({ name: 'home' })"
      >
        <div class="header-logo"></div>
        <div class="header-title">{{ $t('HEADER.TITLE') }}</div>
      </router-link>
    </el-col>
    <el-col :span="6">
      <div class="header-nav">
        <router-link class="header-nav-item" to="#">{{
          $t('HEADER.NAV.CLUSTER')
        }}</router-link>
        <router-link class="header-nav-item" to="#">{{
          $t('HEADER.NAV.TASK_DEFINITION')
        }}</router-link>
        <router-link class="header-nav-item" to="#">{{
          $t('HEADER.NAV.REGISTRY')
        }}</router-link>
      </div>
    </el-col>
    <el-col :span="4" :offset="10">
      <div class="header-menu">
        <div class="header-menu-item">
          <el-dropdown trigger="click" size="small">
            <span class="el-dropdown-link">
              {{ $t('HEADER.LANGUAGE' + '.' + currentLanguage.toUpperCase())
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in languages"
                :key="index"
                @click.native="handleLanguageClick(item)"
              >
                {{ $t('HEADER.LANGUAGE' + '.' + item.toUpperCase()) }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-menu-item">
          <el-dropdown trigger="click" size="small">
            <span class="el-dropdown-link">
              {{ $t('HEADER.REGION' + '.' + currentRegion.toUpperCase())
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in regions"
                :key="index"
                @click.native="handleRegionClick(item)"
              >
                {{ $t('HEADER.REGION' + '.' + item.toUpperCase()) }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-menu-item">
          <el-dropdown trigger="click" size="small">
            <span class="el-dropdown-link">
              {{ userProfile.username
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link :to="$router.match({ name: 'profile' })">
                  {{ $t('HEADER.MENU.PROFILE') }}
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="logout">{{
                $t('HEADER.MENU.SIGNOUT')
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'
import settings from '@/settings'
export default {
  name: 'AppHeader',
  data () {
    return {
      languages: Object.keys(this.$i18n.messages),
      regions: settings.regions,
      currentLanguage: this.$i18n.locale,
      currentRegion: localStorage.region || settings.regions[0]
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    handleLanguageClick (language) {
      localStorage.language = language
      this.$router.go(0)
    },
    handleRegionClick (region) {
      localStorage.region = region
      this.$router.go(0)
    },
    logout () {
      delete localStorage.auth
      this.$router.go(0)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.el-dropdown-link
  font-size 13px
  color #fff
  cursor pointer
.el-dropdown-menu__item, .el-dropdown-menu__item a
  font-size 12px
  color #444
.header-container
  display flex
  align-items center
  border-bottom 1px solid $hue
  padding 0 20px
  width 100%
  height 55px
  white-space nowrap
  background $hue
  .header-brand
    display flex
    align-items center
    .header-logo
      min-width 40px
      min-height 40px
      background url('~@/assets/images/logo.png') no-repeat
      background-size contain
    .header-title
      margin 0 10px
      font-size 16px
      color #fff
  .header-nav
    .header-nav-item
      margin 0 20px
      font-size 13px
      color #fff
  .header-menu
    display flex
    justify-content flex-end
    .header-menu-item
      margin 0 10px
</style>
