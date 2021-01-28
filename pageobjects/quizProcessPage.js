import BasePage from './BasePage';
import LoginPage from './login.page';
import CoursesListPage from './coursesListPage';
import CoursePage from './course.page';
import QuizPage from './quiz.page';
import TopMenu from './top.menu';
import LessonPage from './lesson.page';

class QuizProcessPage extends BasePage {
  get breadCrumbsCourse () {
    return $('a[href$="5d1cbf67086fc30038bf1859"]');
  }

  get breadCrumbsSection () {
    return $$('span.mr-2')[1];
  }

  get breadCrumbsLesson () {
    return $('a[href$="5d2eb6620f1c8500385e7064"]');
  }

  get breadCrumbsQuiz () {
    return $$('div>span')[4];
  }

  get lessonName () {
    return $('h1');
  }

  get radioButtons () {
    return $$('.ant-radio-input');
  }

  get selectedRadioButton () {
    return $$('span.ant-radio.ant-radio-checked');
  }

  get answerCheckBox () {
    return $$('.ant-checkbox-input');
  }

  get submitButton () {
    return $('.ant-btn.ant-btn-primary');
  }

  get textOfAnswers () {
    return $$('label > span:nth-child(2)');
  }

  get totalAnswerOptions () {
    return $$('label');
  }

  get totalProgressBarDash () {
    return $$('.ant-progress-steps-item');
  }

  get totalActiveProgressBar () {
    return $$('.ant-progress-steps-item-active');
  }

  breadCrumbsCourseRedirect () {
    this.breadCrumbsCourse.click();
  }

  breadCrumbsLessonRedirect () {
    this.breadCrumbsLesson.click();
  }

  startQuizSteps (email, password) {
    LoginPage.open();
    LoginPage.login(email, password);
    browser.pause(3000);
    TopMenu.openCourses();
    browser.pause(3000);
    CoursesListPage.chooseCourse(2);
    browser.pause(3000);
    CoursePage.openLesson(71);
    browser.pause(3000);
    LessonPage.openQuizString();
    browser.pause(3000);
    QuizPage.startQuiz();
  }

  selectRadioButton (n) {
    this.radioButtons[n].click();
  }

  selectCheckBox (n) {
    this.answerCheckBox[n].click();
  }

  passQuiz () {
    this.radioButtons[2].click();
    browser.pause(3000);
    this.submitButton.click();
    browser.pause(3000);
    this.radioButtons[1].click();
    browser.pause(3000);
    this.submitButton.click();
    browser.pause(3000);
    this.answerCheckBox[0].click();
    this.answerCheckBox[1].click();
    this.answerCheckBox[2].click();
    browser.pause(3000);
    this.submitButton.click();
    browser.pause(3000);
    this.answerCheckBox[0].click();
    this.answerCheckBox[1].click();
    this.answerCheckBox[2].click();
    browser.pause(3000);
    this.submitButton.click();
    browser.pause(3000);
    this.radioButtons[2].click();
    browser.pause(3000);
    this.submitButton.click();
    browser.pause(3000);
    this.answerCheckBox[0].click();
    this.answerCheckBox[1].click();
    this.answerCheckBox[3].click();
    this.answerCheckBox[5].click();
    this.answerCheckBox[7].click();
    browser.pause(3000);
  }
}
module.exports = new QuizProcessPage();
