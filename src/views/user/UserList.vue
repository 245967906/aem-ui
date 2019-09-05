<template>
  <div class="user-container">
    <el-row class="action-bar">
      <el-button
        class="action-btn"
        size="small"
        type="success"
        @click="create()"
        >{{
          $t('BUTTON.CREATE', { name: $t('RESOURCE.USER.TITLE') })
        }}</el-button
      >
      <el-button
        class="action-btn"
        size="small"
        type="danger"
        @click="bulkDestroy()"
        >{{ $t('BUTTON.BULK_DELETE') }}</el-button
      >
      <el-input
        class="action-search"
        v-model="search"
        size="small"
        :placeholder="$t('PROMPT.KEYWORD')"
      ></el-input>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="
        tableData.results.filter(
          data =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      tooltip-effect="dark"
      stripe
      style="width: 100%"
      :default-sort="{ prop: 'id', order: 'ascending' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        prop="name"
        :label="$t('RESOURCE.USER.ATTRIBUTE.NAME')"
        sortable
        align="center"
      ></el-table-column>
      <el-table-column
        prop="email"
        :label="$t('RESOURCE.USER.ATTRIBUTE.EMAIL')"
        align="center"
      ></el-table-column>
      <el-table-column
        :label="$t('RESOURCE.USER.ATTRIBUTE.ROLE')"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          {{ $t(`TYPE.USER.${userType[scope.row.role].name.toUpperCase()}`) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('RESOURCE.USER.ATTRIBUTE.IS_ACTIVE')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.is_active ? $t('BOOLEAN.TRUE') : $t('BOOLEAN.FALSE') }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('PROMPT.ACTION')" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="retrieve(scope.row)"
            >{{ $t('BUTTON.DETAIL') }}</el-button
          >
          <el-button
            size="mini"
            type="text"
            @click="destroy(scope.row)"
            >{{ $t('BUTTON.DELETE') }}</el-button
          >
          <el-button
            size="mini"
            type="text"
            @click="handleMailDelivery(scope.$index, scope.row)"
            :loading="loadingIndex == scope.$index"
            >{{ $t('BUTTON.EMAIL') }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import paginatedTableMixin from '@/mixins/table'
import noticeMixin from '@/mixins/notice'
import { userType } from '@/lib/types'
export default {
  name: 'UserList',
  mixins: [paginatedTableMixin, noticeMixin],
  data () {
    return {
      userType,
      loadingIndex: -1
    }
  },
  methods: {
    init () {
      const limit = this.pageSize
      const offset = this.pageSize * (this.currentPage - 1)
      this.$api.user.list({ limit, offset }).then(res => {
        this.tableData = res.data
      })
    },
    create () {
      this.$router.push({ name: 'userCreate' })
    },
    retrieve (row) {
      this.$router.push({ name: 'userDetail', params: { name: row.name } })
    },
    destroy (row) {
      this.launchResourceDestroyConfirm()
        .then(() => {
          this.$api.user.destroy(row.name).then(() => {
            this.launchDestroySuccessToast()
            this.$router.replace({ query: { page: this.currentPage } })
            this.init()
          })
        })
        .catch(() => {})
    },
    bulkDestroy () {
      const users = this.multipleSelection.map(x => x.name)
      this.launchResourceDestroyConfirm()
        .then(() => {
          const actions = users.map(this.$api.user.destroy)
          Promise.all(actions).then(() => {
            this.launchDestroySuccessToast()
            this.$router.replace({ query: { page: this.currentPage } })
            this.init()
          })
        })
        .catch(() => {})
    },
    async handleMailDelivery (index, row) {
      const data = {
        email: row.email,
        origin: window.location.origin
      }
      this.loadingIndex = index
      await this.$api.auth
        .sendConfirmation(data)
        .then(() => {
          this.launchMailDeliverySuccessToast()
        })
        .catch(() => {
          this.launchMailDeliveryFailedToast()
        })
      this.loadingIndex = -1
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
