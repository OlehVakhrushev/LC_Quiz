import user from '../../../testData/users';
import QuizPage from '../../../pageobjects/quiz.page';
import QuizProcessPage from '../../../pageobjects/quizProcessPage';
import { expect } from 'chai';

describe('Submit button functionality', function () {
  it('TC-001. Button stays inactive if the answer was not selected (checkbox deselected)', function f () {
    QuizProcessPage.startQuizSteps(user.admin.email, user.admin.password);
    QuizProcessPage.passQuiz();
    QuizProcessPage.answerCheckBox[0].click();
    QuizProcessPage.answerCheckBox[1].click();
    QuizProcessPage.answerCheckBox[3].click();
    QuizProcessPage.answerCheckBox[5].click();
    QuizProcessPage.answerCheckBox[7].click();
    browser.pause(3000);
    expect(QuizPage.submitButton.isEnabled()).to.be.eq(false);
  });
});
