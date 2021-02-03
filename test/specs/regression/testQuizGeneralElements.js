import LoginPage from '../../../pageobjects/login.page';
import TopMenu from '../../../pageobjects/top.menu';
import roles from '../../../testData/users';
import CoursesListPage from '../../../pageobjects/coursesListPage';
import LessonPage from '../../../pageobjects/lesson.page';
import { lessonPageExpected } from '../../../expected/lesson.page.expected';
import { expect } from 'chai';
import CoursePage from '../../../pageobjects/course.page';
import { coursesPage } from '../../../expected/courses.page.expected';

describe('user has access to a concrete parts of the app according to his specific role', function () {
/*   it('Admin should have access to Quiz', function () {
    LoginPage.open();
    LoginPage.login(roles.admin.email, roles.admin.password);
    TopMenu.openCourses();
    CoursesListPage.chooseCourseSyntax();
    browser.pause(1000);
    LessonPage.openLessonOkurse();
    expect(LessonPage.quizTitle.getAttribute('innerText')).to.be.equal(lessonPageExpected.quizTitle);
  });
   it('Student should have access to Quiz', function () {
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
  /* it('User with the role "New" has no access to Quiz', function () {
    LoginPage.open();
    LoginPage.login(roles.new.email, roles.new.password);
    TopMenu.openCourses();
    browser.pause(3000);
    //expect(CoursePage.errorMessageCourses.getText()).to.include('denied');
    //expect(CoursePage.errorMessageCourses.getAttribute('innerText')).to.deep.equal(coursesPage.permError);
    expect(CoursePage.errorMessageCourses.getAttribute('innerText')).to.be.equal(coursesPage.permError);
    //browser.waitUntil(() => CoursePage.errorMessageCourses.getText() === coursesPage.permError);*!/
  });*/
   it('Learner should have access to JS Syntax Quiz only', function () {
    LoginPage.open();
    LoginPage.login(roles.learner.email, roles.learner.password);
    TopMenu.openCourses();
    CoursesListPage.chooseCourseSyntax();
    browser.pause(1000);
    LessonPage.openLessonOkurse();
    expect(LessonPage.quizTitle.getAttribute('innerText')).to.be.equal(lessonPageExpected.quizTitle);
  });
});
