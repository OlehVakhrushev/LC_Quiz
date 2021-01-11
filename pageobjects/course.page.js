import BasePage from './BasePage';

class CoursePage extends BasePage {
  get lessonString () {
    return $('a[href$="5d2eb6620f1c8500385e7064"]');
  }

  get lesson () {
    return $('a[href$="5cde476f21fc0e0038aaabdd"]');
  }

  get lessonSyntax () {
    return $('a[href$="5cde476f21fc0e0038aaabdd"]');
  };

  openLessonString () {
    this.lessonString.click();
  }

  openLesson () {
    this.lesson.click();
  }

  openLessonSyntax () {
    this.lessonSyntax.click();
  }
}

module.exports = new CoursePage();
