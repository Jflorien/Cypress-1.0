export const homePage = () => {
    cy.get('.SearchBar_search-bar__input__VLJ5m').type('Lisbon', { delay: 100 });
    cy.get(':nth-child(2) > .Results_location-item__bQenM > button > span').click(1);
    cy.get('.date-picker').click();
    cy.wait(1000);
    cy.get('.DayPicker-Day[aria-disabled="false"]').first().click();
    cy.get('.DayPicker-Day[aria-disabled="false"]').first().parent().should('have.class', 'DayPicker-Week')
        .click({ force: true });
    cy.get('.styles__Button-sc-1qpfiqz-1').click();
    // selects the third `a` element within `div.my-container`
    cy.wait(1000);
}