import BasePage from './BasePage';

class CoursesPage extends BasePage {
  get lnkCourse () {
    return $("div[data-qa='topmenu-Courses']");
  };

  get courseName () {
    return $('a[href$="5d1cbf67086fc30038bf1859"]');
  };

  get jsPracticeName () {
    return $('h1');
  };

  openCourse () {
    this.lnkCourse.click();
  }

  chooseCourse () {
    this.courseName.click();
  }
}

module.exports = new CoursesPage();
