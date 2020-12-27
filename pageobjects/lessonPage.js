import BasePage from './BasePage';

class LessonPage extends BasePage {
  get quizName () {
    return $('a[href$="5cde476f21fc0e0038aaabdd/questiongroup/5db366c1b9de150038675e0f"]');
  };

  openQuiz () {
    this.quizName.click();
  }
}
module.exports = new LessonPage();
