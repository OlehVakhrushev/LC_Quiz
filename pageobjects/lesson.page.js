import BasePage from './BasePage';

class LessonPage extends BasePage {
  get quizName () {
    return $('a[href$="5db366c1b9de150038675e0f"]');
  }

  get quizLinkString () {
    return $$('.mr-2')[2];
  }

  openQuiz () {
    this.quizName.click();
  }

  openQuizString () {
    this.quizLinkString.click();
  }
}
module.exports = new LessonPage();
