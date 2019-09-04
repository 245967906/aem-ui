export default {
  name: 'noticeMixin',
  methods: {
    // toasts
    launchDestroySuccessToast () {
      this.$message({
        type: 'success',
        message: this.$t('TOAST.DELETED'),
        showClose: true
      })
    },
    launchMailDeliverySuccessToast () {
      this.$message({
        type: 'success',
        message: this.$i18n.t('TOAST.SEND_SUCCESS'),
        showClose: true
      })
    },
    launchMailDeliveryFailedToast () {
      this.$message({
        type: 'success',
        message: this.$i18n.t('TOAST.SEND_SUCCESS'),
        showClose: true,
      })
    },
  // confirms
    launchResourceDestroyConfirm () {
      const message = this.$t('PROMPT.CONFIRM_DELETE')
      const title = this.$t('PROMPT.TITLE')
      const options = {
        confirmButtonText: this.$t('BUTTON.CONFIRM'),
        cancelButtonText: this.$t('BUTTON.CANCEL'),
        type: 'warning'
      }
      return this.$confirm(message, title, options)
    }
  }
}
