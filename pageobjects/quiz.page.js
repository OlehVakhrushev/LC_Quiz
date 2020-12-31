import BasePage from './BasePage';

class QuizPage extends BasePage {
  get startQuizButton () {
    return $('.ant-btn');
  }

  get title () {
    return $('.mr-2')[5];
  }

  get progress () {
    return $('.mt-4.mb-4');
  }

  get progressBar () {
    return $('.ant-progress-steps-outer');
  }

  get questionTitle () {
    return $$('.mb-4')[1];
  }

  get answerCheckBox () {
    return $$('.ant-checkbox-input');
  }

  get submitButton () {
    return $('.ant-btn.ant-btn-primary');
  }

  startQuiz () {
    this.startQuizButton.click();
  }

  getTitle () {
    this.title.getText();
  }

  selectAnswer () {
    this.answerCheckBox.click();
  }

  submit () {
    this.submitButton.click();
  }
};

module.exports = new QuizPage();
