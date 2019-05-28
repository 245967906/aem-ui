<template>
  <div class="user-container">
    <el-row class="action-bar">
      <el-button
        class="action-btn"
        size="small"
        type="success"
        @click="handleCreate()"
        >{{ $t('ADMIN.USER.CREATE') }}</el-button
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
        :placeholder="$t('PLACEHOLDER.KEYWORD')"
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
        :label="$t('ADMIN.USER.LIST.USERNAME')"
        sortable
        align="center"
      ></el-table-column>
      <el-table-column
        prop="email"
        :label="$t('ADMIN.USER.LIST.EMAIL')"
        align="center"
      ></el-table-column>
      <el-table-column
        :label="$t('ADMIN.USER.LIST.ROLE')"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          {{
            $t(`TYPE.USERTYPE.${userType[scope.row.role].name.toUpperCase()}`)
          }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('TITLE.ACTION')" align="center">
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
    handleCreate () {},
    handleBulkDelete () {
      console.log(this.multipleSelection)
    },
    handleDetail (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    fetchTableData () {
      const limit = this.pageSize
      const offset = this.pageSize * (this.currentPage - 1)
      this.$api.getUserList({ limit, offset }).then(res => {
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
