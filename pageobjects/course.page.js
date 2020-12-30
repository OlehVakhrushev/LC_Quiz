import BasePage from './BasePage';

class CoursePage extends BasePage {
  get lesson () {
    return $('a[href$="5d2a083562cf140038fe221d"]');
  };

  get lessonSyntax () {
    return $('a[href$="5cde476f21fc0e0038aaabdd"]');
  };

  openLesson () {
    this.lesson.click();
  }

  openLessonSyntax () {
    this.lessonSyntax.click();
  }
}

module.exports = new CoursePage();
