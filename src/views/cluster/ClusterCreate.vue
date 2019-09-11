<template>
  <app-layout>
    <el-card class="box-card">
      <div slot="header" class="box-header">
        <span>{{ $t('VIEWS.CLUSTER.TITLE.MASTER') }}</span>
      </div>
      <el-form :model="cluster" ref="form" label-width="200px">
        <el-form-item
          :class="{
            'has-error': verrors.has('name') || Object.keys(error).length
          }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NAME')"
        >
          <el-input
            name="name"
            v-model="cluster.name"
            v-validate="{
              required: true,
              min: 2,
              max: 20,
              regex: /^[a-zA-Z][a-zA-Z0-9_-]*$/
            }"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NAME')"
          ></el-input>
          <span v-if="verrors.has('name')" class="help-block">{{
            verrors.first('name')
          }}</span>
          <span v-else-if="Object.keys(error).length" class="help-block">{{
            error.message
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('version') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.VERSION')"
        >
          <el-input
            name="version"
            v-model="cluster.node_config.version"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.VERSION')"
          ></el-input>
          <span v-if="verrors.has('version')" class="help-block">{{
            verrors.first('version')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('role_arn') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.ROLE_ARN')"
        >
          <el-input
            name="role_arn"
            v-model="cluster.role_arn"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.ROLE_ARN')"
          ></el-input>
          <span v-if="verrors.has('role_arn')" class="help-block">{{
            verrors.first('role_arn')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('vpc_id') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.VPC_ID')"
        >
          <el-input
            name="vpc_id"
            v-model="cluster.vpc_id"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.VPC_ID')"
          ></el-input>
          <span v-if="verrors.has('vpc_id')" class="help-block">{{
            verrors.first('vpc_id')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('subnets') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.SUBNETS')"
        >
          <el-input
            name="subnets"
            :value="cluster.subnets.join(',')"
            @input="changeSubnets"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.SUBNETS')"
          ></el-input>
          <span v-if="verrors.has('subnets')" class="help-block">{{
            verrors.first('subnets')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('security_groups') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.SECURITY_GROUPS')"
        >
          <el-input
            name="security_groups"
            :value="cluster.security_groups.join(',')"
            @input="changeSecurityGroups"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.SECURITY_GROUPS')"
          ></el-input>
          <span v-if="verrors.has('security_groups')" class="help-block">{{
            verrors.first('security_groups')
          }}</span>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="box-header">
        <span>{{ $t('VIEWS.CLUSTER.TITLE.NODE') }}</span>
      </div>
      <el-form :model="cluster" ref="form" label-width="200px">
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.desired') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.DESIRED')"
        >
          <el-input
            name="node_config.desired"
            v-model="cluster.node_config.desired"
            v-validate="{
              required: true,
              numeric: true,
              min_value: 0,
              between: {
                min: cluster.node_config.min_size,
                max: cluster.node_config.max_size
              }
            }"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.DESIRED')"
          ></el-input>
          <span v-if="verrors.has('node_config.desired')" class="help-block">{{
            verrors.first('node_config.desired')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.min_size') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MIN_SIZE')"
        >
          <el-input
            name="node_config.min_size"
            v-model="cluster.node_config.min_size"
            v-validate="'required|numeric|min_value:0'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MIN_SIZE')"
          ></el-input>
          <span v-if="verrors.has('node_config.min_size')" class="help-block">{{
            verrors.first('node_config.min_size')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.max_size') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MAX_SIZE')"
        >
          <el-input
            name="node_config.max_size"
            v-model="cluster.node_config.max_size"
            v-validate="'required|numeric|min_value:0'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MAX_SIZE')"
          ></el-input>
          <span v-if="verrors.has('node_config.max_size')" class="help-block">{{
            verrors.first('node_config.max_size')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.image_id') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.IMAGE_ID')"
        >
          <el-input
            name="node_config.image_id"
            v-model="cluster.node_config.image_id"
            v-validate="{ required: true, regex: /^ami-[a-zA-Z0-9_-]*$/ }"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.IMAGE_ID')"
          ></el-input>
          <span v-if="verrors.has('node_config.image_id')" class="help-block">{{
            verrors.first('node_config.image_id')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.instance_type') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.INSTANCE_TYPE')"
        >
          <el-input
            name="node_config.instance_type"
            v-model="cluster.node_config.instance_type"
            v-validate="'required'"
            :data-vv-as="
              $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.INSTANCE_TYPE')
            "
          ></el-input>
          <span
            v-if="verrors.has('node_config.instance_type')"
            class="help-block"
            >{{ verrors.first('node_config.instance_type') }}</span
          >
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.key_name') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KEY_NAME')"
        >
          <el-input
            name="node_config.key_name"
            v-model="cluster.node_config.key_name"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KEY_NAME')"
          ></el-input>
          <span v-if="verrors.has('node_config.key_name')" class="help-block">{{
            verrors.first('node_config.key_name')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.volume_size') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.VOLUME_SIZE')"
        >
          <el-input
            name="node_config.volume_size"
            v-model="cluster.node_config.volume_size"
            v-validate="'required|numeric'"
            :data-vv-as="
              $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.VOLUME_SIZE')
            "
          ></el-input>
          <span
            v-if="verrors.has('node_config.volume_size')"
            class="help-block"
            >{{ verrors.first('node_config.volume_size') }}</span
          >
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.spot_price') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SPOT_PRICE')"
        >
          <el-input
            name="node_config.spot_price"
            v-model="cluster.node_config.spot_price"
            v-validate="'required|decimal:3'"
            :data-vv-as="
              $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SPOT_PRICE')
            "
          ></el-input>
          <span
            v-if="verrors.has('node_config.spot_price')"
            class="help-block"
            >{{ verrors.first('node_config.spot_price') }}</span
          >
        </el-form-item>
        <el-form-item
          :label="
            $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.ASSOCIATE_PUBLIC_IP')
          "
        >
          <el-switch
            v-model="cluster.node_config.associate_public_ip"
          ></el-switch>
        </el-form-item>
        <el-form-item
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KUBELET_ARGS')"
        >
          <el-input
            name="node_config.kubelet_args"
            v-model="cluster.node_config.kubelet_args"
          ></el-input>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.subnets') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SUBNETS')"
        >
          <el-input
            name="node_config.subnets"
            :value="cluster.node_config.subnets.join(',')"
            @input="changeNodeSubnets"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SUBNETS')"
          ></el-input>
          <span v-if="verrors.has('node_config.subnets')" class="help-block">{{
            verrors.first('node_config.subnets')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('node_config.security_groups') }"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SECURITY_GROUPS')"
        >
          <el-input
            name="node_config.security_groups"
            :value="cluster.node_config.security_groups.join(',')"
            @input="changeNodeSecurityGroups"
            v-validate="'required'"
            :data-vv-as="
              $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SECURITY_GROUPS')
            "
          ></el-input>
          <span
            v-if="verrors.has('node_config.security_groups')"
            class="help-block"
            >{{ verrors.first('node_config.security_groups') }}</span
          >
        </el-form-item>
      </el-form>
    </el-card>
    <div class="form-action">
      <el-button @click="cancel" type="text">{{
        $t('BUTTON.CANCEL')
      }}</el-button>
      <el-button @click="create" type="primary">{{
        $t('BUTTON.SUBMIT')
      }}</el-button>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout'
import noticeMixin from '@/mixins/notice'
export default {
  name: 'ClusterCreate',
  components: {
    AppLayout
  },
  mixins: [noticeMixin],
  data () {
    return {
      error: {},
      cluster: {
        name: '',
        version: '',
        role_arn: '',
        vpc_id: '',
        subnets: [],
        security_groups: [],
        node_config: {
          desired: '',
          min_size: '',
          max_size: '',
          image_id: '',
          instance_type: '',
          key_name: '',
          volume_size: '',
          spot_price: '',
          associate_public_ip: false,
          kubelet_args: '',
          subnets: [],
          security_groups: []
        }
      }
    }
  },
  methods: {
    create () {
      this.error = {}
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$api.cluster
            .create(this.cluster)
            .then(() => {
              this.launchCreateSuccessToast()
              this.$router.push({ name: 'clusterList' })
            })
            .catch(err => {
              this.error = err.response.data
            })
        }
      })
    },
    cancel () {
      this.$router.push({ name: 'clusterList' })
    },
    changeSubnets (value) {
      this.cluster.subnets = value.split(',')
    },
    changeSecurityGroups (value) {
      this.cluster.security_groups = value.split(',')
    },
    changeNodeSubnets (value) {
      this.cluster.node_config.subnets = value.split(',')
    },
    changeNodeSecurityGroups (value) {
      this.cluster.node_config.security_groups = value.split(',')
    }
  }
}
</script>

<style lang="stylus" scoped>
.box-card
  margin-bottom 30px
  .box-header
    color #000
</style>
