import BasePage from './BasePage';

class QuizPage extends BasePage {
  get answer1 () {
    return $$('.mt-2')[0];
  };

  get question () {
    return $('h3');
  };

  get quiz () {
    return $('a[href$="5daf7bbb21865f003857d93e"]');
  };

  get quizSyntax () {
    return $('a[href$="5ce1aada97bb8600381678cc"]');
  };

  selectAnswer () {
    this.answer1.click();
  }

  startQuizSyntax () {
    this.quizSyntax.click();
  };

  startQuiz () {
    this.quiz.click();
  }
};

module.exports = new QuizPage();
