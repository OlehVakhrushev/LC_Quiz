import user from '../../../testData/users';
import QuizPage from '../../../pageobjects/quiz.page';
import QuizProcessPage from '../../../pageobjects/quizProcessPage';
import { quizProcess } from '../../../expected/quizProcess.page.expected';
import { expect } from 'chai';

describe('Progress bar functionality', function () {
  it('TC-001. The progress bar text is displayed', function f () {
    QuizProcessPage.startQuizSteps(user.admin.email, user.admin.password);
    expect(QuizPage.progress.getAttribute('innerText')).to.be.eq(quizProcess.progressText);
  });

  it('TC-002. The progress bar is displayed', function f () {
    expect(QuizPage.progressBar.isDisplayed()).to.be.eq(true);
  });

  it('TC-003. Every "dash" of the progress bar turns blue after each answered question', function f () {
    QuizProcessPage.passQuiz();
    expect(QuizProcessPage.totalProgressBarDash.length).to.be.eq(QuizProcessPage.totalActiveProgressBar.length + 1);
  });
});
