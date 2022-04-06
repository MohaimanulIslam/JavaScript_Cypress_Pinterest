///<reference types = "cypress-xpath"/>

import RegistrationPage from '../pages/RegistrationPage'

describe('My first suite',()=>{

    before(function() {

        cy.visit('https://www.pinterest.com/');
        cy.fixture('value').then(function(data){
            this.data = data
        })
    })

    it('Pinterest Registration test',function(){

        const regPage = new RegistrationPage;
        
        regPage.clickOnSignUp();
        regPage.enterUserEmail();
        regPage.enterUserPass().type(this.data.pass)
        regPage.enterAge().type(this.data.age)
        regPage.clickOnContinue();

    })


})