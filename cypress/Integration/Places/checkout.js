export const checkOut = () =>
{
    cy.wait(5000);
    // Click on the element repeatedly until it is no longer visible
   cy.get('.uni-button.uni-button--secondary')
   .click();
    cy.wait(1000);
    cy.get('select')
    .select(1);
    cy.get('input[placeholder="No spaces or dashes"]').type('968669142');
    cy.get('input[placeholder="DD/MM/YYYY"]').type('23081991');
        cy.get('.uni-multi-selector.ember-view').within(() => {
        cy.contains('F').click();
      });
      cy.get('input[placeholder="Type your country"]').type('Portugal')
      cy.get('ul.options li')
  .contains('Portugal')
  .should('be.visible')
  .click();
;
      cy.get('.uni-dropdown__button').click();
      cy.contains('Postgraduate').click();
      cy.get('.uni-button.uni-button--secondary')
      .click();
      
cy.wait(1000);
//Payment methods
cy.get('.uni-input.uni-input--bordered.uni-input--small.ember-text-field.ember-view')
    .type('Test Card');
    cy.wait(1000);
cy.get('.uni-input.uni-input--bordered.StripeElement.StripeElement--empty')
    .type('4242424242424242');
    cy.wait(1000);
cy.get('.fields__date')
    .type(1030);//this date is 10/30 so i need to change it in the future or found a way to calculate random dates after this month
    cy.wait(1000);
cy.get('.fields__cvv')
    .type('799');
    cy.wait(1000);

//billing adress
cy.get('.fields__street')
    .type('Rua da Branca');
cy.get('.fields__number')
    .type('69');
cy.get('.fields__city')
    .type('Abrantes');
cy.get('.fields__postal')
    .type('2200');
cy.get('.fields__country')
    .type('Portugal')

//request booking
cy.get('.uni-button.uni-button--primary.ember-view')
    .click();
};