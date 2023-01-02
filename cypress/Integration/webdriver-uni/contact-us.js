/// <reference types="Cypress" />

describe("Test Contact Us form via webdriveruni", () => {
    it.only("Should be able to submit a successful submission via contact us form", ()=> {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("João")
        cy.get('[name="last_name"]').type("Pereira")
        cy.get('[name="email"]').type("joaordmp@gmail.com")
        cy.get('textarea.feedback-input').type("Isto foi feito automaticamente")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text' , 'Thank You for your Message!' )
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are  required", ()=> {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Carolina")
        cy.get('[name="last_name"]').type("Pereira")
        cy.get('textarea.feedback-input').type("Isto foi feito automaticamente")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})

