export class LoginPage {
  constructor(page) {
    this.page = page;

    this.elements = {
      userNameInput: page.locator('#user-name'),
      passwordInput: page.locator('#password'),
      loginButton: page.locator('#login-button'),
    };
  }

  async login(userName, password){
    await this.elements.userNameInput.fill(userName);
    await this.elements.passwordInput.fill(password);
    await this.elements.loginButton.click();
  }
}