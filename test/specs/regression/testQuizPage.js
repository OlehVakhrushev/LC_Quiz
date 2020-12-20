import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/users';
import QuizPage from '../../../pageobjects/quiz.page';

describe('LOGIN', function () {
  it('General check', function () {
    QuizPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
  });
});


