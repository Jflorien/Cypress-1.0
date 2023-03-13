Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe('Happy Path', function () {
    it('Visit Uniplaces', function () {
    /*go to search routing the cookie
    beforeEach(() => {
      // set the cookie based on the test variant
      if (Cypress.env('testVariant') === 'A') {
        cy.setCookie('search-revamp-mvt-3', '0')
      } else if (Cypress.env('testVariant') === 'B') {
        cy.setCookie('search-revamp-mvt-3', '1')
      }*/
  
      // visit the page and click login
    cy.visit('https://www.staging-uniplaces.com')
      
     
    cy.wait(1000);
    cy.get('.login').click(1); 
    cy.get('[for="email"] > input').type("joao.pereira+qa@uniplaces.com", { delay: 100 }); 
    cy.get('[for="password"] > input').type("123456", { delay: 100 }); 
    cy.get('.Button_submit-button__xFAk_').click(1); 
    cy.wait(1000);
      // search for a city and select a date
    cy.get('.SearchBar_search-bar__input__VLJ5m').type('Lisbon', { delay: 100 }); 
    cy.get(':nth-child(2) > .Results_location-item__bQenM > button > span').click(1); 
    cy.get('.date-picker').click();
    cy.wait(1000);
    cy.get('.DayPicker-Day[aria-disabled="false"]').first().click();
    cy.get('.DayPicker-Day[aria-disabled="false"]').first().parent().should('have.class', 'DayPicker-Week')
      .click({force: true});
    cy.get('.styles__Button-sc-1qpfiqz-1').click();   
   // selects the third `a` element within `div.my-container`
    cy.wait(1000) ;
    cy.get('a').each(($a) => {
      const href = $a.prop('href');
      if (href && href.startsWith('http') && href.includes('target=_blank')) {
        $a.removeAttr('target');
        $a.attr('rel', 'noopener noreferrer');
        cy.visit(href);
      }
    });
    cy.window().then((win) => {
      const orig = win.open
    
      win.open = function (url, target, features) {
        return orig.call(this, url, '_self', features)
      }
    })
    cy.wait(1000);
    cy.get('div.sc-gafju0-0 a:nth-child(3)')
      .should('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    
  //Inside the offer page
  cy.wait(1000);
  /*cy.get('.optanon-button-allow > .optanon-alert-box-button-middle').click();
  cy.wait(1000);*/
  cy.get('.booking-box__dates').click();
  cy.get('.ember-power-calendar-day--today').click();
  cy.get('.ember-power-calendar-day.ember-power-calendar-day--interactive.ember-power-calendar-day--current-month.ember-power-calendar-day--selected.ember-power-calendar-day--highlighted.ember-power-calendar-day--range-end.ember-power-calendar-day--minimum-stay.ember-power-calendar-day--last-highlighted')
  .click({force: true});
  cy.get('.booking-box__wrapper__container > .uni-button.uni-button--primary.uni-button--animated.uni-button.uni-button--primary.ember-view')
    .click();

  



  
    
  

      })
    })