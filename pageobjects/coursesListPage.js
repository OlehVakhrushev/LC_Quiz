import BasePage from './BasePage';

class CoursesListPage extends BasePage {
  get courseName () {
    return $$('h4>a');
  };

  // get courseNameSyntax () {
  //   return $('a[href$="5c140b2b42f6ea23059cbe8f"]');
  // };

  get jsPracticeName () {
    return $('h1');
  };

  chooseCourse (i) {
    this.courseName[i].click();
  }

  // chooseCourseSyntax () {
  //   this.courseNameSyntax.click();
  // }
}

module.exports = new CoursesListPage();
