import Login from "../utils/locators.cy"

const locator = new Login();

class LoginPage{


    clickOnLoginButton(){
        return cy.get(locator.clickLoginBtn);
    }

    enterUserEmail(){
        return cy.xpath(locator.email);
    }

    enterUserPass(){
        return cy.xpath(locator.pass);
    }

    clickOnLogin(){
        return cy.get(locator.clickLogin);
    }



}

export default LoginPage;
