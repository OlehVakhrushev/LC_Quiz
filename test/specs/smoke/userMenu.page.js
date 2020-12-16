import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import { expect } from 'chai';
import { userMenu } from '../../../expected/userMenu.page.expected';
const sel = require('../../../testData/selectors.json');

describe('User menu. First and Last name should present in the top of the right corner', function () {
  it('Admin First and Last name', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
    expect($$(sel.userMenu)[1].getAttribute('innerText')).to.be.equal(userMenu.nameAdmin);
  });
  it('Student First and Last name', function () {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    browser.pause(2000);
    expect($(sel.userMenu).getAttribute('innerText')).to.be.equal(userMenu.nameStudent);
  });
  it('New First and Last name', function () {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    browser.pause(2000);
    browser.pause(2000);
    expect($(sel.userMenu).getAttribute('innerText')).to.be.equal(userMenu.nameNew);
  });
  it('Learner First and Last name', function () {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    browser.pause(2000);
    expect($(sel.userMenu).getAttribute('innerText')).to.be.equal(userMenu.nameLearner);
  });
  it('Teacher First and Last name', function () {
    LoginPage.open();
    LoginPage.login(user.teacher.email, user.teacher.password);
    browser.pause(2000);
    expect($(sel.userMenu).getAttribute('innerText')).to.be.equal(userMenu.nameTeacher);
  });
});

describe('User menu. Every Menu item from the drop down box should redirect user to the correct page', function () {
  it('Menu item Profile should redirect to the profile page for Admin', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
    $$(sel.userMenu)[1].click();
    $$(sel.menuItem)[0].click();
    expect(LoginPage.headerLogin.getAttribute('innerText')).to.be.equal(userMenu.nameAdmin);
  });
  it('Menu item Profile should redirect to the profile page for Student', function () {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    browser.pause(2000);
    $(sel.userMenu).click();
    $$(sel.menuItem)[0].click();
    expect(LoginPage.headerLogin.getAttribute('innerText')).to.be.equal(userMenu.nameStudent);
  });
  it('Menu item Profile should redirect to the profile page for Teacher', function () {
    LoginPage.open();
    LoginPage.login(user.teacher.email, user.teacher.password);
    browser.pause(2000);
    $(sel.userMenu).click();
    $$(sel.menuItem)[0].click();
    expect(LoginPage.headerLogin.getAttribute('innerText')).to.be.equal(userMenu.nameTeacher);
  });
});
