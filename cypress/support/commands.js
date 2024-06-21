// Exemplo de comando personalizado
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    cy.get('#Email').clear().type(email);
    cy.get('#Password').clear().type(password);
    cy.get('.login-button').click();
  });
  