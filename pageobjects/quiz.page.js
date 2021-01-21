import BasePage from './BasePage';

class QuizPage extends BasePage {
  get startQuizButton () {
    return $('.ant-btn');
  }

  get title () {
    return $$('.mr-2')[5];
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

  get selectRadio () {
    return $$('.ant-radio-input')[1];
  }

  selectRadioAnswer () {
    this.selectRadio.click();
  }

  startQuiz () {
    this.startQuizButton.click();
  }

  getTitle () {
    this.title.getText();
  }

  selectAnswer (i) {
    this.answerCheckBox[i].click();
  }

  submit () {
    this.submitButton.click();
  }
};

module.exports = new QuizPage();
