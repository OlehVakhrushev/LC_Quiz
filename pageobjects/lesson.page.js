import BasePage from './BasePage';

class LessonPage extends BasePage {
  get quizLink () {
    return $$('.mr-2')[2];
  }

  openQuiz () {
    this.quizLink.click();
  }
}
module.exports = new LessonPage();
