<template>
  <auth-layout>
    <template v-slot:default>
      <div class="reset-form">
        <el-form ref="form" :model="payload" label-width="0px">
          <el-form-item
            :class="{
              'has-error': verrors.has('password') || Object.keys(error).length
            }"
          >
            <el-input
              name="password"
              v-model="payload.password"
              v-validate="'required|min:6'"
              :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.PASSWORD')"
              :placeholder="$t('VIEWS.AUTH.PLACEHOLDER.PASSWORD')"
              show-password
            >
            </el-input>
            <span v-if="verrors.has('password')" class="help-block">{{
              verrors.first('password')
            }}</span>
            <span v-else-if="Object.keys(error).length" class="help-block">{{
              error.message
            }}</span>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="resetPassword"
              class="btn-submit"
              >{{ $t('VIEWS.AUTH.BUTTON.RESET') }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </template>
  </auth-layout>
</template>

<script>
import AuthLayout from './AuthLayout'
export default {
  name: 'AuthResetPassword',
  components: {
    AuthLayout
  },
  data () {
    return {
      payload: {
        password: '',
        token: this.$route.query.token
      },
      error: {}
    }
  },
  methods: {
    resetPassword () {
      this.error = {}
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$api.auth
            .resetPassword(this.payload)
            .then(() => {
              this.$message({
                showClose: true,
                message: this.$t('VIEWS.AUTH.PROMPT.RESET_SUCCESS'),
                type: 'success'
              })
              this.$router.push({ name: 'login' })
            })
            .catch(err => {
              this.error = err.response.data
            })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.reset-form
  margin 20px 0
  width 100%
  .btn-submit
    width 100%
    font-size 14px
    font-weight 350
    color #fff
</style>
