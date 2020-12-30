import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import { expect } from 'chai';
import { questiongroup } from '../../../expected/quiz.page.expected';
import CoursesPage from '../../../pageobjects/coursesPage';
import CoursePage from '../../../pageobjects/course.page';
import QuizPage from '../../../pageobjects/startQuiz';

describe('Link Quiz opens the first question of the Quiz in JavaScript Practice', function () {
  it('Should open Quiz for Admin and get text of the question', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    CoursesPage.openCourse();
    CoursesPage.chooseCourse();
    CoursePage.openLesson();
    QuizPage.startQuiz();
    expect(QuizPage.question.getAttribute('innerText')).to.be.equal(questiongroup.questionPractice);
  });

  it('Should open Quiz for Student and get text of the question', function () {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    CoursesPage.openCourse();
    CoursesPage.chooseCourse();
    CoursePage.openLesson();
    QuizPage.startQuiz();
    expect(QuizPage.question.getAttribute('innerText')).to.be.equal(questiongroup.questionPractice);
  });
});

describe('Link Quiz opens the first question of the Quiz in JavaScript Syntax', function () {
  it('Should open Quiz for Learner and get text of the question', function () {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    CoursesPage.openCourse();
    CoursesPage.chooseCourseSyntax();
    CoursePage.openLessonSyntax();
    browser.pause(2000)
    QuizPage.startQuizSyntax();
    expect(QuizPage.question.getAttribute('innerText')).to.be.equal(questiongroup.questionSyntax);
  });

  it('Should open Quiz for Teacher and get text of the question', function () {
    LoginPage.open();
    LoginPage.login(user.teacher.email, user.teacher.password);
    CoursesPage.openCourse();
    CoursesPage.chooseCourseSyntax();
    CoursePage.openLessonSyntax();
    QuizPage.startQuizSyntax();
    expect(QuizPage.question.getAttribute('innerText')).to.be.equal(questiongroup.questionSyntax);
  });
});

  describe('Checkboxes and submit button', function () {
    it('The submit button should be displayed and disabled when no answers were selected for Admin', function () {
      LoginPage.open();
      LoginPage.login(user.admin.email, user.admin.password);
      CoursesPage.openCourse();
      CoursesPage.chooseCourseSyntax();
      CoursePage.openLessonSyntax();
      QuizPage.startQuizSyntax();
      browser.pause(2000);
      expect(LoginPage.btnSubmit.isClickable()).to.be.equal(false);
    });
  });

