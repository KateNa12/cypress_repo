const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      },
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    // retries: {
    //   runMode: 1,
    //   openMode: 1
    // },
    reporter: 'cypress-mochawesome-reporter',
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    screenshotOnRunFailure: true,
    env: {
      MAIN_USER_EMAIL: "kateryna.naimark+2@gmail.com",
      MAIN_USER_PASSWORD: "Kn1234567",
     }
  },
});
