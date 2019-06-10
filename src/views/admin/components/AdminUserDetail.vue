<template>
  <el-form v-model="userInfo" ref="form" label-width="200px">
    <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.USERNAME')">
      <el-input name="username" v-model="userInfo.username" disabled></el-input>
    </el-form-item>
    <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.EMAIL')">
      <el-input name="email" v-model="userInfo.email" disabled></el-input>
    </el-form-item>
    <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.ROLE')">
      <el-radio-group name="role" v-model="userInfo.role">
        <el-radio
          v-for="(item, index) in userType"
          :key="index"
          :label="item.value"
          >{{ $t(`TYPE.USER.${item.name.toUpperCase()}`) }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button @click="updateUserInfo" type="primary">{{
        $t('BUTTON.UPDATE')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { userType } from '@/lib/types'
export default {
  name: 'AdminUserDetail',
  data () {
    return {
      userType,
      userInfo: {}
    }
  },
  methods: {
    getUserInfo () {
      this.$api.getUserDetail(this.$route.params.id).then(res => {
        this.userInfo = res.data
      })
    },
    updateUserInfo () {}
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
