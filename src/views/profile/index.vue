<template>
  <app-layout>
    <template v-slot:default>
      <el-form v-model="userProfile" ref="form" label-width="200px">
        <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.NAME')">
          <el-input name="name" v-model="userProfile.name" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.EMAIL')">
          <el-input
            name="email"
            v-model="userProfile.email"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.ROLE')">
          <el-radio-group name="role" v-model="userProfile.role" disabled>
            <el-radio
              v-for="(item, index) in userType"
              :key="index"
              :label="item.value"
              >{{ $t('TYPE.USER' + '.' + item.name.toUpperCase()) }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button @click="updateUserProfile" type="primary">{{
            $t('BUTTON.UPDATE')
          }}</el-button>
        </el-form-item>
      </el-form>
    </template>
  </app-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { userType } from '@/lib/types'
import AppLayout from '@/components/AppLayout'
export default {
  name: 'Profile',
  components: {
    AppLayout
  },
  data () {
    return {
      userType
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    ...mapMutations(['changeUserProfile']),
    updateUserProfile () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$api.profile
            .update(this.userProfile)
            .then(res => {
              this.changeUserProfile(res.data)
              this.$message({
                showClose: true,
                message: this.$t('TOAST.UPDATED'),
                type: 'success'
              })
            })
            .catch(err => {
              console.log(err)
              this.$message({
                showClose: true,
                message: this.$t('TOAST.UNKONW_ERROR'),
                type: 'error'
              })
            })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
