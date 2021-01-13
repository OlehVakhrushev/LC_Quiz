import BasePage from './BasePage';

class CoursePage extends BasePage {
  // get lessonString () {
  //   return $('a[href$="5d2eb6620f1c8500385e7064"]');
  // }
  // get lesson () {
  //   return $('a[href$="5cde476f21fc0e0038aaabdd"]');
  // }
  //
  // get lessonSyntax () {
  //   return $('a[href$="5cde476f21fc0e0038aaabdd"]');
  // };
  get lesson () {
    return $$('.edit.ml-2');
  }

  // openLessonString () {
  //   this.lessonString.click();
  // }

  openLesson (i) {
    this.lesson[i].click();
  }

  // openLessonSyntax () {
  //   this.lessonSyntax.click();
  // }
}

module.exports = new CoursePage();
