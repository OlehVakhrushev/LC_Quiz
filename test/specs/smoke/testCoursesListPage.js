import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import CoursesListPage from '../../../pageobjects/coursesListPage';
import { coursesPage } from '../../../expected/courses.page.expected';
import { expect } from 'chai';

describe('Open JS Practice Course', function () {
  it('Happy path', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(3000);
    CoursesListPage.openCourse();
    browser.pause(3000);
    CoursesListPage.chooseCourse();
    expect(CoursesListPage.jsPracticeName.getAttribute('innerText')).to.be.equal(coursesPage.jsPractice);
  });
});
