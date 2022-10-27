require('ts-node/register')
require('dotenv').config({ path: './config/.env' })


exports.config = {
  output: './Reports/e2e',
  helpers: {
    WebDriver: {
      url: process.env.url,
      browser: 'chrome',
      host: 'localhost',
      windowSize: 'maximize',
      smartWait: 5000,
      restart: true,
      keepCookies: true,
      keepBrowserState: true,
      waitForTimeout: 30000,
      desiredCapabilities: {
        chromeOptions: {
          prefs: {
            'profile.managed_default_content_settings.popups': 1,
            'profile.managed_default_content_settings.notifications': 1,
            "profile.content_settings.exceptions.clipboard": {
              '*':
              {
                "expiration": "0",
                "last_modified": Date.now(),
                "model": 0,
                "setting": 1
              },
            }
          }
        },
      },
    },
    AssertWrapper: {
      "require": "codeceptjs-assert"
    },
    Mochawesome: {
      uniqueScreenshotNames: true,
    }
  },
  include: {},
  mocha: {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
            "verbose": false,
            "steps": true
        }
    },
      "mochawesome": {
        "stdout": "./output/console.log",
        "options": {
          "reportDir": "./Reports/e2e",
          "reportFilename": "e2e-html"
        }
      }
    }
  },
  timeouts: 240,
  gherkin: {
    features:'./tests/features/bdd/**/OverviewPage.feature',
    steps: './src/steps/*.ts'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
       enabled: true,
       services: ['selenium-standalone']
    },
  },
  name: 'Abbott-E2E-UITests',
}


