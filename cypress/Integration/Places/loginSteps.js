export const loginSteps = () => {
    const randomString = Math.random().toString(36).substring(2, 8); // generates a random string of length 6
    const email = `joao.pereira+${randomString}@uniplaces.com`; // constructs the email using the random string
    const password = `Password1!`; // sets a static password
    
    cy.wait(1000);
    cy.get('.signup').click();
    cy.get('.AuthButton_auth-button--email__QzQAn').click();
    cy.get('[for="firstName"] > .sc-8q8tx5-0').type('Joao');
    cy.get('[for="lastName"] > .sc-8q8tx5-0').type('Pereira')
    cy.get('[for="email"] > input').type(email, { delay: 100 });
    cy.get('[for="password"] > input').type(password, { delay: 100 });
    cy.get('.Button_submit-button__xFAk_').click();
    cy.wait(5000);
};
