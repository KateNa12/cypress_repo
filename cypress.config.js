const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      },
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    // retries: {
    //   runMode: 1,
    //   openMode: 1
    // },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    screenshotOnRunFailure: true
  },
});
