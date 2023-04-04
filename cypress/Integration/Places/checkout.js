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
    cy.get('.__PrivateStripeElement > iframe').then($element => {
        const $body = $element.contents().find('body')
        let stripe = cy.wrap($body)
        stripe.find('input[data-elements-stable-field-name="cardNumber"]').eq(0).click().type('4242424242424242')
        stripe = cy.wrap($body)
        stripe.find('input[data-elements-stable-field-name="cardExpiry"]').eq(0).click().type('4242')
        stripe = cy.wrap($body)
        stripe.find('input[data-elements-stable-field-name="cardCvc"]').eq(0).click().type('424')
    })
    cy.wait(1000);
    cy.get('.fields__street')
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
    cy.get('ul.options li')
        .contains('Portugal')
        .should('be.visible')
        .click({ force: true });
    //request booking
    cy.contains('Send booking request').click();
    cy.wait(5000);
    cy.url().should('match', /booking-request\/success\/(\d+)/)
        .then((url) => {
            const match = url.match(/booking-request\/success\/(\d+)/)
            const bookingNumber = match[1]
            cy.wrap(bookingNumber).as('bookingNumber') // Store the booking number in an alias
        })
};