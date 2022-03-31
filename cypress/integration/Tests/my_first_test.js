///<reference types = "cypress" />

import HomePage from '../pageObject/HomePage'

describe('My first suite',()=>{

    it('google test',()=>{

        const homePage = new HomePage;

        cy.visit('https://www.rome2rio.com/');

        homePage.getLocationTo()
        
    
    })


})



