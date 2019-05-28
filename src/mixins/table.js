export default {
  name: 'TableMixin',
  data () {
    return {
      tableData: {
        total: 0,
        results: []
      },
      multipleSelection: [],
      currentPage: parseInt(this.$route.query.page) || 1,
      pageSize: 10,
      search: ''
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.currentPage = 1
      this.$router.replace({ query: { page: 1 } })
      this.fetchTableData()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.$router.replace({ query: { page: val } })
      this.fetchTableData()
    },
    fetchTableData () {
      return this.tableData
    }
  }
}
