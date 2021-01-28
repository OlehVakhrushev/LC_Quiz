import BasePage from './BasePage';

class LessonPage extends BasePage {
  get quizLink () {
    return $$('.mr-2')[2];
  }

  get quizLinkString () {
    return $('a.mr-2');
  }

  openQuiz () {
    this.quizLink.click();
  }

  openQuizString () {
    this.quizLinkString.click();
  }
}
module.exports = new LessonPage();
