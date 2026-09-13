import { test, expect } from '@playwright/test';
import { CommonPage } from '../pages/CommonPage';
import { LoginPage } from '../pages/LoginPage';
import testData from '../fixtures/data.json';

test('Test 3: Flujo completo de compra (SauceDemo)', async ({ page }) => {
  const data = testData.sauceDemo;
  const login = new LoginPage(page);
  const common = new CommonPage(page);

  // 1. Navegar a la plataforma
  await common.navigateTo(data.url)

  // 2. Iniciar sesión usando credenciales del data.json
  await login.login(data.user,data.password)

  // 3. Validar que ingresó al catálogo
  await expect(page.locator('.title')).toHaveText(data.productsTitle);

  // 4. Agregar producto al carrito y continuar al checkout
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  // 5. Completar datos del cliente desde data.json
  await page.fill('[data-test="firstName"]', data.customer.firstName);
  await page.fill('[data-test="lastName"]', data.customer.lastName);
  await page.fill('[data-test="postalCode"]', data.customer.postalCode);
  await page.click('[data-test="continue"]');

  // 6. Confirmar la compra y validar mensaje final
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toHaveText(data.successMessage);
});