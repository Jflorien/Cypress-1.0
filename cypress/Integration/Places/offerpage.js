export const offerageSteps = () => {
    cy.wait(10000);
    cy.get('.uni-button.uni-button--primary.ember-view').click();
    cy.wait(1000);
    cy.get('.ember-power-calendar-day--today').click({ force: true });
    cy.wait(1000);
  
    // click on range end date until it is no longer visible
    do {
      cy.get('.ember-power-calendar-day--range-end')
        .should('be.visible')
        .trigger('mouseover')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });
      cy.wait(1000);
    } while (Cypress.$('.ember-power-calendar-day--range-end').is(':visible'));
  
    cy.get('.uni-button.uni-button--primary.ember-view').click({ multiple: true });
  };
  