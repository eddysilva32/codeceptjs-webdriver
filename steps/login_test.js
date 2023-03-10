var faker = require('faker');
const cpfName = require('../utils/cpf_name.js')
const soma = require('../utils/cpf_name.js')
//const home_page = require('../pages/home_page');
//const login_page = require('../pages/login_page');

const { I, home_page, login_page } = inject()

Feature('Login')

BeforeSuite( () => {
    console.log(cpfName.cpfName());
    console.log(cpfName.soma(3.1, 12.2));
})

/*Scenario('Automatic Login', async (login) => {
    await login('user')
}).tag('@autoLogin');*/

Scenario('Login successfully',  ({ I }) => {

    // home
    I.amOnPage('/')
    home_page.accessLoginPage()
    
    // login
    login_page.accessLogin(faker.internet.email(), faker.internet.password())

    // my_account
    I.see('Login realizado')
    I.click('OK') 
    
}).tag('@login');

/*Scenario('Create new account - Automation Exercise page',  async({ I }) => {

    I.amOnPage('http://automationexercise.com')

    I.click('Signup / Login')
    I.see('New User Signup!')
    
    I.fillField('name', 'Paul Simmons')
    I.fillField('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)', 'ps@cesar.org.br')
    I.click('#form > div > div > div:nth-child(3) > div > form > button')

    I.wait(5) 

    I.see('ENTER ACCOUNT INFORMATION')

    I.click('#id_gender1')
   
    I.fillField('password', secret('123456'))

    I.scrollTo('#form > div > div > div > div.login-form > form > p:nth-child(11) > label')

    I.selectOption('#days', '20')
    I.selectOption('#months', '11')
    I.selectOption('#years', '1980')

    I.fillField('#first_name', 'Paul')
    I.fillField('#last_name', 'Simmons')
    I.fillField('#address1', 'Avenida Saci Pererê, 310')

    I.selectOption('#country', 'Canada')
    I.fillField('#state', 'Quebec')
    I.fillField('#city', 'Montreal')

    I.scrollPageToBottom

    I.fillField('#zipcode', '87654321')

    I.fillField('#mobile_number', '+5551894166514')

    I.click('Create Account')

    I.see('ACCOUNT CREATED!')


});*/
