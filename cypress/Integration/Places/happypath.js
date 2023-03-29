import { checkOut } from './checkout';
import { homePage } from './homePage';
import { loginSteps } from './loginSteps';
import { offerageSteps } from './offerPage';
import { search } from './search';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Happy Path', function () {
    it('Booking Flow complete', function () {
        cy.visit('https://www.staging-uniplaces.com')
        //loginSteps()
        homePage()
        search()
        offerageSteps()
        checkOut()
    })
})