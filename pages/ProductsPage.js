import { expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;

    this.elements = {
      title: '.title',
      addToCartBtn: (productSlug) => page.locator(`[data-test="add-to-cart-${productSlug}"]`),
      removeFromCartBtn: (productSlug) => page.locator(`[data-test="remove-${productSlug}"]`),
      shoppingCartLink: page.locator('.shopping_cart_link'),
      cartItems: page.locator('.cart_item'),
    };
  }

  async addProductToCart(productSlug) {
    await this.elements.addToCartBtn(productSlug).click();
  }

  async removeProductFromCart(productSlug) {
    await this.elements.removeFromCartBtn(productSlug).click();
  }

  async goToCart() {
    await this.elements.shoppingCartLink.click();
  }

  async assertCartItemsCount(expectedCount) {
    await expect(this.elements.cartItems).toHaveCount(expectedCount);
  }

  async assertProductVisibleInCart(productName, shouldBeVisible) {
    const item = this.page.locator('.cart_item').filter({ hasText: productName });

    if (shouldBeVisible) {
      await expect(item).toHaveCount(1);
      return;
    }

    await expect(item).toHaveCount(0);
  }
}