# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.js >> Test 3: Flujo completo de compra (SauceDemo)
- Location: tests/saucedemo.spec.js:23:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fill')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
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
  1  | export class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.elements = {
  6  |       userNameInput: page.locator('id="user-name"'),
  7  |       passwordInput: page.locator('id="password"'),
  8  |       loginButton: page.locator('id="login-button"'),
  9  |     };
  10 |   }
  11 | 
  12 |   async login(userName, password){
> 13 |     await this.userNameInput.fill(userName);
     |                              ^ TypeError: Cannot read properties of undefined (reading 'fill')
  14 |     await this.passwordInput.fill(password);
  15 |   }
  16 | }
```