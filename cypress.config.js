const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: 'cypress/support/e2e.js', // Atualize para apontar para o arquivo de suporte
  },
});