class LoginPage{

    getLocationTo(){
        return cy.get('#search-from').type('Khulna');
    }

    clickOnCrossButton(){
        return cy.xpath('//*[@id="__PWS_ROOT__"]/div[1]/div/div/main/div[1]/div[1]/div[2]/div[2]/button/div').click();
    }

    enterUserEmail(){
        return cy.xpath('//*[@id="email"]').type("miraz.qups@gmail.com");
    }

    enterUserPass(){
        return cy.xpath('//*[@id="password"]')
    }

    clickOnLogin(){
        return cy.xpath('//*[@id="__PWS_ROOT__"]/div[1]/div/div/main/div[1]/div[2]/div[2]/div/div/div/div/div/div/div/div[4]/form/div[5]/button').click();
    }



}

export default LoginPage;
