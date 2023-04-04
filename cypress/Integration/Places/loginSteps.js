export const loginSteps = () => {
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
    const timestamp = Date.now();
    const email = `joao.pereira+${timestamp}@uniplaces.com`;
    const password = `Password1!`;
    cy.wait(1000);
    cy.get('.signup').click();
    cy.get('.AuthButton_auth-button--email__QzQAn').click();
    cy.get('[for="firstName"] > .sc-8q8tx5-0').type('Joao');
    cy.get('[for="lastName"] > .sc-8q8tx5-0').type('Pereira')
    cy.get('[for="email"] > input').type(email, { delay: 100 });
    cy.get('[for="password"] > input').type(password, { delay: 100 });
    cy.get('.Button_submit-button__xFAk_').click();
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
};
