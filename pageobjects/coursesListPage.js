import BasePage from './BasePage';

class CoursesListPage extends BasePage {
  get courseName () {
    return $('a[href$="5d1cbf67086fc30038bf1859"]');
  };

  get courseNameSyntax () {
    return $('a[href$="5c140b2b42f6ea23059cbe8f"]');
  };

  get jsPracticeName () {
    return $('h1');
  };

  chooseCourse () {
    this.courseName.click();
  }

  chooseCourseSyntax () {
    this.courseNameSyntax.click();
  }
}

module.exports = new CoursesListPage();
