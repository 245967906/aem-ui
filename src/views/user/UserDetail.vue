<template>
  <el-form v-model="userInfo" ref="form" label-width="200px">
    <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.NAME')">
      <el-input name="name" v-model="userInfo.name" disabled></el-input>
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
    <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.IS_ACTIVE')">
      <el-switch v-model="userInfo.is_active"></el-switch>
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
  name: 'UserDetail',
  data () {
    return {
      userType,
      userInfo: {}
    }
  },
  methods: {
    getUserInfo () {
      this.$api.user.retrieve(this.$route.params.name).then(res => {
        this.userInfo = res.data
      })
    },
    updateUserInfo () {
      this.$api.user.update(this.$route.params.name, this.userInfo).then(() => {
        this.$message({
          showClose: true,
          message: this.$t('TOAST.UPDATED'),
          type: 'success'
        })
        this.$router.push({ name: 'userList' })
      })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
