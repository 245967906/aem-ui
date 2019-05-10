<template>
  <div>
    <app-header></app-header>
    <app-breadcrumb></app-breadcrumb>
    <div class="profile-container">
      <div class="profile-title">
        <h3>{{ $t($route.meta.title) }}</h3>
      </div>
      <div class="profile-content">
        <el-form
          class="profile-form"
          v-model="payload"
          ref="form"
          label-width="200px"
        >
          <el-form-item :label="$t('PROFILE.FIELDS.USERNAME')">
            <el-input
              name="username"
              v-model="payload.username"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('PROFILE.FIELDS.EMAIL')">
            <el-input name="email" v-model="payload.email" disabled></el-input>
          </el-form-item>
          <el-form-item :label="$t('PROFILE.FIELDS.ROLE')">
            <el-radio-group name="role" v-model="payload.role" disabled>
              <el-radio :label="0">{{ $t('PROFILE.USERTYPE.ADMIN') }}</el-radio>
              <el-radio :label="1">{{
                $t('PROFILE.USERTYPE.OPERATOR')
              }}</el-radio>
              <el-radio :label="2">{{
                $t('PROFILE.USERTYPE.DEVELOPER')
              }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('PROFILE.FIELDS.AWS_ACCESS_KEY_ID')">
            <el-input
              name="aws_access_key_id"
              v-model="payload.aws_access_key_id"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('PROFILE.FIELDS.AWS_SECRET_ACCESS_KEY')">
            <el-input
              name="aws_secret_access_key"
              v-model="payload.aws_secret_access_key"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">{{
              $t('PROFILE.PROMPT.UPDATE')
            }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppBreadcrumb from '@/components/AppBreadcrumb'
export default {
  name: 'Profile',
  components: {
    AppHeader,
    AppBreadcrumb
  },
  computed: {
    ...mapState({ payload: 'profile' })
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
.profile-container
  padding 10px 10%
  .profile-title
    display flex
    align-items center
    border-bottom 1px solid #e7eaec
    height 60px
  .profile-content
    display flex
    justify-content center
    margin 25px 0
    .profile-form
      width 100%
</style>
