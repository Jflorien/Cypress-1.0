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
    cy.wait(2000);
   
    cy.get('.ember-power-calendar-day')
    .filter(':not(.ember-power-calendar-day--disabled)')
    .filter('.ember-power-calendar-day--interactive')
    .filter('.ember-power-calendar-day--current-month')
    .first()
    .click({ force: true });
  

    do {
      cy.get('.ember-power-calendar-day--range-end')
        .should('be.visible')
        .trigger('mouseover')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });
      cy.wait(1000);
    } while (Cypress.$('.ember-power-calendar-day--range-end').is(':visible'));
  
    cy.get('.uni-button.uni-button--primary.ember-view').each(($el) => {
      cy.wrap($el).click();
    });
    
  };
  
