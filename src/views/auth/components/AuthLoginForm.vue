<template>
  <div class="login-form">
    <el-form ref="form" :model="payload" label-width="0px">
      <el-form-item
        :class="{
          'has-error': verrors.has('username') || Object.keys(error).length
        }"
      >
        <el-input
          v-model="payload.username"
          v-validate="'required|min:2|max:20'"
          :data-vv-as="$t('AUTH.FIELDS.USERNAME')"
          :placeholder="$t('AUTH.PROMPT.USERNAME')"
          name="username"
        ></el-input>
        <span v-if="verrors.has('username')" class="help-block">{{
          verrors.first('username')
        }}</span>
        <span v-else-if="Object.keys(error).length" class="help-block">{{
          error.message
        }}</span>
      </el-form-item>
      <el-form-item :class="{ 'has-error': verrors.has('password') }">
        <el-input
          v-model="payload.password"
          v-validate="'required|min:6'"
          :data-vv-as="$t('AUTH.FIELDS.PASSWORD')"
          :placeholder="$t('AUTH.PROMPT.PASSWORD')"
          name="password"
          show-password
        >
          <template slot="append">
            <router-link class="forget-password-btn" to="#">{{
              $t('AUTH.PROMPT.FORGOT_PASSWORD')
            }}</router-link>
          </template>
        </el-input>
        <span :class="{ 'help-block': verrors.has('password') }">{{
          verrors.first('password')
        }}</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" class="submit-btn">{{
          $t('AUTH.PROMPT.SIGNIN')
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AuthLoginForm',
  data () {
    return {
      payload: {
        username: '',
        password: ''
      },
      error: {}
    }
  },
  methods: {
    login () {
      const timestamp = new Date().getTime()
      this.error = {}
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$api
            .login(this.payload)
            .then(res => {
              const data = res.data.data
              const auth = {}
              auth.token = data.token_type + ' ' + data.access_token
              auth.expires = timestamp + data.expires_in * 1000
              localStorage.auth = JSON.stringify(auth)
              const home = this.$router.match({ name: 'home' })
              this.$router.push({
                path: this.$route.query.redirect || home.path
              })
            })
            .catch(err => {
              this.error = err.response.data.error
            })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
>>> .el-input__inner::-ms-input-placeholder
  placeholder()
>>> .el-input__inner::-webkit-input-placeholder
  placeholder()
>>> .el-input-group__append
  padding 0 10px
  font-size 12px
  background #fff
.login-form
  margin 20px 0
  width 100%
  .forget-password-btn
    color #8f9bb2
  .submit-btn
    width 100%
    font-size 14px
    font-weight 350
    color #fff
</style>
