import BasePage from './BasePage';

class HomePage extends BasePage {
  get loginLink () {
    return $("a[data-qa='login']");
  }

  get registerLink () {
    return $("a[data-qa='register']");
  }

  goToLogin () {
    this.loginLink.click();
  }

  gotoRegister () {
    this.registerLink.click();
  }

  open () {
    return super.open('/');
  }
}

module.exports = new HomePage();
