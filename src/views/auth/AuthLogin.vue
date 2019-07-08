<template>
  <auth-layout>
    <template>
      <div class="login-form">
        <el-form ref="form" :model="payload" label-width="0px">
          <el-form-item
            :class="{
              'has-error': verrors.has('name') || Object.keys(error).length
            }"
          >
            <el-input
              v-model="payload.name"
              v-validate="'required|min:2|max:20'"
              :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.NAME')"
              :placeholder="$t('VIEWS.AUTH.PLACEHOLDER.USERNAME')"
              name="name"
            ></el-input>
            <span v-if="verrors.has('name')" class="help-block">{{
              verrors.first('name')
            }}</span>
            <span v-else-if="Object.keys(error).length" class="help-block">{{
              error.message
            }}</span>
          </el-form-item>
          <el-form-item :class="{ 'has-error': verrors.has('password') }">
            <el-input
              v-model="payload.password"
              v-validate="'required|min:6'"
              :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.PASSWORD')"
              :placeholder="$t('VIEWS.AUTH.PLACEHOLDER.PASSWORD')"
              name="password"
              show-password
            >
              <template slot="append">
                <router-link
                  class="forget-password-btn"
                  :to="$router.match({ name: 'forget' })"
                  >{{
                    $t('VIEWS.AUTH.BUTTON.FORGOT_PASSWORD')
                  }}</router-link
                >
              </template>
            </el-input>
            <span :class="{ 'help-block': verrors.has('password') }">{{
              verrors.first('password')
            }}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login" class="btn-submit">{{
              $t('VIEWS.AUTH.BUTTON.SIGNIN')
            }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
  </auth-layout>
</template>

<script>
import AuthLayout from './AuthLayout'
export default {
  name: 'AuthLogin',
  components: {
    AuthLayout
  },
  data () {
    return {
      payload: {
        name: '',
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
          this.$api.auth
            .login(this.payload)
            .then(res => {
              const data = res.data
              const auth = {}
              auth.token = data.token_type + ' ' + data.access_token
              auth.expires = timestamp + data.expires_in * 1000
              localStorage.auth = JSON.stringify(auth)
              const home = this.$router.match({ name: 'home' })
              this.$router.push(this.$route.query.redirect || home)
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
.login-form
  margin 20px 0
  width 100%
  .forget-password-btn
    color #8f9bb2
  .btn-submit
    width 100%
    font-size 14px
    font-weight 350
    color #fff
</style>
