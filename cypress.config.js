const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'he6d1i',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Integration/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/Integration/other/*.js}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    screenshotsFolder: "Cypress 1.0/cypress/screenshots",
    videosFolder: "Cypress 1.0/cypress/videos",
    trashAssetsBeforeRuns: true,
    video: true,
    chromeWebSecurity: false,
    experimentalWebFeatureEnabled: true,
    modifyObstructiveCode: false,
   
    onBeforeLoad(win) {
      // replace window.open with a noop function that doesn't open a new tab
      win.open = () => {};
    },
  },
});
