# Cypress_Cucumber_BDD
Cypress com Cucumber - Testes Automatizados
Este projeto utiliza Cypress em conjunto com Cucumber para realizar testes automatizados em uma aplicação web. O Cypress é um framework de testes end-to-end que permite escrever, executar e depurar testes de forma fácil e eficaz. Cucumber é utilizado para escrever os testes em linguagem Gherkin, facilitando a colaboração entre equipes técnicas e não técnicas.

Pré-requisitos
Certifique-se de ter o Node.js e o npm (ou yarn) instalados em seu ambiente de desenvolvimento.

Node.js: Download Node.js
npm (gerenciador de pacotes do Node.js) ou yarn (alternativa ao npm): npm ou yarn
Instalação
Clone o repositório para sua máquina local:

bash
Copiar código
git clone https://seu-repositorio.git
cd seu-projeto
Instale as dependências do projeto:

bash
Copiar código
npm install
# ou usando yarn
yarn install
Executando os Testes
Para executar os testes, utilize um dos seguintes comandos:

bash
Copiar código
# Executar testes em modo headless (sem interface gráfica)
npm run cypress:run

# Abrir a interface gráfica do Cypress para executar testes interativamente
npm run cypress:open
Estrutura do Projeto
cypress/integration: Contém os arquivos de especificação dos testes escritos em Cucumber (.feature files).
cypress/support: Contém arquivos de suporte do Cypress, como comandos customizados e configurações.
cypress/plugins: Contém arquivos de configuração de plugins do Cypress.
Configuração
O projeto está configurado para usar o cypress-cucumber-preprocessor para executar arquivos .feature escritos em Cucumber. A configuração pode ser encontrada em cypress/config/cypress.config.js.

Exemplo de Teste
Aqui está um exemplo simples de teste escrito em Cucumber e Cypress:

gherkin
Copiar código
Feature: Login

Scenario: Successful Login
  Given I'm on the login page
  When I enter my registered email and password
  And I click the login button
  Then I should be logged into my account successfully
javascript
Copiar código
// Arquivo de steps para o cenário acima
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I'm on the login page", () => {
  cy.visit('https://admin-demo.nopcommerce.com/login');
});

When("I enter my registered email and password", () => {
  cy.get('#Email').clear().type('admin@yourstore.com');
  cy.get('#Password').clear().type('admin');
});

When("I click the login button", () => {
  cy.get('.login-button').click();
});

Then("I should be logged into my account successfully", () => {
  cy.url().should('include', '/admin');
  cy.get('.content-header').contains('Dashboard').should('be.visible');
});
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir pull requests ou issues para melhorias no projeto.

Licença
Este projeto está licenciado sob a Licença ISC.
