import { PlaywrightTestConfig, devices, expect } from '@playwright/test'
import path from 'path'

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  reporter: [['list'], ['junit', { outputFile: './e2e/test-results/results.xml' }],
  ['monocart-reporter', {  
    name: "Todo E2E Test",
    outputFile: './e2e/test-results/report.html',
}]],
  // Timeout per test
  timeout:600000,
  // Test directory
  testDir: path.join(__dirname, '/'),
  // If a test fails, retry it additional 2 times
  retries: 2,
  maxFailures:10,
  workers:10,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: './e2e/test-results/',
  fullyParallel:true,

  use: {
    trace: 'retain-on-failure',
    baseURL: `https://todomvc.com/examples/react/dist/`,
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      fullyParallel:true,
      grep:/e2e/,
      expect:{
        timeout:10*1000,
      },
    },
  ],

  testMatch: ['*.pwspec.ts', '*.spec.ts'],
};


export default config