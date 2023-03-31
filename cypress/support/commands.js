// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("removeTargetBlank", () => {
    cy.get("a[target='_blank']").each(($a) => {
      const href = $a.prop('href')
      if (href && href.startsWith('http')) {
        $a.removeAttr('target')
        $a.attr('rel', 'noopener noreferrer')
      }
    })
  })
  

  /* mostrar ao irineu const STRIPE_IFRAME_PREFIX = '__privateStripeFrame'

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

// cypress/support/index.ts

Cypress.Commands.add('iframeCustom', { prevSubject: 'element' }, ($iframe) => {
  return new Cypress.Promise((resolve) => {
    $iframe.ready(function () {
      resolve($iframe.contents().find('body'))
    })
  })
})

Cypress.Commands.add('checkElementExists', (selector) => {
  return cy.get(selector).should('exist').then(cy.wrap)
})
*/