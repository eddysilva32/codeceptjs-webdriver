const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
const { tr } = require('faker/lib/locales.js');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/*@type {CodeceptJS.MainConfig}*/

const server = require('./server/server.js')

exports.config = {
  name: 'automacao-codeceptjs-web',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpratice.com.br/',
      browser: 'chrome',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: [
            //"--window-size=1920,1200",
            "--headless"
          ]
        }
      }
    }
   },
  include: {
    "I": "./steps_file.js",
    "home_page": "./pages/home_page.js",
    "login_page": "./pages/login_page.js",
    "my_account_page": "./pages/my_account_page.js"
  },
  /* bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  }, */
  mocha: {
    reporterOptions: {}
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    /*autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginUser function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('/');
            I.click(
              ' Login'
              //`//a[@href='/[text()=' Login']`
              )
            I.waitForElement('#user', 10)
            I.fillField(('#user', 'ejs@cesar.org.br'))
            I.waitForElement('#password', 10)
            I.fillField('#password', secret('123456'))
            I.click('#btnLogin')
          },
          // if we see `ejs@cesar.org.br` on page, we assume we are logged in
          check: (I) => {
             I.amOnPage('/');
             I.see('ejs@cesar.org.br');
          }
        }
      }
    }*/
  }
}