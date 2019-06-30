<template>
  <app-layout>
    <template v-slot:default>
      <el-form v-model="userProfile" ref="form" label-width="200px">
        <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.NAME')">
          <el-input
            name="name"
            v-model="userProfile.name"
            disabled
          ></el-input>
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
        <el-form-item
          :class="{ 'has-error': verrors.has('aws_access_key_id') }"
          :label="$t('RESOURCE.USER.ATTRIBUTE.AWS_ACCESS_KEY_ID')"
        >
          <el-input
            name="aws_access_key_id"
            v-model="userProfile.aws_access_key_id"
            v-validate="'required|min:20|max:20'"
            :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.AWS_ACCESS_KEY_ID')"
            show-password
          ></el-input>
          <span :class="{ 'help-block': verrors.has('aws_access_key_id') }">{{
            verrors.first('aws_access_key_id')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('aws_secret_access_key') }"
          :label="$t('RESOURCE.USER.ATTRIBUTE.AWS_SECRET_ACCESS_KEY')"
        >
          <el-input
            name="aws_secret_access_key"
            v-model="userProfile.aws_secret_access_key"
            v-validate="'required|min:40|max:40'"
            :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.AWS_SECRET_ACCESS_KEY')"
            show-password
          ></el-input>
          <span
            :class="{ 'help-block': verrors.has('aws_secret_access_key') }"
            >{{ verrors.first('aws_secret_access_key') }}</span
          >
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
            .update({
              aws_access_key_id: this.userProfile.aws_access_key_id,
              aws_secret_access_key: this.userProfile.aws_secret_access_key
            })
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
