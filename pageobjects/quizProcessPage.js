import BasePage from './BasePage';
import LoginPage from './login.page';
import CoursesPage from './coursesPage';
import CoursePage from './course.page';
import QuizPage from './quiz.page';

class QuizProcessPage extends BasePage {
  get breadCrumbsCourse () {
    return $('a[href$="5d1cbf67086fc30038bf1859"]');
  }
  get breadCrumbsSection () {
    //return $x('//span[contains(text(),"Тип данных Строка")]');
    return $$('span.mr-2')[1];
  }
  get breadCrumbsLesson () {
    return $('a[href$="5d2eb6620f1c8500385e7064"]');
  }
  get breadCrumbsQuiz () {
    //return $x('//span[contains(text(),"JS Practice. Что такое строка?")]');
    return $$('div>span')[4];
  }
  get lessonName () {
    return $('h1');
  };
  breadCrumbsCourseRedirect () {
    this.breadCrumbsCourse.click();
  }
  breadCrumbsLessonRedirect () {
    this.breadCrumbsLesson.click();
  }
  startQuizSteps (email, password) {
    LoginPage.open();
    LoginPage.login(email,password);
    browser.pause(3000);
    CoursesPage.openCourse();
    browser.pause(3000);
    CoursesPage.chooseCourse();
    browser.pause(3000);
    CoursePage.openLesson();
    browser.pause(3000);
    CoursePage.openQuiz();
    browser.pause(3000);
    QuizPage.startQuiz();
  }
}
module.exports = new QuizProcessPage();
