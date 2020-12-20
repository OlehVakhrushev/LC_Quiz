import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import { expect } from 'chai';
import { userMenu } from '../../../expected/userMenu.page.expected';
import UserMenu from '../../../pageobjects/user.menu.js';

describe('User menu. First and Last name should present in the top of the right corner', function () {
  it('Admin First and Last name', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
    expect((UserMenu.userMenu)[1].getAttribute('innerText')).to.be.equal(userMenu.nameAdmin);
  });
});
