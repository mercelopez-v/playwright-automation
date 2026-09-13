// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Genera los datos crudos para Allure
  reporter: [
    ['line'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  use: {
    headless: false,
    
    // Evidencias automáticas adjuntas al reporte
    screenshot: 'on',
    video: 'on',
    trace: 'on',

    // Descomentá esta línea si querés que el navegador no corra tan rápido
    // launchOptions: { slowMo: 500 }
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome' 
      },
    },
  ],
});