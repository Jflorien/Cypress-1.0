/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("search", () => {
    it("go to checkout", ()=> {
        //Visit homepage
       
        cy.visit("https://www.staging-uniplaces.com/accommodation/paris/483020");

cy.get('.booking-box__dates').click();
cy.get('.ember-power-calendar-day--today').click();
cy.get('.ember-power-calendar-day.ember-power-calendar-day--interactive.ember-power-calendar-day--current-month.ember-power-calendar-day--selected.ember-power-calendar-day--highlighted.ember-power-calendar-day--range-end.ember-power-calendar-day--minimum-stay.ember-power-calendar-day--last-highlighted')
.click({force: true});
cy.get('.booking-box__wrapper__container > .uni-button.uni-button--primary.uni-button--animated.uni-button.uni-button--primary.ember-view')
  .click();

});
})