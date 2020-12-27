import user from '../../../testData/users';
import CoursesListPage from '../../../pageobjects/coursesListPage';
import CoursePage from '../../../pageobjects/course.page';
import QuizPage from '../../../pageobjects/quiz.page';
import QuizProcessPage from '../../../pageobjects/quizProcessPage';
import { quizProcess } from '../../../expected/quizProcess.page.expected';
import { expect } from 'chai';
import { coursesPage } from '../../../expected/courses.page.expected';

describe('Bread crumbs elements are displayed on the quiz page', function () {
  it('TC-001. The first element in the bread crumbs menu is name of the Course', function f () {
    QuizProcessPage.startQuizSteps(user.admin.email, user.admin.password);
    expect(QuizProcessPage.breadCrumbsCourse.getAttribute('innerText')).to.be.equal(quizProcess.breadCrumbsCourse);
  });

  it('TC-002. The second element in the bread crumbs menu is name of the Section', function f () {
    expect(QuizProcessPage.breadCrumbsSection.getAttribute('innerText')).to.be.equal(quizProcess.breadCrumbsSection);
  });

  it('TC-003. The third element in the bread crumbs menu is name of the Lesson', function f () {
    expect(QuizProcessPage.breadCrumbsLesson.getAttribute('innerText')).to.be.equal(quizProcess.breadCrumbsLesson);
  });

  it('TC-004. The last element in the bread crumbs menu is name of the Quiz', function f () {
    expect(QuizProcessPage.breadCrumbsQuiz.getAttribute('innerText')).to.be.equal(quizProcess.breadCrumbsQuiz);
  });
});

describe('Bread crumbs elements redirect to the correct pages', function () {
  it('TC-001. The first element in the bread crumbs menu is name of the Course', function f () {
    QuizProcessPage.breadCrumbsCourseRedirect();
    browser.pause(3000);
    expect(CoursesListPage.jsPracticeName.getAttribute('innerText')).to.be.equal(coursesPage.jsPractice);
    browser.pause(3000);
  });

  it('TC-003. The third element in the bread crumbs menu is name of the Lesson', function f () {
    CoursePage.openLesson();
    browser.pause(3000);
    CoursePage.openQuiz();
    browser.pause(3000);
    QuizPage.startQuiz();
    QuizProcessPage.breadCrumbsLessonRedirect();
    expect(QuizProcessPage.lessonName.getAttribute('innerText')).to.be.equal(quizProcess.lessonName);
  });
});
