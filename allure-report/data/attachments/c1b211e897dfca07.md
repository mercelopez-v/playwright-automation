# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.js >> Test 3: Flujo completo de compra (SauceDemo)
- Location: tests/saucedemo.spec.js:23:5

# Error details

```
TypeError: _CommonPage.CommonPage is not a constructor
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { CommonPage } from '../pages/CommonPage';
  3  | import { LoginPage } from '../pages/LoginPage';
  4  | import testData from '../fixtures/data.json';
  5  | 
  6  | const elements = {
  7  | 
  8  |   // Inventory / Home
  9  |   title: '.title',
  10 |   addToCartBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
  11 |   shoppingCartLink: '.shopping_cart_link',
  12 | 
  13 |   // Checkout
  14 |   checkoutButton: '[data-test="checkout"]',
  15 |   firstNameInput: '[data-test="firstName"]',
  16 |   lastNameInput: '[data-test="lastName"]',
  17 |   postalCodeInput: '[data-test="postalCode"]',
  18 |   continueButton: '[data-test="continue"]',
  19 |   finishButton: '[data-test="finish"]',
  20 |   completeHeader: '.complete-header'
  21 | };
  22 | 
  23 | test('Test 3: Flujo completo de compra (SauceDemo)', async ({ page }) => {
  24 |   const data = testData.sauceDemo;
  25 |   const login = new LoginPage(page);
> 26 |   const common = new CommonPage(page);
     |                  ^ TypeError: _CommonPage.CommonPage is not a constructor
  27 | 
  28 |   // 1. Navegar a la plataforma
  29 |   await common.navigateTo(data.url)
  30 | 
  31 |   // 2. Iniciar sesión usando credenciales del data.json
  32 |   await login.login(data.user,data.password)
  33 | 
  34 |   // 3. Validar que ingresó al catálogo
  35 |   await common.assertText(elements.title,data.productsTitle)
  36 | 
  37 |   // 4. Agregar producto al carrito y continuar al checkout
  38 |   await page.click(elements.addToCartBackpack)
  39 |   await page.click(elements.shoppingCartLink);
  40 |   await page.click(elements.checkoutButton);
  41 | 
  42 |   // 5. Completar datos del cliente desde data.json
  43 |   await page.fill(elements.firstNameInput, data.customer.firstName);
  44 |   await page.fill(elements.lastNameInput, data.customer.lastName);
  45 |   await page.fill(elements.postalCodeInput, data.customer.postalCode);
  46 |   await page.click(elements.continueButton);
  47 | 
  48 |   // 6. Confirmar la compra y validar mensaje final
  49 |   await page.click(elements.finishButton);
  50 |   await common.assertText(elements.completeHeader,data.successOrderMessage)
  51 | });
```