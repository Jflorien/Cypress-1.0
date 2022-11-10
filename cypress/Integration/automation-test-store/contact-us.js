/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", ()=> {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Carolina")
        cy.get('#ContactUsFrm_email').type("carolinaisabel123@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("Ganda teste pah, até parece fácil fazer isto desta maneira. Bruto")
        cy.get('.col-md-6 > .btn').click();

    });
})