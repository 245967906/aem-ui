export default {
  name: 'noticeMixin',
  methods: {
    // toasts
    launchCreateSuccessToast () {
      this.$message({
        showClose: true,
        message: this.$t('TOAST.CREATED'),
        type: 'success'
      })
    },
    launchUpdateSuccessToast () {
      this.$message({
        showClose: true,
        message: this.$t('TOAST.UPDATED'),
        type: 'success'
      })
    },
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
        type: 'error',
        message: this.$i18n.t('TOAST.SEND_FAILED'),
        showClose: true
      })
    },
    launchUpdateFailedToast (message) {
      this.$message({
        type: 'error',
        message: this.$i18n.t('TOAST.UPDATE_FAILED', {message}),
        showClose: true
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
