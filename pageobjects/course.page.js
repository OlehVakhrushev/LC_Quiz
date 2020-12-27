import BasePage from './BasePage';

class CoursePage extends BasePage {
  get lesson () {
    return $('a[href$="5d2eb6620f1c8500385e7064"]');
  };

  get quizLink () {
    return $$('.mr-2')[2];
  };

  openLesson () {
    this.lesson.click();
  }

  openQuiz () {
    this.quizLink.click();
  }
}

module.exports = new CoursePage();
