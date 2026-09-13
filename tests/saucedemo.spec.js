import { test, expect } from '@playwright/test';
import { CommonPage } from '../pages/CommonPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import testData from '../fixtures/data.json';

test('Test 3: Flujo completo de compra (SauceDemo)', async ({ page }) => {
  const data = testData.sauceDemo;
  const login = new LoginPage(page);
  const common = new CommonPage(page);
  const products = new ProductsPage(page);
  const checkout = new CheckoutPage(page);

  // 1. Navegar a la plataforma
  await common.navigateTo(data.url);

  // 2. Iniciar sesión
  await login.login(data.user, data.password);

  // 3. Validar catálogo y agregar producto
  await common.assertText(products.elements.title,data.productsTitle)
  await products.addProductToCart(data.product1);
  await products.goToCart();

  // 4. Iniciar checkout y completar formulario
  await checkout.startCheckout();
  await checkout.fillCustomerInformation(
    data.customer.firstName,
    data.customer.lastName,
    data.customer.postalCode
  );

  // 5. Finalizar orden y validar mensaje de éxito
  await checkout.finishOrder();
  await expect(checkout.elements.completeHeader).toHaveText(data.successOrderMessage);
});