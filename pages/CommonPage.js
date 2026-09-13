import { expect } from '@playwright/test';

export class CommonPage {

  constructor(page) {
    this.page = page;
  }

  //navigate
  
  async navigateTo(url) {
    await this.page.goto(url);
  }

  //Verificaction
  async assertText(selector, expectedText) {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }

//   async type(locator, text) {
//     await locator.waitFor({ state: 'visible' });
//     await locator.fill(text);
//   }

//   async click(locator) {
//     await locator.waitFor({ state: 'visible' });
//     await locator.click();
//   }

//   async getText(locator) {
//     await locator.waitFor({ state: 'visible' });
//     return await locator.innerText();
//   }
}