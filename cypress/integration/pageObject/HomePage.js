class HomePage{

    getLocationTo(){
        return cy.get('#search-from').type('Khulna');
    }



}

export default HomePage;
