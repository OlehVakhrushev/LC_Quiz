import LoginPage from '../../../pageobjects/login.page';
import TopMenu from '../../../pageobjects/top.menu';
import roles from '../../../testData/users';
import CoursesListPage from '../../../pageobjects/coursesListPage';
import LessonPage from '../../../pageobjects/lesson.page';
import { lessonPageExpected } from '../../../expected/lesson.page.expected';
import { expect } from 'chai';

describe('user with any role has access to Modul Quiz', function () {
  /* it('Admin should have access to Quiz', function () {
    LoginPage.open();
    LoginPage.login(roles.admin.email, roles.admin.password);
    TopMenu.openCourses();
    CoursesListPage.chooseCourseSyntax();
    browser.pause(1000);
    LessonPage.openLessonOkurse();
    expect(LessonPage.quizTitle.getAttribute('innerText')).to.be.equal(lessonPageExpected.quizTitle);
  }); */
 /* it('Student should have access to Quiz', function () {
    LoginPage.open();
    LoginPage.login(roles.student.email, roles.student.password);
    TopMenu.openCourses();
    CoursesListPage.chooseCourseSyntax();
    browser.pause(1000);
    LessonPage.openLessonOkurse();
    browser.pause(4000);
    expect(LessonPage.quizTitle.getAttribute('innerText')).to.be.equal(lessonPageExpected.quizTitle);
  });
  it('Teacher should have access to Quiz', function () {
    LoginPage.open();
    LoginPage.login(roles.teacher.email, roles.teacher.password);
    TopMenu.openCourses();
    CoursesListPage.chooseCourseSyntax();
    browser.pause(1000);
    LessonPage.openLessonOkurse();
    expect(LessonPage.quizTitle.getAttribute('innerText')).to.be.equal(lessonPageExpected.quizTitle);
  });*/
  it('User with status "New" should NOT have access to Quiz', function () {
    LoginPage.open();
    LoginPage.login(roles.new.email, roles.new.password);
    TopMenu.openCourses();

  });
  /*it('Learner should have access to JS Syntax Quiz only', function () {
    LoginPage.open();
    LoginPage.login(roles.learner.email, roles.learner.password);
    TopMenu.openCourses();
    CoursesListPage.chooseCourseSyntax();
    browser.pause(1000);
    LessonPage.openLessonOkurse();
    expect(LessonPage.quizTitle.getAttribute('innerText')).to.be.equal(lessonPageExpected.quizTitle);
  });*/
});
