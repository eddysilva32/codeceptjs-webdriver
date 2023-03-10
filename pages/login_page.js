const { I } = inject();

module.exports = {

  fields: {
    emailLoginField: '#user',
    passwordLoginField: '#password'
  },

  button: {
    LoginButton: '#btnLogin'
  },

  messages: {

  },

  accessLogin(email, password) {
    I.fillField(this.fields.emailLoginField, email)
    I.fillField(this.fields.passwordLoginField, password)
    I.click(this.button.LoginButton)
  }

}
