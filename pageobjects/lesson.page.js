import BasePage from './BasePage';

class LessonPage extends BasePage {
  get quizLink () {
    return $$('.mr-2')[2];
  }

  get quizTitle () {
    return $('h2');
  }

  get lessonOkurse () {
    return $$('a.mr-2')[0];
  }

  openQuiz () {
    this.quizLink.click();
  }

  openLessonOkurse () {
    this.lessonOkurse.click();
  }
}
module.exports = new LessonPage();
