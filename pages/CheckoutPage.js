export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.elements = {
      checkoutBtn: page.locator('[data-test="checkout"]'),
      firstNameInput: page.locator('[data-test="firstName"]'),
      lastNameInput: page.locator('[data-test="lastName"]'),
      postalCodeInput: page.locator('[data-test="postalCode"]'),
      continueBtn: page.locator('[data-test="continue"]'),
      finishBtn: page.locator('[data-test="finish"]'),
      completeHeader: page.locator('.complete-header')
    };
  }

  async startCheckout() {
    await this.elements.checkoutBtn.click();
  }

  async fillCustomerInformation(firstName, lastName, postalCode) {
    await this.elements.firstNameInput.fill(firstName);
    await this.elements.lastNameInput.fill(lastName);
    await this.elements.postalCodeInput.fill(postalCode);
    await this.elements.continueBtn.click();
  }

  async finishOrder() {
    await this.elements.finishBtn.click();
  }
}