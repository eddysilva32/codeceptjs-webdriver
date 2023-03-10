var assert = require('assert');
var faker = require('faker');

Feature('Create User');

Scenario('Create a New Account',  async({I}) => {

    var name = faker.name.firstName();
    var password = faker.internet.password(6);
    var email = faker.internet.email();
    
    I.amOnPage('/')
    
    // home
    I.click('Cadastro')
    
    var title = await I.grabTitle()
    assert.equal(title, 'QAZANDO Shop E-Commerce')

    // create account
    I.fillField('#user', name)
    I.fillField('#email', email)
    I.fillField('#password', password)

    //I.waitForElement('', 5)

    var mainTitle = await I.grabTextFrom('//h3')
    assert.equal(mainTitle, 'Cadastro de usuário')

    I.click('#btnRegister')

    // my_account
    I.see('Cadastro realizado!')
    I.see(`Bem-vindo ${name}`)
    
}).tag('@createUser');
