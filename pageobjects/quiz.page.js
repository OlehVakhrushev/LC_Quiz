import BasePage from './BasePage';
import LoginPage from './login.page';

class QuizPage extends LoginPage {
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

  // get answerRadioButton () {
  //   return $('#answer');
  // }

  get answerCheckBox () {
    return $$('.ant-radio-inner');
  }

  get submitButton () {
    return $('ant-btn.ant-btn-primary');
  }

  startQuiz () {
    this.startQuizButton.click();
  }

  getTitle () {
    this.title.getText();
  }

  // selectAnswer () {
  //   this.answerCheckBox.click();
  //   this.answerRadioButton.click();
  // }

  submit () {
    this.submitButton.click();
  }
};

module.exports = new LoginPage();
module.exports = new QuizPage();
