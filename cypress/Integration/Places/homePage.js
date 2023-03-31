export const homePage = () => {

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
    cy.get('.SearchBar_search-bar__input__VLJ5m').should('be.visible')
    cy.get('.SearchBar_search-bar__input__VLJ5m').type('Lisbon', { delay: 100 });
    cy.get(':nth-child(2) > .Results_location-item__bQenM > button > span').click(1);
    cy.get('.date-picker').click();
    cy.wait(1000);
    cy.get('.DayPicker-Body')
        .find('.DayPicker-Week [aria-disabled="false"]')
        .first()
        .trigger('mouseover')
        .click({ force: true });
    cy.wait(1000);
    cy.get('.styles__Button-sc-1qpfiqz-1').click();
    cy.wait(1000);
}
