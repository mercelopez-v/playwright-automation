export class ProductsPage {
  constructor(page) {
    this.page = page;

    this.elements = {
      title: '.title',
      addToCartBtn: (productSlug) => page.locator(`[data-test="add-to-cart-${productSlug}"]`),
      shoppingCartLink: page.locator('.shopping_cart_link'),
    };
  }

  async addProductToCart(productSlug) {
    await this.elements.addToCartBtn(productSlug).click();
  }
  

  async goToCart() {
    await this.elements.shoppingCartLink.click();
  }
}