export const offerageSteps = () => {
  cy.window().then((win) => {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (win.performance.timing.loadEventEnd > 0) {
          clearInterval(intervalId)
          resolve()
        }
      }, 100)
    })
  })
  cy.get('.uni-button.uni-button--primary.ember-view').should('be.visible')
  
    cy.get('.uni-button.uni-button--primary.ember-view').click();
    cy.wait(1000);
    cy.get('.ember-power-calendar-day--today').click({ force: true });
    cy.wait(1000);
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
  