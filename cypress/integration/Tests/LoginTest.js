///<reference types = "cypress" />

import LoginPage from '../pages/LoginPage'

describe('My first suite',()=>{

    before(function() {

        cy.visit('https://www.pinterest.com/');
        cy.fixture('value').then(function(data){
            this.data = data
        })
    })

    it('Pinterest Login test',function(){

        const loginPage = new LoginPage();
        
        loginPage.clickOnLoginButton().click();
        loginPage.enterUserEmail().type(this.data.email);
        loginPage.enterUserPass().type(this.data.pass);
        loginPage.clickOnLogin().click();

    })


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


})