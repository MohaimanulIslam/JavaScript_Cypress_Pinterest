///<reference types = "cypress" />

import LoginPage from '../pages/LoginPage'

describe('My first suite',()=>{

    it('Pinterest Login test',()=>{

        const loginPage = new LoginPage;

        cy.visit('https://www.pinterest.com/');
        loginPage.clickOnCrossButton();
        loginPage.enterUserEmail();
        loginPage.enterUserPass().type("maraz")
        loginPage.clickOnLogin();

    })


})