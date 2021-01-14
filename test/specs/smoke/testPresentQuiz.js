import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import { expect } from 'chai';
// import { questiongroup } from '../../../expected/quiz.page.expected';
import CoursesListPage from '../../../pageobjects/coursesListPage';
import CoursePage from '../../../pageobjects/course.page';
// import LessonPage from '../../../pageobjects/lesson.page';
import QuizPresentPage from '../../../pageobjects/quiz.present';
import presentQuiz from '../../../expected/quizPresent.page.expected';
import TopMenu from '../../../pageobjects/top.menu';

describe('Modul Quiz is Present in JavaScript Practice', function () {
  it('Should present Modul Quiz for Admin', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenu.openCourses();
    CoursesListPage.chooseCourse();
    CoursePage.openLesson();
    expect(QuizPresentPage.modulQuiz).toBeExisting();
  });

  it('Should present Modul Quiz for Student', function () {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    CoursesPage.openCourse();
    CoursesPage.chooseCourse();
    CoursePage.openLesson();
    expect(QuizPresentPage.modulQuiz).toBeExisting();
  });

  it('Should present Modul Quiz for Learner', function () {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    CoursesPage.openCourse();
    CoursesPage.chooseCourse();
    CoursePage.openLesson();
    expect(QuizPresentPage.modulQuiz).toBeExisting();
  });

  it('Should present Modul Quiz for Teacher', function () {
    LoginPage.open();
    LoginPage.login(user.teacher.email, user.teacher.password);
    CoursesPage.openCourse();
    CoursesPage.chooseCourse();
    CoursePage.openLesson();
    expect(QuizPresentPage.modulQuiz).toBeExisting();
  });

  // it('Should present Header Quiz for Admin', function () {
  //   LoginPage.open();
  //   LoginPage.login(user.admin.email, user.admin.password);
  //   TopMenu.openCourses();
  //   CoursesListPage.chooseCourse();
  //   CoursePage.openLesson();
  //   expect(QuizPresentPage.headerQuiz.getAttribute('innerText')).to.be.equal(presentQuiz.quizHeader);
  // });
  //
  // it('Should present Header Quiz for Student', function () {
  //   LoginPage.open();
  //   LoginPage.login(user.student.email, user.student.password);
  //   CoursesPage.openCourse();
  //   CoursesPage.chooseCourse();
  //   CoursePage.openLesson();
  //   expect(QuizPresentPage.headerQuiz.getAttribute('innerText')).to.be.equal(presentQuiz.quizHeader);
  // });
  //
  // it('Should present Header Quiz for Learner', function () {
  //   LoginPage.open();
  //   LoginPage.login(user.learner.email, user.learner.password);
  //   CoursesPage.openCourse();
  //   CoursesPage.chooseCourse();
  //   CoursePage.openLesson();
  //   expect(QuizPresentPage.headerQuiz.getAttribute('innerText')).to.be.equal(presentQuiz.quizHeader);
  // });
  //
  // it('Should present Header Quiz for Teacher', function () {
  //   LoginPage.open();
  //   LoginPage.login(user.teacher.email, user.teacher.password);
  //   CoursesPage.openCourse();
  //   CoursesPage.chooseCourse();
  //   CoursePage.openLesson();
  //   expect(QuizPresentPage.headerQuiz.getAttribute('innerText')).to.be.equal(presentQuiz.quizHeader);
  // });

});
