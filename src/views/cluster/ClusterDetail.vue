<template>
  <app-layout>
    <el-card class="box-card">
      <div slot="header" class="box-header">
        <span>{{ $t('VIEWS.CLUSTER.TITLE.MASTER') }}</span>
      </div>
      <div class="box-content">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NAME') }}
              </div>
              <div class="item-value">{{ cluster.name }}</div>
            </div></el-col
          >
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.VERSION') }}
              </div>
              <div class="item-value">{{ cluster.version }}</div>
            </div></el-col
          >
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.STATUS') }}
              </div>
              <div class="item-value">{{ cluster.status }}</div>
            </div></el-col
          >
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.CREATED_AT') }}
              </div>
              <div class="item-value">{{ cluster.created_at }}</div>
            </div></el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.ENDPOINT') }}
              </div>
              <div class="item-value">{{ cluster.endpoint }}</div>
            </div></el-col
          >
          <el-col :span="12">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.CERTIFICATE') }}
              </div>
              <div class="item-value">
                <textarea
                  class="certificate"
                  v-model="cluster.certificate"
                  rows="3"
                  autosize
                  disabled
                ></textarea>
              </div></div
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.ARN') }}
              </div>
              <div class="item-value">{{ cluster.arn }}</div>
            </div></el-col
          >
          <el-col :span="12">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.ROLE_ARN') }}
              </div>
              <div class="item-value">{{ cluster.role_arn }}</div>
            </div></el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.VPC_ID') }}
              </div>
              <div class="item-value">{{ cluster.vpc_id }}</div>
            </div></el-col
          >
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.SUBNETS') }}
              </div>
              <div class="item-value">
                <div v-for="(item, index) in cluster.subnets" :key="index">
                  {{ item }}
                </div>
              </div>
            </div></el-col
          >
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.SECURITY_GROUPS') }}
              </div>
              <div class="item-value">
                <div
                  v-for="(item, index) in cluster.security_groups"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
            </div></el-col
          >
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="box-header">
        <span>{{ $t('VIEWS.CLUSTER.TITLE.NODE') }}</span>
        <el-button
          style="float: right"
          size="small"
          plain
          @click="dialogFormVisible = true"
          >{{ $t('BUTTON.MODIFY') }}</el-button
        >
      </div>
      <div class="box-content">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.DESIRED') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.desired }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MIN_SIZE') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.min_size }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MAX_SIZE') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.max_size }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.IMAGE_ID') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.image_id }}
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.INSTANCE_TYPE') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.instance_type }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KEY_NAME') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.key_name }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.VOLUME_SIZE') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.volume_size }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SPOT_PRICE') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.spot_price }}
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{
                  $t(
                    'RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.ASSOCIATE_PUBLIC_IP'
                  )
                }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.associate_public_ip }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KUBELET_ARGS') }}
              </div>
              <div class="item-value">
                {{ cluster.node_config.kubelet_args }}
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{ $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SUBNETS') }}
              </div>
              <div class="item-value">
                <div
                  v-for="(item, index) in cluster.node_config.subnets"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content-item">
              <div class="item-title">
                {{
                  $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SECURITY_GROUPS')
                }}
              </div>
              <div class="item-value">
                <div
                  v-for="(item, index) in cluster.node_config.security_groups"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <el-dialog
      :title="$t('VIEWS.CLUSTER.TITLE.NODE')"
      :visible.sync="dialogFormVisible"
      :show-close="false"
    >
      <el-form
        class="dialog-form"
        :model="cluster"
        ref="form"
        label-width="200px"
      >
        <el-form-item
          :class="{ 'has-error': verrors.has('desired') }"
          prop="node_config.desired"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.DESIRED')"
        >
          <el-input
            name="desired"
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
          <span v-if="verrors.has('desired')" class="help-block">{{
            verrors.first('desired')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('min_size') }"
          prop="node_config.min_size"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MIN_SIZE')"
        >
          <el-input
            name="min_size"
            v-model="cluster.node_config.min_size"
            v-validate="'required|numeric|min_value:0'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MIN_SIZE')"
          ></el-input>
          <span v-if="verrors.has('min_size')" class="help-block">{{
            verrors.first('min_size')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('max_size') }"
          prop="node_config.max_size"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MAX_SIZE')"
        >
          <el-input
            name="max_size"
            v-model="cluster.node_config.max_size"
            v-validate="'required|numeric|min_value:0'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.MAX_SIZE')"
          ></el-input>
          <span v-if="verrors.has('max_size')" class="help-block">{{
            verrors.first('max_size')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('image_id') }"
          prop="node_config.image_id"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.IMAGE_ID')"
        >
          <el-input
            name="image_id"
            v-model="cluster.node_config.image_id"
            v-validate="{ required: true, regex: /^ami-[a-zA-Z0-9_-]*$/ }"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.IMAGE_ID')"
          ></el-input>
          <span v-if="verrors.has('image_id')" class="help-block">{{
            verrors.first('image_id')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('instance_type') }"
          prop="node_config.instance_type"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.INSTANCE_TYPE')"
        >
          <el-input
            name="instance_type"
            v-model="cluster.node_config.instance_type"
            v-validate="'required'"
            :data-vv-as="
              $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.INSTANCE_TYPE')
            "
          ></el-input>
          <span v-if="verrors.has('instance_type')" class="help-block">{{
            verrors.first('instance_type')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('key_name') }"
          prop="node_config.key_name"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KEY_NAME')"
        >
          <el-input
            name="key_name"
            v-model="cluster.node_config.key_name"
            v-validate="'required'"
            :data-vv-as="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KEY_NAME')"
          ></el-input>
          <span v-if="verrors.has('key_name')" class="help-block">{{
            verrors.first('key_name')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('volume_size') }"
          prop="node_config.volume_size"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.VOLUME_SIZE')"
        >
          <el-input
            name="volume_size"
            v-model="cluster.node_config.volume_size"
            v-validate="'required|numeric'"
            :data-vv-as="
              $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.VOLUME_SIZE')
            "
          ></el-input>
          <span v-if="verrors.has('volume_size')" class="help-block">{{
            verrors.first('volume_size')
          }}</span>
        </el-form-item>
        <el-form-item
          :class="{ 'has-error': verrors.has('spot_price') }"
          prop="node_config.spot_price"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SPOT_PRICE')"
        >
          <el-input
            name="spot_price"
            v-model="cluster.node_config.spot_price"
            v-validate="'required|decimal:3'"
            :data-vv-as="
              $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SPOT_PRICE')
            "
          ></el-input>
          <span v-if="verrors.has('spot_price')" class="help-block">{{
            verrors.first('spot_price')
          }}</span>
        </el-form-item>
        <el-form-item
          prop="node_config.associate_public_ip"
          :label="
            $t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.ASSOCIATE_PUBLIC_IP')
          "
        >
          <el-switch
            v-model="cluster.node_config.associate_public_ip"
          ></el-switch>
        </el-form-item>
        <el-form-item
          prop="node_config.kubelet_args"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.KUBELET_ARGS')"
        >
          <el-input
            name="kubelet_args"
            v-model="cluster.node_config.kubelet_args"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="node_config.subnets"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SUBNETS')"
        >
          <el-input
            name="subnets"
            :value="cluster.node_config.subnets.join(',')"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="node_config.security_groups"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NODE_CONFIG.SECURITY_GROUPS')"
        >
          <el-input
            name="security_groups"
            :value="cluster.node_config.security_groups.join(',')"
            disabled
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">{{ $t('BUTTON.CANCEL') }}</el-button>
        <el-button type="primary" @click="update">{{
          $t('BUTTON.UPDATE')
        }}</el-button>
      </div>
    </el-dialog>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout'
import noticeMixin from '@/mixins/notice'
export default {
  name: 'ClusterDetail',
  components: {
    AppLayout
  },
  mixins: [noticeMixin],
  data () {
    return {
      dialogFormVisible: false,
      cluster: {
        name: '',
        version: '',
        endpoint: '',
        certificate: '',
        status: '',
        arn: '',
        role_arn: '',
        vpc_id: '',
        subnets: [],
        security_groups: [],
        created_at: '',
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
    init () {
      const name = this.$route.params.name
      this.$api.cluster.retrieve(name).then(res => {
        this.cluster = res.data
      })
    },
    update () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          const name = this.$route.params.name
          this.$api.cluster.update(name, this.cluster).then(() => {
            this.launchUpdateSuccessToast()
            this.init()
          })
          this.dialogFormVisible = false
        }
      })
    },
    cancel () {
      this.$refs.form.resetFields()
      this.$validator.reset()
      this.dialogFormVisible = false
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
>>> .el-dialog
  width 45%
.el-row:not(:last-child)
  margin-bottom 20px
.dialog-form
  overflow-y scroll
  height 600px
.certificate
  border 1px solid #fff
  width 100%
  line-height 20px
.box-card:not(:last-child)
  margin-bottom 30px
  .box-header
    display flex
    justify-content space-between
    align-items center
    color #000
  .box-content
    .content-item
      padding 5px 10px
      font-size 13px
      .item-title
        margin-bottom 10px
        color #000
      .item-value
        color #545b64
</style>
