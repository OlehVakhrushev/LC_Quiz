import user from '../../../testData/users';
import QuizProcessPage from '../../../pageobjects/quizProcessPage';
import { expect } from 'chai';

describe('Radio buttons functionality', function () {
  it('TC-001. Radio buttons are displayed', function f () {
    QuizProcessPage.startQuizSteps(user.admin.email, user.admin.password);
    expect(QuizProcessPage.radioButtons.length).to.be.eq(QuizProcessPage.totalAnswerOptions.length);
  });

  it('TC-002. Each radio button is followed by the text of the answer option', function f () {
    expect(QuizProcessPage.textOfAnswers.length).to.be.eq(QuizProcessPage.totalAnswerOptions.length);
  });

  it('TC-003. Only one answer at a time can be selected', function f () {
    QuizProcessPage.selectRadioButton(0);
    QuizProcessPage.selectRadioButton(1);
    QuizProcessPage.selectRadioButton(2);
    browser.pause(3000);
    expect(QuizProcessPage.selectedRadioButton.length).to.be.equal(1);
  });
});
