export const checkOut = () => {
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
        .click({ force: true });


    cy.get('.uni-dropdown__button').first()
  .click();
  cy.get('.uni-dropdown--active') // select the active dropdown
  .find('.uni-dropdown__item') // find the dropdown items
  .eq(1) // select the second item (index starts from 0)
  .click() // click on the item

cy.contains('Continue').click();
    
    cy.wait(1000);
    //Payment methods
    cy.get('input[placeholder="Write the name on the card"]')
    .type('Test Card');
    const STRIPE_IFRAME_PREFIX = '__privateStripeFrame'

const CARD_DETAILS = {
  cardNumber: '4000058260000005',
  cardExpiry: '0525',
  cardCvc: '123',
}

const getStripeIFrameDocument = () => {
  return cy.checkElementExists(`iframe[name^="${STRIPE_IFRAME_PREFIX}"]`).iframeCustom()
}

it('Can enter card payment details', () => {
  getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardNumber"]').type(CARD_DETAILS.cardNumber)
  getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardExpiry"]').type(CARD_DETAILS.cardExpiry)
  getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardCvc"]').type(CARD_DETAILS.cardCvc)
})
    cy.get('.fields__payment.fields__payment--card')
    .type('4242424242424242');

    cy.wait(1000);
       cy.get('.fields__date')
    .type('1030');
    cy.get('.fields__cvv')
    .type('799');
    cy.get('input[name="Street name"]')
    .type('rua da branca');
    cy.get('.fields__number')
        .type('256')

    cy.wait(1000);
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