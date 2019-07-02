<template>
  <el-form v-model="payload" ref="form" label-width="200px">
    <el-form-item
      :class="{
        'has-error': verrors.has('name') || Object.keys(error).length
      }"
      :label="$t('RESOURCE.USER.ATTRIBUTE.NAME')"
    >
      <el-input
        name="name"
        v-model="payload.name"
        v-validate="{
          required: true,
          min: 2,
          max: 20,
          regex: /^[a-zA-Z][a-zA-Z0-9_-]*$/
        }"
        :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.NAME')"
      ></el-input>
      <span v-if="verrors.has('name')" class="help-block">{{
        verrors.first('name')
      }}</span>
      <span v-else-if="Object.keys(error).length" class="help-block">{{
        error.message
      }}</span>
    </el-form-item>
    <el-form-item
      :class="{ 'has-error': verrors.has('email') }"
      :label="$t('RESOURCE.USER.ATTRIBUTE.EMAIL')"
    >
      <el-input
        name="email"
        v-model="payload.email"
        v-validate="'required|email'"
        :data-vv-as="$t('RESOURCE.USER.ATTRIBUTE.EMAIL')"
      ></el-input>
      <span v-if="verrors.has('email')" class="help-block">{{
        verrors.first('email')
      }}</span>
    </el-form-item>
    <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.ROLE')">
      <el-radio-group name="role" v-model="payload.role">
        <el-radio
          v-for="(item, index) in userType"
          :key="index"
          :label="item.value"
          >{{ $t(`TYPE.USER.${item.name.toUpperCase()}`) }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="$t('RESOURCE.USER.ATTRIBUTE.IS_ACTIVE')">
      <el-switch v-model="payload.is_active"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button @click="createUser" type="primary">{{
        $t('BUTTON.SUBMIT')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { userType } from '@/lib/types'
export default {
  name: 'UserCreate',
  data () {
    return {
      payload: {
        name: '',
        email: '',
        role: 0,
        is_active: true
      },
      error: {},
      userType
    }
  },
  methods: {
    createUser () {
      this.error = {}
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$api.user
            .create(this.payload)
            .then(() => {
              this.$message({
                showClose: true,
                message: this.$t('TOAST.CREATED'),
                type: 'success'
              })
              this.$router.push({ name: 'userList' })
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
</style>
