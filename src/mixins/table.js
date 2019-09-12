export default {
  name: 'paginatedTableMixin',
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
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.currentPage = 1
      this.$router.replace({ query: { page: 1 } })
      this.init()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.$router.replace({ query: { page: val } })
      this.init()
    }
  },
  mounted () {
    this.init()
  }
}
