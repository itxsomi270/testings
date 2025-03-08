// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://192.168.225.170:8080/',
    // other configuration options
  },
});
