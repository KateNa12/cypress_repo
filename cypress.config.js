const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      },
    baseUrl: 'https://example.cypress.io',
    retries: {
      runMode: 1,
      openMode: 1
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    screenshotOnRunFailure: true
  },
});
