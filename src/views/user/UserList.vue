<template>
  <div class="user-container">
    <el-row class="action-bar">
      <el-button
        class="action-btn"
        size="small"
        type="success"
        @click="handleCreate()"
        >{{
          $t('BUTTON.CREATE', { name: $t('RESOURCE.USER.TITLE') })
        }}</el-button
      >
      <el-button
        class="action-btn"
        size="small"
        type="danger"
        @click="handleBulkDelete()"
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
            !search ||
            data.username.toLowerCase().includes(search.toLowerCase())
        )
      "
      tooltip-effect="dark"
      stripe
      style="width: 100%"
      :default-sort="{ prop: 'username', order: 'ascending' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        prop="username"
        :label="$t('RESOURCE.USER.ATTRIBUTE.USERNAME')"
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
      <el-table-column :label="$t('PROMPT.ACTION')" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleDetail(scope.$index, scope.row)"
            >{{ $t('BUTTON.DETAIL') }}</el-button
          >
          <el-button
            size="mini"
            type="text"
            @click="handleDelete(scope.$index, scope.row)"
            >{{ $t('BUTTON.DELETE') }}</el-button
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
import TableMixin from '@/mixins/table'
import { userType } from '@/lib/types'
export default {
  name: 'AdminUserList',
  mixins: [TableMixin],
  data () {
    return {
      userType
    }
  },
  methods: {
    handleCreate () {
      this.$router.push({ name: 'userCreate' })
    },
    handleBulkDelete () {
      console.log(this.multipleSelection)
    },
    handleDetail (index, row) {
      this.$router.push({ name: 'userDetail', params: { id: row.id } })
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    fetchTableData () {
      const limit = this.pageSize
      const offset = this.pageSize * (this.currentPage - 1)
      this.$api.user.list({ limit, offset }).then(res => {
        this.tableData = res.data
      })
    }
  },
  mounted () {
    this.fetchTableData()
  }
}
</script>

<style lang="stylus" scoped>
</style>