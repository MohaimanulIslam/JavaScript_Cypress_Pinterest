import Login from "../utils/locators"

const locator = new Login();

class LoginPage{


    clickOnLoginButton(){
        return cy.xpath(locator.clickLoginBtn);
    }

    enterUserEmail(){
        return cy.xpath(locator.email);
    }

    enterUserPass(){
        return cy.xpath(locator.pass);
    }

    clickOnLogin(){
        return cy.xpath(locator.clickLogin);
    }



}

export default LoginPage;
