/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("Visit Uniplaces Homepage", () => {
    it("Should be able to visit the page and search for a city", ()=> {
        //Visit homepage
       
        cy.visit("https://www.uniplaces.com/");
        cy.get('.SearchBar_search-bar__input__VLJ5m').click().type("lisbon")
        cy.get('.styles__Button-sc-1qpfiqz-1').click()
        
    });
})