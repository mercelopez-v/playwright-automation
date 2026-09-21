import { test, expect } from '@playwright/test';
import { CommonPage } from '../pages/CommonPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import testData from '../fixtures/data.json';

const buildSauceDemoContext = (page) => {
  const data = testData.sauceDemo;

  return {
    data,
    login: new LoginPage(page),
    common: new CommonPage(page),
    products: new ProductsPage(page),
    checkout: new CheckoutPage(page),
  };
};

test.beforeEach(async ({ page }) => {
  const sauce = buildSauceDemoContext(page);

  await sauce.common.navigateTo(sauce.data.url);
  await sauce.login.login(sauce.data.user, sauce.data.password);
});

test('Test 3: Flujo completo de compra (SauceDemo)', async ({ page }) => {
  const sauce = buildSauceDemoContext(page);

  await sauce.common.assertText(sauce.products.elements.title, sauce.data.productsTitle);
  await sauce.products.addProductToCart(sauce.data.product1);
  await sauce.products.goToCart();

  await sauce.checkout.startCheckout();
  await sauce.checkout.fillCustomerInformation(
    sauce.data.customer.firstName,
    sauce.data.customer.lastName,
    sauce.data.customer.postalCode
  );

  await sauce.checkout.finishOrder();
  await expect(sauce.checkout.elements.completeHeader).toHaveText(sauce.data.successOrderMessage);
});

test('Test 4: Agregar product1, product2 y product3 y remover product3 del carrito (SauceDemo)', async ({ page }) => {
  const sauce = buildSauceDemoContext(page);

  await sauce.common.assertText(sauce.products.elements.title, sauce.data.productsTitle);

  await sauce.products.addProductToCart(sauce.data.product1);
  await sauce.products.addProductToCart(sauce.data.product2);
  await sauce.products.addProductToCart(sauce.data.product3);

  await sauce.products.goToCart();
  await sauce.products.assertCartItemsCount(3);

  await sauce.products.removeProductFromCart(sauce.data.product3);
  await sauce.products.assertCartItemsCount(2);
  await sauce.products.assertProductVisibleInCart(sauce.data.productNames[sauce.data.product3], false);
});