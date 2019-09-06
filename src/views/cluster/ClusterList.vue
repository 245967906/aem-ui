<template>
  <app-layout>
    <div class="cluster-container">
      <el-row class="action-bar">
        <el-button
          class="action-btn"
          size="small"
          type="success"
          @click="create()"
          >{{
            $t('BUTTON.CREATE', { name: $t('RESOURCE.CLUSTER.TITLE') })
          }}</el-button
        >
        <el-button class="action-btn" size="small" type="danger" disabled>{{
          $t('BUTTON.BULK_DELETE')
        }}</el-button>
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
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.NAME')"
          sortable
          align="center"
        ></el-table-column>
        <el-table-column
          prop="version"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.VERSION')"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="status"
          :label="$t('RESOURCE.CLUSTER.ATTRIBUTE.STATUS')"
          align="center"
        ></el-table-column>
        <el-table-column :label="$t('PROMPT.ACTION')" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="retrieve(scope.row)">{{
              $t('BUTTON.DETAIL')
            }}</el-button>
            <el-button size="mini" type="text" @click="destroy(scope.row)">{{
              $t('BUTTON.DELETE')
            }}</el-button>
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
  </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout'
import paginatedTableMixin from '@/mixins/table'
import noticeMixin from '@/mixins/notice'
export default {
  name: 'ClusterList',
  components: {
    AppLayout
  },
  mixins: [paginatedTableMixin, noticeMixin],
  data () {
    return {}
  },
  methods: {
    init () {
      const limit = this.pageSize
      const offset = this.pageSize * (this.currentPage - 1)
      this.$api.cluster.list({ limit, offset }).then(res => {
        this.tableData = res.data
      })
    },
    create () {
      this.$router.push({ name: 'clusterCreate' })
    },
    retrieve (row) {
      this.$router.push({ name: 'clusterDetail', params: { name: row.name } })
    },
    destroy (row) {
      this.launchResourceDestroyConfirm()
        .then(() => {
          this.$api.cluster.destroy(row.name).then(() => {
            this.launchDestroySuccessToast()
            this.$router.replace({ query: { page: this.currentPage } })
            this.init()
          })
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
