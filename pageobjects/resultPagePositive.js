import BasePage from './BasePage';

class ResultPagePositive extends BasePage {
  get title () {
    return $('.alert-success');
  }

  get congratulationsTitle () {
    return $('.alert-heading');
  }

  get resultText () {
    return $('p').getAttribute('innerText');
  }

  get legendText () {
    return $$('//span[contains(text(),"Legend")]');
  }

  get yourAnswerText () {
    return $$('//span[contains(text(),"YourAnswer")]');
  }

  get correctAnswerText () {
    return $$('//span[contains(text(),"Correct Answer")]');
  }

  get wrongAnswerText () {
    return $$('//span[contains(text(),"Wrong Answer")]');
  }

  get legendImageCheckMark () {
    return $('.text-secondary img[src="/static/checked.86d40f54.svg"]');
  }

  get legendImageCrossMark () {
    return $('.text-secondary img[src="/static/x-circle.9231e98f.svg"]');
  }

  get successInstructionText () {
    return $$('[class="ant-col"]')[1];
  }

  get successAllowMistake () {
    return $('p').getAttribute('innerText');
  }

  get continueButton () {
    return $('.ant-btn.ant-btn-primary.mr-2');
  }

  get resetButton () {
    return $$('//span[contains(text(),"Reset result and start test again")]');
  }
}

module.exports = new ResultPagePositive();
