const { I } = inject();

module.exports = {

  fields: {

  },

  button: {
    loginButton: `Login`
  },

  messages: {

  },

  accessLoginPage() {
    I.click(this.button.loginButton)
  }
}
