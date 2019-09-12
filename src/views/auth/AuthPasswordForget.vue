<template>
  <auth-layout>
    <template v-slot:logo>
      <div v-if="showAlert"></div>
    </template>
    <template v-slot:default>
      <div class="recovery-form" v-if="!showAlert">
        <el-form ref="form" :model="payload" label-width="0px">
          <el-form-item
            :class="{
              'has-error': verrors.has('email') || Object.keys(error).length
            }"
          >
            <el-input
              name="email"
              v-model="payload.email"
              v-validate="'required|email'"
              :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.EMAIL')"
              :placeholder="$t('VIEWS.AUTH.PLACEHOLDER.EMAIL')"
            ></el-input>
            <span v-if="verrors.has('email')" class="help-block">{{
              verrors.first('email')
            }}</span>
            <span v-else-if="Object.keys(error).length" class="help-block">{{
              error.message
            }}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="sendEmail" class="btn-submit">{{
              $t('VIEWS.AUTH.BUTTON.RECOVERY')
            }}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="alert-success" v-if="showAlert">
        <el-alert
          class="alert-success-wrapper"
          type="success"
          :closable="false"
          center
        >
          <div class="alert-title">Hi, {{ payload.email }}</div>
          <div class="alert-tips">{{ $t('VIEWS.AUTH.ALERT_TIPS')[0] }}</div>
          <div class="alert-tips">{{ $t('VIEWS.AUTH.ALERT_TIPS')[1] }}</div>
          <el-button
            type="primary"
            size="small"
            @click="$router.push({ name: 'login' })"
            class="btn-back-login"
            >{{ $t('VIEWS.AUTH.BUTTON.BACK_LOGIN') }}</el-button
          >
        </el-alert>
      </div>
    </template>
  </auth-layout>
</template>

<script>
import AuthLayout from './AuthLayout'
export default {
  name: 'AuthPasswordForget',
  components: {
    AuthLayout
  },
  data () {
    return {
      showAlert: false,
      payload: {
        email: '',
        origin: window.location.origin
      },
      error: {}
    }
  },
  methods: {
    sendEmail () {
      this.error = {}
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$api.auth
            .sendConfirmation(this.payload)
            .then(() => {
              this.showAlert = true
            })
            .catch(err => {
              this.error = err.response.data
              this.$message({
                showClose: true,
                message: this.$i18n.t('TOAST.SEND_FAILED'),
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
.recovery-form
  margin 20px 0
  width 100%
  .btn-submit
    width 100%
    font-size 14px
    font-weight 350
    color #fff
.alert-success
  padding 30px
  width 500px
  text-align center
  .alert-success-wrapper
    padding 20px 0
    .alert-title
      font-size 16px
      font-weight 500
      line-height 40px
    .alert-tips
      font-size 14px
      font-weight 350
      line-height 28px
    .btn-back-login
      margin-top 30px
      min-width 150px
      font-size 14px
      font-weight 350
      color #fff
</style>
