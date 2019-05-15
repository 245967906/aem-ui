<template>
  <app-layout>
    <template v-slot:default>
      <div class="profile">
        <el-form
          class="profile-form"
          v-model="payload"
          ref="form"
          label-width="200px"
        >
          <el-form-item :label="$t('PROFILE.PROMPT.USERNAME')">
            <el-input
              name="username"
              v-model="payload.username"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('PROFILE.PROMPT.EMAIL')">
            <el-input name="email" v-model="payload.email" disabled></el-input>
          </el-form-item>
          <el-form-item :label="$t('PROFILE.PROMPT.ROLE')">
            <el-radio-group name="role" v-model="payload.role" disabled>
              <el-radio
                v-for="(item, index) in userType"
                :key="index"
                :label="item.value"
                >{{
                  $t('TYPE.USERTYPE' + '.' + item.name.toUpperCase())
                }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item
            :class="{ 'has-error': verrors.has('aws_access_key_id') }"
            :label="$t('PROFILE.PROMPT.AWS_ACCESS_KEY_ID')"
          >
            <el-input
              name="aws_access_key_id"
              v-model="payload.aws_access_key_id"
              v-validate="'required|min:20|max:20'"
              :data-vv-as="$t('PROFILE.FIELDS.AWS_ACCESS_KEY_ID')"
              show-password
            ></el-input>
            <span :class="{ 'help-block': verrors.has('aws_access_key_id') }">{{
              verrors.first('aws_access_key_id')
            }}</span>
          </el-form-item>
          <el-form-item
            :class="{ 'has-error': verrors.has('aws_secret_access_key') }"
            :label="$t('PROFILE.PROMPT.AWS_SECRET_ACCESS_KEY')"
          >
            <el-input
              name="aws_secret_access_key"
              v-model="payload.aws_secret_access_key"
              v-validate="'required|min:40|max:40'"
              :data-vv-as="$t('PROFILE.FIELDS.AWS_SECRET_ACCESS_KEY')"
              show-password
            ></el-input>
            <span
              :class="{ 'help-block': verrors.has('aws_secret_access_key') }"
              >{{ verrors.first('aws_secret_access_key') }}</span
            >
          </el-form-item>
          <el-form-item>
            <el-button @click="updateUserProfile" type="primary">{{
              $t('PROFILE.PROMPT.UPDATE')
            }}</el-button>
          </el-form-item>
        </el-form>
      </div>
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
    ...mapState({ payload: 'userProfile' })
  },
  methods: {
    ...mapMutations(['changeUserProfile']),
    updateUserProfile () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$api
            .updateUserProfile(this.payload)
            .then(res => {
              this.changeUserProfile(res.data.data)
              this.$message({
                showClose: true,
                message: this.$t('PROFILE.TOAST.SUCCESS'),
                type: 'success'
              })
            })
            .catch(err => {
              console.log(err)
              this.$message({
                showClose: true,
                message: this.$t('PROFILE.TOAST.ERROR'),
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
@import '~@/assets/styles/variables.styl'
>>> .el-form-item__label
  font-weight bold
  text-align left
  color $hue
>>> .el-input__inner, >>> .el-input .is-disabled
>>> .el-radio__label
  font-weight 400
.profile
  display flex
  justify-content center
  width 100%
  .profile-form
    width 100%
</style>
