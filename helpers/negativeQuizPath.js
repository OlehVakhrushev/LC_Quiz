import LoginPage from '../pageobjects/login.page';
import user from '../testData/users';
import TopMenu from '../pageobjects/top.menu';
import CoursesPage from '../pageobjects/coursesPage';
import QuizPage from '../pageobjects/quiz.page';
import sel from '../expected/selectors.json';
import data from '../expected/data.json';

function NegativePath () {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  TopMenu.openCourses();
  CoursesPage.chooseCourse();
  browser.pause(3000);
  $$(sel.section2)[data.section2.lesson3].click();
  browser.pause(2000);
  $$(sel.quizLink)[data.quizLink.jsPractice].click();
  browser.pause(2000);
  QuizPage.selectAnswer();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectAnswer();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectAnswer1();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectAnswer1();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectRadioAnswer();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectRadioAnswer();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectRadioAnswer();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectAnswer1();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectAnswer1();
  browser.pause(2000);
  QuizPage.submit();

  QuizPage.selectAnswer1();
  browser.pause(2000);
  QuizPage.submit();
}

module.exports = NegativePath;
