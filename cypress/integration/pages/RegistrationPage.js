class RegistrationPage{

    clickOnSignUp(){
        return cy.xpath('//*[@id="__PWS_ROOT__"]/div[1]/div/div/main/div[1]/div[1]/div[2]/div[3]/button/div/div').click();
    }

    enterUserEmail(){
        return cy.xpath('//*[@id="email"]').type("miraz.qups@gmail.com");
    }

    enterUserPass(){
        return cy.xpath('//*[@id="password"]');
    }

    enterAge(){
        return cy.xpath('//*[@id="age"]');
    }

    clickOnContinue(){
        return cy.xpath('//*[@id="__PWS_ROOT__"]/div[1]/div/div/main/div[1]/div[2]/div[2]/div/div/div/div/div/div/div[1]/div[5]/div/div[1]/form/div[5]/button').click();
    }



}

export default RegistrationPage;
