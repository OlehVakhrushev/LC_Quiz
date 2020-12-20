import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import CoursesPage from '../../../pageobjects/coursesPage';
import { coursesPage } from '../../../expected/courses.page.expected';
import { expect } from 'chai';

describe('Open JS Practice Course', function () {
  it('Happy path', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(3000);
    CoursesPage.openCourse();
    browser.pause(3000);
    CoursesPage.chooseCourse();
    expect(CoursesPage.jsPracticeName.getAttribute('innerText')).to.be.equal(coursesPage.jsPractice);
  });
});
