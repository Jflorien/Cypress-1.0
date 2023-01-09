const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Integration/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/Integration/other/*.js}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env:{
      first_name:"Sarah"
    }
  },
});
