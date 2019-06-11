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
    handleCreate () {
      this._handleCreate()
    },
    handleDetail (index, row) {
      this._handleDetail(row)
    },
    handleDelete (index, row) {
      this.confirmDelete().then(() => {
        this._handleDelete(row).then(() => {
          this.$message({
            type: 'success',
            message: this.$t('TOAST.DELETED')
          })
          this.$router.replace({ query: { page: this.currentPage } })
          this.fetchTableData()
        })
      })
    },
    handleBulkDelete () {
      this.confirmDelete().then(() => {
        const actions = this.multipleSelection.map(this._handleDelete)
        Promise.all(actions).then(() => {
          this.$message({
            type: 'success',
            message: this.$t('TOAST.DELETED')
          })
          this.$router.replace({ query: { page: this.currentPage } })
          this.fetchTableData()
        })
      })
    },
    confirmDelete () {
      return this.$confirm(
        this.$t('PROMPT.CONFIRM_DELETE'),
        this.$t('PROMPT.TITLE'),
        {
          confirmButtonText: this.$t('BUTTON.CONFIRM'),
          cancelButtonText: this.$t('BUTTON.CANCEL'),
          type: 'warning'
        }
      )
    },
    fetchTableData () {
      return this.tableData
    }
  }
}
