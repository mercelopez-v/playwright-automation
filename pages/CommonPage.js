export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
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