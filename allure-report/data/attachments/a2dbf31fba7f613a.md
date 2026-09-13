# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.js >> Test 3: Flujo completo de compra (SauceDemo)
- Location: tests/saucedemo.spec.js:23:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]: standard_user
      - textbox "Password" [active] [ref=e13]: secret_sauce
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | export class CommonPage {
  2  | 
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |   }
  6  | 
  7  |   //navigate
  8  |   
  9  |   async navigateTo(url) {
  10 |     await this.page.goto(url);
  11 |   }
  12 | 
  13 |   //Verificaction
  14 |   async assertText(selector, expectedText) {
> 15 |     await expect(selector).toHaveText(expectedText);
     |     ^ ReferenceError: expect is not defined
  16 |   }
  17 | 
  18 | //   async type(locator, text) {
  19 | //     await locator.waitFor({ state: 'visible' });
  20 | //     await locator.fill(text);
  21 | //   }
  22 | 
  23 | //   async click(locator) {
  24 | //     await locator.waitFor({ state: 'visible' });
  25 | //     await locator.click();
  26 | //   }
  27 | 
  28 | //   async getText(locator) {
  29 | //     await locator.waitFor({ state: 'visible' });
  30 | //     return await locator.innerText();
  31 | //   }
  32 | }
```