import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I'm on the login page", () => {
  cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
});

When("I enter my registered email and password", () => {
  cy.get('#Email').clear().type('admin@yourstore.com');
  cy.get('#Password').clear().type('admin');
});

And("I click the login button", () => {
  cy.get('.login-button').click();
});

Then("I should be logged into my account successfully", () => {
  cy.url().should('include', '/admin'); // Verifica se a URL mudou para /admin, indicando que o login foi bem-sucedido
  cy.get('.content-header').contains('Dashboard').should('be.visible'); // Verifica se o elemento com classe content-header contém o texto "Dashboard" e está visível
});
