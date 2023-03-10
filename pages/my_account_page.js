const { I } = inject();

module.exports = {

  fields: {

  },

  button: {
    confirmedMyAccountButton:'.swal2-confirm.swal2-styled'
  },

  messages: {

  },

  confirmmyAccountPage() {
    I.click(this.button.confirmedMyAccountButton)
  }
}