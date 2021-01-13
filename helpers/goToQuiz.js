import LoginPage from '../pageobjects/login.page';
import user from '../testData/users';
import TopMenu from '../pageobjects/top.menu';
import CoursesListPage from '../pageobjects/coursesListPage';
import sel from '../expected/selectors.json';
import data from '../expected/data.json';
import CoursePage from '../pageobjects/course.page';
import LessonPage from '../pageobjects/lesson.page';

function goToQuiz (i) {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  TopMenu.openCourses();
  CoursesListPage.chooseCourse();
  browser.pause(3000);
  CoursePage.openLesson(i);
  browser.pause(2000);
  LessonPage.openQuiz();
  browser.pause(2000);
}
module.exports = goToQuiz;
