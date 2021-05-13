const { config } = require("./constants")

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["pages"],
  globals_path : "nightwatch.globals.js",
  webdriver: config.webDriver,
  test_workers: {
    enabled: true,
    workers: "auto"
  },
  test_settings: {
    default: {
      selenium_host: config.seleniumHub,
      launch_url: config.url,
      filter: "tests/**/*test.js",
      screenshots:{
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "screenshots"
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless'],
          w3c: false
        },
        ['goog:chromeOptions']: {
          w3c: false,
          args: ['no-sandbox', 'disable-setuid-sandbox', 'headless', 'whitelist-ips', 'disable-dev-shm-usage']
        },
      },
      chrome: {
        desiredCapabilities: {
          browserName: 'chrome',
        },
      },
    }
  }
};
