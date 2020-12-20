import LoginPage from '../../../pageobjects/login.page';
import { loginPage } from '../../../expected/login.page.expected';
import user from '../../../testData/users';
import { expect } from 'chai';
import { userMenu } from '../../../expected/userMenu.page.expected';
import UserMenu from '../../../pageobjects/user.menu';

describe('User menu. Dropdown menu items work properly for Admin', function () {
  it('Menu: Profile', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(userMenu.nameAdmin);
  });

  it('Menu: Settings', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
    UserMenu.openDropDownListAdmin();
    UserMenu.openSettings();
    browser.pause(2000);
    expect(browser.getUrl()).to.contain('profile');
  });

  it('Menu: Logout', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
    UserMenu.openDropDownListAdmin();
    UserMenu.logout();
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(loginPage.header);
  });
});

describe('User menu. Dropdown menu items work properly for Teacher', function () {
  it('Menu: Profile', function () {
    LoginPage.open();
    LoginPage.login(user.teacher.email, user.teacher.password);
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(userMenu.nameTeacher);
  });

  it('Menu: Settings', function () {
    LoginPage.open();
    LoginPage.login(user.teacher.email, user.teacher.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.openSettings();
    browser.pause(2000);
    expect(browser.getUrl()).to.contain('profile');
  });

  it('Menu: Logout', function () {
    LoginPage.open();
    LoginPage.login(user.teacher.email, user.teacher.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.logout();
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(loginPage.header);
  });
});

describe('User menu. Dropdown menu items work properly for Learner', function () {
  it('Menu: Profile', function () {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(userMenu.nameLearner);
  });

  it('Menu: Settings', function () {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.openSettings();
    browser.pause(2000);
    expect(browser.getUrl()).to.contain('profile');
  });

  it('Menu: Logout', function () {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.logout();
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(loginPage.header);
  });
});

describe('User menu. Dropdown menu items work properly for Student', function () {
  it('Menu: Profile', function () {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(userMenu.nameStudent);
  });

  it('Menu: Settings', function () {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.openSettings();
    browser.pause(2000);
    expect(browser.getUrl()).to.contain('profile');
  });

  it('Menu: Logout', function () {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.logout();
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(loginPage.header);
  });
});

describe('User menu. Dropdown menu items work properly for New', function () {
  it('Menu: Profile', function () {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(userMenu.nameNew);
  });

  it('Menu: Settings', function () {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.openSettings();
    browser.pause(2000);
    expect(browser.getUrl()).to.contain('profile');
  });

  it('Menu: Logout', function () {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    browser.pause(2000);
    UserMenu.openDropDownList();
    UserMenu.logout();
    browser.pause(2000);
    expect(LoginPage.header.getAttribute('innerText')).to.be.equal(loginPage.header);
  });
});
