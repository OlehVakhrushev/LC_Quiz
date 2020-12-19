import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import { loginPage } from '../../../expected/login.page.expected';
import { expect } from 'chai';
import TopMenu from '../../../pageobjects/top.menu';

describe('LOGIN', function () {
  it('General check', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
    expect(LoginPage.headerLogin.getAttribute('innerText')).to.be.equal(loginPage.header);
  });
});
