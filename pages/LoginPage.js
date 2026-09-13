export class LoginPage {
  constructor(page) {
    this.page = page;

    this.elements = {
      userNameInput: page.locator('id="user-name"'),
      passwordInput: page.locator('id="password"'),
      loginButton: page.locator('id="login-button"'),
    };
  }

  async login(userName, password){
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
  }
}