import BasePage from './BasePage';

class LessonPage extends BasePage {
  get quizName () {
    return $('a[href$="5db366c1b9de150038675e0f"]');
  };

  openQuiz () {
    this.quizName.click();
  }
}
module.exports = new LessonPage();
