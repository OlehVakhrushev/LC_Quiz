
import BasePage from './BasePage';

class CoursePage extends BasePage {
  get lesson () {
    return $('a[href$="5cde476f21fc0e0038aaabdd"]');
  };

  openLesson () {
    this.lesson.click();
  }
}

module.exports = new LoginPage();
