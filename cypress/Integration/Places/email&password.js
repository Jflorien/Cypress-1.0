
export const generateRandomEmailAndPassword = () => {
    const randomString = Math.random().toString(36).substring(2, 8); // generates a random string of length 6
    const email = `joao.pereira+${randomString}@gmail.com`; // constructs the email using the random string
    const password = `Password1!`; // sets a static password
    cy.wait(5000);
    return { email, password };
    
  };
  